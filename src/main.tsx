import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  Check,
  Footprints,
  Leaf,
  Menu,
  Moon,
  Salad,
  X,
} from 'lucide-react';
import './styles.css';

type Lang = 'th' | 'en';
type Route = '/' | '/library' | '/articles/sleep-rhythm';

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

function getRoute(): Route {
  const path = window.location.pathname;
  if (path === '/library') return '/library';
  if (path === '/articles/sleep-rhythm') return '/articles/sleep-rhythm';
  return '/';
}

function App() {
  const [route, setRoute] = React.useState<Route>(getRoute());
  const [lang, setLang] = React.useState<Lang>(() => (localStorage.getItem('kovitad-lang') as Lang) || 'th');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const t = copy[lang];

  React.useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('kovitad-lang', lang);
  }, [lang]);

  const nav = (next: Route) => {
    history.pushState(null, '', next);
    setRoute(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header route={route} lang={lang} setLang={setLang} nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {route === '/' && <Home lang={lang} nav={nav} />}
        {route === '/library' && <Library lang={lang} nav={nav} />}
        {route === '/articles/sleep-rhythm' && <Article lang={lang} nav={nav} />}
      </main>
      <Footer lang={lang} nav={nav} />
    </>
  );
}

function Wordmark() {
  return <span className="wordmark">KOVITAD<span>.shop</span></span>;
}

function Header({ route, lang, setLang, nav, menuOpen, setMenuOpen }: {
  route: Route; lang: Lang; setLang: (l: Lang) => void; nav: (r: Route) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void;
}) {
  const t = copy[lang];
  const links: Array<[Route, string]> = [['/', t.nav.home], ['/library', t.nav.library], ['/articles/sleep-rhythm', t.nav.article]];
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => nav('/')} aria-label="KOVITAD.shop home"><Wordmark /></button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <button key={href} className={route === href ? 'active' : ''} onClick={() => nav(href)}>{label}</button>
        ))}
      </nav>
      <div className="header-actions">
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
  const order = async (guide: typeof guides[number]) => {
    const email = window.prompt(lang === 'th' ? 'ใส่อีเมลสำหรับจองคู่มือ' : 'Enter your email to reserve this guide');
    if (!email) return;
    const res = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, productId: guide.id }) });
    const data = await res.json().catch(() => ({}));
    setNote(res.ok ? (lang === 'th' ? 'บันทึกคำสั่งซื้อแล้ว ขั้นต่อไปคือเชื่อมต่อระบบชำระเงิน' : 'Order reserved. Payment provider is the next step.') : (data.error || 'Something went wrong'));
  };
  return <><div className="guide-grid">{guides.map((guide) => <article className="guide-card k-shine" key={guide.titleEn}><p className="k-eyebrow">{guide.tag}</p><h3>{lang === 'th' ? guide.titleTh : guide.titleEn}</h3><p>{lang === 'th' ? 'ไฟล์ดิจิทัล อ่านง่าย พร้อมขั้นตอนเล็ก ๆ ที่ทำได้จริง' : 'A readable digital guide with practical steps you can repeat.'}</p><div><strong>{guide.price}</strong><button onClick={() => order(guide)}>{t.readGuide}</button></div></article>)}</div>{note && <p className="inline-note">{note}</p>}</>;
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

function Footer({ lang, nav }: { lang: Lang; nav: (r: Route) => void }) {
  const t = copy[lang];
  return <footer className="site-footer"><div><Wordmark /><p>{t.footer}</p><p className="footer-disclaimer">{t.disclaimer}</p></div><nav><button onClick={() => nav('/')}>{t.nav.home}</button><button onClick={() => nav('/library')}>{t.nav.library}</button><button onClick={() => nav('/articles/sleep-rhythm')}>{t.nav.article}</button></nav></footer>;
}

createRoot(document.getElementById('root')!).render(<App />);
