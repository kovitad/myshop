import express from 'express';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { pbkdf2Sync, randomBytes, randomUUID } from 'node:crypto';

const app = express();
const port = process.env.PORT || 3000;
const dbPath = process.env.DB_PATH || '/data/kovitad.json';

const seed = {
  users: [],
  newsletter: [],
  orders: [],
  products: [
    { id: 'steady-energy-plate', price: '฿390', topic: 'Nutrition', title: { th: 'คู่มือจานอาหารเพื่อพลังงานที่นิ่งขึ้น', en: 'The steady energy plate' }, description: { th: 'คู่มือดิจิทัลสำหรับจัดจานอาหารที่ทำซ้ำได้ในชีวิตจริง', en: 'A digital guide for repeatable everyday meals.' } },
    { id: 'evening-habits', price: '฿290', topic: 'Sleep', title: { th: '7 นิสัยเย็นที่ช่วยเตรียมร่างกายก่อนนอน', en: '7 evening habits for better rest' }, description: { th: 'ขั้นตอนสั้น ๆ เพื่อช่วยให้ช่วงเย็นสงบลง', en: 'Short steps for a calmer evening rhythm.' } },
    { id: 'walking-reset', price: '฿250', topic: 'Movement', title: { th: 'เริ่มเดินให้เป็นระบบใน 14 วัน', en: 'A 14-day walking reset' }, description: { th: 'แผนเดินแบบค่อยเป็นค่อยไปสำหรับชีวิตจริง', en: 'A gradual walking plan for real life.' } }
  ],
  articles: [
    { slug: 'sleep-rhythm', topic: 'Sleep', minutes: 6, title: { th: 'จังหวะการนอนที่อาจช่วยให้วันถัดไปเบาขึ้น', en: 'A steadier sleep rhythm may make tomorrow feel lighter' }, excerpt: { th: 'เวลานอนที่สม่ำเสมออาจสัมพันธ์กับพลังงาน สมาธิ และความอยากอาหารในวันถัดไป', en: 'Consistent sleep timing may be linked to next-day energy, focus, and appetite regulation.' } }
  ]
};

function loadDb() {
  if (!existsSync(dbPath)) {
    mkdirSync(dirname(dbPath), { recursive: true });
    writeFileSync(dbPath, JSON.stringify(seed, null, 2));
  }
  const db = JSON.parse(readFileSync(dbPath, 'utf8'));
  for (const key of Object.keys(seed)) if (!db[key]) db[key] = seed[key];
  return db;
}

function saveDb(db) {
  writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function cleanEmail(email = '') {
  return String(email).trim().toLowerCase();
}

function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(password, salt, 120000, 32, 'sha256').toString('hex');
  return `${salt}:${hash}`;
}

app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/products', (_req, res) => res.json(loadDb().products));
app.get('/api/content/articles', (_req, res) => res.json(loadDb().articles));
app.get('/api/content/articles/:slug', (req, res) => {
  const article = loadDb().articles.find((item) => item.slug === req.params.slug);
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
});

app.post('/api/register', (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = cleanEmail(req.body.email);
  const password = String(req.body.password || '');
  if (name.length < 2) return res.status(400).json({ error: 'Name is required' });
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });
  const db = loadDb();
  if (db.users.some((user) => user.email === email)) return res.status(409).json({ error: 'Email is already registered' });
  const user = { id: randomUUID(), name, email, passwordHash: hashPassword(password), createdAt: new Date().toISOString() };
  db.users.push(user);
  if (!db.newsletter.some((sub) => sub.email === email)) db.newsletter.push({ id: randomUUID(), email, name, source: 'registration', createdAt: new Date().toISOString() });
  saveDb(db);
  res.status(201).json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
});

app.post('/api/newsletter/subscribe', (req, res) => {
  const email = cleanEmail(req.body.email);
  const name = String(req.body.name || '').trim();
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  const db = loadDb();
  const existing = db.newsletter.find((sub) => sub.email === email);
  if (existing) return res.json({ ok: true, subscribed: true, existing: true });
  db.newsletter.push({ id: randomUUID(), email, name, source: 'newsletter', createdAt: new Date().toISOString() });
  saveDb(db);
  res.status(201).json({ ok: true, subscribed: true });
});

app.post('/api/orders', (req, res) => {
  const email = cleanEmail(req.body.email);
  const productId = String(req.body.productId || '');
  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email is required' });
  const db = loadDb();
  const product = db.products.find((item) => item.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  const order = { id: randomUUID(), email, productId, price: product.price, status: 'pending_payment', createdAt: new Date().toISOString() };
  db.orders.push(order);
  saveDb(db);
  res.status(201).json({ ok: true, order, message: 'Order reserved. Connect a payment provider next.' });
});

app.listen(port, () => console.log(`KOVITAD API listening on ${port}`));
