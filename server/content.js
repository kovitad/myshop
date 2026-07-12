// Content catalog — the source of truth for products and articles.
// Transactional/entitlement data (orders, users, subscriptions, ...) lives in SQLite;
// this file holds the editorial catalog that is safe to keep in code and version control.
//
// Product model:
//   id            unique slug, also used for file lookups (ebooks/<id>.pdf)
//   type          'ebook' | 'course' | 'live' | 'membership'
//   price         display string, always in ฿ (brand rule)
//   priceAmount   integer minor units (satang) — what Stripe charges. ฿390 => 39000
//   currency      'thb'
//   interval      only for 'membership': 'month'
//   stripePriceId only for 'membership': the Stripe recurring Price id (from env/dashboard)

export const products = [
  {
    id: 'steady-energy-plate',
    type: 'ebook',
    topic: 'Nutrition',
    price: '฿390',
    priceAmount: 39000,
    currency: 'thb',
    title: {
      th: 'คู่มือจานอาหารเพื่อพลังงานที่นิ่งขึ้น',
      en: 'The steady energy plate',
    },
    description: {
      th: 'คู่มือดิจิทัลสำหรับจัดจานอาหารที่ทำซ้ำได้ในชีวิตจริง',
      en: 'A digital guide for repeatable everyday meals.',
    },
  },
  {
    id: 'evening-habits',
    type: 'ebook',
    topic: 'Sleep',
    price: '฿290',
    priceAmount: 29000,
    currency: 'thb',
    title: {
      th: '7 นิสัยเย็นที่ช่วยเตรียมร่างกายก่อนนอน',
      en: '7 evening habits for better rest',
    },
    description: {
      th: 'ขั้นตอนสั้น ๆ เพื่อช่วยให้ช่วงเย็นสงบลง',
      en: 'Short steps for a calmer evening rhythm.',
    },
  },
  {
    id: 'walking-reset',
    type: 'ebook',
    topic: 'Movement',
    price: '฿250',
    priceAmount: 25000,
    currency: 'thb',
    title: {
      th: 'เริ่มเดินให้เป็นระบบใน 14 วัน',
      en: 'A 14-day walking reset',
    },
    description: {
      th: 'แผนเดินแบบค่อยเป็นค่อยไปสำหรับชีวิตจริง',
      en: 'A gradual walking plan for real life.',
    },
  },
  {
    // All-access membership. The recurring price itself is defined in Stripe;
    // reference it here by id so checkout can start a subscription.
    id: 'membership',
    type: 'membership',
    topic: 'Membership',
    price: '฿199',
    priceAmount: 19900,
    currency: 'thb',
    interval: 'month',
    stripePriceId: process.env.STRIPE_MEMBERSHIP_PRICE_ID || '',
    title: {
      th: 'สมาชิกแบบเข้าถึงทั้งหมด',
      en: 'All-access membership',
    },
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
    id: 'sleep-reset-course',
    slug: 'sleep-reset-course',
    type: 'course',
    topic: 'Sleep',
    price: '฿690',
    priceAmount: 69000,
    currency: 'thb',
    title: { th: 'คอร์สปรับการนอน 7 วัน', en: 'The 7-day sleep reset' },
    description: {
      th: 'คอร์สวิดีโอสั้น ๆ เพื่อสร้างจังหวะการนอนที่ทำซ้ำได้ในชีวิตจริง',
      en: 'A short video course to build a repeatable sleep rhythm for real life.',
    },
    lessons: [
      { id: 'l1', duration: '4:12', preview: true, videoUrl: SAMPLE_VIDEO, title: { th: 'เริ่มต้นและวิธีใช้คอร์ส', en: 'Welcome and how this works' } },
      { id: 'l2', duration: '8:03', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'เวลาตื่นที่สม่ำเสมอ', en: 'A consistent wake time' } },
      { id: 'l3', duration: '6:47', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'พิธีกรรมเย็นที่สั้น', en: 'A short evening ritual' } },
    ],
  },
  {
    id: 'steady-energy-course',
    slug: 'steady-energy-course',
    type: 'course',
    topic: 'Nutrition',
    price: '฿790',
    priceAmount: 79000,
    currency: 'thb',
    title: { th: 'คอร์สจานอาหารพลังงานนิ่ง', en: 'The steady energy plate course' },
    description: {
      th: 'วิดีโอสอนจัดจานอาหารที่เรียบง่ายและทำซ้ำได้',
      en: 'Video lessons for building simple, repeatable everyday plates.',
    },
    lessons: [
      { id: 'l1', duration: '3:30', preview: true, videoUrl: SAMPLE_VIDEO, title: { th: 'ภาพรวมของคอร์ส', en: 'Course overview' } },
      { id: 'l2', duration: '9:10', preview: false, videoUrl: SAMPLE_VIDEO, title: { th: 'โครงจานพื้นฐาน', en: 'The base plate framework' } },
    ],
  },
];

export const articles = [
  {
    slug: 'sleep-rhythm',
    topic: 'Sleep',
    minutes: 6,
    title: {
      th: 'จังหวะการนอนที่อาจช่วยให้วันถัดไปเบาขึ้น',
      en: 'A steadier sleep rhythm may make tomorrow feel lighter',
    },
    excerpt: {
      th: 'เวลานอนที่สม่ำเสมออาจสัมพันธ์กับพลังงาน สมาธิ และความอยากอาหารในวันถัดไป',
      en: 'Consistent sleep timing may be linked to next-day energy, focus, and appetite regulation.',
    },
  },
];

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
    id: c.id,
    slug: c.slug,
    type: c.type,
    topic: c.topic,
    price: c.price,
    priceAmount: c.priceAmount,
    currency: c.currency,
    title: c.title,
    description: c.description,
    lessonCount: c.lessons.length,
  };
}

export function findArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
