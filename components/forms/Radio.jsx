import React from "react";

/** Radio group. */
export function Radio({ name, options = [], value, defaultValue, onChange, direction = "column", style }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = (v) => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: direction, gap: direction === "column" ? 10 : 20, ...style }}>
      {options.map((o) => {
        const v = typeof o === "string" ? { value: o, label: o } : o;
        const on = current === v.value;
        return (
          <label key={v.value} style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", font: "400 var(--text-sm)/1.4 var(--font-sans)", color: "var(--text-body)", minHeight: 24 }}>
            <input type="radio" name={name} checked={on} onChange={() => pick(v.value)} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
            <span
              aria-hidden="true"
              style={{
                width: 20, height: 20, flex: "none", boxSizing: "border-box", borderRadius: "50%",
                border: `1px solid ${on ? "var(--green-700)" : "var(--border-silver-strong)"}`,
                background: "var(--surface-raised)", boxShadow: "var(--inset-sheen)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                transition: "border-color var(--dur-fast) var(--ease-out)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--green-700)", transform: on ? "scale(1)" : "scale(0)", transition: "transform var(--dur-fast) var(--ease-out)" }}></span>
            </span>
            {v.label}
          </label>
        );
      })}
    </div>
  );
}
