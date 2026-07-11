import React from "react";

/** Hover tooltip wrapper. */
export function Tooltip({ content, side = "top", children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  };
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute", zIndex: 120, ...pos[side],
          background: "var(--surface-ink)", color: "var(--text-on-dark)",
          border: "1px solid var(--border-hairline-dark)",
          font: "500 var(--text-xs)/1.4 var(--font-sans)",
          padding: "6px 10px", borderRadius: "var(--radius-sm)",
          whiteSpace: "nowrap", pointerEvents: "none",
          boxShadow: "var(--shadow-md)",
          opacity: show ? 1 : 0,
          transition: "opacity var(--dur-fast) var(--ease-out)",
        }}
      >
        {content}
      </span>
    </span>
  );
}
