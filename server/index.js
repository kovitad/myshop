import express from 'express';
import { randomUUID } from 'node:crypto';
import { createReadStream, existsSync } from 'node:fs';
import { join } from 'node:path';
import rateLimit from 'express-rate-limit';

import { products, courses, articles, CATEGORIES, findProduct, findCourse, publicProduct, publicCourseSummary, findArticle } from './content.js';
import { users, newsletter, orders, subscriptions, downloads, tickets, visits, progress } from './db.js';
import { hasAccess, hasActiveMembership } from './entitlements.js';
import { hashPassword, verifyPassword, createSession, clearSession, currentUser } from './auth.js';
import {
  stripeEnabled,
  createCheckoutSession,
  createCartCheckoutSession,
  createSubscriptionSession,
  constructWebhookEvent,
  retrieveSession,
} from './stripe.js';
import { sendReceiptEmail, sendTicketEmail } from './email.js';

const app = express();
const port = process.env.PORT || 3000;
const appUrl = process.env.APP_URL || `http://localhost:${port}`;
const ebookDir = process.env.EBOOK_DIR || join(import.meta.dirname, '..', 'ebooks');
const DOWNLOAD_TTL_MS = 7 * 24 * 60 * 60 * 1000;

// Whoever signs in with this email is treated as the site admin.
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'kovitad@gmail.com').toLowerCase();

// Support + contact details (used by the chat reply and /api/config).
const CONTACT = {
  email: process.env.SUPPORT_EMAIL || 'kovitad@gmail.com',
  phone: process.env.SUPPORT_PHONE || '0839799546',
  lineId: process.env.SUPPORT_LINE_ID || 'kovitadj',
};

function isAdmin(user) {
  return Boolean(user) && String(user.email).toLowerCase() === ADMIN_EMAIL;
}

function readCookie(req, name) {
  const header = req.headers.cookie;
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

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
app.get('/api/categories', (_req, res) => res.json(CATEGORIES));
// Unified storefront catalog: buyable ebooks/tools + courses (no membership).
app.get('/api/catalog', (_req, res) => {
  const items = [
    ...products.filter((p) => p.type !== 'membership').map(publicProduct),
    ...courses.map(publicCourseSummary),
  ];
  res.json(items);
});
app.get('/api/courses', (_req, res) => res.json(courses.map(publicCourseSummary)));
app.get('/api/courses/:slug', (req, res) => {
  const course = findCourse(req.params.slug);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  const user = currentUser(req);
  const email = user ? user.email : null;
  const entitled = hasAccess(email, course);
  const done = user ? new Set(progress.forUser(user.id)) : new Set();
  const lessons = course.lessons.map((l) => {
    const unlocked = entitled || l.preview;
    return {
      id: l.id,
      title: l.title,
      duration: l.duration,
      preview: Boolean(l.preview),
      locked: !unlocked,
      videoUrl: unlocked ? l.videoUrl : null,
      completed: done.has(l.id),
    };
  });
  res.json({
    id: course.id, slug: course.slug, type: 'course', topic: course.topic,
    price: course.price, priceAmount: course.priceAmount, currency: course.currency,
    title: course.title, description: course.description, entitled, lessons,
  });
});

app.post('/api/progress', (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: 'Not signed in' });
  const lessonId = String(req.body.lessonId || '').slice(0, 120);
  if (!lessonId) return res.status(400).json({ error: 'lessonId required' });
  progress.complete(user.id, lessonId);
  res.json({ ok: true });
});

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
    admin: isAdmin(user),
  });
});

