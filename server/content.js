// Content catalog — the source of truth for products, courses, and articles.
// Transactional/entitlement data (orders, users, subscriptions, ...) lives in
// SQLite; this file holds the editorial catalog, easy to edit.
//
// Product model:
//   id            unique slug, also used for file lookups (ebooks/<id>.pdf)
//   type          'ebook' | 'course' | 'membership'
//   tags          category keys used by the storefront filters (see CATEGORIES)
//   category      Thai display label for the primary category
//   format        Thai display label for the delivery format
//   price         original display string in ฿
//   priceAmount   integer satang actually charged (promo price when on promo)
//   promoPrice    optional promotional display string in ฿
//   badges        { isNew, isBestseller, instant }
//   title/description  { th, en }

// Storefront category filter keys + bilingual labels.
export const CATEGORIES = [
  { key: 'all', th: 'ทั้งหมด', en: 'All' },
  { key: 'health', th: 'Longevity และสุขภาพ', en: 'Longevity & health' },
  { key: 'tech', th: 'เทคโนโลยีและ AI', en: 'Technology & AI' },
  { key: 'career', th: 'การทำงานและอาชีพ', en: 'Work & career' },
  { key: 'finance', th: 'การเงินส่วนบุคคล', en: 'Personal finance' },
  { key: 'selfdev', th: 'การพัฒนาตัวเอง', en: 'Self-development' },
  { key: 'ebook', th: 'Ebook', en: 'Ebook' },
  { key: 'tools', th: 'เครื่องมือและแบบฝึกหัด', en: 'Tools & workbooks' },
  { key: 'courses', th: 'คอร์สออนไลน์', en: 'Online courses' },
  { key: 'videos', th: 'วิดีโอ', en: 'Videos' },
];

export const products = [
  {
    id: 'longevity-starter',
    type: 'ebook',
    tags: ['health', 'ebook'],
    category: 'Longevity และสุขภาพ',
    format: 'อีบุ๊ก PDF',
    price: '฿390',
    promoPrice: '฿290',
    priceAmount: 29000,
    currency: 'thb',
    badges: { isNew: true, isBestseller: true, instant: true },
    title: { th: 'คู่มือเริ่มต้นชีวิตแบบ Longevity', en: 'The longevity starter guide' },
    description: {
      th: 'แนวทางง่าย ๆ สำหรับการดูแลการนอน อาหาร การเคลื่อนไหว พลังใจ และคุณภาพชีวิตในระยะยาว',
      en: 'A simple approach to sleep, food, movement, mindset, and long-term quality of life.',
    },
  },
  {
    id: 'ai-at-work',
    type: 'ebook',
    tags: ['tech', 'ebook'],
    category: 'เทคโนโลยีและ AI',
    format: 'อีบุ๊ก PDF',
    price: '฿420',
    priceAmount: 42000,
    currency: 'thb',
    badges: { isNew: false, isBestseller: true, instant: true },
    title: { th: 'ใช้ AI ให้ช่วยงานได้จริง', en: 'Put AI to work for you' },
    description: {
      th: 'รวมวิธีใช้ AI กับงานจริง ตั้งแต่เขียน สรุป วางแผน ไปจนถึงเวิร์กโฟลว์ที่ทำซ้ำได้',
      en: 'Practical ways to use AI for writing, summarising, planning, and repeatable workflows.',
    },
  },
  {
    id: 'life-design-40',
    type: 'ebook',
    tags: ['career', 'selfdev', 'ebook'],
    category: 'การทำงานและอาชีพ',
    format: 'อีบุ๊ก PDF',
    price: '฿350',
    priceAmount: 35000,
    currency: 'thb',
    badges: { isNew: false, isBestseller: false, instant: true },
    title: { th: 'ออกแบบชีวิตและอาชีพในวัย 40+', en: 'Designing life and career at 40+' },
    description: {
      th: 'กรอบคิดและขั้นตอนสำหรับทบทวนทิศทางชีวิตและอาชีพอย่างสงบและมีเป้าหมาย',
      en: 'A calm, purposeful framework for reviewing your direction in life and work.',
    },
  },
  {
    id: 'personal-finance',
    type: 'ebook',
    tags: ['finance', 'ebook'],
    category: 'การเงินส่วนบุคคล',
    format: 'อีบุ๊ก PDF',
    price: '฿390',
    priceAmount: 39000,
    currency: 'thb',
    badges: { isNew: true, isBestseller: false, instant: true },
    title: { th: 'วางแผนการเงินให้มั่นคงขึ้น', en: 'Build steadier personal finances' },
    description: {
      th: 'ขั้นตอนพื้นฐานสำหรับจัดระบบการเงินส่วนตัว การออม และการวางแผนระยะยาว',
      en: 'Foundational steps to organise your money, savings, and long-term plan.',
    },
  },
  {
    id: 'annual-review',
    type: 'ebook',
    tags: ['selfdev', 'tools'],
    category: 'การพัฒนาตัวเอง',
    format: 'สมุดงานดิจิทัล',
    price: '฿190',
    priceAmount: 19000,
    currency: 'thb',
    badges: { isNew: false, isBestseller: false, instant: true },
    title: { th: 'แบบฝึกหัดทบทวนชีวิตประจำปี', en: 'The annual life review workbook' },
    description: {
      th: 'สมุดงานดิจิทัลพร้อมคำถามและเทมเพลต สำหรับทบทวนปีที่ผ่านมาและวางแผนปีต่อไป',
      en: 'A digital workbook with prompts and templates to review your year and plan ahead.',
    },
  },
  {
    id: 'personal-brand',
    type: 'ebook',
    tags: ['selfdev', 'career', 'ebook'],
    category: 'การพัฒนาตัวเอง',
    format: 'ชุดดาวน์โหลด',
    price: '฿450',
    priceAmount: 45000,
    currency: 'thb',
    badges: { isNew: false, isBestseller: false, instant: true },
    title: { th: 'สร้าง Personal Brand ด้วยเรื่องราวของคุณ', en: 'Build a personal brand from your story' },
    description: {
      th: 'คู่มือและเทมเพลตสำหรับเล่าเรื่องของคุณอย่างเป็นธรรมชาติและสร้างตัวตนออนไลน์',
      en: 'A guide and templates to tell your story naturally and build an online presence.',
    },
  },
  {
    id: 'membership',
    type: 'membership',
    tags: ['all'],
    category: 'สมาชิก',
    format: 'สมาชิกรายเดือน',
    price: '฿199',
    priceAmount: 19900,
    currency: 'thb',
    interval: 'month',
    stripePriceId: process.env.STRIPE_MEMBERSHIP_PRICE_ID || '',
    badges: {},
    title: { th: 'สมาชิกแบบเข้าถึงทั้งหมด', en: 'All-access membership' },
    description: {
      th: 'เข้าถึงคอร์สและคลาสสดทั้งหมด รายเดือน ยกเลิกได้ทุกเมื่อ',
      en: 'Unlock every course and live class, monthly. Cancel anytime.',
    },
  },
];

