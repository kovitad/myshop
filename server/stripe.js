// Stripe integration: one-time Checkout (฿, PromptPay + card) and subscription (membership).
// Degrades gracefully when STRIPE_SECRET_KEY is absent so the app still boots in local dev.

import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY || '';
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export const stripeEnabled = Boolean(secretKey);
const stripe = stripeEnabled ? new Stripe(secretKey) : null;

// One-time purchase (ebook / course / live seat).
export async function createCheckoutSession({ product, email, appUrl }) {
  return stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'promptpay'],
    customer_email: email || undefined,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: product.currency,
          unit_amount: product.priceAmount,
          product_data: {
            name: product.title.en,
            description: product.description.en,
          },
        },
      },
    ],
    metadata: { productId: product.id, kind: 'one_time' },
    success_url: `${appUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/order/cancelled`,
  });
}

// Multi-item cart checkout. `items` = [{ id, name, priceAmount, currency, qty }].
export async function createCartCheckoutSession({ items, email, appUrl }) {
  return stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'promptpay'],
    customer_email: email || undefined,
    line_items: items.map((it) => ({
      quantity: it.qty || 1,
      price_data: {
        currency: it.currency,
        unit_amount: it.priceAmount,
        product_data: { name: it.name },
      },
    })),
    metadata: { kind: 'cart' },
    success_url: `${appUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/order/cancelled`,
  });
}

// Recurring membership. Requires the product to carry a Stripe recurring Price id.
export async function createSubscriptionSession({ product, email, appUrl }) {
  if (!product.stripePriceId) {
    const err = new Error('Membership price is not configured');
    err.code = 'no_price';
    throw err;
  }
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: email || undefined,
    line_items: [{ price: product.stripePriceId, quantity: 1 }],
    metadata: { productId: product.id, kind: 'membership' },
    success_url: `${appUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/order/cancelled`,
  });
}

export function constructWebhookEvent(rawBody, signature) {
  if (!webhookSecret) throw new Error('STRIPE_WEBHOOK_SECRET is not set');
  return stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
}

export async function retrieveSession(sessionId) {
  return stripe.checkout.sessions.retrieve(sessionId);
}

export async function retrieveSubscription(subscriptionId) {
  return stripe.subscriptions.retrieve(subscriptionId);
}
