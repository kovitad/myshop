import React from "react";
import { Badge } from "./Badge.jsx";
import { Button } from "../actions/Button.jsx";
import { Icon } from "../icons/Icon.jsx";

/** Premium product / ebook card. Provide `image` (url) or it renders a calm placeholder slot. */
export function ProductCard({ kind = "Ebook", title, description, price, oldPrice, image, icon = "book-open", premium = true, cta = "View details", onCta, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={premium ? "k-shine" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column",
        background: "var(--surface-raised)",
        border: `1px solid var(${hover ? "--border-silver-strong" : "--border-silver"})`,
        borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-silver), var(--shadow-md)" : "var(--shadow-silver)",
        overflow: "hidden",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        ...style,
      }}
    >
      <div style={{ aspectRatio: "4 / 3", background: image ? `url(${image}) center/cover` : "var(--grad-green-depth)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {!image && (
          <span style={{ width: 64, height: 64, borderRadius: "var(--radius-md)", background: "rgba(238,241,243,0.1)", border: "1px solid var(--border-hairline-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--silver-300)" }}>
            <Icon name={icon} size={28} strokeWidth={1.5} />
          </span>
        )}
        {premium && <Badge tone="silver" style={{ position: "absolute", top: 14, left: 14 }}>Premium</Badge>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 20, flex: 1 }}>
        <span className="k-eyebrow" style={{ color: "var(--silver-700)" }}>{kind}</span>
        <span style={{ font: "600 var(--text-xl)/var(--leading-snug) var(--font-display)", color: "var(--text-heading)" }}>{title}</span>
        {description && <p style={{ font: "400 var(--text-sm)/1.55 var(--font-sans)", color: "var(--text-muted)" }}>{description}</p>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: "auto", paddingTop: 12 }}>
          {price !== undefined ? (
            <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ font: "600 var(--text-lg)/1 var(--font-sans)", color: "var(--text-heading)" }}>{price}</span>
              {oldPrice && <span style={{ font: "400 var(--text-sm)/1 var(--font-sans)", color: "var(--text-faint)", textDecoration: "line-through" }}>{oldPrice}</span>}
            </span>
          ) : <span></span>}
          <Button variant="secondary" size="sm" onClick={onCta}>{cta}</Button>
        </div>
      </div>
    </div>
  );
}
