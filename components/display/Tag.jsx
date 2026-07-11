import React from "react";

/** Selectable/removable topic chip. */
export function Tag({ children, selected, onClick, onRemove, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        height: 32, padding: "0 14px", boxSizing: "border-box",
        borderRadius: "var(--radius-pill)",
        font: "500 var(--text-sm)/1 var(--font-sans)",
        background: selected ? "var(--green-700)" : hover && onClick ? "var(--silver-50)" : "var(--surface-raised)",
        color: selected ? "var(--text-on-dark)" : "var(--text-body)",
        border: `1px solid ${selected ? "var(--green-700)" : hover && onClick ? "var(--border-silver-strong)" : "var(--border-silver)"}`,
        cursor: onClick ? "pointer" : "default",
        whiteSpace: "nowrap",
        transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0, lineHeight: 1, fontSize: 13, color: selected ? "var(--silver-300)" : "var(--silver-700)" }}
        >×</button>
      )}
    </span>
  );
}
