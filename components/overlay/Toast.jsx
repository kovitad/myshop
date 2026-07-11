import React from "react";
import { Icon } from "../icons/Icon.jsx";

/** Toast notice. Static bar by default; position="fixed" pins bottom-center. */
export function Toast({ tone = "default", icon, title, children, position = "static", onDismiss, style }) {
  const tones = {
    default: { background: "var(--surface-ink)", color: "var(--text-on-dark)", iconColor: "var(--silver-300)" },
    success: { background: "var(--green-700)", color: "var(--text-on-dark)", iconColor: "var(--green-200)" },
    danger: { background: "#4A2620", color: "#F5E3E0", iconColor: "#E0A79F" },
  };
  const t = tones[tone] || tones.default;
  return (
    <div
      role="status"
      style={{
        display: "inline-flex", alignItems: "center", gap: 12,
        padding: "12px 16px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-hairline-dark)",
        boxShadow: "var(--shadow-lg)",
        font: "500 var(--text-sm)/1.4 var(--font-sans)",
        background: t.background, color: t.color,
        ...(position === "fixed" ? { position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 110 } : {}),
        ...style,
      }}
    >
      {icon && <span style={{ color: t.iconColor, display: "inline-flex" }}>{icon}</span>}
      <span>
        {title && <strong style={{ display: "block", fontWeight: 600 }}>{title}</strong>}
        {children}
      </span>
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={onDismiss}
          style={{ border: 0, background: "transparent", color: t.iconColor, cursor: "pointer", padding: 4, marginLeft: 4, display: "inline-flex" }}>
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
}
