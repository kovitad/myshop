import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  Check,
  Footprints,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Salad,
  X,
} from 'lucide-react';

// Brand logos were removed from lucide-react; inline monochrome marks instead.
function Facebook({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>;
}
function Youtube({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.11-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.13c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.8 12l-6.2 3.57Z" /></svg>;
}
import './styles.css';

type Lang = 'th' | 'en';
type Route = string;

const ROUTES = [
  '/',
  '/library',
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

// Support + social channels. Email / phone / LINE are live; replace the
// facebook + youtube URLs with your real pages when ready.
const SUPPORT = {
  email: 'kovitad@gmail.com',
  phone: '0839799546',
  lineId: 'kovitadj',
  lineUrl: 'https://line.me/ti/p/~kovitadj',
  facebook: 'https://facebook.com/kovitad',
  youtube: 'https://youtube.com/@kovitad',
};

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
  },
};

const topics = [
  { icon: Leaf, th: 'โภชนาการ', en: 'Nutrition', bodyTh: 'จานอาหารที่เรียบง่าย พืชเป็นหลัก และทำซ้ำได้', bodyEn: 'Simple plates, plant-forward choices, and repeatable meals.' },
  { icon: Moon, th: 'การนอน', en: 'Sleep', bodyTh: 'จังหวะพักผ่อนที่ช่วยให้ร่างกายฟื้นตัว', bodyEn: 'Rest rhythms that support recovery and steadier days.' },
  { icon: Footprints, th: 'การเคลื่อนไหว', en: 'Movement', bodyTh: 'เดิน ยืด และใช้แรงในระดับที่ชีวิตจริงรับไหว', bodyEn: 'Walking, mobility, and strength that fit real life.' },
  { icon: Salad, th: 'ใจและนิสัย', en: 'Mindset', bodyTh: 'ระบบเล็ก ๆ ที่ช่วยให้ดูแลตัวเองต่อเนื่อง', bodyEn: 'Small systems that make self-care easier to continue.' },
];

const guides = [
  { id: 'steady-energy-plate', titleTh: 'คู่มือจานอาหารเพื่อพลังงานที่นิ่งขึ้น', titleEn: 'The steady energy plate', price: '฿390', tag: 'Nutrition' },
  { id: 'evening-habits', titleTh: '7 นิสัยเย็นที่ช่วยเตรียมร่างกายก่อนนอน', titleEn: '7 evening habits for better rest', price: '฿290', tag: 'Sleep' },
  { id: 'walking-reset', titleTh: 'เริ่มเดินให้เป็นระบบใน 14 วัน', titleEn: 'A 14-day walking reset', price: '฿250', tag: 'Movement' },
];

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
  return ROUTES.includes(path) ? path : '/';
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
    <>
      <Header route={route} lang={lang} setLang={setLang} nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={user} />
      <main>
        {route === '/' && <Home lang={lang} nav={nav} />}
        {route === '/library' && <Library lang={lang} nav={nav} />}
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
      <ChatWidget lang={lang} />
    </>
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
  const links: Array<[Route, string]> = [
    ['/', t.nav.home],
    ['/library', t.nav.library],
    ['/membership', t.membershipNav],
    ['/articles/sleep-rhythm', t.nav.article],
  ];
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => nav('/')} aria-label="KOVITAD.shop home"><Wordmark /></button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <button key={href} className={route === href ? 'active' : ''} onClick={() => nav(href)}>{label}</button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="lang-toggle" onClick={() => nav(user ? '/account' : '/login')}>{user ? t.accountNav : t.signIn}</button>
        <button className="lang-toggle" onClick={() => setLang(lang === 'th' ? 'en' : 'th')}>{lang === 'th' ? 'EN' : 'ไทย'}</button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Home({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="k-eyebrow hero-eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <div className="hero-actions">
            <button className="button primary k-shine" onClick={() => nav('/articles/sleep-rhythm')}>{t.primaryCta}<ArrowRight size={16} /></button>
            <button className="button secondary" onClick={() => nav('/library')}>{t.secondaryCta}</button>
          </div>
        </div>
      </section>
      <section className="section container split-heading">
        <h2>{t.topicsTitle}</h2>
        <p>{t.topicsBody}</p>
      </section>
      <section className="container topic-grid">
        {topics.map((topic) => <TopicCard key={topic.en} topic={topic} lang={lang} />)}
      </section>
      <RegisterSection lang={lang} />
      <section className="section container">
        <div className="section-head">
          <div><p className="k-eyebrow">DIGITAL GUIDES</p><h2>{t.featuredTitle}</h2><p>{t.featuredBody}</p></div>
          <button className="text-link" onClick={() => nav('/library')}>{t.secondaryCta}<ArrowRight size={15} /></button>
        </div>
        <GuideGrid lang={lang} />
      </section>
      <Newsletter lang={lang} />
    </>
  );
}

