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
  return products.find((p) => p.id === id) || null;
}

export function publicProduct(p) {
  // Never leak internal Stripe ids to the client.
  const { stripePriceId, ...rest } = p;
  return rest;
}

export function findArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
