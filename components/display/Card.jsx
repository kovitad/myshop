import React from "react";

/** Surface card. premium=true adds the silver rim + shine hover. */
export function Card({ premium, interactive, padding = 24, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return (
    <div
      className={premium ? "k-shine" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-raised)",
        border: premium ? `1px solid var(${lift ? "--border-silver-strong" : "--border-silver"})` : "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        boxShadow: premium ? "var(--shadow-silver)" : lift ? "var(--shadow-md)" : "var(--shadow-sm)",
        padding,
        transform: lift ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
