import React from "react";

/** Lucide icon wrapper (CDN UMD build must be loaded on the page). */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const g = window.lucide;
    const host = ref.current;
    if (!g || !host) return;
    host.innerHTML = "";
    const pascal = String(name).split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
    const node = (g.icons && g.icons[pascal]) || g[pascal];
    if (!node) return;
    const el = g.createElement(node);
    el.setAttribute("width", size);
    el.setAttribute("height", size);
    el.setAttribute("stroke-width", strokeWidth);
    host.appendChild(el);
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, flex: "none", color, verticalAlign: "middle", ...style }}
    />
  );
}

/** Small rounded tile with a chrome-gradient face holding an icon — the brand's icon presentation. */
export function IconTile({ name, size = 44, iconSize, tone = "chrome", style }) {
  const tones = {
    chrome: { background: "var(--grad-chrome-soft)", border: "1px solid var(--border-silver)", color: "var(--green-700)", boxShadow: "var(--inset-sheen), var(--shadow-xs)" },
    green: { background: "var(--green-50)", border: "1px solid var(--green-100)", color: "var(--green-700)" },
    dark: { background: "rgba(238,241,243,0.08)", border: "1px solid var(--border-hairline-dark)", color: "var(--silver-200)" },
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flex: "none", borderRadius: "var(--radius-md)", ...tones[tone], ...style }}>
      <Icon name={name} size={iconSize || Math.round(size * 0.45)} />
    </span>
  );
}
