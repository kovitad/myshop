import React from "react";

/** Text input with label, help and error states. */
export function Input({ label, help, error, icon, type = "text", style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", gap: 6, font: "500 var(--text-sm)/1.3 var(--font-sans)", color: "var(--text-heading)", ...style }}>
      {label}
      <span style={{ position: "relative", display: "block" }}>
        {icon && (
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-faint)", display: "inline-flex" }}>{icon}</span>
        )}
        <input
          id={id}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%", boxSizing: "border-box",
            height: 44,
            padding: icon ? "0 14px 0 42px" : "0 14px",
            borderRadius: "var(--radius-md)",
            border: `1px solid ${error ? "var(--danger-600)" : focus ? "var(--green-500)" : "var(--border-silver)"}`,
            outline: "none",
            boxShadow: focus ? "0 0 0 3px rgba(42,99,85,0.14)" : "var(--inset-sheen)",
            background: "var(--surface-raised)",
            font: "400 var(--text-md)/1 var(--font-sans)",
            color: "var(--text-body)",
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
            ...inputStyle,
          }}
          {...rest}
        />
      </span>
      {(error || help) && (
        <span style={{ font: "400 var(--text-xs)/1.4 var(--font-sans)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>
          {error || help}
        </span>
      )}
    </label>
  );
}
