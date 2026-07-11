import React from "react";

/** Toggle switch — chrome track off, forest green on. */
export function Switch({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, font: "400 var(--text-sm)/1.4 var(--font-sans)", color: "var(--text-body)", ...style }}>
      <input type="checkbox" role="switch" checked={on} onChange={toggle} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
      <span
        aria-hidden="true"
        style={{
          width: 44, height: 24, flex: "none", boxSizing: "border-box",
          borderRadius: "var(--radius-pill)",
          border: `1px solid ${on ? "var(--green-700)" : "var(--silver-400)"}`,
          background: on ? "var(--green-700)" : "var(--grad-chrome-soft)",
          position: "relative",
          transition: "background var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)",
        }}
      >
        <span style={{
          position: "absolute", top: 2, left: on ? 22 : 2,
          width: 18, height: 18, borderRadius: "50%",
          background: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(30,40,36,0.25), var(--inset-sheen)",
          transition: "left var(--dur-med) var(--ease-out)",
        }}></span>
      </span>
      {label}
    </label>
  );
}
