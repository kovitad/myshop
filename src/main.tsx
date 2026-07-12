import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  Check,
  Download,
  FileText,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  PlayCircle,
  Plus,
  ShoppingCart,
  Sparkles,
  Trash2,
  User,
  X,
} from 'lucide-react';

// Brand logos were removed from lucide-react; inline monochrome marks instead.
function Facebook({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>;
}
function Youtube({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.11-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.13c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.8 12l-6.2 3.57Z" /></svg>;
}
function TikTok({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.5 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.77a5.66 5.66 0 1 0 4.93 5.61V9.01a7.34 7.34 0 0 0 4.29 1.37V7.3a4.28 4.28 0 0 1-3.19-1.48Z" /></svg>;
}
import './styles.css';

type Lang = 'th' | 'en';
type Route = string;

const ROUTES = [
  '/',
  '/shop',
  '/about',
  '/library',
  '/courses',
  '/articles/sleep-rhythm',
  '/login',
  '/membership',
  '/account',
  '/contact',
  '/admin',
  '/order/success',
  '/order/cancelled',
  '/privacy',
  '/terms',
  '/refund',
];

type User = { id: string; name: string; email: string; member: boolean; admin: boolean } | null;

// Support + social channels for KOVITAD.shop (Kovitad Janlakhon).
const SUPPORT = {
  email: 'kovitad@gmail.com',
  phone: '0839799546',
  lineId: 'kovitadj',
  lineUrl: 'https://line.me/ti/p/~kovitadj',
  facebook: 'https://www.facebook.com/kovitad.janlakhon/',
  youtube: 'https://www.youtube.com/@kovitad/videos',
  tiktok: 'https://www.tiktok.com/@kbitidesunipo',
};

// ── New-brand marketing copy (KOVITAD.shop personal knowledge shop) ──────
const brand = {
  th: {
    nav: [
      ['/', 'หน้าแรก'],
      ['/shop', 'หนังสือและอีบุ๊ก'],
      ['/shop', 'เครื่องมือ'],
      ['/courses', 'คอร์สออนไลน์'],
      ['/library', 'บทความ'],
      ['/shop', 'วิดีโอ'],
      ['/about', 'เกี่ยวกับผม'],
      ['/contact', 'ติดต่อ'],
    ] as Array<[string, string]>,
    followCta: 'ติดตาม Kovitad',
    heroTitle: 'ความรู้และเครื่องมือ\nเพื่อชีวิตที่ดีขึ้นในแบบของคุณ',
    heroBody: 'อีบุ๊ก คู่มือ เครื่องมือ คอร์ส และคอนเทนต์ที่ช่วยให้เรื่องยาก กลายเป็นสิ่งที่เข้าใจง่ายและนำไปใช้ได้จริง',
    heroPrimary: 'เลือกดูสินค้าทั้งหมด',
    heroSecondary: 'รู้จัก Kovitad',
    catalogTitle: 'คลังความรู้ของ Kovitad',
    catalogBody: 'เลือกดูอีบุ๊ก เครื่องมือ คอร์ส และคอนเทนต์ ที่ออกแบบมาเพื่อช่วยให้คุณเรียนรู้และลงมือทำได้ง่ายขึ้น',
    featuredEyebrow: 'สินค้าแนะนำ',
    featuredTitle: 'คู่มือเริ่มต้นชีวิตแบบ Longevity',
    featuredBody: 'แนวทางง่าย ๆ สำหรับการดูแลการนอน อาหาร การเคลื่อนไหว พลังใจ และคุณภาพชีวิตในระยะยาว',
    featuredDetail: 'ดูรายละเอียด',
    featuredPreview: 'อ่านตัวอย่าง',
    learnTitle: 'เรียนรู้กับ Kovitad',
    learnBody: 'วิดีโอ คอนเทนต์สั้น และบทความที่หยิบไปใช้ได้จริง',
    watchOn: 'ดูบน',
    founderHi: 'สวัสดีครับ ผม Kovitad Janlakhon',
    founderRole: 'ผู้ก่อตั้งและผู้ดูแลคอนเทนต์ของ KOVITAD.shop',
    founderText: 'ผมสนใจเทคโนโลยี การพัฒนาตัวเอง การเงิน การทำงาน และการมีชีวิตที่แข็งแรงอย่างมีความหมาย\n\nKOVITAD.shop เป็นพื้นที่ที่ผมใช้รวบรวมสิ่งที่ได้เรียนรู้ และเปลี่ยนมันให้เป็นคู่มือ เครื่องมือ และคอนเทนต์ ที่คนทั่วไปสามารถนำไปใช้ได้จริง',
    followYouTube: 'ติดตามบน YouTube',
    followFacebook: 'ติดตามบน Facebook',
    followTikTok: 'ดู TikTok',
    newsletterTitle: 'รับไอเดียใหม่จาก Kovitad',
    newsletterBody: 'บทความ วิดีโอ คู่มือใหม่ และข้อเสนอพิเศษ ส่งเป็นครั้งคราวโดยไม่รบกวนมากเกินไป',
    nameField: 'ชื่อ',
    emailField: 'อีเมล',
    consent: 'ฉันยินยอมรับข่าวสารและอีเมลจาก KOVITAD.shop',
    subscribe: 'สมัครรับข่าวสาร',
    subscribed: 'สมัครรับข่าวสารเรียบร้อยแล้ว ขอบคุณครับ',
    consentRequired: 'กรุณายอมรับเงื่อนไขก่อนสมัคร',
    detail: 'ดูรายละเอียด',
    addToCart: 'เพิ่มลงตะกร้า',
    added: 'เพิ่มแล้ว',
    instant: 'ดาวน์โหลดทันที',
    badgeNew: 'ใหม่',
    badgeBest: 'ขายดี',
    cartTitle: 'ตะกร้าสินค้า',
    cartEmpty: 'ยังไม่มีสินค้าในตะกร้า',
    cartTotal: 'รวม',
    cartCheckout: 'ชำระเงิน',
    cartRemove: 'ลบ',
    aboutTitle: 'เกี่ยวกับผม',
    footerTagline: 'คลังความรู้และเครื่องมือส่วนตัวของ Kovitad Janlakhon',
    footerLinks: [
      ['/', 'หน้าแรก'],
      ['/shop', 'สินค้าทั้งหมด'],
      ['/shop', 'Ebook'],
      ['/courses', 'คอร์สออนไลน์'],
      ['/library', 'บทความ'],
      ['/about', 'เกี่ยวกับผม'],
      ['/contact', 'ติดต่อ'],
      ['/contact', 'วิธีสั่งซื้อ'],
      ['/privacy', 'นโยบายความเป็นส่วนตัว'],
      ['/terms', 'ข้อกำหนดการใช้งาน'],
      ['/refund', 'การคืนเงิน'],
    ] as Array<[string, string]>,
    disclaimer: 'เนื้อหาบน KOVITAD.shop จัดทำขึ้นเพื่อให้ความรู้ทั่วไปเท่านั้น ไม่ใช่คำแนะนำทางการแพทย์ การวินิจฉัย หรือการรักษาโรค โปรดปรึกษาแพทย์หรือผู้เชี่ยวชาญที่มีคุณสมบัติเหมาะสม ก่อนตัดสินใจเกี่ยวกับยา อาหารเสริม หรือภาวะสุขภาพ',
  },
  en: {
    nav: [
      ['/', 'Home'],
      ['/shop', 'Books & ebooks'],
      ['/shop', 'Tools'],
      ['/courses', 'Courses'],
      ['/library', 'Articles'],
      ['/shop', 'Videos'],
      ['/about', 'About me'],
      ['/contact', 'Contact'],
    ] as Array<[string, string]>,
    followCta: 'Follow Kovitad',
    heroTitle: 'Knowledge and tools\nfor a better life, your way',
    heroBody: 'Ebooks, guides, tools, courses, and content that turn hard topics into ideas you can actually use.',
    heroPrimary: 'Browse all products',
    heroSecondary: 'Meet Kovitad',
    catalogTitle: "Kovitad's knowledge shop",
    catalogBody: 'Browse ebooks, tools, courses, and content designed to help you learn and take action more easily.',
    featuredEyebrow: 'Featured',
    featuredTitle: 'The longevity starter guide',
    featuredBody: 'A simple approach to sleep, food, movement, mindset, and long-term quality of life.',
    featuredDetail: 'View details',
    featuredPreview: 'Read a sample',
    learnTitle: 'Learn with Kovitad',
    learnBody: 'Videos, short content, and practical articles you can use.',
    watchOn: 'Watch on',
    founderHi: "Hi, I'm Kovitad Janlakhon",
    founderRole: 'Founder and Content Curator of KOVITAD.shop',
    founderText: 'I care about technology, self-development, finance, work, and living a strong, meaningful life.\n\nKOVITAD.shop is where I gather what I learn and turn it into guides, tools, and content that anyone can put to use.',
    followYouTube: 'Follow on YouTube',
    followFacebook: 'Follow on Facebook',
    followTikTok: 'See TikTok',
    newsletterTitle: 'Get new ideas from Kovitad',
    newsletterBody: 'Articles, videos, new guides, and occasional offers — never too often.',
    nameField: 'Name',
    emailField: 'Email',
    consent: 'I agree to receive news and email from KOVITAD.shop',
    subscribe: 'Subscribe',
    subscribed: 'You are subscribed. Thank you.',
    consentRequired: 'Please accept the terms to subscribe',
    detail: 'View details',
    addToCart: 'Add to cart',
    added: 'Added',
    instant: 'Instant download',
    badgeNew: 'New',
    badgeBest: 'Bestseller',
    cartTitle: 'Your cart',
    cartEmpty: 'Your cart is empty',
    cartTotal: 'Total',
    cartCheckout: 'Checkout',
    cartRemove: 'Remove',
    aboutTitle: 'About me',
    footerTagline: "Kovitad Janlakhon's personal knowledge shop and tools",
    footerLinks: [
      ['/', 'Home'],
      ['/shop', 'All products'],
      ['/shop', 'Ebook'],
      ['/courses', 'Courses'],
      ['/library', 'Articles'],
      ['/about', 'About me'],
      ['/contact', 'Contact'],
      ['/contact', 'How to order'],
      ['/privacy', 'Privacy policy'],
      ['/terms', 'Terms of use'],
      ['/refund', 'Refunds'],
    ] as Array<[string, string]>,
    disclaimer: 'Content on KOVITAD.shop is for general education only — not medical advice, diagnosis, or treatment. Please consult a qualified professional before making decisions about medication, supplements, or health conditions.',
  },
};

// ── Cart (client-side, persisted) ───────────────────────────────────────
type CartItem = { id: string; title: string; price: string; amount: number };
type CartCtx = { items: CartItem[]; add: (i: CartItem) => void; remove: (id: string) => void; clear: () => void; open: boolean; setOpen: (b: boolean) => void };
const CartContext = React.createContext<CartCtx | null>(null);
function useCart(): CartCtx {
  const c = React.useContext(CartContext);
  if (!c) throw new Error('useCart outside provider');
  return c;
}
function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem('kovitad-cart') || '[]'); } catch { return []; }
  });
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { localStorage.setItem('kovitad-cart', JSON.stringify(items)); }, [items]);
  const add = (i: CartItem) => setItems((prev) => (prev.some((p) => p.id === i.id) ? prev : [...prev, i]));
  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setItems([]);
  return <CartContext.Provider value={{ items, add, remove, clear, open, setOpen }}>{children}</CartContext.Provider>;
}