function Library({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  return (
    <section className="page container">
      <p className="k-eyebrow">LIBRARY</p>
      <h1>{t.libraryTitle}</h1>
      <p className="lede">{t.libraryBody}</p>
      <div className="filter-row"><span>Nutrition</span><span>Sleep</span><span>Movement</span><span>Mindset</span></div>
      <GuideGrid lang={lang} />
      <div className="article-card feature-card">
        <BookOpen size={22} />
        <div>
          <p className="k-eyebrow">ARTICLE</p>
          <h3>{t.articleTitle}</h3>
          <p>{t.articleDek}</p>
          <button className="text-link" onClick={() => nav('/articles/sleep-rhythm')}>{t.readArticle}<ArrowRight size={15} /></button>
        </div>
      </div>
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

function TopicCard({ topic, lang }: { topic: typeof topics[number]; lang: Lang }) {
  const Icon = topic.icon;
  return <article className="topic-card"><div className="icon-tile"><Icon size={22} /></div><h3>{lang === 'th' ? topic.th : topic.en}</h3><p>{lang === 'th' ? topic.bodyTh : topic.bodyEn}</p></article>;
}

function GuideGrid({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [note, setNote] = React.useState('');
  const [busy, setBusy] = React.useState('');
  const buy = async (guide: typeof guides[number]) => {
    setNote('');
    setBusy(guide.id);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: guide.id }),
      });
      if (res.status === 503) { setNote(t.paymentsSoon); return; }
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) { window.location.href = data.url; return; }
      setNote(data.error || t.checkoutError);
    } catch {
      setNote(t.checkoutError);
    } finally {
      setBusy('');
    }
  };
  return <><div className="guide-grid">{guides.map((guide) => <article className="guide-card k-shine" key={guide.titleEn}><p className="k-eyebrow">{guide.tag}</p><h3>{lang === 'th' ? guide.titleTh : guide.titleEn}</h3><p>{lang === 'th' ? 'ไฟล์ดิจิทัล อ่านง่าย พร้อมขั้นตอนเล็ก ๆ ที่ทำได้จริง' : 'A readable digital guide with practical steps you can repeat.'}</p><div><strong>{guide.price}</strong><button onClick={() => buy(guide)} disabled={busy === guide.id}>{t.getGuide}</button></div></article>)}</div>{note && <p className="inline-note">{note}</p>}</>;
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
  type Owned = { id: string; product: { id: string; type?: string; title?: { th: string; en: string } }; downloadUrl: string | null };
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
              {it.downloadUrl
                ? <a className="text-link" href={it.downloadUrl}>{t.successDownload}<ArrowRight size={15} /></a>
                : <span />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FollowLinks() {
  return (
    <div className="follow-links">
      <a href={SUPPORT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
      <a href={SUPPORT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
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
  const t = copy[lang];
  return <footer className="site-footer"><div><Wordmark /><p>{t.footer}</p><p className="footer-disclaimer">{t.disclaimer}</p><FollowLinks /></div><nav><button onClick={() => nav('/')}>{t.nav.home}</button><button onClick={() => nav('/library')}>{t.nav.library}</button><button onClick={() => nav('/membership')}>{t.membershipNav}</button><button onClick={() => nav('/contact')}>{t.contactNav}</button><button onClick={() => nav('/privacy')}>{t.privacyNav}</button><button onClick={() => nav('/terms')}>{t.termsNav}</button><button onClick={() => nav('/refund')}>{t.refundNav}</button></nav></footer>;
}

createRoot(document.getElementById('root')!).render(<App />);
