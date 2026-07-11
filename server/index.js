import express from 'express';
import { randomUUID } from 'node:crypto';
import { createReadStream, existsSync } from 'node:fs';
import { join } from 'node:path';
import rateLimit from 'express-rate-limit';

import { products, articles, findProduct, publicProduct, findArticle } from './content.js';
import { users, newsletter, orders, subscriptions, downloads } from './db.js';
import { hasAccess, hasActiveMembership } from './entitlements.js';
import { hashPassword, verifyPassword, createSession, clearSession, currentUser } from './auth.js';
import {
  stripeEnabled,
  createCheckoutSession,
  createSubscriptionSession,
  constructWebhookEvent,
  retrieveSession,
} from './stripe.js';
import { sendReceiptEmail } from './email.js';

const app = express();
const port = process.env.PORT || 3000;
const appUrl = process.env.APP_URL || `http://localhost:${port}`;
const ebookDir = process.env.EBOOK_DIR || join(import.meta.dirname, '..', 'ebooks');
const DOWNLOAD_TTL_MS = 7 * 24 * 60 * 60 * 1000;

app.set('trust proxy', 1); // behind Caddy

// --- Stripe webhook needs the raw body, so it is mounted BEFORE express.json(). ---
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = constructWebhookEvent(req.body, req.headers['stripe-signature']);
  } catch (err) {
    console.error('[stripe] webhook verify failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  try {
    handleStripeEvent(event);
  } catch (err) {
    console.error('[stripe] handler error:', err.message);
  }
  res.json({ received: true });
});

app.use(express.json({ limit: '32kb' }));

const writeLimiter = rateLimit({ windowMs: 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });

function clientEmail(req) {
  const user = currentUser(req);
  return user ? user.email : null;
}

function cleanEmail(email = '') {
  return String(email).trim().toLowerCase();
}

// --- Health + catalog --------------------------------------------------
app.get('/api/health', (_req, res) => res.json({ ok: true, stripe: stripeEnabled }));
app.get('/api/products', (_req, res) => res.json(products.map(publicProduct)));
app.get('/api/content/articles', (_req, res) => res.json(articles));
app.get('/api/content/articles/:slug', (req, res) => {
  const article = findArticle(req.params.slug);
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
});

// --- Auth --------------------------------------------------------------
app.post('/api/register', writeLimiter, (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = cleanEmail(req.body.email);
  const password = String(req.body.password || '');
  if (name.length < 2) return res.status(400).json({ error: 'Name is required' });
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });
  if (users.byEmail(email)) return res.status(409).json({ error: 'Email is already registered' });

  const now = new Date().toISOString();
  const user = { id: randomUUID(), name, email, passwordHash: hashPassword(password), createdAt: now };
  users.insert(user);
  if (!newsletter.byEmail(email)) {
    newsletter.insert({ id: randomUUID(), email, name, source: 'registration', createdAt: now });
  }
  createSession(res, user.id);
  res.status(201).json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
});

app.post('/api/login', writeLimiter, (req, res) => {
  const email = cleanEmail(req.body.email);
  const password = String(req.body.password || '');
  const user = users.byEmail(email);
  if (!user || !verifyPassword(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  createSession(res, user.id);
  res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
});

app.post('/api/logout', (req, res) => {
  clearSession(req, res);
  res.json({ ok: true });
});

app.get('/api/me', (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: 'Not signed in' });
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    member: hasActiveMembership(user.email),
  });
});

// --- Newsletter --------------------------------------------------------
app.post('/api/newsletter/subscribe', writeLimiter, (req, res) => {
  const email = cleanEmail(req.body.email);
  const name = String(req.body.name || '').trim();
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  if (newsletter.byEmail(email)) return res.json({ ok: true, subscribed: true, existing: true });
  newsletter.insert({ id: randomUUID(), email, name, source: 'newsletter', createdAt: new Date().toISOString() });
  res.status(201).json({ ok: true, subscribed: true });
});

