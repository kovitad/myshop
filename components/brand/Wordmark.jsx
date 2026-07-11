import React from "react";

/** Type-only brand lockup (no final logo exists yet). */
export function Wordmark({ size = "md", tone = "light", withDomain = true, style }) {
  const sizes = { sm: 18, md: 24, lg: 34, xl: 48 };
  const fs = sizes[size] || sizes.md;
  const color = tone === "dark" ? "var(--text-on-dark)" : "var(--green-700)";
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: Math.max(2, fs * 0.12), ...style }}>
      <span style={{ font: `400 ${fs}px/1 var(--font-wordmark)`, letterSpacing: "var(--tracking-wordmark)", color }}>
        KOVITAD
      </span>
      {withDomain && (
        <span style={{ font: `500 ${Math.round(fs * 0.52)}px/1 var(--font-sans)`, color: tone === "dark" ? "var(--silver-300)" : "var(--silver-700)", letterSpacing: "0.02em" }}>
          .shop
        </span>
      )}
    </span>
  );
}
