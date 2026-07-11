// KOVITAD.shop — Home screen. Bilingual EN/TH.
const HOME_COPY = {
  en: {
    eyebrow: "Longevity, made practical",
    t1: "Small habits,", t2a: "longer ", t2w: "health", t2b: ".",
    sub: "Evidence-informed guides, articles and tools for eating, moving, sleeping and thinking well — curated by Kovitad.",
    ctaLib: "Browse the library", ctaArt: "Start with an article",
    startEyebrow: "Start here", startTitle: "Four things worth getting right", explore: "Explore",
    topics: [
      { icon: "salad", t: "Nutrition", d: "Everyday eating for the decades ahead — no fads, no fear." },
      { icon: "footprints", t: "Movement", d: "Strength and steps that fit a normal week." },
      { icon: "moon", t: "Sleep", d: "The quiet habits research keeps pointing back to." },
      { icon: "brain", t: "Mindset", d: "Attention, stress and purpose — trainable, like muscle." },
    ],
    divider: "From the library",
    shelfEyebrow: "Ebooks & guides", shelfTitle: "Deep dives, kept practical", viewAll: "View all", kind: "Ebook", cta: "View details",
    ebooks: [
      { title: "Eat for the decades ahead", d: "A practical, evidence-informed guide to everyday nutrition.", price: "฿390", old: "฿590", icon: "salad" },
      { title: "The unhurried sleep guide", d: "24 pages on better evenings — none require buying anything.", price: "฿290", icon: "moon" },
      { title: "Strong past sixty", d: "A gentle strength-training path for late starters.", price: "฿390", icon: "footprints" },
    ],
    artEyebrow: "Latest writing", artTitle: "Recent articles",
    articles: [
      { tag: "Sleep · 7 min read", t: "Seven quiet habits of good sleepers", d: "None of them involve buying anything." },
      { tag: "Nutrition · 12 min read", t: "Protein after 50: what the research actually says", d: "How much, when, and from what — without the bro-science." },
      { tag: "Mindset · 5 min read", t: "Why 'un-retiring' your curiosity matters", d: "Learning new things is linked to healthier ageing." },
    ],
  },
  th: {
    eyebrow: "อายุยืนแบบทำได้จริง",
    t1: "นิสัยเล็ก ๆ", t2a: "สุขภาพที่", t2w: "ยืนยาว", t2b: "",
    sub: "คู่มือ บทความ และเครื่องมือที่อ้างอิงงานวิจัย เรื่องการกิน การเคลื่อนไหว การนอน และความคิด — คัดสรรโดย Kovitad",
    ctaLib: "ดูคลังความรู้", ctaArt: "เริ่มจากบทความ",
    startEyebrow: "เริ่มต้นที่นี่", startTitle: "สี่เรื่องสำคัญที่ควรทำให้ดี", explore: "ดูเพิ่มเติม",
    topics: [
      { icon: "salad", t: "โภชนาการ", d: "การกินในทุกวัน เพื่อสุขภาพระยะยาว — ไม่มีสูตรลัด ไม่ต้องกลัว" },
      { icon: "footprints", t: "การเคลื่อนไหว", d: "ความแข็งแรงและการก้าวเดิน ที่พอดีกับชีวิตประจำสัปดาห์" },
      { icon: "moon", t: "การนอน", d: "นิสัยเงียบ ๆ ที่งานวิจัยชี้ตรงกันเสมอ" },
      { icon: "brain", t: "มายด์เซ็ต", d: "สมาธิ ความเครียด และเป้าหมาย — ฝึกได้เหมือนกล้ามเนื้อ" },
    ],
    divider: "จากคลังความรู้",
    shelfEyebrow: "อีบุ๊กและคู่มือ", shelfTitle: "เจาะลึกแบบใช้ได้จริง", viewAll: "ดูทั้งหมด", kind: "อีบุ๊ก", cta: "ดูรายละเอียด",
    ebooks: [
      { title: "กินดีเพื่อทศวรรษข้างหน้า", d: "คู่มือโภชนาการประจำวัน อ้างอิงงานวิจัย ใช้ได้จริง", price: "฿390", old: "฿590", icon: "salad" },
      { title: "คู่มือการนอนแบบไม่เร่งรีบ", d: "24 หน้า เรื่องค่ำคืนที่ดีขึ้น — ไม่ต้องซื้ออะไรเพิ่ม", price: "฿290", icon: "moon" },
      { title: "แข็งแรงหลังหกสิบ", d: "เส้นทางฝึกความแข็งแรงอย่างค่อยเป็นค่อยไป สำหรับผู้เริ่มช้า", price: "฿390", icon: "footprints" },
    ],
    artEyebrow: "บทความล่าสุด", artTitle: "บทความใหม่",
    articles: [
      { tag: "การนอน · อ่าน 7 นาที", t: "7 นิสัยเงียบ ๆ ของคนหลับดี", d: "ไม่มีข้อไหนต้องซื้ออะไรเลย" },
      { tag: "โภชนาการ · อ่าน 12 นาที", t: "โปรตีนหลังวัย 50: งานวิจัยบอกอะไรจริง ๆ", d: "กินเท่าไหร่ เมื่อไหร่ จากแหล่งไหน — ตามหลักฐานจริง" },
      { tag: "มายด์เซ็ต · อ่าน 5 นาที", t: "ทำไมความอยากรู้ไม่ควรเกษียณ", d: "การเรียนรู้สิ่งใหม่สัมพันธ์กับการสูงวัยอย่างมีคุณภาพ" },
    ],
  },
};