// --- Checkout (one-time) ----------------------------------------------
app.post('/api/checkout', writeLimiter, async (req, res) => {
  if (!stripeEnabled) return res.status(503).json({ error: 'Payments are not configured yet' });
  const product = findProduct(String(req.body.productId || ''));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  if (product.type === 'membership') return res.status(400).json({ error: 'Use /api/subscribe for membership' });

  const email = cleanEmail(req.body.email) || clientEmail(req) || undefined;
  try {
    const session = await createCheckoutSession({ product, email, appUrl });
    orders.insert({
      id: randomUUID(),
      email: email || 'pending@stripe',
      userId: currentUser(req)?.id || null,
      productId: product.id,
      price: product.price,
      amount: product.priceAmount,
      currency: product.currency,
      status: 'pending_payment',
      stripeSessionId: session.id,
      createdAt: new Date().toISOString(),
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('[checkout] error:', err.message);
    res.status(502).json({ error: 'Could not start checkout' });
  }
});

// --- Subscribe (membership) -------------------------------------------
app.post('/api/subscribe', writeLimiter, async (req, res) => {
  if (!stripeEnabled) return res.status(503).json({ error: 'Payments are not configured yet' });
  const product = findProduct('membership');
  const email = cleanEmail(req.body.email) || clientEmail(req) || undefined;
  try {
    const session = await createSubscriptionSession({ product, email, appUrl });
    res.json({ url: session.url });
  } catch (err) {
    if (err.code === 'no_price') return res.status(503).json({ error: 'Membership is not configured yet' });
    console.error('[subscribe] error:', err.message);
    res.status(502).json({ error: 'Could not start checkout' });
  }
});

// --- Order status (success page polls this) ---------------------------
app.get('/api/orders/session/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  let order = orders.bySession(sessionId);
  if (!order) return res.status(404).json({ error: 'Order not found' });

  // Fallback: if the webhook has not arrived yet, verify with Stripe and fulfill inline.
  if (order.status !== 'paid' && stripeEnabled) {
    try {
      const session = await retrieveSession(sessionId);
      if (session.payment_status === 'paid') {
        fulfillOneTime(session);
        order = orders.bySession(sessionId);
      }
    } catch (err) {
      console.error('[order-status] stripe retrieve failed:', err.message);
    }
  }

  const product = findProduct(order.product_id);
  const download = order.status === 'paid' ? downloads.byOrder(order.id) : null;
  res.json({
    status: order.status,
    product: product ? publicProduct(product) : null,
    downloadUrl: download ? `${appUrl}/api/download/${download.token}` : null,
  });
});

// --- Account (signed-in) ----------------------------------------------
app.get('/api/account/orders', (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: 'Not signed in' });
  const rows = orders.byEmail(user.email).filter((o) => o.status === 'paid');
  res.json(
    rows.map((o) => {
      const product = findProduct(o.product_id);
      const download = downloads.byOrder(o.id);
      return {
        id: o.id,
        product: product ? publicProduct(product) : { id: o.product_id },
        paidAt: o.paid_at,
        downloadUrl: download ? `${appUrl}/api/download/${download.token}` : null,
      };
    }),
  );
});

// --- Ebook download ----------------------------------------------------
app.get('/api/download/:token', (req, res) => {
  const record = downloads.byToken(req.params.token);
  if (!record) return res.status(404).json({ error: 'Invalid download link' });
  if (new Date(record.expires_at).getTime() < Date.now()) {
    return res.status(410).json({ error: 'This download link has expired' });
  }
  const product = findProduct(record.product_id);
  if (!hasAccess(record.email, product)) return res.status(403).json({ error: 'Not entitled' });

  const filePath = join(ebookDir, `${record.product_id}.pdf`);
  if (!existsSync(filePath)) {
    console.error('[download] missing file:', filePath);
    return res.status(404).json({ error: 'File not available yet' });
  }
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${record.product_id}.pdf"`);
  createReadStream(filePath).pipe(res);
});

// --- Stripe event handling (shared by webhook + inline fallback) --------
function handleStripeEvent(event) {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      if (session.metadata?.kind === 'membership' || session.mode === 'subscription') {
        upsertMembershipFromSession(session);
      } else {
        fulfillOneTime(session);
      }
      break;
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      upsertMembershipFromSubscription(event.data.object);
      break;
    }
    default:
      break;
  }
}

// Idempotent: marks the order paid, mints a download token, emails the receipt.
function fulfillOneTime(session) {
  const order = orders.bySession(session.id);
  if (!order || order.status === 'paid') return;

  const paidAt = new Date().toISOString();
  const email = session.customer_details?.email || session.customer_email || order.email;
  orders.markPaid(order.id, paidAt);

  const product = findProduct(order.product_id);
  if (product && product.type === 'ebook') {
    const token = randomUUID();
    downloads.insert({
      token,
      orderId: order.id,
      productId: order.product_id,
      email,
      expiresAt: new Date(Date.now() + DOWNLOAD_TTL_MS).toISOString(),
      createdAt: paidAt,
    });
    sendReceiptEmail({ to: email, product, downloadUrl: `${appUrl}/api/download/${token}` }).catch((e) =>
      console.error('[email] receipt failed:', e.message),
    );
  }
}

function upsertMembershipFromSession(session) {
  const email = session.customer_details?.email || session.customer_email;
  const subId = session.subscription;
  if (!email || !subId) return;
  const now = new Date().toISOString();
  subscriptions.upsert({ id: subId, email, status: 'active', currentPeriodEnd: null, createdAt: now, updatedAt: now });
}

function upsertMembershipFromSubscription(sub) {
  const existing = subscriptions.byId(sub.id);
  const email = existing?.email;
  if (!email) return; // we only know the email from the original checkout session
  const now = new Date().toISOString();
  subscriptions.upsert({
    id: sub.id,
    email,
    status: sub.status,
    currentPeriodEnd: sub.current_period_end ? new Date(sub.current_period_end * 1000).toISOString() : null,
    createdAt: existing.created_at || now,
    updatedAt: now,
  });
}

app.listen(port, () => {
  console.log(`KOVITAD.shop API listening on ${port} (stripe: ${stripeEnabled ? 'on' : 'off'})`);
});