const copy = {
  th: {
    nav: { home: 'หน้าแรก', library: 'คลังความรู้', article: 'บทความตัวอย่าง' },
    heroEyebrow: 'WELLNESS PUBLICATION',
    heroTitle: 'สุขภาพที่ยืนยาว เริ่มจากนิสัยเล็ก ๆ ที่ทำได้จริง',
    heroBody:
      'KOVITAD.shop คือพื้นที่อ่านเรื่องโภชนาการ การนอน การเคลื่อนไหว และการดูแลใจ แบบเข้าใจง่าย อิงหลักฐาน และเหมาะกับชีวิตจริงของคนไทย',
    primaryCta: 'เริ่มอ่าน',
    secondaryCta: 'ดูคลังความรู้',
    topicsTitle: 'เริ่มจากพื้นฐานที่ขยับชีวิตได้มาก',
    topicsBody: 'ไม่ต้องสุดโต่ง แค่เลือกหนึ่งนิสัยที่ทำต่อเนื่องได้ แล้วค่อยต่อยอดอย่างสงบ',
    featuredTitle: 'คู่มือแนะนำ',
    featuredBody: 'คู่มือดิจิทัลสำหรับสร้างระบบสุขภาพส่วนตัว โดยไม่พึ่งคำโฆษณาเกินจริง',
    latestTitle: 'บทความล่าสุด',
    libraryTitle: 'คลังความรู้',
    libraryBody: 'บทความและคู่มือที่จัดตามหัวข้อ เพื่อให้คุณกลับมาอ่านและลงมือทำได้ง่าย',
    articleTitle: 'จังหวะการนอนที่อาจช่วยให้วันถัดไปเบาขึ้น',
    articleDek:
      'งานวิจัยจำนวนมากชี้ว่าเวลานอนที่สม่ำเสมออาจสัมพันธ์กับพลังงาน สมาธิ และความอยากอาหารในวันถัดไป',
    disclaimer:
      'KOVITAD แบ่งปันความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญก่อนเปลี่ยนแปลงกิจวัตรสุขภาพ',
    readGuide: 'อ่านคู่มือ',
    readArticle: 'อ่านบทความ',
    newsletterTitle: 'รับโน้ตสุขภาพแบบสงบในกล่องจดหมาย',
    newsletterBody: 'เดือนละไม่กี่ครั้ง เน้นสิ่งที่อ่านแล้วนำไปใช้ได้จริง ไม่มีแรงกดดัน ไม่มีคำสัญญาเกินจริง',
    email: 'อีเมลของคุณ',
    subscribe: 'สมัครรับข่าวสาร',
    footer: 'สิ่งพิมพ์ด้านสุขภาพและอายุยืนสำหรับชีวิตจริง',
    getGuide: 'รับคู่มือ',
    paymentsSoon: 'ระบบชำระเงินกำลังจะเปิดใช้งานเร็ว ๆ นี้',
    checkoutError: 'เริ่มการชำระเงินไม่สำเร็จ กรุณาลองใหม่',
    successEyebrow: 'ขอบคุณ',
    successTitle: 'การสั่งซื้อสำเร็จ',
    successBody: 'คู่มือของคุณพร้อมแล้ว เราได้ส่งลิงก์ดาวน์โหลดไปที่อีเมลของคุณด้วย',
    successDownload: 'ดาวน์โหลดคู่มือ',
    successPending: 'กำลังยืนยันการชำระเงิน หากยังไม่พร้อม ให้รีเฟรชอีกครั้งในสักครู่ ลิงก์ดาวน์โหลดจะถูกส่งไปที่อีเมลของคุณ',
    successError: 'ไม่พบข้อมูลคำสั่งซื้อ หากคุณชำระเงินแล้ว โปรดตรวจสอบอีเมลของคุณ',
    cancelTitle: 'ยกเลิกการชำระเงินแล้ว',
    cancelBody: 'ยังไม่มีการเรียกเก็บเงิน คุณสามารถกลับมาเลือกคู่มือได้ทุกเมื่อ',
    backHome: 'กลับหน้าแรก',
    backLibrary: 'ดูคลังความรู้',
    privacyNav: 'ความเป็นส่วนตัว',
    termsNav: 'เงื่อนไขการใช้งาน',
    refundNav: 'นโยบายการคืนเงิน',
    signIn: 'เข้าสู่ระบบ',
    signOut: 'ออกจากระบบ',
    accountNav: 'บัญชีของฉัน',
    membershipNav: 'สมาชิก',
    emailLabel: 'อีเมล',
    passwordLabel: 'รหัสผ่าน',
    loginTitle: 'เข้าสู่ระบบ',
    loginBody: 'เข้าสู่ระบบเพื่อดูคู่มือและคอร์สที่คุณเป็นเจ้าของ',
    loginError: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
    noAccount: 'ยังไม่มีบัญชี? สมัครได้ที่หน้าแรก',
    membershipTitle: 'สมาชิกแบบเข้าถึงทั้งหมด',
    membershipBody: 'เข้าถึงคอร์สและคลาสสดทั้งหมด รายเดือน ยกเลิกได้ทุกเมื่อ',
    membershipCta: 'เป็นสมาชิก',
    perMonth: '/เดือน',
    memberActive: 'คุณเป็นสมาชิกอยู่แล้ว ขอบคุณที่ร่วมเดินทางกับเรา',
    membershipPerks: ['เข้าถึงคอร์สทั้งหมด', 'เข้าร่วมคลาสสดและดูย้อนหลัง', 'เนื้อหาใหม่ต่อเนื่อง'],
    accountTitle: 'บัญชีของฉัน',
    yourLibrary: 'คลังของฉัน',
    accountEmpty: 'คุณยังไม่มีคู่มือหรือคอร์สที่ซื้อไว้',
    accountSignedOut: 'กรุณาเข้าสู่ระบบเพื่อดูบัญชีของคุณ',
    memberBadge: 'สมาชิก',
    notMember: 'ยังไม่ได้เป็นสมาชิก',
    contactNav: 'ติดต่อเรา',
    chatTitle: 'ช่วยเหลือ',
    chatGreeting: 'สวัสดีค่ะ มีอะไรให้เราช่วยไหมคะ ทิ้งข้อความไว้ได้เลย หรือทักเราทางช่องทางด้านล่างได้ทันที',
    chatPlaceholder: 'พิมพ์ข้อความ...',
    chatSend: 'ส่ง',
    callLabel: 'โทร',
    emailLabelShort: 'อีเมล',
    lineLabel: 'LINE',
    followUs: 'ติดตามเรา',
    ticketFormTitle: 'ส่งข้อความถึงเรา',
    ticketName: 'ชื่อ',
    ticketSubject: 'หัวข้อ',
    ticketMessage: 'ข้อความ',
    ticketSend: 'ส่งข้อความ',
    ticketSent: 'ส่งข้อความแล้ว ขอบคุณค่ะ เราจะติดต่อกลับโดยเร็ว',
    ticketErr: 'ส่งไม่สำเร็จ กรุณาลองใหม่',
    adminTitle: 'แดชบอร์ดผู้ดูแล',
    adminDenied: 'หน้านี้สำหรับผู้ดูแลระบบเท่านั้น',
    statViews: 'การเข้าชมทั้งหมด',
    statUnique: 'ผู้เข้าชม (ไม่ซ้ำ)',
    statToday: 'เข้าชมวันนี้',
    topPages: 'หน้าที่นิยม',
    recentVisits: 'การเข้าชมล่าสุด',
    ticketsHeading: 'ข้อความจากลูกค้า',
    colTime: 'เวลา',
    colPath: 'หน้า',
    colRef: 'ที่มา',
    coursesNav: 'คอร์ส',
    coursesTitle: 'คอร์สวิดีโอ',
    coursesBody: 'คอร์สวิดีโอสั้น ๆ ที่ทำตามได้จริง เรียนเมื่อไรก็ได้ตามจังหวะของคุณ',
    viewCourse: 'ดูคอร์ส',
    lessonsWord: 'บทเรียน',
    getCourse: 'ซื้อคอร์สนี้',
    joinToWatch: 'เป็นสมาชิกเพื่อดูทั้งหมด',
    lockedLesson: 'ปลดล็อกด้วยการซื้อคอร์สนี้หรือเป็นสมาชิก',
    previewBadge: 'ดูตัวอย่างได้',
    markComplete: 'ทำเครื่องหมายว่าเรียนจบ',
    completedWord: 'เรียนจบแล้ว',
    signInToTrack: 'เข้าสู่ระบบเพื่อบันทึกความคืบหน้า',
    openCourse: 'เปิดคอร์ส',
    backCourses: 'คอร์สทั้งหมด',
  },
  en: {
    nav: { home: 'Home', library: 'Library', article: 'Sample article' },
    heroEyebrow: 'WELLNESS PUBLICATION',
    heroTitle: 'Small habits for a longer healthspan.',
    heroBody:
      'KOVITAD.shop is a Thai-first wellness publication covering nutrition, sleep, movement, mindset, and healthy ageing with calm, evidence-informed guidance.',
    primaryCta: 'Start reading',
    secondaryCta: 'Browse library',
    topicsTitle: 'Start with the foundations that move the needle',
    topicsBody: 'No extremes. Choose one habit you can repeat, then build calmly from there.',
    featuredTitle: 'Featured guides',
    featuredBody: 'Digital guides for building a personal wellness system without inflated claims.',
    latestTitle: 'Latest articles',
    libraryTitle: 'Library',
    libraryBody: 'Articles and guides organised by topic so you can return, read, and apply.',
    articleTitle: 'A steadier sleep rhythm may make tomorrow feel lighter',
    articleDek:
      'Research suggests that consistent sleep timing may be linked to next-day energy, focus, and appetite regulation.',
    disclaimer:
      'KOVITAD shares general education and personal experience, not medical advice. Talk to your clinician before changing your health routine.',
    readGuide: 'Read the guide',
    readArticle: 'Read article',
    newsletterTitle: 'Receive calm wellness notes in your inbox',
    newsletterBody: 'A few times a month. Practical, readable, and never pressure-based.',
    email: 'Your email',
    subscribe: 'Subscribe',
    footer: 'A wellness and longevity publication for real life',
    getGuide: 'Get the guide',
    paymentsSoon: 'Payments are opening soon.',
    checkoutError: 'Could not start checkout. Please try again.',
    successEyebrow: 'Thank you',
    successTitle: 'Your order is complete',
    successBody: 'Your guide is ready. We have also emailed the download link to you.',
    successDownload: 'Download your guide',
    successPending: 'We are confirming your payment. If it is not ready, refresh in a moment — your download link is also on its way by email.',
    successError: 'We could not find this order. If you have paid, please check your email.',
    cancelTitle: 'Payment cancelled',
    cancelBody: 'You have not been charged. You can return to the guides whenever you are ready.',
    backHome: 'Back to home',
    backLibrary: 'Browse library',
    privacyNav: 'Privacy',
    termsNav: 'Terms',
    refundNav: 'Refunds',
    signIn: 'Sign in',
    signOut: 'Sign out',
    accountNav: 'My account',
    membershipNav: 'Membership',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    loginTitle: 'Sign in',
    loginBody: 'Sign in to see the guides and courses you own.',
    loginError: 'Invalid email or password',
    noAccount: "Don't have an account? Register on the home page.",
    membershipTitle: 'All-access membership',
    membershipBody: 'Unlock every course and live class, monthly. Cancel anytime.',
    membershipCta: 'Become a member',
    perMonth: '/month',
    memberActive: 'You are already a member. Thank you for being here.',
    membershipPerks: ['Every course, unlocked', 'Join live classes and watch the replays', 'New content, regularly'],
    accountTitle: 'My account',
    yourLibrary: 'Your library',
    accountEmpty: "You don't own any guides or courses yet.",
    accountSignedOut: 'Please sign in to see your account.',
    memberBadge: 'Member',
    notMember: 'Not a member',
    contactNav: 'Contact',
    chatTitle: 'Support',
    chatGreeting: 'Hi! How can we help? Leave a message here, or reach us directly through the buttons below.',
    chatPlaceholder: 'Type a message…',
    chatSend: 'Send',
    callLabel: 'Call',
    emailLabelShort: 'Email',
    lineLabel: 'LINE',
    followUs: 'Follow us',
    ticketFormTitle: 'Send us a message',
    ticketName: 'Name',
    ticketSubject: 'Subject',
    ticketMessage: 'Message',
    ticketSend: 'Send message',
    ticketSent: 'Message sent. Thank you — we will get back to you soon.',
    ticketErr: 'Could not send. Please try again.',
    adminTitle: 'Admin dashboard',
    adminDenied: 'This page is for the site administrator only.',
    statViews: 'Total views',
    statUnique: 'Unique visitors',
    statToday: 'Views today',
    topPages: 'Top pages',
    recentVisits: 'Recent visits',
    ticketsHeading: 'Customer messages',
    colTime: 'Time',
    colPath: 'Page',
    colRef: 'Referrer',
    coursesNav: 'Courses',
    coursesTitle: 'Video courses',
    coursesBody: 'Short, practical video courses you can follow at your own pace, anytime.',
    viewCourse: 'View course',
    lessonsWord: 'lessons',
    getCourse: 'Get this course',
    joinToWatch: 'Join membership to watch all',
    lockedLesson: 'Unlock by buying this course or joining membership',
    previewBadge: 'Free preview',
    markComplete: 'Mark complete',
    completedWord: 'Completed',
    signInToTrack: 'Sign in to save your progress',
    openCourse: 'Open course',
    backCourses: 'All courses',
  },
};


