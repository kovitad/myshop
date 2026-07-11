import React from "react";

const SIZES = { sm: { h: 36, px: 16, fs: 14 }, md: { h: 44, px: 22, fs: 15 }, lg: { h: 52, px: 28, fs: 16 } };

/** KOVITAD pill button. variants: primary | secondary | ghost | chrome | dark */
export function Button({ variant = "primary", size = "md", icon, iconRight, disabled, fullWidth, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;

  const variants = {
    primary: {
      background: press ? "var(--green-900)" : hover ? "var(--green-600)" : "var(--green-700)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
    },
    secondary: {
      background: hover ? "var(--silver-50)" : "var(--surface-raised)",
      color: "var(--green-700)",
      border: `1px solid var(${hover ? "--border-silver-strong" : "--border-silver"})`,
      boxShadow: "var(--shadow-xs)",
    },
    ghost: {
      background: hover ? "rgba(23,63,53,0.06)" : "transparent",
      color: "var(--green-700)",
      border: "1px solid transparent",
    },
    chrome: {
      background: "var(--grad-chrome)",
      color: "var(--charcoal-800)",
      border: "1px solid var(--silver-400)",
      boxShadow: hover ? "var(--shadow-silver)" : "var(--inset-sheen), var(--shadow-xs)",
    },
    dark: { /* for use on green/charcoal surfaces */
      background: hover ? "rgba(238,241,243,0.16)" : "rgba(238,241,243,0.08)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-hairline-dark)",
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={variant === "primary" || variant === "chrome" ? "k-shine" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: s.h,
        padding: `0 ${s.px}px`,
        borderRadius: "var(--radius-pill)",
        font: `600 ${s.fs}px/1 var(--font-sans)`,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? "translateY(1px)" : "none",
        transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
