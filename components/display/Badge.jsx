import React from "react";

/** Small status pill. tones: green | silver | ivory | success | warning | danger */
export function Badge({ tone = "green", icon, children, style }) {
  const tones = {
    green: { background: "var(--green-50)", color: "var(--green-700)", border: "1px solid var(--green-100)" },
    silver: { background: "var(--grad-chrome-soft)", color: "var(--charcoal-700)", border: "1px solid var(--silver-300)", boxShadow: "var(--inset-sheen)" },
    ivory: { background: "var(--ivory-300)", color: "var(--charcoal-700)", border: "1px solid transparent" },
    dark: { background: "rgba(238,241,243,0.1)", color: "var(--silver-200)", border: "1px solid var(--border-hairline-dark)" },
    success: { background: "var(--success-100)", color: "var(--success-600)", border: "1px solid transparent" },
    warning: { background: "var(--warning-100)", color: "var(--warning-600)", border: "1px solid transparent" },
    danger: { background: "var(--danger-100)", color: "var(--danger-600)", border: "1px solid transparent" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      height: 24, padding: "0 10px", boxSizing: "border-box",
      borderRadius: "var(--radius-pill)",
      font: "600 11px/1 var(--font-sans)", letterSpacing: "0.06em", textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...tones[tone], ...style,
    }}>
      {icon}{children}
    </span>
  );
}