const legal = {
  privacy: {
    th: {
      eyebrow: 'ความเป็นส่วนตัว',
      title: 'นโยบายความเป็นส่วนตัว',
      body: [
        'KOVITAD.shop เก็บข้อมูลเท่าที่จำเป็นในการให้บริการ ได้แก่ อีเมล ชื่อ และรายละเอียดคำสั่งซื้อ เพื่อส่งมอบคู่มือดิจิทัลและติดต่อคุณเกี่ยวกับคำสั่งซื้อ',
        'การชำระเงินดำเนินการโดย Stripe เราไม่จัดเก็บหมายเลขบัตรของคุณบนเซิร์ฟเวอร์ของเรา',
        'หากคุณสมัครรับจดหมายข่าว เราจะใช้อีเมลของคุณเพื่อส่งเนื้อหาเป็นครั้งคราวเท่านั้น และคุณสามารถยกเลิกได้ทุกเมื่อ',
        'เราบันทึกสถิติการเข้าชมเว็บไซต์ (หน้าที่เปิด เวลา และข้อมูลเบราว์เซอร์โดยประมาณ) เพื่อปรับปรุงบริการ ไม่ใช่เพื่อระบุตัวตนของคุณ',
        'ต้องการให้ลบข้อมูลของคุณ ติดต่อ kovitad@gmail.com',
      ],
    },
    en: {
      eyebrow: 'Privacy',
      title: 'Privacy policy',
      body: [
        'KOVITAD.shop collects only what is needed to run the service: your email, name, and order details, so we can deliver your digital guides and contact you about your order.',
        'Payments are processed by Stripe. We do not store your card number on our servers.',
        'If you subscribe to the newsletter, we use your email only to send occasional content, and you can unsubscribe at any time.',
        'We record basic site analytics (pages viewed, time, and approximate browser info) to improve the service — not to identify you personally.',
        'To request deletion of your data, contact kovitad@gmail.com.',
      ],
    },
  },
  terms: {
    th: {
      eyebrow: 'เงื่อนไขการใช้งาน',
      title: 'เงื่อนไขการใช้งาน',
      body: [
        'เนื้อหาและคู่มือของ KOVITAD.shop เป็นการให้ความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ ควรปรึกษาแพทย์ก่อนเปลี่ยนแปลงกิจวัตรสุขภาพ',
        'เมื่อซื้อคู่มือดิจิทัล คุณได้รับสิทธิ์ใช้งานส่วนบุคคล ไม่ใช่เพื่อการจำหน่ายต่อหรือเผยแพร่ซ้ำ',
        'เราอาจปรับปรุงเนื้อหาและราคาเป็นครั้งคราว การเปลี่ยนแปลงจะมีผลกับคำสั่งซื้อใหม่เท่านั้น',
      ],
    },
    en: {
      eyebrow: 'Terms',
      title: 'Terms of use',
      body: [
        'KOVITAD.shop content and guides are general education and personal experience, not medical advice. Talk to your clinician before changing your health routine.',
        'When you buy a digital guide you receive a personal-use licence. It is not for resale or redistribution.',
        'We may update content and pricing from time to time. Changes apply to new orders only.',
      ],
    },
  },
  refund: {
    th: {
      eyebrow: 'นโยบายการคืนเงิน',
      title: 'นโยบายการคืนเงิน',
      body: [
        'คู่มือดิจิทัลเป็นสินค้าที่ส่งมอบทันที โดยทั่วไปจึงไม่สามารถคืนเงินได้หลังจากดาวน์โหลดแล้ว',
        'หากลิงก์ดาวน์โหลดมีปัญหา ไฟล์เสียหาย หรือคุณถูกเรียกเก็บเงินผิดพลาด กรุณาติดต่อเราภายใน 14 วัน เรายินดีช่วยแก้ไขหรือคืนเงินตามความเหมาะสม',
        'ติดต่อ kovitad@gmail.com พร้อมอีเมลที่ใช้สั่งซื้อ',
      ],
    },
    en: {
      eyebrow: 'Refunds',
      title: 'Refund policy',
      body: [
        'Digital guides are delivered instantly, so they are generally non-refundable once downloaded.',
        'If a download link fails, a file is corrupted, or you were charged in error, contact us within 14 days and we will gladly help or refund where appropriate.',
        'Reach us at kovitad@gmail.com with the email you used to order.',
      ],
    },
  },
};

