// KOVITAD.shop — Article reading screen. Bilingual EN/TH.
const ART_COPY = {
  en: {
    tag1: "Sleep", tag2: "7 min read",
    title: "Seven quiet habits of good sleepers",
    lede: "None of them involve buying anything. A look at the evening routines research keeps pointing back to — and how to borrow them without turning bedtime into a project.",
    author: "Kovitad", byline: "Founder & curator · Updated June 2026",
    save: "Save", share: "Share", saved: "Saved to your library.", copied: "Link copied.",
    p1: ["Ask a hundred good sleepers what they do before bed and you won't hear about gadgets. You'll hear about ", "rhythm", ": the same rough bedtime, the same slow wind-down, most nights of the week. The research on sleep hygiene is unglamorous, and that's exactly why it works."],
    p2: "Light is the strongest lever. Dimming the house an hour before bed — and getting bright light within an hour of waking — does more for most people than any supplement marketed for sleep. It costs nothing and starts working within days.",
    quoteA: "Good sleep is less a skill and more a ", quoteW: "schedule", quoteB: " you keep gently.",
    p3: "Temperature matters more than most people expect: a cool room and a warm shower beforehand nudge your core temperature in the direction sleep wants it to go. And caffeine's half-life means the espresso at 4pm is still half with you at 10pm — research suggests moving the last cup earlier is one of the highest-leverage changes a light sleeper can make.",
    calloutB: "A note on scope.", callout: " This is general education and personal experience, not medical advice. If sleep problems persist, talk to your clinician — persistent insomnia and apnea deserve real care.",
    p4: "The rest of the seven are small: a notebook to park tomorrow's worries, a consistent wake time even after a bad night, keeping the bed for sleep, and treating the occasional rough night as weather — noticed, not fought.",
    tags: ["Sleep", "Evening routine", "Habits"],
    keepReading: "Keep reading", browse: "Browse the full library", opening: "Opening: ",
    related: [
      { tag: "Nutrition · 12 min", t: "Protein after 50: what the research actually says" },
      { tag: "Movement · 6 min", t: "The case for the unimpressive walk" },
    ],
  },
  th: {
    tag1: "การนอน", tag2: "อ่าน 7 นาที",
    title: "7 นิสัยเงียบ ๆ ของคนหลับดี",
    lede: "ไม่มีข้อไหนต้องซื้ออะไรเลย มาดูกิจวัตรยามค่ำที่งานวิจัยชี้ซ้ำ ๆ — และวิธีหยิบมาใช้ โดยไม่ทำให้การนอนกลายเป็นภาระ",
    author: "Kovitad", byline: "ผู้ก่อตั้งและผู้คัดสรร · อัปเดตมิถุนายน 2026",
    save: "บันทึก", share: "แชร์", saved: "บันทึกแล้ว", copied: "คัดลอกลิงก์แล้ว",
    p1: ["ลองถามคนหลับดีสักร้อยคนว่าทำอะไรก่อนนอน คุณจะไม่ได้ยินเรื่องอุปกรณ์ แต่จะได้ยินเรื่อง", "จังหวะ", ": เวลานอนใกล้เคียงกันทุกคืน ช่วงผ่อนคลายช้า ๆ แบบเดิม เกือบทุกคืนของสัปดาห์ งานวิจัยเรื่องสุขอนามัยการนอนดูธรรมดา และนั่นคือเหตุผลที่มันได้ผล"],
    p2: "แสงคือคันโยกที่แรงที่สุด หรี่ไฟในบ้านหนึ่งชั่วโมงก่อนนอน — และรับแสงสว่างภายในหนึ่งชั่วโมงหลังตื่น — ช่วยคนส่วนใหญ่ได้มากกว่าอาหารเสริมเพื่อการนอนใด ๆ ไม่มีค่าใช้จ่าย และเห็นผลในไม่กี่วัน",
    quoteA: "การนอนหลับที่ดี ไม่ใช่ทักษะ แต่คือ", quoteW: "ตาราง", quoteB: "ที่คุณรักษาไว้อย่างอ่อนโยน",
    p3: "อุณหภูมิสำคัญกว่าที่คิด: ห้องที่เย็นและการอาบน้ำอุ่นก่อนนอน ช่วยพาอุณหภูมิร่างกายไปในทิศที่การนอนต้องการ และด้วยครึ่งชีวิตของคาเฟอีน กาแฟตอนสี่โมงเย็นยังอยู่กับคุณครึ่งแก้วตอนสี่ทุ่ม — งานวิจัยชี้ว่าการเลื่อนกาแฟแก้วสุดท้ายให้เร็วขึ้น เป็นการเปลี่ยนแปลงที่คุ้มที่สุดอย่างหนึ่งสำหรับคนหลับยาก",
    calloutB: "ขอบเขตของบทความ", callout: " — นี่คือความรู้ทั่วไปและประสบการณ์ส่วนตัว ไม่ใช่คำแนะนำทางการแพทย์ หากปัญหาการนอนยังต่อเนื่อง โปรดปรึกษาแพทย์ — โรคนอนไม่หลับเรื้อรังและภาวะหยุดหายใจขณะหลับควรได้รับการดูแลอย่างจริงจัง",
    p4: "ที่เหลือเป็นเรื่องเล็ก ๆ: สมุดจดไว้พักความกังวลของพรุ่งนี้ ตื่นเวลาเดิมแม้คืนก่อนจะแย่ ใช้เตียงเพื่อการนอนเท่านั้น และมองคืนที่หลับยากเป็นเหมือนสภาพอากาศ — รับรู้ ไม่ต้องต่อสู้",
    tags: ["การนอน", "กิจวัตรยามค่ำ", "นิสัย"],
    keepReading: "อ่านต่อ", browse: "ดูคลังความรู้ทั้งหมด", opening: "กำลังเปิด: ",
    related: [
      { tag: "โภชนาการ · 12 นาที", t: "โปรตีนหลังวัย 50: งานวิจัยบอกอะไรจริง ๆ" },
      { tag: "การเคลื่อนไหว · 6 นาที", t: "พลังของการเดินธรรมดา ๆ" },
    ],
  },
};

