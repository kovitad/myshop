// KOVITAD.shop — Library (catalogue) screen. Bilingual EN/TH.
const LIB_COPY = {
  en: {
    eyebrow: "The library", title: "Ebooks, guides & tools",
    sub: "Everything is practical, referenced, and written to be used — not just read.",
    tabs: [{ id: "All", label: "All" }, { id: "Ebook", label: "Ebooks" }, { id: "Guide", label: "Guides" }, { id: "Video course", label: "Video courses" }, { id: "Product", label: "Products" }],
    topics: [{ id: "Nutrition", label: "Nutrition" }, { id: "Movement", label: "Movement" }, { id: "Sleep", label: "Sleep" }, { id: "Mindset", label: "Mindset" }],
    sort: ["Newest", "Most loved", "Price: low to high"],
    empty: "Nothing matches that combination yet. Try removing a filter.",
    counter: (a, b) => a + " of " + b + " items", cta: "View details",
    kinds: { "Ebook": "Ebook", "Guide": "Guide", "Video course": "Video course", "Product": "Product" },
    topicLabels: { Nutrition: "Nutrition", Movement: "Movement", Sleep: "Sleep", Mindset: "Mindset" },
    items: [
      { kind: "Ebook", topic: "Nutrition", title: "Eat for the decades ahead", d: "Everyday nutrition, evidence-informed.", price: "฿390", old: "฿590", icon: "salad" },
      { kind: "Ebook", topic: "Sleep", title: "The unhurried sleep guide", d: "24 pages on better evenings.", price: "฿290", icon: "moon" },
      { kind: "Guide", topic: "Movement", title: "Strong past sixty", d: "A gentle strength path for late starters.", price: "฿390", icon: "footprints" },
      { kind: "Video course", topic: "Mindset", title: "Attention, rebuilt", d: "Six short lessons on focus and calm.", price: "฿590", icon: "brain" },
      { kind: "Guide", topic: "Nutrition", title: "The pantry reset", d: "A 7-day, low-drama kitchen tune-up.", price: "฿190", icon: "sprout" },
      { kind: "Product", topic: "Sleep", title: "Evening wind-down cards", d: "30 printed prompts for calmer nights.", price: "฿490", icon: "moon" },
    ],
  },
  th: {
    eyebrow: "คลังความรู้", title: "อีบุ๊ก คู่มือ และเครื่องมือ",
    sub: "ทุกชิ้นใช้ได้จริง มีแหล่งอ้างอิง และเขียนมาเพื่อให้ลงมือทำ — ไม่ใช่แค่อ่าน",
    tabs: [{ id: "All", label: "ทั้งหมด" }, { id: "Ebook", label: "อีบุ๊ก" }, { id: "Guide", label: "คู่มือ" }, { id: "Video course", label: "คอร์สวิดีโอ" }, { id: "Product", label: "สินค้า" }],
    topics: [{ id: "Nutrition", label: "โภชนาการ" }, { id: "Movement", label: "การเคลื่อนไหว" }, { id: "Sleep", label: "การนอน" }, { id: "Mindset", label: "มายด์เซ็ต" }],
    sort: ["ใหม่ล่าสุด", "ยอดนิยม", "ราคา: ต่ำไปสูง"],
    empty: "ยังไม่มีรายการที่ตรงกับตัวกรองนี้ ลองเอาตัวกรองออกดู",
    counter: (a, b) => "แสดง " + a + " จาก " + b + " รายการ", cta: "ดูรายละเอียด",
    kinds: { "Ebook": "อีบุ๊ก", "Guide": "คู่มือ", "Video course": "คอร์สวิดีโอ", "Product": "สินค้า" },
    topicLabels: { Nutrition: "โภชนาการ", Movement: "การเคลื่อนไหว", Sleep: "การนอน", Mindset: "มายด์เซ็ต" },
    items: [
      { kind: "Ebook", topic: "Nutrition", title: "กินดีเพื่อทศวรรษข้างหน้า", d: "โภชนาการประจำวัน อ้างอิงงานวิจัย", price: "฿390", old: "฿590", icon: "salad" },
      { kind: "Ebook", topic: "Sleep", title: "คู่มือการนอนแบบไม่เร่งรีบ", d: "24 หน้า เรื่องค่ำคืนที่ดีขึ้น", price: "฿290", icon: "moon" },
      { kind: "Guide", topic: "Movement", title: "แข็งแรงหลังหกสิบ", d: "เส้นทางฝึกความแข็งแรงแบบค่อยเป็นค่อยไป", price: "฿390", icon: "footprints" },
      { kind: "Video course", topic: "Mindset", title: "สร้างสมาธิขึ้นใหม่", d: "บทเรียนสั้น 6 ตอน เรื่องโฟกัสและความสงบ", price: "฿590", icon: "brain" },
      { kind: "Guide", topic: "Nutrition", title: "จัดครัวใหม่ใน 7 วัน", d: "ปรับครัวแบบง่าย ๆ ไม่วุ่นวาย ใน 7 วัน", price: "฿190", icon: "sprout" },
      { kind: "Product", topic: "Sleep", title: "การ์ดผ่อนคลายยามค่ำ", d: "การ์ด 30 ใบ ชวนคืนที่สงบขึ้น", price: "฿490", icon: "moon" },
    ],
  },
};

function LibraryScreen({ onToast, onBuy, lang = "th" }) {
  const { Tabs, Tag, Select, ProductCard, Divider } = window.KOVITADWellnessDesignSystem_61cabf;
  const c = LIB_COPY[lang];
  const th = lang === "th";
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" };

  const [tab, setTab] = React.useState("All");
  const [topics, setTopics] = React.useState([]);
  const toggle = (t) => setTopics((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const shown = c.items.filter((i) => (tab === "All" || i.kind === tab) && (topics.length === 0 || topics.includes(i.topic)));

  return (
    <main style={{ paddingBottom: 96 }}>
      <section style={{ ...wrap, padding: "72px var(--container-pad) 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 700 }}>
          <span className="k-eyebrow" style={{ letterSpacing: th ? "0.04em" : "var(--tracking-caps)" }}>{c.eyebrow}</span>
          <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: th ? 1.25 : "var(--leading-tight)" }}>{c.title}</h1>
          <p style={{ color: "var(--text-muted)" }}>{c.sub}</p>
        </div>
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 18 }}>
          <Tabs items={c.tabs} value={tab} onChange={setTab} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {c.topics.map((t) => (
              <Tag key={t.id} selected={topics.includes(t.id)} onClick={() => toggle(t.id)}>{t.label}</Tag>
            ))}
            <span style={{ marginLeft: "auto", width: 190 }}>
              <Select options={c.sort} />
            </span>
          </div>
        </div>
      </section>
      <section style={{ ...wrap, padding: "40px var(--container-pad) 0" }}>
        {shown.length === 0 ? (
          <p style={{ color: "var(--text-muted)", padding: "48px 0" }}>{c.empty}</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
            {shown.map((b) => (
              <ProductCard key={b.title} kind={c.kinds[b.kind] + " · " + c.topicLabels[b.topic]} title={b.title} description={b.d} price={b.price} oldPrice={b.old} icon={b.icon} premium={b.kind !== "Product"} cta={c.cta} onCta={() => onBuy(b)} />
            ))}
          </div>
        )}
        <div style={{ marginTop: 64 }}>
          <Divider label={c.counter(shown.length, c.items.length)} />
        </div>
      </section>
    </main>
  );
}
Object.assign(window, { LibraryScreen });
