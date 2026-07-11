// Auth helpers: password hashing (pbkdf2) and httpOnly session cookies backed by SQLite.

import { pbkdf2Sync, randomBytes, randomUUID, timingSafeEqual } from 'node:crypto';
import { sessions, users } from './db.js';

const ITERATIONS = 120000;
const KEYLEN = 32;
const DIGEST = 'sha256';
const SESSION_COOKIE = 'kovitad_session';
const SESSION_DAYS = 30;

export function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  if (typeof stored !== 'string' || !stored.includes(':')) return false;
  const [salt, hash] = stored.split(':');
  const candidate = pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST).toString('hex');
  const a = Buffer.from(candidate, 'hex');
  const b = Buffer.from(hash, 'hex');
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createSession(res, userId) {
  const id = randomUUID();
  const now = new Date();
  const expires = new Date(now.getTime() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  sessions.insert({ id, userId, expiresAt: expires.toISOString(), createdAt: now.toISOString() });
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=${id}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${SESSION_DAYS * 24 * 60 * 60}${secure}`,
  );
}

export function clearSession(req, res) {
  const id = readCookie(req, SESSION_COOKIE);
  if (id) sessions.delete(id);
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

// Returns the logged-in user row, or null.
export function currentUser(req) {
  const id = readCookie(req, SESSION_COOKIE);
  if (!id) return null;
  const session = sessions.byId(id);
  if (!session) return null;
  if (new Date(session.expires_at).getTime() < Date.now()) {
    sessions.delete(id);
    return null;
  }
  return users.byId(session.user_id) || null;
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
