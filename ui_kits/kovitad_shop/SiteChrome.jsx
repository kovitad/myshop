// KOVITAD.shop — shared site chrome (header, footer, newsletter band). Bilingual EN/TH.
function useDS() { return window.KOVITADWellnessDesignSystem_61cabf; }

const CHROME_COPY = {
  en: {
    nav: { Home: "Home", Library: "Library", Article: "Articles" },
    signIn: "Sign in", search: "Search", bag: "Bag",
    nlEyebrow: "The weekly letter", nlTitle: "One useful idea, every Sunday",
    nlSub: "What I'm reading, testing, and un-learning about living well for longer. Free, short, no noise.",
    nlBtn: "Subscribe", nlNote: "No spam. Unsubscribe any time.", nlDone: "You're on the list. See you Sunday.",
    ftTag: "Practical, evidence-informed learning for a longer, more energetic life.",
    ftLearn: "Learn", ftTopics: "Topics", ftBrand: "KOVITAD",
    ftArticles: "Articles", ftEbooks: "Ebooks & guides", ftVideos: "Videos",
    ftT1: "Nutrition", ftT2: "Movement", ftT3: "Sleep", ftT4: "Mindset",
    ftAbout: "About", ftContact: "Contact", ftPrivacy: "Privacy",
    disclaimer: "KOVITAD shares general education and personal experience, not medical advice. Talk to your clinician before changing your health routine. © 2026 KOVITAD.shop",
  },
  th: {
    nav: { Home: "หน้าแรก", Library: "คลังความรู้", Article: "บทความ" },
    signIn: "เข้าสู่ระบบ", search: "ค้นหา", bag: "ตะกร้า",
    nlEyebrow: "จดหมายรายสัปดาห์", nlTitle: "หนึ่งไอเดียดี ๆ ทุกวันอาทิตย์",
    nlSub: "สิ่งที่กำลังอ่าน ทดลอง และเรียนรู้ใหม่ เกี่ยวกับการมีชีวิตที่ดีไปอีกนาน — ฟรี สั้น อ่านง่าย",
    nlBtn: "สมัครรับ", nlNote: "ไม่มีสแปม ยกเลิกได้ทุกเมื่อ", nlDone: "สมัครแล้ว พบกันวันอาทิตย์",
    ftTag: "การเรียนรู้ที่ใช้ได้จริง อ้างอิงงานวิจัย เพื่อชีวิตที่ยืนยาวและมีพลัง",
    ftLearn: "เรียนรู้", ftTopics: "หัวข้อ", ftBrand: "KOVITAD",
    ftArticles: "บทความ", ftEbooks: "อีบุ๊กและคู่มือ", ftVideos: "วิดีโอ",
    ftT1: "โภชนาการ", ftT2: "การเคลื่อนไหว", ftT3: "การนอน", ftT4: "มายด์เซ็ต",
    ftAbout: "เกี่ยวกับเรา", ftContact: "ติดต่อ", ftPrivacy: "ความเป็นส่วนตัว",
    disclaimer: "KOVITAD แบ่งปันความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ โปรดปรึกษาแพทย์ก่อนปรับเปลี่ยนการดูแลสุขภาพของคุณ © 2026 KOVITAD.shop",
  },
};

// Thai script: never wide-track; give display lines extra leading.
const thTrack = (lang, wide) => (lang === "th" ? "0.02em" : wide);

