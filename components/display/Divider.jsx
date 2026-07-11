import React from "react";

/** Chrome hairline divider, optionally with a centered label. */
export function Divider({ label, spacing = 0, style }) {
  const line = { flex: 1, height: 1, background: "linear-gradient(90deg, transparent 0%, var(--silver-300) 25%, var(--silver-100) 50%, var(--silver-300) 75%, transparent 100%)" };
  if (!label) {
    return <hr className="k-divider" style={{ margin: `${spacing}px 0`, ...style }} />;
  }
  return (
    <div role="separator" style={{ display: "flex", alignItems: "center", gap: 16, margin: `${spacing}px 0`, ...style }}>
      <span style={line}></span>
      <span style={{ font: "600 var(--text-xs)/1 var(--font-sans)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--silver-700)", whiteSpace: "nowrap" }}>{label}</span>
      <span style={line}></span>
    </div>
  );
}
