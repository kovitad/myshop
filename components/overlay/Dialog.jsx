import React from "react";
import { IconButton } from "../actions/IconButton.jsx";
import { Icon } from "../icons/Icon.jsx";

/** Modal dialog with charcoal scrim + blur. Render conditionally: {open && <Dialog …/>} */
export function Dialog({ title, onClose, width = 480, footer, children, style }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(22, 30, 26, 0.45)",
        backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        style={{
          width: "100%", maxWidth: width, maxHeight: "85vh", overflow: "auto",
          background: "var(--surface-raised)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-silver)",
          boxShadow: "var(--shadow-lg)",
          padding: 28,
          boxSizing: "border-box",
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 14 }}>
          <h3 style={{ font: "600 var(--text-2xl)/var(--leading-snug) var(--font-display)", color: "var(--text-heading)" }}>{title}</h3>
          {onClose && (
            <IconButton label="Close" variant="ghost" size="sm" onClick={onClose}>
              <Icon name="x" size={18} />
            </IconButton>
          )}
        </div>
        <div style={{ font: "400 var(--text-md)/var(--leading-body) var(--font-sans)", color: "var(--text-body)" }}>{children}</div>
        {footer && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 24 }}>{footer}</div>
        )}
      </div>
    </div>
  );
}