function LangToggle({ lang, onLang, tone }) {
  const opts = [{ id: "th", label: "ไทย" }, { id: "en", label: "EN" }];
  const overlay = tone === "overlay";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: 2,
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${overlay ? "rgba(238,241,243,0.35)" : "var(--border-silver)"}`,
      background: overlay ? "rgba(14,33,27,0.25)" : "var(--surface-raised)",
    }}>
      {opts.map((o) => (
        <button key={o.id} type="button" onClick={() => onLang(o.id)}
          style={{
            appearance: "none", border: 0, cursor: "pointer",
            height: 28, padding: "0 12px", borderRadius: "var(--radius-pill)",
            whiteSpace: "nowrap",
            font: `600 12.5px/1 var(--font-sans)`,
            background: lang === o.id ? (overlay ? "var(--grad-chrome)" : "var(--green-700)") : "transparent",
            color: lang === o.id ? (overlay ? "var(--charcoal-800)" : "var(--text-on-dark)") : (overlay ? "rgba(243,239,228,0.85)" : "var(--text-muted)"),
            transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
          }}>
          {o.label}
        </button>
      ))}
    </span>
  );
}

function SiteHeader({ active, onNav, onToast, tone = "solid", lang = "th", onLang }) {
  const { Wordmark, Button, IconButton, Icon } = useDS();
  const c = CHROME_COPY[lang];
  const links = ["Home", "Library", "Article"];
  const overlay = tone === "overlay";
  return (
    <header style={overlay ? {
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
      background: "linear-gradient(180deg, rgba(14,33,27,0.45) 0%, rgba(14,33,27,0) 100%)",
    } : {
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(247, 242, 232, 0.92)",
      backdropFilter: "saturate(1.2) blur(12px)", WebkitBackdropFilter: "saturate(1.2) blur(12px)",
      borderBottom: "1px solid var(--border-hairline)",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", height: overlay ? 84 : 68, display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav("Home"); }} style={{ textDecoration: "none" }}>
          <Wordmark size="md" tone={overlay ? "dark" : "light"} />
        </a>
        <nav style={{ display: "flex", gap: 4, marginLeft: 8 }}>
          {links.map((l) => (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNav(l); }}
              style={{
                textDecoration: "none", padding: "8px 14px", borderRadius: "var(--radius-pill)",
                whiteSpace: "nowrap",
                font: `${active === l ? 600 : 500} var(--text-sm)/1 var(--font-sans)`,
                color: overlay
                  ? (active === l ? "#FFFFFF" : "rgba(243,239,228,0.82)")
                  : (active === l ? "var(--green-700)" : "var(--text-muted)"),
                background: active === l ? (overlay ? "rgba(238,241,243,0.14)" : "rgba(23,63,53,0.07)") : "transparent",
                transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
              }}>
              {c.nav[l]}
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <LangToggle lang={lang} onLang={onLang} tone={tone} />
          <IconButton label={c.search} variant={overlay ? "dark" : "ghost"}><Icon name="search" size={19} /></IconButton>
          <IconButton label={c.bag} variant={overlay ? "dark" : "ghost"} onClick={() => onToast(lang === "th" ? "ตะกร้ายังว่างอยู่" : "Your bag is empty — for now.")}><Icon name="shopping-bag" size={19} /></IconButton>
          <Button size="sm" variant={overlay ? "chrome" : "primary"} onClick={() => onToast(lang === "th" ? "ยินดีต้อนรับกลับ" : "Welcome back.")}>{c.signIn}</Button>
        </div>
      </div>
    </header>
  );
}

function NewsletterBand({ onToast, lang = "th" }) {
  const { Button, Input, Icon } = useDS();
  const c = CHROME_COPY[lang];
  const [email, setEmail] = React.useState("");
  return (
    <section style={{ background: "var(--grad-green-depth)", padding: "72px 24px" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <span className="k-eyebrow" style={{ color: "var(--silver-300)", letterSpacing: thTrack(lang, "var(--tracking-caps)") }}>{c.nlEyebrow}</span>
        <h2 style={{ color: "var(--text-on-dark)", fontSize: "var(--text-3xl)", lineHeight: lang === "th" ? 1.3 : "var(--leading-tight)" }}>{c.nlTitle}</h2>
        <p style={{ color: "var(--text-on-dark-muted)", maxWidth: 460 }}>{c.nlSub}</p>
        <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 440, marginTop: 6 }}>
          <Input placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} icon={<Icon name="mail" size={16} />} style={{ flex: 1 }} />
          <Button variant="chrome" onClick={() => { setEmail(""); onToast(c.nlDone); }}>{c.nlBtn}</Button>
        </div>
        <p style={{ color: "var(--text-on-dark-muted)", fontSize: "var(--text-xs)", opacity: 0.75 }}>{c.nlNote}</p>
      </div>
    </section>
  );
}

function SiteFooter({ onNav, lang = "th" }) {
  const { Wordmark, Divider } = useDS();
  const c = CHROME_COPY[lang];
  const col = { display: "flex", flexDirection: "column", gap: 10, font: "400 var(--text-sm)/1.5 var(--font-sans)" };
  const link = { color: "var(--text-on-dark-muted)", textDecoration: "none" };
  const head = { font: "600 var(--text-xs)/1 var(--font-sans)", letterSpacing: thTrack(lang, "var(--tracking-caps)"), textTransform: "uppercase", color: "var(--silver-500)", marginBottom: 4 };
  return (
    <footer style={{ background: "var(--surface-ink)", padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Wordmark size="md" tone="dark" />
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: "var(--text-sm)", maxWidth: 300 }}>{c.ftTag}</p>
          </div>
          <div style={col}><span style={head}>{c.ftLearn}</span>
            <a style={link} href="#" onClick={(e) => { e.preventDefault(); onNav("Article"); }}>{c.ftArticles}</a>
            <a style={link} href="#" onClick={(e) => { e.preventDefault(); onNav("Library"); }}>{c.ftEbooks}</a>
            <a style={link} href="#">{c.ftVideos}</a>
          </div>
          <div style={col}><span style={head}>{c.ftTopics}</span>
            <a style={link} href="#">{c.ftT1}</a><a style={link} href="#">{c.ftT2}</a><a style={link} href="#">{c.ftT3}</a><a style={link} href="#">{c.ftT4}</a>
          </div>
          <div style={col}><span style={head}>{c.ftBrand}</span>
            <a style={link} href="#">{c.ftAbout}</a><a style={link} href="#">{c.ftContact}</a><a style={link} href="#">{c.ftPrivacy}</a>
          </div>
        </div>
        <div style={{ margin: "40px 0 20px" }}><Divider /></div>
        <p style={{ color: "var(--text-on-dark-muted)", font: "400 var(--text-xs)/1.7 var(--font-sans)", maxWidth: 640 }}>{c.disclaimer}</p>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, NewsletterBand, LangToggle, CHROME_COPY, thTrack });
