import React from "react";

/** Custom checkbox — green fill when checked, silver hairline when not. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, font: "400 var(--text-sm)/1.4 var(--font-sans)", color: "var(--text-body)", minHeight: 24, ...style }}>
      <input type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
      <span
        aria-hidden="true"
        style={{
          width: 20, height: 20, flex: "none", boxSizing: "border-box",
          borderRadius: 6,
          border: `1px solid ${on ? "var(--green-700)" : "var(--border-silver-strong)"}`,
          background: on ? "var(--green-700)" : "var(--surface-raised)",
          boxShadow: on ? "none" : "var(--inset-sheen)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          color: "var(--silver-100)",
          transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
        }}
      >
        {on && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6.2L5 8.7L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