function getRoute(): Route {
  const path = window.location.pathname;
  if (ROUTES.includes(path)) return path;
  if (path.startsWith('/courses/')) return path; // dynamic course slug
  return '/';
}

function App() {
  const [route, setRoute] = React.useState<Route>(getRoute());
  const [lang, setLang] = React.useState<Lang>(() => (localStorage.getItem('kovitad-lang') as Lang) || 'th');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState<User>(null);

  const refreshUser = React.useCallback(async () => {
    try {
      const res = await fetch('/api/me');
      setUser(res.ok ? await res.json() : null);
    } catch {
      setUser(null);
    }
  }, []);

  React.useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('kovitad-lang', lang);
  }, [lang]);

  React.useEffect(() => { refreshUser(); }, [refreshUser]);

  // Record a page view on first load and on every in-app navigation.
  React.useEffect(() => { track(getRoute()); }, []);

  const nav = (next: Route) => {
    history.pushState(null, '', next);
    setRoute(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    track(next);
  };

  return (
    <CartProvider>
      <Header route={route} lang={lang} setLang={setLang} nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={user} />
      <main>
        {route === '/' && <Home lang={lang} nav={nav} />}
        {route === '/shop' && <Shop lang={lang} nav={nav} />}
        {route === '/about' && <About lang={lang} nav={nav} />}
        {route === '/library' && <Library lang={lang} nav={nav} />}
        {route === '/courses' && <Courses lang={lang} nav={nav} />}
        {route.startsWith('/courses/') && <CoursePlayer slug={route.slice('/courses/'.length)} lang={lang} nav={nav} user={user} />}
        {route === '/articles/sleep-rhythm' && <Article lang={lang} nav={nav} />}
        {route === '/login' && <Login lang={lang} nav={nav} onAuth={refreshUser} />}
        {route === '/membership' && <Membership lang={lang} nav={nav} user={user} />}
        {route === '/account' && <Account lang={lang} nav={nav} user={user} onAuth={refreshUser} />}
        {route === '/contact' && <Contact lang={lang} />}
        {route === '/admin' && <Admin lang={lang} nav={nav} user={user} />}
        {route === '/order/success' && <OrderSuccess lang={lang} nav={nav} />}
        {route === '/order/cancelled' && <OrderCancelled lang={lang} nav={nav} />}
        {(route === '/privacy' || route === '/terms' || route === '/refund') && (
          <LegalPage kind={route.slice(1) as LegalKind} lang={lang} />
        )}
      </main>
      <Footer lang={lang} nav={nav} />
      <CartDrawer lang={lang} nav={nav} />
      <ChatWidget lang={lang} />
    </CartProvider>
  );
}

// Fire-and-forget page-view beacon.
function track(path: Route) {
  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path }),
  }).catch(() => {});
}

function Wordmark() {
  return <span className="wordmark">KOVITAD<span>.shop</span></span>;
}