// Public contact/config for the frontend (env-configurable without a rebuild).
app.get('/api/config', (_req, res) => {
  res.json({ contact: CONTACT, stripe: stripeEnabled });
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

// --- Support tickets ---------------------------------------------------
app.post('/api/support/ticket', writeLimiter, (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = cleanEmail(req.body.email);
  const subject = String(req.body.subject || '').trim().slice(0, 160);
  const message = String(req.body.message || '').trim().slice(0, 4000);
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  if (message.length < 5) return res.status(400).json({ error: 'Please add a short message' });

  const ticket = { id: randomUUID(), name, email, subject, message, status: 'open', createdAt: new Date().toISOString() };
  tickets.insert(ticket);
  sendTicketEmail({ name, email, subject, message }).catch((e) => console.error('[ticket] email failed:', e.message));
  res.status(201).json({ ok: true });
});

// --- Support chat ------------------------------------------------------
// AI-ready: when ANTHROPIC_API_KEY is set this is where the model call goes.
// Until then, capture the question and reply with the contact details.
app.post('/api/support/chat', writeLimiter, (req, res) => {
  const message = String(req.body.message || '').trim().slice(0, 2000);
  const lang = req.body.lang === 'en' ? 'en' : 'th';
  if (message.length < 1) return res.status(400).json({ error: 'Empty message' });

  // Capture every chat message so nothing is lost before the AI is wired.
  const ticket = { id: randomUUID(), name: 'Website chat', email: 'chat@visitor', subject: 'Chat message', message, status: 'open', createdAt: new Date().toISOString() };
  tickets.insert(ticket);
  sendTicketEmail({ name: 'Website chat', email: CONTACT.email, subject: 'Chat message', message }).catch(() => {});

  const reply = lang === 'en'
    ? `Thanks for your message! Our team will get back to you soon. Meanwhile you can reach us directly — LINE: ${CONTACT.lineId} · call ${CONTACT.phone} · email ${CONTACT.email}.`
    : `ขอบคุณสำหรับข้อความค่ะ ทีมงานจะติดต่อกลับโดยเร็ว ระหว่างนี้ทักเราได้โดยตรง — LINE: ${CONTACT.lineId} · โทร ${CONTACT.phone} · อีเมล ${CONTACT.email}`;
  res.json({ reply, contact: CONTACT });
});

// --- Visit tracking (page views) --------------------------------------
const trackLimiter = rateLimit({ windowMs: 60 * 1000, max: 120, standardHeaders: true, legacyHeaders: false });
app.post('/api/track', trackLimiter, (req, res) => {
  let visitorId = readCookie(req, 'kovitad_vid');
  if (!visitorId) {
    visitorId = randomUUID();
    res.setHeader('Set-Cookie', `kovitad_vid=${visitorId}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${365 * 24 * 60 * 60}`);
  }
  visits.insert({
    visitorId,
    path: String(req.body.path || '').slice(0, 300),
    ip: req.ip,
    userAgent: String(req.headers['user-agent'] || '').slice(0, 300),
    referrer: String(req.headers.referer || req.body.referrer || '').slice(0, 300),
    createdAt: new Date().toISOString(),
  });
  res.status(204).end();
});

// --- Admin (audit) -----------------------------------------------------
function requireAdmin(req, res) {
  const user = currentUser(req);
  if (!isAdmin(user)) { res.status(403).json({ error: 'Admin only' }); return null; }
  return user;
}

app.get('/api/admin/stats', (req, res) => {
  if (!requireAdmin(req, res)) return;
  const startOfDay = new Date(); startOfDay.setHours(0, 0, 0, 0);
  res.json({
    totalViews: visits.total(),
    uniqueVisitors: visits.unique(),
    viewsToday: visits.since(startOfDay.toISOString()),
    topPaths: visits.topPaths(),
    recent: visits.recent(50),
  });
});

app.get('/api/admin/tickets', (req, res) => {
  if (!requireAdmin(req, res)) return;
  res.json(tickets.all());
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

// --- Cart checkout (multiple items) -----------------------------------
app.post('/api/checkout/cart', writeLimiter, async (req, res) => {
  if (!stripeEnabled) return res.status(503).json({ error: 'Payments are not configured yet' });
  const requested = Array.isArray(req.body.items) ? req.body.items : [];
  const items = requested
    .map((x) => findProduct(String(x.id || '')))
    .filter((p) => p && p.type !== 'membership')
    .map((p) => ({ id: p.id, name: p.title.en, priceAmount: p.priceAmount, currency: p.currency, price: p.promoPrice || p.price, qty: 1 }));
  if (!items.length) return res.status(400).json({ error: 'Cart is empty' });

  const email = cleanEmail(req.body.email) || clientEmail(req) || undefined;
  try {
    const session = await createCartCheckoutSession({ items, email, appUrl });
    const now = new Date().toISOString();
    const userId = currentUser(req)?.id || null;
    for (const it of items) {
      orders.insert({
        id: randomUUID(), email: email || 'pending@stripe', userId, productId: it.id,
        price: it.price, amount: it.priceAmount, currency: it.currency,
        status: 'pending_payment', stripeSessionId: session.id, createdAt: now,
      });
    }
    res.json({ url: session.url });
  } catch (err) {
    console.error('[cart checkout] error:', err.message);
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

  // Prefer an admin-uploaded file in the persistent volume, then the baked-in one.
  const uploadDir = process.env.EBOOK_UPLOAD_DIR || '/data/ebooks';
  const uploaded = join(uploadDir, `${record.product_id}.pdf`);
  const filePath = existsSync(uploaded) ? uploaded : join(ebookDir, `${record.product_id}.pdf`);
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

// Idempotent: marks every order on the session paid, mints download tokens,
// emails receipts. Handles both single-item and multi-item (cart) sessions.
function fulfillOneTime(session) {
  const email = session.customer_details?.email || session.customer_email;
  const rows = orders.allBySession(session.id);
  for (const order of rows) {
    if (order.status === 'paid') continue;
    const paidAt = new Date().toISOString();
    const to = email || order.email;
    orders.markPaid(order.id, paidAt);

    const product = findProduct(order.product_id);
    if (product && product.type === 'ebook') {
      const token = randomUUID();
      downloads.insert({
        token,
        orderId: order.id,
        productId: order.product_id,
        email: to,
        expiresAt: new Date(Date.now() + DOWNLOAD_TTL_MS).toISOString(),
        createdAt: paidAt,
      });
      sendReceiptEmail({ to, product, downloadUrl: `${appUrl}/api/download/${token}` }).catch((e) =>
        console.error('[email] receipt failed:', e.message),
      );
    }
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
