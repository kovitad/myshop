// Entitlements — the single source of truth for "can this person access X?".
// Every gated route (ebook download, course video token, live join link) funnels
// through hasAccess so access rules live in exactly one place.
//
// Rules:
//   ebook      -> must have a paid order for that product (membership does NOT include ebooks)
//   course     -> paid order for it OR an active membership
//   live       -> paid order for it OR an active membership
//   membership -> an active subscription

import { orders, subscriptions } from './db.js';

export function hasActiveMembership(email) {
  if (!email) return false;
  return Boolean(subscriptions.activeByEmail(email));
}

function ownsProduct(email, productId) {
  if (!email) return false;
  return orders.byEmail(email).some((o) => o.product_id === productId && o.status === 'paid');
}

// `product` is the catalog object from content.js.
export function hasAccess(email, product) {
  if (!product) return false;
  switch (product.type) {
    case 'ebook':
      return ownsProduct(email, product.id);
    case 'course':
    case 'live':
      return ownsProduct(email, product.id) || hasActiveMembership(email);
    case 'membership':
      return hasActiveMembership(email);
    default:
      return false;
  }
}