// Recorded courses. Each is also a purchasable product (type 'course').
// videoUrl is a placeholder sample until real Bunny/Cloudflare Stream ids are
// added; swap per lesson. `preview: true` lessons are watchable before buying.
const SAMPLE_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const courses = [
  {
    id: 'ai-productivity-course',
    slug: 'ai-productivity-course',
    type: 'course',
    tags: ['tech', 'courses', 'videos'],
    category: 'เทคโนโลยีและ AI',
    format: 'คอร์สวิดีโอ',
    topic: 'เทคโนโลยีและ AI',
    price: '฿790',
    priceAmount: 79000,
    currency: 'thb',
    badges: { isNew: true, isBestseller: false, instant: false },
    title: { th: 'คอร์สใช้ AI เพิ่มประสิทธิภาพการทำงาน', en: 'AI productivity course' },
    description: {
      th: 'คอร์สวิดีโอสั้น ๆ สอนใช้ AI กับงานจริงแบบทีละขั้นตอน',
      en: 'A short, step-by-step video course on using AI for real work.',
    },
    lessons: [
      { id: 'l1', duration: '4:12', preview: true, videoUrl: SAMPLE_VIDEO, title: { th: 'เริ่มต้นและวิธีใช้คอร์ส', en: 'Welcome and how this works' } },
      { id: 'l2', duration: '8:03', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'ตั้งค่าเวิร์กโฟลว์ AI ของคุณ', en: 'Set up your AI workflow' } },
      { id: 'l3', duration: '6:47', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'เทมเพลตคำสั่งที่ใช้ซ้ำได้', en: 'Reusable prompt templates' } },
    ],
  },
  {
    id: 'longevity-course',
    slug: 'longevity-course',
    type: 'course',
    tags: ['health', 'courses', 'videos'],
    category: 'Longevity และสุขภาพ',
    format: 'คอร์สวิดีโอ',
    topic: 'Longevity และสุขภาพ',
    price: '฿690',
    priceAmount: 69000,
    currency: 'thb',
    badges: { isNew: false, isBestseller: true, instant: false },
    title: { th: 'คอร์สพื้นฐานชีวิตแบบ Longevity', en: 'Longevity foundations course' },
    description: {
      th: 'วิดีโอสอนดูแลการนอน อาหาร และการเคลื่อนไหวแบบทำได้จริง',
      en: 'Video lessons on sleep, food, and movement you can actually keep.',
    },
    lessons: [
      { id: 'l1', duration: '3:30', preview: true, videoUrl: SAMPLE_VIDEO, title: { th: 'ภาพรวมของคอร์ส', en: 'Course overview' } },
      { id: 'l2', duration: '9:10', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'จังหวะการนอนที่ทำซ้ำได้', en: 'A repeatable sleep rhythm' } },
    ],
  },
];

export const articles = [
  {
    slug: 'sleep-rhythm',
    topic: 'Longevity และสุขภาพ',
    minutes: 6,
    title: {
      th: 'จังหวะการนอนที่อาจช่วยให้วันถัดไปเบาขึ้น',
      en: 'A steadier sleep rhythm may make tomorrow feel lighter',
    },
    excerpt: {
      th: 'เวลานอนที่สม่ำเสมออาจสัมพันธ์กับพลังงาน สมาธิ และความอยากอาหารในวันถัดไป',
      en: 'Consistent sleep timing may be linked to next-day energy, focus, and appetite.',
    },
  },
];

// Membership is special (recurring, env-driven Stripe price) and stays in code,
// not the admin-managed catalog.
export const membership = products.find((p) => p.type === 'membership');

export function findProduct(id) {
  return [...products, ...courses].find((p) => p.id === id) || null;
}

export function findCourse(slug) {
  return courses.find((c) => c.slug === slug || c.id === slug) || null;
}

export function publicProduct(p) {
  // Never leak internal Stripe ids or lesson video sources to the client.
  const { stripePriceId, lessons, ...rest } = p;
  return rest;
}

// Course card for the catalog (no lesson videoUrls).
export function publicCourseSummary(c) {
  return {
    id: c.id, slug: c.slug, type: c.type, topic: c.topic, tags: c.tags,
    category: c.category, format: c.format, price: c.price, priceAmount: c.priceAmount,
    currency: c.currency, badges: c.badges, title: c.title, description: c.description,
    lessonCount: c.lessons.length,
  };
}

export function findArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
