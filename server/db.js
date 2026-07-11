// SQLite data layer using Node's built-in `node:sqlite` (stable in Node 24+).
// No native npm dependency, so nothing to compile in the Docker image.
//
// Holds transactional + entitlement data only. The editorial catalog lives in content.js.

import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const dbPath = process.env.DB_PATH || '/data/kovitad.db';

if (dbPath !== ':memory:') {
  const dir = dirname(dbPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

export const db = new DatabaseSync(dbPath);

db.exec('PRAGMA journal_mode = WAL');
db.exec('PRAGMA foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            TEXT PRIMARY KEY,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id         TEXT PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS newsletter (
    id         TEXT PRIMARY KEY,
    email      TEXT NOT NULL UNIQUE,
    name       TEXT,
    source     TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS orders (
    id                TEXT PRIMARY KEY,
    email             TEXT NOT NULL,
    user_id           TEXT REFERENCES users(id) ON DELETE SET NULL,
    product_id        TEXT NOT NULL,
    price             TEXT NOT NULL,
    amount            INTEGER NOT NULL,
    currency          TEXT NOT NULL,
    status            TEXT NOT NULL,
    stripe_session_id TEXT,
    created_at        TEXT NOT NULL,
    paid_at           TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);
  CREATE INDEX IF NOT EXISTS idx_orders_session ON orders(stripe_session_id);

  CREATE TABLE IF NOT EXISTS subscriptions (
    id                 TEXT PRIMARY KEY,
    user_id            TEXT REFERENCES users(id) ON DELETE SET NULL,
    email              TEXT NOT NULL,
    status             TEXT NOT NULL,
    current_period_end TEXT,
    created_at         TEXT NOT NULL,
    updated_at         TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_subs_email ON subscriptions(email);

  CREATE TABLE IF NOT EXISTS downloads (
    token      TEXT PRIMARY KEY,
    order_id   TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    email      TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id    TEXT NOT NULL,
    completed_at TEXT NOT NULL,
    PRIMARY KEY (user_id, lesson_id)
  );
`);

// --- Users -------------------------------------------------------------
const insertUserStmt = db.prepare(
  'INSERT INTO users (id, name, email, password_hash, created_at) VALUES (?, ?, ?, ?, ?)',
);
const userByEmailStmt = db.prepare('SELECT * FROM users WHERE email = ?');
const userByIdStmt = db.prepare('SELECT * FROM users WHERE id = ?');

export const users = {
  insert: (u) => insertUserStmt.run(u.id, u.name, u.email, u.passwordHash, u.createdAt),
  byEmail: (email) => userByEmailStmt.get(email),
  byId: (id) => userByIdStmt.get(id),
};

// --- Sessions ----------------------------------------------------------
const insertSessionStmt = db.prepare(
  'INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)',
);
const sessionByIdStmt = db.prepare('SELECT * FROM sessions WHERE id = ?');
const deleteSessionStmt = db.prepare('DELETE FROM sessions WHERE id = ?');

export const sessions = {
  insert: (s) => insertSessionStmt.run(s.id, s.userId, s.expiresAt, s.createdAt),
  byId: (id) => sessionByIdStmt.get(id),
  delete: (id) => deleteSessionStmt.run(id),
};

// --- Newsletter --------------------------------------------------------
const insertSubStmt = db.prepare(
  'INSERT INTO newsletter (id, email, name, source, created_at) VALUES (?, ?, ?, ?, ?)',
);
const subByEmailStmt = db.prepare('SELECT * FROM newsletter WHERE email = ?');

export const newsletter = {
  byEmail: (email) => subByEmailStmt.get(email),
  insert: (s) => insertSubStmt.run(s.id, s.email, s.name || null, s.source || null, s.createdAt),
};

// --- Orders ------------------------------------------------------------
const insertOrderStmt = db.prepare(
  `INSERT INTO orders (id, email, user_id, product_id, price, amount, currency, status, stripe_session_id, created_at, paid_at)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
);
const orderByIdStmt = db.prepare('SELECT * FROM orders WHERE id = ?');
const orderBySessionStmt = db.prepare('SELECT * FROM orders WHERE stripe_session_id = ?');
const ordersByEmailStmt = db.prepare('SELECT * FROM orders WHERE email = ? ORDER BY created_at DESC');
const markOrderPaidStmt = db.prepare('UPDATE orders SET status = ?, paid_at = ? WHERE id = ?');

export const orders = {
  insert: (o) =>
    insertOrderStmt.run(
      o.id, o.email, o.userId || null, o.productId, o.price, o.amount, o.currency, o.status,
      o.stripeSessionId || null, o.createdAt, o.paidAt || null,
    ),
  byId: (id) => orderByIdStmt.get(id),
  bySession: (sessionId) => orderBySessionStmt.get(sessionId),
  byEmail: (email) => ordersByEmailStmt.all(email),
  markPaid: (id, paidAt) => markOrderPaidStmt.run('paid', paidAt, id),
};

// --- Subscriptions -----------------------------------------------------
const upsertSubStmt = db.prepare(
  `INSERT INTO subscriptions (id, user_id, email, status, current_period_end, created_at, updated_at)
   VALUES (?, ?, ?, ?, ?, ?, ?)
   ON CONFLICT(id) DO UPDATE SET
     status = excluded.status,
     current_period_end = excluded.current_period_end,
     updated_at = excluded.updated_at`,
);
const activeSubByEmailStmt = db.prepare(
  `SELECT * FROM subscriptions WHERE email = ? AND status IN ('active','trialing')
   ORDER BY updated_at DESC LIMIT 1`,
);
const subByIdStmt = db.prepare('SELECT * FROM subscriptions WHERE id = ?');

export const subscriptions = {
  upsert: (s) =>
    upsertSubStmt.run(
      s.id, s.userId || null, s.email, s.status, s.currentPeriodEnd || null, s.createdAt, s.updatedAt,
    ),
  activeByEmail: (email) => activeSubByEmailStmt.get(email),
  byId: (id) => subByIdStmt.get(id),
};

// --- Downloads ---------------------------------------------------------
const insertDownloadStmt = db.prepare(
  'INSERT INTO downloads (token, order_id, product_id, email, expires_at, created_at) VALUES (?, ?, ?, ?, ?, ?)',
);
const downloadByTokenStmt = db.prepare('SELECT * FROM downloads WHERE token = ?');
const downloadByOrderStmt = db.prepare(
  'SELECT * FROM downloads WHERE order_id = ? ORDER BY created_at DESC LIMIT 1',
);

export const downloads = {
  insert: (d) =>
    insertDownloadStmt.run(d.token, d.orderId, d.productId, d.email, d.expiresAt, d.createdAt),
  byToken: (token) => downloadByTokenStmt.get(token),
  byOrder: (orderId) => downloadByOrderStmt.get(orderId),
};