function HomeScreen({ onNav, onToast, onBuy, lang = "th" }) {
  const { Button, Icon, IconTile, ProductCard, Card, Divider } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = HOME_COPY[lang];
  const th = lang === "th";
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" };
  const ctaStyle = { textTransform: "uppercase", letterSpacing: th ? "0.03em" : "0.14em", fontSize: th ? 16 : 14, padding: "0 34px" };

  return (
    <main>
      {/* Immersive full-bleed hero — drop real photography (Thai wellness, natural light) onto the slot */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", background: "var(--grad-green-depth)" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: "-60%", height: "160%" }}>
          <image-slot id="home-hero" shape="rect" placeholder={th ? "วางรูปหลักของคุณที่นี่ — เวลเนสไทย แสงธรรมชาติ" : "Drop your hero photo — Thai wellness, natural light"}></image-slot>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "var(--grad-scrim-hero)", pointerEvents: "none" }}></div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 26, padding: "200px 24px 88px", maxWidth: 960, pointerEvents: "none" }}>
          <span className="k-eyebrow" style={{ color: "var(--silver-200)", fontSize: th ? 15 : 13, letterSpacing: th ? "0.04em" : "0.22em", textShadow: "0 1px 12px rgba(14,33,27,0.5)" }}>{c.eyebrow}</span>
          <h1 style={{ color: "#FFFFFF", fontSize: th ? "clamp(44px, 7vw, 76px)" : "clamp(52px, 8vw, var(--text-6xl))", lineHeight: th ? 1.22 : 1.04, textShadow: "0 2px 28px rgba(14,33,27,0.55)" }}>
            {c.t1}<br />{c.t2a}<span className="k-silver-text">{c.t2w}</span>{c.t2b}
          </h1>
          <p style={{ color: "rgba(243,239,228,0.92)", fontSize: "var(--text-xl)", lineHeight: 1.6, maxWidth: 600, textShadow: "0 1px 16px rgba(14,33,27,0.5)" }}>{c.sub}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto" }}>
            <Button size="lg" variant="chrome" style={ctaStyle} onClick={() => onNav("Library")}>{c.ctaLib}</Button>
            <Button size="lg" variant="dark" style={{ ...ctaStyle, background: "rgba(14,33,27,0.35)", backdropFilter: "blur(4px)" }} onClick={() => onNav("Article")}>{c.ctaArt}</Button>
          </div>
        </div>
      </section>

      {/* Start here */}
      <section style={{ ...wrap, padding: "88px var(--container-pad)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }}>
          <span className="k-eyebrow" style={{ letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{c.startEyebrow}</span>
          <h2 style={{ fontSize: "var(--text-4xl)", lineHeight: th ? 1.35 : "var(--leading-tight)" }}>{c.startTitle}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {c.topics.map((x) => (
            <Card key={x.t} interactive onClick={() => onNav("Article")} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <IconTile name={x.icon} tone="chrome" />
              <span style={{ font: `600 var(--text-xl)/${th ? 1.45 : 1.25} var(--font-display)`, color: "var(--text-heading)" }}>{x.t}</span>
              <p style={{ font: "400 var(--text-sm)/1.65 var(--font-sans)", color: "var(--text-muted)" }}>{x.d}</p>
              <span style={{ font: "600 var(--text-sm)/1 var(--font-sans)", color: "var(--green-600)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "auto" }}>
                {c.explore} <Icon name="arrow-right" size={14} />
              </span>
            </Card>
          ))}
        </div>
      </section>

      <div style={wrap}><Divider label={c.divider} /></div>

      {/* Featured ebooks */}
      <section style={{ ...wrap, padding: "56px var(--container-pad) 88px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="k-eyebrow" style={{ letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{c.shelfEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-4xl)", lineHeight: th ? 1.35 : "var(--leading-tight)" }}>{c.shelfTitle}</h2>
          </div>
          <Button variant="ghost" iconRight={<Icon name="arrow-right" size={15} />} onClick={() => onNav("Library")}>{c.viewAll}</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {c.ebooks.map((b) => (
            <ProductCard key={b.title} kind={c.kind} title={b.title} description={b.d} price={b.price} oldPrice={b.old} icon={b.icon} cta={c.cta} onCta={() => onBuy(b)} />
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section style={{ background: "var(--silver-50)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div style={{ ...wrap, padding: "80px var(--container-pad)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }}>
            <span className="k-eyebrow" style={{ letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{c.artEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-4xl)", lineHeight: th ? 1.35 : "var(--leading-tight)" }}>{c.artTitle}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {c.articles.map((a) => (
              <Card key={a.t} interactive onClick={() => onNav("Article")} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="k-eyebrow" style={{ color: "var(--silver-700)", letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{a.tag}</span>
                <span style={{ font: `600 var(--text-xl)/${th ? 1.5 : 1.3} var(--font-display)`, color: "var(--text-heading)" }}>{a.t}</span>
                <p style={{ font: "400 var(--text-sm)/1.65 var(--font-sans)", color: "var(--text-muted)" }}>{a.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand onToast={onToast} lang={lang} />
    </main>
  );
}
Object.assign(window, { HomeScreen });