function Header({ route, lang, setLang, nav, menuOpen, setMenuOpen, user }: {
  route: Route; lang: Lang; setLang: (l: Lang) => void; nav: (r: Route) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void; user: User;
}) {
  const t = copy[lang];
  const b = brand[lang];
  const cart = useCart();
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => nav('/')} aria-label="KOVITAD.shop home"><Wordmark /></button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {b.nav.map(([href, label], i) => (
          <button key={label + i} className={route === href && href !== '/shop' ? 'active' : ''} onClick={() => nav(href)}>{label}</button>
        ))}
        <div className="nav-social">
          <a href={SUPPORT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
          <a href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          <a href={SUPPORT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTok size={18} /></a>
        </div>
      </nav>
      <div className="header-actions">
        <a className="btn-follow k-shine" href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer">{b.followCta}</a>
        <button className="icon-btn cart-btn" onClick={() => cart.setOpen(true)} aria-label={b.cartTitle}>
          <ShoppingCart size={20} />{cart.items.length > 0 && <span className="cart-count">{cart.items.length}</span>}
        </button>
        <button className="icon-btn" onClick={() => nav(user ? '/account' : '/login')} aria-label={user ? t.accountNav : t.signIn}><User size={20} /></button>
        <button className="lang-toggle" onClick={() => setLang(lang === 'th' ? 'en' : 'th')}>{lang === 'th' ? 'EN' : 'ไทย'}</button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

type CatalogItem = {
  id: string; slug?: string; type: string; category: string; format: string;
  price: string; promoPrice?: string; priceAmount: number;
  badges?: { isNew?: boolean; isBestseller?: boolean; instant?: boolean };
  tags?: string[]; title: { th: string; en: string }; description: { th: string; en: string }; lessonCount?: number;
};
type Category = { key: string; th: string; en: string };

function Home({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  return (
    <>
      <Hero lang={lang} nav={nav} />
      <CatalogSection lang={lang} nav={nav} limit={6} heading />
      <FeaturedProduct lang={lang} nav={nav} />
      <ContentSection lang={lang} />
      <FounderTeaser lang={lang} nav={nav} />
      <NewsletterBrand lang={lang} />
    </>
  );
}

function Hero({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  return (
    <section className="hero-new">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="k-eyebrow hero-eyebrow">KOVITAD.SHOP</p>
          <h1 className="hero-title">{b.heroTitle}</h1>
          <p className="hero-lede">{b.heroBody}</p>
          <div className="hero-actions">
            <button className="button primary k-shine" onClick={() => nav('/shop')}>{b.heroPrimary}<ArrowRight size={16} /></button>
            <button className="button ghost" onClick={() => nav('/about')}>{b.heroSecondary}</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-panel k-shine">
            <span className="hero-mark">K</span>
            <div className="hero-panel-foot"><Sparkles size={16} /><span>Longevity · AI · Finance · Growth</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, lang, nav }: { item: CatalogItem; lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  const cart = useCart();
  const [added, setAdded] = React.useState(false);
  const title = lang === 'th' ? item.title.th : item.title.en;
  const isCourse = item.type === 'course';
  const add = () => {
    cart.add({ id: item.id, title, price: item.promoPrice || item.price, amount: item.priceAmount });
    setAdded(true);
    cart.setOpen(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <article className="product-card">
      <div className="product-cover">
        <span className="cover-mark">{title.slice(0, 1)}</span>
        <div className="product-badges">
          {item.badges?.isNew && <span className="badge new">{b.badgeNew}</span>}
          {item.badges?.isBestseller && <span className="badge best">{b.badgeBest}</span>}
        </div>
      </div>
      <div className="product-body">
        <p className="product-cat">{item.category}</p>
        <h3>{title}</h3>
        <p className="product-desc">{lang === 'th' ? item.description.th : item.description.en}</p>
        <div className="product-tags">
          <span className="product-format"><FileText size={13} />{item.format}</span>
          {item.badges?.instant && <span className="product-instant"><Download size={13} />{b.instant}</span>}
        </div>
        <div className="product-foot">
          <div className="product-price">
            {item.promoPrice
              ? <><span className="price-now">{item.promoPrice}</span><span className="price-was">{item.price}</span></>
              : <span className="price-now">{item.price}</span>}
          </div>
          <div className="product-cta">
            {isCourse
              ? <button className="btn-detail" onClick={() => nav(`/courses/${item.slug || item.id}`)}>{b.detail}</button>
              : <button className="btn-detail" onClick={add}>{added ? b.added : b.addToCart}</button>}
            <button className="btn-cart" onClick={add} aria-label={b.addToCart}>{added ? <Check size={16} /> : <Plus size={16} />}</button>
          </div>
        </div>
      </div>
    </article>
  );
}

function CatalogSection({ lang, nav, limit, heading }: { lang: Lang; nav: (r: Route) => void; limit?: number; heading?: boolean }) {
  const b = brand[lang];
  const [items, setItems] = React.useState<CatalogItem[]>([]);
  const [cats, setCats] = React.useState<Category[]>([]);
  const [active, setActive] = React.useState('all');
  React.useEffect(() => {
    fetch('/api/catalog').then((r) => r.json()).then((d) => setItems(Array.isArray(d) ? d : [])).catch(() => {});
    fetch('/api/categories').then((r) => r.json()).then((d) => setCats(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);
  const filtered = active === 'all' ? items : items.filter((i) => (i.tags || []).includes(active));
  const shown = limit ? filtered.slice(0, limit) : filtered;
  return (
    <section className="section container catalog">
      {heading && (
        <div className="catalog-head">
          <h2>{b.catalogTitle}</h2>
          <p className="lede">{b.catalogBody}</p>
        </div>
      )}
      <div className="category-bar" role="tablist">
        {cats.map((c) => (
          <button key={c.key} className={`cat-tab${active === c.key ? ' active' : ''}`} onClick={() => setActive(c.key)}>
            {lang === 'th' ? c.th : c.en}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {shown.map((it) => <ProductCard key={it.id} item={it} lang={lang} nav={nav} />)}
      </div>
      {limit && filtered.length > limit && (
        <div className="catalog-more">
          <button className="button secondary" onClick={() => nav('/shop')}>{b.heroPrimary}<ArrowRight size={16} /></button>
        </div>
      )}
    </section>
  );
}

function FeaturedProduct({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  const cart = useCart();
  const buy = () => {
    cart.add({ id: 'longevity-starter', title: b.featuredTitle, price: '฿290', amount: 29000 });
    cart.setOpen(true);
  };
  return (
    <section className="featured">
      <div className="featured-grid container">
        <div className="featured-visual k-shine">
          <div className="ebook-mock"><span>Longevity</span><em>คู่มือเริ่มต้น</em></div>
        </div>
        <div className="featured-copy">
          <p className="k-eyebrow">{b.featuredEyebrow}</p>
          <h2>{b.featuredTitle}</h2>
          <p>{b.featuredBody}</p>
          <div className="hero-actions">
            <button className="button primary k-shine" onClick={buy}>{b.featuredDetail}</button>
            <button className="button ghost" onClick={() => nav('/articles/sleep-rhythm')}>{b.featuredPreview}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSection({ lang }: { lang: Lang }) {
  const b = brand[lang];
  const cards = [
    { platform: 'YouTube', url: SUPPORT.youtube, icon: <Youtube size={22} />, label: lang === 'th' ? 'วิดีโอใหม่ล่าสุด' : 'Latest videos' },
    { platform: 'TikTok', url: SUPPORT.tiktok, icon: <TikTok size={22} />, label: lang === 'th' ? 'คอนเทนต์สั้น' : 'Short content' },
    { platform: 'Facebook', url: SUPPORT.facebook, icon: <Facebook size={22} />, label: lang === 'th' ? 'โพสต์ที่เลือกไว้' : 'Selected posts' },
  ];
  return (
    <section className="section container learn">
      <div className="catalog-head">
        <h2>{b.learnTitle}</h2>
        <p className="lede">{b.learnBody}</p>
      </div>
      <div className="learn-grid">
        {cards.map((c) => (
          <a className="learn-card k-shine" key={c.platform} href={c.url} target="_blank" rel="noopener noreferrer">
            <div className="learn-thumb">{c.icon}</div>
            <div className="learn-meta"><span className="learn-platform">{b.watchOn} {c.platform}</span><strong>{c.label}</strong></div>
            <ArrowRight size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}

function FounderTeaser({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  return (
    <section className="founder">
      <div className="founder-grid container">
        <div className="founder-portrait"><span>KJ</span></div>
        <div className="founder-copy">
          <p className="k-eyebrow">{b.founderRole}</p>
          <h2>{b.founderHi}</h2>
          <p className="founder-text">{b.founderText}</p>
          <div className="founder-actions">
            <a className="button primary" href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer">{b.followYouTube}</a>
            <a className="button ghost" href={SUPPORT.facebook} target="_blank" rel="noopener noreferrer">{b.followFacebook}</a>
            <a className="button ghost" href={SUPPORT.tiktok} target="_blank" rel="noopener noreferrer">{b.followTikTok}</a>
          </div>
          <button className="text-link" onClick={() => nav('/about')}>{b.aboutTitle}<ArrowRight size={15} /></button>
        </div>
      </div>
    </section>
  );
}

function NewsletterBrand({ lang }: { lang: Lang }) {
  const b = brand[lang];
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [note, setNote] = React.useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setNote(b.consentRequired); return; }
    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }),
    });
    const data = await res.json().catch(() => ({}));
    setNote(res.ok ? b.subscribed : (data.error || 'Error'));
  };
  return (
    <section className="newsletter-brand">
      <div className="container newsletter-inner">
        <div className="newsletter-copy">
          <p className="k-eyebrow">KOVITAD.SHOP</p>
          <h2>{b.newsletterTitle}</h2>
          <p>{b.newsletterBody}</p>
        </div>
        <form className="newsletter-form" onSubmit={submit}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={b.nameField} aria-label={b.nameField} />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={b.emailField} aria-label={b.emailField} />
          <label className="consent"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /><span>{b.consent}</span></label>
          <button className="button primary k-shine" type="submit">{b.subscribe}</button>
          <span className="form-note">{note}</span>
        </form>
      </div>
    </section>
  );
}

function Shop({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  return (
    <section className="page">
      <div className="container shop-head">
        <p className="k-eyebrow">{b.catalogTitle}</p>
        <h1>{b.catalogTitle}</h1>
        <p className="lede">{b.catalogBody}</p>
      </div>
      <CatalogSection lang={lang} nav={nav} />
    </section>
  );
}

function About({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  return (
    <section className="page container about">
      <p className="k-eyebrow">{b.aboutTitle}</p>
      <h1>{b.founderHi}</h1>
      <p className="about-role">{b.founderRole}</p>
      <div className="founder-portrait large"><span>KJ</span></div>
      <p className="founder-text about-text">{b.founderText}</p>
      <div className="founder-actions">
        <a className="button primary" href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer">{b.followYouTube}</a>
        <a className="button ghost" href={SUPPORT.facebook} target="_blank" rel="noopener noreferrer">{b.followFacebook}</a>
        <a className="button ghost" href={SUPPORT.tiktok} target="_blank" rel="noopener noreferrer">{b.followTikTok}</a>
      </div>
      <aside className="disclaimer"><Check size={18} /><p>{b.disclaimer}</p></aside>
    </section>
  );
}

function CartDrawer({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  const cart = useCart();
  const [note, setNote] = React.useState('');
  const total = cart.items.reduce((s, i) => s + i.amount, 0);
  const checkout = async () => {
    setNote('');
    const res = await fetch('/api/checkout/cart', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: cart.items.map((i) => ({ id: i.id })) }),
    });
    if (res.status === 503) { setNote(lang === 'th' ? 'ระบบชำระเงินกำลังจะเปิดใช้งานเร็ว ๆ นี้' : 'Payments are opening soon.'); return; }
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.url) { window.location.href = data.url; return; }
    setNote(data.error || 'Error');
  };
  if (!cart.open) return null;
  return (
    <div className="cart-overlay" onClick={() => cart.setOpen(false)}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head"><span>{b.cartTitle}</span><button onClick={() => cart.setOpen(false)} aria-label="Close"><X size={20} /></button></div>
        <div className="cart-body">
          {cart.items.length === 0 && <p className="inline-note">{b.cartEmpty}</p>}
          {cart.items.map((i) => (
            <div className="cart-item" key={i.id}>
              <div><strong>{i.title}</strong><span>{i.price}</span></div>
              <button onClick={() => cart.remove(i.id)} aria-label={b.cartRemove}><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
        {cart.items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-total"><span>{b.cartTotal}</span><strong>฿{(total / 100).toLocaleString()}</strong></div>
            <button className="button primary k-shine" onClick={checkout}>{b.cartCheckout}</button>
            {note && <p className="inline-note">{note}</p>}
          </div>
        )}
      </aside>
    </div>
  );
}

function Library({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  const b = brand[lang];
  return (
    <section className="page container">
      <p className="k-eyebrow">{t.nav.article}</p>
      <h1>{lang === 'th' ? 'บทความและคู่มือ' : 'Articles and guides'}</h1>
      <p className="lede">{lang === 'th' ? 'อ่านแนวคิดและวิธีลงมือทำที่หยิบไปใช้ได้จริง' : 'Practical ideas and how-tos you can apply.'}</p>
      <div className="article-card feature-card">
        <BookOpen size={22} />
        <div>
          <p className="k-eyebrow">{lang === 'th' ? 'บทความ' : 'Article'}</p>
          <h3>{t.articleTitle}</h3>
          <p>{t.articleDek}</p>
          <button className="text-link" onClick={() => nav('/articles/sleep-rhythm')}>{t.readArticle}<ArrowRight size={15} /></button>
        </div>
      </div>
      <aside className="disclaimer"><Check size={18} /><p>{b.disclaimer}</p></aside>
    </section>
  );
}

function Article({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  return (
    <article className="article container">
      <button className="text-link back" onClick={() => nav('/library')}>← {t.libraryTitle}</button>
      <p className="k-eyebrow">SLEEP · 6 MIN READ</p>
      <h1>{t.articleTitle}</h1>
      <p className="lede">{t.articleDek}</p>
      <hr className="k-divider" />
      {lang === 'th' ? <ThaiArticle /> : <EnglishArticle />}
      <aside className="disclaimer"><Check size={18} /><p>{t.disclaimer}</p></aside>
      <Newsletter lang={lang} compact />
    </article>
  );
}

function ThaiArticle() {
  return <div className="article-body">
    <p>การนอนที่ดีไม่ได้เริ่มเฉพาะตอนปิดไฟ หลายครั้งเริ่มตั้งแต่เวลาตื่น แสงเช้า อาหารมื้อเย็น และวิธีลดความเร็วของสมองก่อนเข้านอน</p>
    <h2>เริ่มจากเวลาตื่นที่ใกล้เคียงกัน</h2>
    <p>ถ้าชีวิตคุณยังนอนไม่ตรงเวลา ลองเริ่มจากเวลาตื่นก่อน งานวิจัยด้านจังหวะชีวภาพชี้ว่าเวลาตื่นที่สม่ำเสมออาจช่วยให้ร่างกายคาดเดารอบพักผ่อนได้ดีขึ้น</p>
    <blockquote>เป้าหมายไม่ใช่การนอนให้สมบูรณ์แบบ แต่คือการทำให้ระบบพักผ่อนง่ายพอที่จะทำซ้ำได้</blockquote>
    <h2>สร้างพิธีกรรมเย็นที่สั้น</h2>
    <p>เลือกกิจกรรม 2–3 อย่าง เช่น ลดแสง อาบน้ำอุ่น อ่านหนังสือเบา ๆ หรือจดสิ่งที่ต้องทำพรุ่งนี้ จุดสำคัญคือทำให้เหมือนเดิมมากพอที่ร่างกายเริ่มจำได้</p>
  </div>;
}

function EnglishArticle() {
  return <div className="article-body">
    <p>Better sleep does not begin only when the lights go off. It often starts with wake time, morning light, dinner timing, and how you slow the mind before bed.</p>
    <h2>Start with a consistent wake time</h2>
    <p>If bedtime is hard to control, begin with wake time. Circadian research suggests that a steadier wake time may help the body anticipate rest more reliably.</p>
    <blockquote>The goal is not perfect sleep. The goal is a rest system simple enough to repeat.</blockquote>
    <h2>Build a short evening ritual</h2>
    <p>Choose two or three cues: dim lights, take a warm shower, read something light, or write down tomorrow’s tasks. Repetition helps the body recognise the transition.</p>
  </div>;
}

function Newsletter({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = copy[lang];
  const [email, setEmail] = React.useState('');
  const [note, setNote] = React.useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/newsletter/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    const data = await res.json().catch(() => ({}));
    setNote(res.ok ? (lang === 'th' ? 'สมัครรับข่าวสารแล้ว' : 'You are subscribed.') : (data.error || 'Something went wrong'));
  };
  return <section className={compact ? 'newsletter compact' : 'newsletter'}><div><p className="k-eyebrow">NEWSLETTER</p><h2>{t.newsletterTitle}</h2><p>{t.newsletterBody}</p></div><form onSubmit={submit}><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} aria-label={t.email} /><button className="button primary" type="submit">{t.subscribe}</button><span className="form-note">{note}</span></form></section>;
}

function RegisterSection({ lang }: { lang: Lang }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [note, setNote] = React.useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
    const data = await res.json().catch(() => ({}));
    setNote(res.ok ? (lang === 'th' ? 'สร้างบัญชีแล้ว และสมัครรับข่าวสารให้เรียบร้อย' : 'Account created and newsletter subscription added.') : (data.error || 'Something went wrong'));
  };
  return <section className="register-section"><p className="k-eyebrow">MEMBER ACCESS</p><h2>{lang === 'th' ? 'สมัครสมาชิกแบบเรียบง่าย' : 'Simple member registration'}</h2><p>{lang === 'th' ? 'สร้างบัญชีเพื่อเตรียมรับคอนเทนต์และคู่มือดิจิทัลในระยะถัดไป' : 'Create an account for future content access and digital guides.'}</p><form className="register-form" onSubmit={submit}><input value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === 'th' ? 'ชื่อ' : 'Name'} /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={lang === 'th' ? 'อีเมล' : 'Email'} /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={lang === 'th' ? 'รหัสผ่านอย่างน้อย 8 ตัวอักษร' : 'Password, at least 8 characters'} /><button className="button primary" type="submit">{lang === 'th' ? 'สร้างบัญชี' : 'Create account'}</button><span className="inline-note">{note}</span></form></section>;
}

function OrderSuccess({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  const [state, setState] = React.useState<'loading' | 'paid' | 'pending' | 'error'>('loading');
  const [downloadUrl, setDownloadUrl] = React.useState('');

  React.useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    if (!sessionId) { setState('error'); return; }
    let cancelled = false;
    let tries = 0;
    const poll = async () => {
      tries += 1;
      try {
        const res = await fetch(`/api/orders/session/${encodeURIComponent(sessionId)}`);
        if (!res.ok) { if (tries < 8 && !cancelled) setTimeout(poll, 1500); else setState('error'); return; }
        const data = await res.json();
        if (cancelled) return;
        if (data.status === 'paid') { setDownloadUrl(data.downloadUrl || ''); setState('paid'); }
        else if (tries < 8) setTimeout(poll, 1500);
        else setState('pending');
      } catch {
        if (tries < 8 && !cancelled) setTimeout(poll, 1500); else setState('error');
      }
    };
    poll();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="page container order-status">
      <p className="k-eyebrow">{t.successEyebrow}</p>
      <h1>{state === 'error' ? t.successError : state === 'pending' ? t.successPending : t.successTitle}</h1>
      {state === 'loading' && <p className="lede">…</p>}
      {state === 'paid' && (
        <>
          <p className="lede">{t.successBody}</p>
          {downloadUrl && <a className="button primary k-shine" href={downloadUrl}>{t.successDownload}</a>}
        </>
      )}
      <div className="order-actions">
        <button className="button secondary" onClick={() => nav('/library')}>{t.backLibrary}</button>
        <button className="text-link" onClick={() => nav('/')}>{t.backHome}</button>
      </div>
      <aside className="disclaimer"><Check size={18} /><p>{t.disclaimer}</p></aside>
    </section>
  );
}

function OrderCancelled({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  return (
    <section className="page container order-status">
      <p className="k-eyebrow">KOVITAD.shop</p>
      <h1>{t.cancelTitle}</h1>
      <p className="lede">{t.cancelBody}</p>
      <div className="order-actions">
        <button className="button primary" onClick={() => nav('/library')}>{t.backLibrary}</button>
        <button className="text-link" onClick={() => nav('/')}>{t.backHome}</button>
      </div>
    </section>
  );
}

function Login({ lang, nav, onAuth }: { lang: Lang; nav: (r: Route) => void; onAuth: () => Promise<void> | void }) {
  const t = copy[lang];
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [note, setNote] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNote('');
    setBusy(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { await onAuth(); nav('/account'); return; }
      setNote(data.error || t.loginError);
    } catch {
      setNote(t.loginError);
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="page container auth-page">
      <p className="k-eyebrow">{t.loginTitle}</p>
      <h1>{t.loginTitle}</h1>
      <p className="lede">{t.loginBody}</p>
      <form className="register-form auth-form" onSubmit={submit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailLabel} aria-label={t.emailLabel} autoComplete="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.passwordLabel} aria-label={t.passwordLabel} autoComplete="current-password" />
        <button className="button primary" type="submit" disabled={busy}>{t.signIn}</button>
        <span className="inline-note">{note}</span>
      </form>
      <button className="text-link" onClick={() => nav('/')}>{t.noAccount}</button>
    </section>
  );
}

function Membership({ lang, nav, user }: { lang: Lang; nav: (r: Route) => void; user: User }) {
  const t = copy[lang];
  const [price, setPrice] = React.useState('฿199');
  const [note, setNote] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  React.useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((list) => {
        const m = Array.isArray(list) ? list.find((x: { id: string }) => x.id === 'membership') : null;
        if (m?.price) setPrice(m.price);
      })
      .catch(() => {});
  }, []);
  const join = async () => {
    setNote('');
    setBusy(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (res.status === 503) { setNote(t.paymentsSoon); return; }
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) { window.location.href = data.url; return; }
      setNote(data.error || t.checkoutError);
    } catch {
      setNote(t.checkoutError);
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="page container membership">
      <p className="k-eyebrow">{t.membershipNav}</p>
      <h1>{t.membershipTitle}</h1>
      <p className="lede">{t.membershipBody}</p>
      <div className="pricing-card">
        <div className="price"><strong>{price}</strong><span>{t.perMonth}</span></div>
        <ul>{t.membershipPerks.map((perk, i) => <li key={i}><Check size={16} />{perk}</li>)}</ul>
        {user?.member
          ? <p className="inline-note">{t.memberActive}</p>
          : <button className="button primary k-shine" onClick={join} disabled={busy}>{t.membershipCta}</button>}
        {note && <p className="inline-note">{note}</p>}
      </div>
      <aside className="disclaimer"><Check size={18} /><p>{t.disclaimer}</p></aside>
    </section>
  );
}

function Account({ lang, nav, user, onAuth }: { lang: Lang; nav: (r: Route) => void; user: User; onAuth: () => Promise<void> | void }) {
  const t = copy[lang];
  type Owned = { id: string; product: { id: string; slug?: string; type?: string; title?: { th: string; en: string } }; downloadUrl: string | null };
  const [items, setItems] = React.useState<Owned[]>([]);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!user) { setLoaded(true); return; }
    fetch('/api/account/orders')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => { setItems(Array.isArray(d) ? d : []); setLoaded(true); })
      .catch(() => setLoaded(true));
  }, [user]);
  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    await onAuth();
    nav('/');
  };
  if (!user) {
    return (
      <section className="page container">
        <p className="k-eyebrow">{t.accountTitle}</p>
        <h1>{t.accountTitle}</h1>
        <p className="lede">{t.accountSignedOut}</p>
        <button className="button primary" onClick={() => nav('/login')}>{t.signIn}</button>
      </section>
    );
  }
  return (
    <section className="page container account">
      <p className="k-eyebrow">{t.accountTitle}</p>
      <h1>{user.name}</h1>
      <p className="lede">{user.email} · <span className={user.member ? 'badge member' : 'badge'}>{user.member ? t.memberBadge : t.notMember}</span></p>
      <div className="order-actions">
        {!user.member && <button className="button secondary" onClick={() => nav('/membership')}>{t.membershipCta}</button>}
        <button className="text-link" onClick={logout}>{t.signOut}</button>
      </div>
      <h2 className="library-heading">{t.yourLibrary}</h2>
      {loaded && items.length === 0 && <p className="inline-note">{t.accountEmpty}</p>}
      <div className="guide-grid">
        {items.map((it) => (
          <article className="guide-card" key={it.id}>
            <p className="k-eyebrow">{it.product?.type || 'guide'}</p>
            <h3>{it.product?.title ? (lang === 'th' ? it.product.title.th : it.product.title.en) : it.product.id}</h3>
            <div>
              {it.product?.type === 'course'
                ? <button className="text-link" onClick={() => nav(`/courses/${it.product.slug || it.product.id}`)}>{t.openCourse}<ArrowRight size={15} /></button>
                : it.downloadUrl
                  ? <a className="text-link" href={it.downloadUrl}>{t.successDownload}<ArrowRight size={15} /></a>
                  : <span />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type CourseCard = { id: string; slug: string; topic: string; price: string; title: { th: string; en: string }; description: { th: string; en: string }; lessonCount: number };
type Lesson = { id: string; title: { th: string; en: string }; duration: string; preview: boolean; locked: boolean; videoUrl: string | null; completed: boolean };
type CourseDetail = { id: string; slug: string; topic: string; price: string; title: { th: string; en: string }; description: { th: string; en: string }; entitled: boolean; lessons: Lesson[] };

function Courses({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  const [list, setList] = React.useState<CourseCard[]>([]);
  React.useEffect(() => {
    fetch('/api/courses').then((r) => r.json()).then((d) => setList(Array.isArray(d) ? d : [])).catch(() => {});
  }, []);
  return (
    <section className="page container">
      <p className="k-eyebrow">{t.coursesNav}</p>
      <h1>{t.coursesTitle}</h1>
      <p className="lede">{t.coursesBody}</p>
      <div className="guide-grid">
        {list.map((c) => (
          <article className="guide-card k-shine" key={c.id}>
            <p className="k-eyebrow">{c.topic}</p>
            <h3>{lang === 'th' ? c.title.th : c.title.en}</h3>
            <p>{lang === 'th' ? c.description.th : c.description.en}</p>
            <p className="course-meta">{c.lessonCount} {t.lessonsWord}</p>
            <div><strong>{c.price}</strong><button onClick={() => nav(`/courses/${c.slug}`)}>{t.viewCourse}</button></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoursePlayer({ slug, lang, nav, user }: { slug: string; lang: Lang; nav: (r: Route) => void; user: User }) {
  const t = copy[lang];
  const [course, setCourse] = React.useState<CourseDetail | null>(null);
  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState<Set<string>>(new Set());
  const [note, setNote] = React.useState('');
  React.useEffect(() => {
    fetch(`/api/courses/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((c: CourseDetail | null) => {
        setCourse(c);
        if (c) setCompleted(new Set(c.lessons.filter((l) => l.completed).map((l) => l.id)));
      })
      .catch(() => {});
  }, [slug, user]);

  if (!course) {
    return <section className="page container"><p className="lede">…</p></section>;
  }
  const lesson = course.lessons[active];
  const buy = async () => {
    setNote('');
    const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: course.id }) });
    if (res.status === 503) { setNote(t.paymentsSoon); return; }
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.url) { window.location.href = data.url; return; }
    setNote(data.error || t.checkoutError);
  };
  const markDone = async () => {
    if (!user) { setNote(t.signInToTrack); return; }
    await fetch('/api/progress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ lessonId: lesson.id }) });
    setCompleted(new Set([...completed, lesson.id]));
  };
  return (
    <section className="page container course-player">
      <button className="text-link back" onClick={() => nav('/courses')}>← {t.backCourses}</button>
      <p className="k-eyebrow">{course.topic}</p>
      <h1>{lang === 'th' ? course.title.th : course.title.en}</h1>
      <div className="course-layout">
        <div className="course-main">
          {lesson.videoUrl
            ? <video className="course-video" src={lesson.videoUrl} controls />
            : (
              <div className="course-locked">
                <Lock size={26} />
                <p>{t.lockedLesson}</p>
                <div className="contact-actions">
                  <button className="button primary k-shine" onClick={buy}>{t.getCourse} · {course.price}</button>
                  <button className="button secondary" onClick={() => nav('/membership')}>{t.joinToWatch}</button>
                </div>
              </div>
            )}
          <h2 className="lesson-title">{lang === 'th' ? lesson.title.th : lesson.title.en}</h2>
          {lesson.videoUrl && (
            completed.has(lesson.id)
              ? <p className="inline-note done"><Check size={16} /> {t.completedWord}</p>
              : <button className="button secondary" onClick={markDone}>{t.markComplete}</button>
          )}
          {note && <p className="inline-note">{note}</p>}
        </div>
        <aside className="course-lessons">
          {course.lessons.map((l, i) => (
            <button key={l.id} className={`lesson-item${i === active ? ' active' : ''}`} onClick={() => setActive(i)}>
              <span className="lesson-idx">{completed.has(l.id) ? <Check size={14} /> : <PlayCircle size={15} />}</span>
              <span className="lesson-name">{lang === 'th' ? l.title.th : l.title.en}{l.preview && <em className="preview-tag">{t.previewBadge}</em>}</span>
              <span className="lesson-dur">{l.locked ? <Lock size={13} /> : l.duration}</span>
            </button>
          ))}
        </aside>
      </div>
      <aside className="disclaimer"><Check size={18} /><p>{t.disclaimer}</p></aside>
    </section>
  );
}

function FollowLinks() {
  return (
    <div className="follow-links">
      <a href={SUPPORT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
      <a href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
      <a href={SUPPORT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTok size={20} /></a>
      <a href={SUPPORT.lineUrl} target="_blank" rel="noopener noreferrer" aria-label="LINE"><MessageCircle size={20} /></a>
    </div>
  );
}

function TicketForm({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [note, setNote] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNote('');
    setBusy(true);
    try {
      const res = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setNote(t.ticketSent); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setNote(data.error || t.ticketErr);
    } catch {
      setNote(t.ticketErr);
    } finally {
      setBusy(false);
    }
  };
  return (
    <form className="ticket-form" onSubmit={submit}>
      <h2>{t.ticketFormTitle}</h2>
      <input value={form.name} onChange={set('name')} placeholder={t.ticketName} aria-label={t.ticketName} />
      <input type="email" value={form.email} onChange={set('email')} placeholder={t.emailLabel} aria-label={t.emailLabel} />
      <input value={form.subject} onChange={set('subject')} placeholder={t.ticketSubject} aria-label={t.ticketSubject} />
      <textarea value={form.message} onChange={set('message')} placeholder={t.ticketMessage} aria-label={t.ticketMessage} rows={4} />
      <button className="button primary" type="submit" disabled={busy}>{t.ticketSend}</button>
      <span className="inline-note">{note}</span>
    </form>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="page container contact">
      <p className="k-eyebrow">{t.contactNav}</p>
      <h1>{t.contactNav}</h1>
      <p className="lede">{lang === 'th'
        ? 'มีคำถามเกี่ยวกับคู่มือ คอร์ส หรือการชำระเงิน? ทักหาเราได้เลย เรามักตอบกลับภายในหนึ่งวันทำการ'
        : 'Questions about a guide, a course, or your order? Reach us here — we usually reply within one business day.'}</p>
      <div className="contact-actions">
        <a className="button primary" href={SUPPORT.lineUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />{t.lineLabel}: {SUPPORT.lineId}</a>
        <a className="button secondary" href={`tel:${SUPPORT.phone}`}><Phone size={16} />{SUPPORT.phone}</a>
        <a className="button secondary" href={`mailto:${SUPPORT.email}`}><Mail size={16} />{SUPPORT.email}</a>
      </div>
      <p className="k-eyebrow follow-eyebrow">{t.followUs}</p>
      <FollowLinks />
      <TicketForm lang={lang} />
    </section>
  );
}

function ChatWidget({ lang }: { lang: Lang }) {
  const t = copy[lang];
  type Msg = { from: 'user' | 'bot'; text: string };
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<Msg[]>([{ from: 'bot', text: t.chatGreeting }]);
  const [text, setText] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const endRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, open]);
  React.useEffect(() => { setMsgs([{ from: 'bot', text: t.chatGreeting }]); }, [lang]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = text.trim();
    if (!message || busy) return;
    setMsgs((m) => [...m, { from: 'user', text: message }]);
    setText('');
    setBusy(true);
    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, lang }),
      });
      const data = await res.json().catch(() => ({}));
      setMsgs((m) => [...m, { from: 'bot', text: data.reply || t.ticketErr }]);
    } catch {
      setMsgs((m) => [...m, { from: 'bot', text: t.ticketErr }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label={t.chatTitle}>
          <div className="chat-head">
            <span>{t.chatTitle}</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
          </div>
          <div className="chat-body">
            {msgs.map((m, i) => <div key={i} className={`chat-msg ${m.from}`}>{m.text}</div>)}
            <div ref={endRef} />
          </div>
          <div className="chat-quick">
            <a href={SUPPORT.lineUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} />{t.lineLabel}</a>
            <a href={`tel:${SUPPORT.phone}`}><Phone size={15} />{t.callLabel}</a>
            <a href={`mailto:${SUPPORT.email}`}><Mail size={15} />{t.emailLabelShort}</a>
          </div>
          <form className="chat-input" onSubmit={send}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder={t.chatPlaceholder} aria-label={t.chatPlaceholder} />
            <button className="button primary" type="submit" disabled={busy}>{t.chatSend}</button>
          </form>
        </div>
      )}
      <button className="chat-fab k-shine" onClick={() => setOpen(!open)} aria-label={t.chatTitle}>
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}

function Admin({ lang, nav, user }: { lang: Lang; nav: (r: Route) => void; user: User }) {
  const t = copy[lang];
  type Stats = { totalViews: number; uniqueVisitors: number; viewsToday: number; topPaths: { path: string; n: number }[]; recent: { id: number; path: string; referrer: string | null; created_at: string }[] };
  type Ticket = { id: string; name: string | null; email: string; subject: string | null; message: string; created_at: string };
  const [stats, setStats] = React.useState<Stats | null>(null);
  const [tix, setTix] = React.useState<Ticket[]>([]);
  React.useEffect(() => {
    if (!user?.admin) return;
    fetch('/api/admin/stats').then((r) => (r.ok ? r.json() : null)).then(setStats).catch(() => {});
    fetch('/api/admin/tickets').then((r) => (r.ok ? r.json() : [])).then((d) => setTix(Array.isArray(d) ? d : [])).catch(() => {});
  }, [user]);

  if (!user) {
    return (
      <section className="page container">
        <p className="k-eyebrow">{t.adminTitle}</p>
        <h1>{t.adminTitle}</h1>
        <p className="lede">{t.accountSignedOut}</p>
        <button className="button primary" onClick={() => nav('/login')}>{t.signIn}</button>
      </section>
    );
  }
  if (!user.admin) {
    return (
      <section className="page container">
        <p className="k-eyebrow">{t.adminTitle}</p>
        <h1>{t.adminTitle}</h1>
        <p className="lede">{t.adminDenied}</p>
      </section>
    );
  }
  const fmt = (iso: string) => new Date(iso).toLocaleString();
  return (
    <section className="page container admin">
      <p className="k-eyebrow">{t.adminTitle}</p>
      <h1>{t.adminTitle}</h1>
      <div className="stat-row">
        <div className="stat-card"><strong>{stats?.totalViews ?? '—'}</strong><span>{t.statViews}</span></div>
        <div className="stat-card"><strong>{stats?.uniqueVisitors ?? '—'}</strong><span>{t.statUnique}</span></div>
        <div className="stat-card"><strong>{stats?.viewsToday ?? '—'}</strong><span>{t.statToday}</span></div>
      </div>
      <h2 className="library-heading">{t.topPages}</h2>
      <ul className="top-paths">{(stats?.topPaths || []).map((p) => <li key={p.path}><span>{p.path}</span><strong>{p.n}</strong></li>)}</ul>
      <h2 className="library-heading">{t.recentVisits}</h2>
      <div className="table-scroll">
        <table className="audit-table">
          <thead><tr><th>{t.colTime}</th><th>{t.colPath}</th><th>{t.colRef}</th></tr></thead>
          <tbody>{(stats?.recent || []).map((v) => <tr key={v.id}><td>{fmt(v.created_at)}</td><td>{v.path}</td><td>{v.referrer || '—'}</td></tr>)}</tbody>
        </table>
      </div>
      <h2 className="library-heading">{t.ticketsHeading}</h2>
      <div className="ticket-list">
        {tix.map((tk) => (
          <article className="ticket-item" key={tk.id}>
            <p className="ticket-meta">{fmt(tk.created_at)} · {tk.email}{tk.subject ? ` · ${tk.subject}` : ''}</p>
            <p>{tk.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

type LegalKind = 'privacy' | 'terms' | 'refund';

function LegalPage({ kind, lang }: { kind: LegalKind; lang: Lang }) {
  const doc = legal[kind][lang];
  return (
    <section className="page container legal">
      <p className="k-eyebrow">{doc.eyebrow}</p>
      <h1>{doc.title}</h1>
      {doc.body.map((para, i) => <p key={i}>{para}</p>)}
    </section>
  );
}

function Footer({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const b = brand[lang];
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <Wordmark />
          <p className="footer-by">by Kovitad Janlakhon</p>
          <p>{b.footerTagline}</p>
          <FollowLinks />
        </div>
        <nav className="footer-nav">
          {b.footerLinks.map(([href, label], i) => (
            <button key={label + i} onClick={() => nav(href)}>{label}</button>
          ))}
        </nav>
      </div>
      <div className="footer-disclaimer-wrap container">
        <p className="footer-disclaimer">{b.disclaimer}</p>
        <p className="footer-copy">© {new Date().getFullYear()} KOVITAD.shop · Kovitad Janlakhon</p>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
