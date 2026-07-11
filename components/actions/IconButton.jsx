import React from "react";

const SIZES = { sm: 36, md: 44, lg: 52 };

/** Round icon-only button. Pass an <Icon/> as children. */
export function IconButton({ variant = "secondary", size = "md", label, children, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: press ? "var(--green-900)" : hover ? "var(--green-600)" : "var(--green-700)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent",
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
    dark: {
      background: hover ? "rgba(238,241,243,0.16)" : "rgba(238,241,243,0.08)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-hairline-dark)",
    },
  };
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: d, height: d, flex: "none",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? "translateY(1px)" : "none",
        transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