function ArticleScreen({ onNav, onToast, lang = "th" }) {
  const { Badge, Card, Divider, Icon, IconButton, Tag, Button } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = ART_COPY[lang];
  const th = lang === "th";
  const measure = { maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "0 var(--container-pad)" };
  const para = { fontSize: 17, lineHeight: th ? 1.9 : 1.75, color: "var(--text-body)" };

  return (
    <main style={{ paddingBottom: 0 }}>
      <article>
        <header style={{ ...measure, padding: "72px var(--container-pad) 0", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge style={th ? { letterSpacing: "0.02em" } : undefined}>{c.tag1}</Badge>
            <Badge tone="ivory" style={th ? { letterSpacing: "0.02em" } : undefined}>{c.tag2}</Badge>
          </div>
          <h1 style={{ fontSize: th ? "clamp(36px, 4.6vw, 48px)" : "clamp(38px, 5vw, 52px)", lineHeight: th ? 1.35 : "var(--leading-tight)" }}>{c.title}</h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-muted)", lineHeight: th ? 1.75 : 1.55 }}>{c.lede}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 4 }}>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--grad-chrome)", border: "1px solid var(--silver-400)", display: "inline-flex", alignItems: "center", justifyContent: "center", font: "600 14px/1 var(--font-sans)", color: "var(--green-800)" }}>K</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ font: "600 var(--text-sm)/1.3 var(--font-sans)", color: "var(--text-heading)" }}>{c.author}</span>
              <span style={{ font: "400 var(--text-xs)/1.5 var(--font-sans)", color: "var(--text-faint)" }}>{c.byline}</span>
            </div>
            <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
              <IconButton label={c.save} variant="ghost" size="sm" onClick={() => onToast(c.saved)}><Icon name="bookmark" size={17} /></IconButton>
              <IconButton label={c.share} variant="ghost" size="sm" onClick={() => onToast(c.copied)}><Icon name="link" size={17} /></IconButton>
            </span>
          </div>
          <Divider />
        </header>

        <div style={{ ...measure, padding: "36px var(--container-pad) 0", display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={para}>{c.p1[0]}<em>{c.p1[1]}</em>{c.p1[2]}</p>
          <p style={para}>{c.p2}</p>

          <blockquote style={{ margin: "16px 0", padding: "8px 0 8px 28px", borderLeft: "2px solid var(--silver-400)" }}>
            <p style={{ font: `600 var(--text-2xl)/${th ? 1.6 : 1.35} var(--font-display)`, color: "var(--text-heading)" }}>
              {c.quoteA}<span className="k-silver-text">{c.quoteW}</span>{c.quoteB}
            </p>
          </blockquote>

          <p style={para}>{c.p3}</p>

          <Card style={{ background: "var(--green-50)", border: "1px solid var(--green-100)", boxShadow: "none", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ color: "var(--green-600)", display: "inline-flex", paddingTop: 2 }}><Icon name="info" size={18} /></span>
            <p style={{ font: `400 var(--text-sm)/${th ? 1.85 : 1.6} var(--font-sans)`, color: "var(--green-800)" }}>
              <strong>{c.calloutB}</strong>{c.callout}
            </p>
          </Card>

          <p style={para}>{c.p4}</p>

          <div style={{ display: "flex", gap: 8, paddingTop: 8 }}>
            {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>

        <div style={{ ...measure, padding: "48px var(--container-pad) 72px" }}>
          <Divider label={c.keepReading} spacing={0} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            {c.related.map((a) => (
              <Card key={a.t} interactive onClick={() => onToast(c.opening + a.t)} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="k-eyebrow" style={{ color: "var(--silver-700)", letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{a.tag}</span>
                <span style={{ font: `600 var(--text-lg)/${th ? 1.6 : 1.35} var(--font-display)`, color: "var(--text-heading)" }}>{a.t}</span>
              </Card>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Button variant="secondary" iconRight={<Icon name="arrow-right" size={15} />} onClick={() => onNav("Library")}>{c.browse}</Button>
          </div>
        </div>
      </article>

      <NewsletterBand onToast={onToast} lang={lang} />
    </main>
  );
}
Object.assign(window, { ArticleScreen });
