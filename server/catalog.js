// Admin-managed catalog: categories, products, and site settings/profile.
// Stored in SQLite so the admin can edit them at runtime; seeded once from the
// code constants in content.js. Membership + courses stay in code.

import { db } from './db.js';
import {
  CATEGORIES as SEED_CATEGORIES,
  products as SEED_PRODUCTS,
  membership,
  courses,
} from './content.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS catalog_categories (
    key   TEXT PRIMARY KEY,
    th    TEXT NOT NULL,
    en    TEXT NOT NULL,
    sort  INTEGER NOT NULL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS catalog_products (
    id           TEXT PRIMARY KEY,
    type         TEXT NOT NULL,
    tags         TEXT NOT NULL,
    category     TEXT NOT NULL,
    format       TEXT NOT NULL,
    price        TEXT NOT NULL,
    promo_price  TEXT,
    price_amount INTEGER NOT NULL,
    currency     TEXT NOT NULL,
    badge_new     INTEGER NOT NULL DEFAULT 0,
    badge_best    INTEGER NOT NULL DEFAULT 0,
    badge_instant INTEGER NOT NULL DEFAULT 0,
    title_th   TEXT NOT NULL,
    title_en   TEXT NOT NULL,
    desc_th    TEXT NOT NULL,
    desc_en    TEXT NOT NULL,
    payment_link TEXT,
    sort       INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS settings (
    key   TEXT PRIMARY KEY,
    value TEXT
  );
`);

// Migration for DBs created before payment_link existed.
try { db.exec('ALTER TABLE catalog_products ADD COLUMN payment_link TEXT'); } catch { /* column already exists */ }

// ── Row <-> object mapping ─────────────────────────────────────────────
function rowToProduct(r) {
  return {
    id: r.id,
    type: r.type,
    tags: JSON.parse(r.tags || '[]'),
    category: r.category,
    format: r.format,
    price: r.price,
    promoPrice: r.promo_price || undefined,
    priceAmount: r.price_amount,
    currency: r.currency,
    badges: { isNew: !!r.badge_new, isBestseller: !!r.badge_best, instant: !!r.badge_instant },
    title: { th: r.title_th, en: r.title_en },
    description: { th: r.desc_th, en: r.desc_en },
    paymentLink: r.payment_link || '',
  };
}

const insertProductStmt = db.prepare(`
  INSERT INTO catalog_products (id, type, tags, category, format, price, promo_price, price_amount, currency,
    badge_new, badge_best, badge_instant, title_th, title_en, desc_th, desc_en, payment_link, sort, created_at)
  VALUES (@id, @type, @tags, @category, @format, @price, @promo_price, @price_amount, @currency,
    @badge_new, @badge_best, @badge_instant, @title_th, @title_en, @desc_th, @desc_en, @payment_link, @sort, @created_at)
  ON CONFLICT(id) DO UPDATE SET
    type=excluded.type, tags=excluded.tags, category=excluded.category, format=excluded.format,
    price=excluded.price, promo_price=excluded.promo_price, price_amount=excluded.price_amount,
    currency=excluded.currency, badge_new=excluded.badge_new, badge_best=excluded.badge_best,
    badge_instant=excluded.badge_instant, title_th=excluded.title_th, title_en=excluded.title_en,
    desc_th=excluded.desc_th, desc_en=excluded.desc_en, payment_link=excluded.payment_link
`);
const allProductsStmt = db.prepare('SELECT * FROM catalog_products ORDER BY sort ASC, created_at ASC');
const productByIdStmt = db.prepare('SELECT * FROM catalog_products WHERE id = ?');
const deleteProductStmt = db.prepare('DELETE FROM catalog_products WHERE id = ?');

function writeProduct(p) {
  insertProductStmt.run({
    id: p.id, type: p.type || 'ebook', tags: JSON.stringify(p.tags || []),
    category: p.category || '', format: p.format || '', price: p.price || '',
    promo_price: p.promoPrice || null, price_amount: p.priceAmount || 0, currency: p.currency || 'thb',
    badge_new: p.badges?.isNew ? 1 : 0, badge_best: p.badges?.isBestseller ? 1 : 0, badge_instant: p.badges?.instant ? 1 : 0,
    title_th: p.title?.th || '', title_en: p.title?.en || '', desc_th: p.description?.th || '', desc_en: p.description?.en || '',
    payment_link: p.paymentLink || null,
    sort: p.sort || 0, created_at: p.createdAt || new Date().toISOString(),
  });
}

// ── Categories ─────────────────────────────────────────────────────────
const insertCatStmt = db.prepare(
  `INSERT INTO catalog_categories (key, th, en, sort) VALUES (?, ?, ?, ?)
   ON CONFLICT(key) DO UPDATE SET th=excluded.th, en=excluded.en, sort=excluded.sort`,
);
const allCatsStmt = db.prepare('SELECT key, th, en FROM catalog_categories ORDER BY sort ASC');
const deleteCatStmt = db.prepare('DELETE FROM catalog_categories WHERE key = ?');

// ── Settings ───────────────────────────────────────────────────────────
const getSettingStmt = db.prepare('SELECT value FROM settings WHERE key = ?');
const setSettingStmt = db.prepare('INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value');

// ── One-time seed ──────────────────────────────────────────────────────
if (allCatsStmt.all().length === 0) {
  SEED_CATEGORIES.forEach((c, i) => insertCatStmt.run(c.key, c.th, c.en, i));
}
if (allProductsStmt.all().length === 0) {
  SEED_PRODUCTS.filter((p) => p.type !== 'membership').forEach((p, i) => writeProduct({ ...p, sort: i }));
}

// ── Public API ─────────────────────────────────────────────────────────
export const catalog = {
  categories: {
    all: () => allCatsStmt.all(),
    add: (c) => insertCatStmt.run(c.key, c.th, c.en, c.sort || 99),
    remove: (key) => deleteCatStmt.run(key),
  },
  products: {
    all: () => allProductsStmt.all().map(rowToProduct),
    byId: (id) => { const r = productByIdStmt.get(id); return r ? rowToProduct(r) : null; },
    save: (p) => writeProduct(p),
    remove: (id) => deleteProductStmt.run(id),
  },
  settings: {
    get: (key, fallback = null) => { const r = getSettingStmt.get(key); return r ? r.value : fallback; },
    set: (key, value) => setSettingStmt.run(key, value == null ? '' : String(value)),
  },
};

// findProduct spanning: membership (code) + DB products + courses (code).
export function findProduct(id) {
  if (id === 'membership') return membership;
  return catalog.products.byId(id) || courses.find((c) => c.id === id) || null;
}
