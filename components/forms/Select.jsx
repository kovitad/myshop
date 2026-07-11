import React from "react";

/** Styled native select with chrome chevron. */
export function Select({ label, options = [], help, style, selectStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", gap: 6, font: "500 var(--text-sm)/1.3 var(--font-sans)", color: "var(--text-heading)", ...style }}>
      {label}
      <span style={{ position: "relative", display: "block" }}>
        <select
          id={id}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%", boxSizing: "border-box",
            height: 44,
            padding: "0 40px 0 14px",
            borderRadius: "var(--radius-md)",
            border: `1px solid ${focus ? "var(--green-500)" : "var(--border-silver)"}`,
            outline: "none",
            boxShadow: focus ? "0 0 0 3px rgba(42,99,85,0.14)" : "var(--inset-sheen)",
            background: "var(--surface-raised)",
            font: "400 var(--text-md)/1 var(--font-sans)",
            color: "var(--text-body)",
            appearance: "none", WebkitAppearance: "none",
            cursor: "pointer",
            transition: "border-color var(--dur-fast) var(--ease-out)",
            ...selectStyle,
          }}
          {...rest}
        >
          {options.map((o) => {
            const v = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={v.value} value={v.value}>{v.label}</option>;
          })}
        </select>
        <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--silver-700)", fontSize: 11, lineHeight: 1 }}>▾</span>
      </span>
      {help && <span style={{ font: "400 var(--text-xs)/1.4 var(--font-sans)", color: "var(--text-muted)" }}>{help}</span>}
    </label>
  );
}
