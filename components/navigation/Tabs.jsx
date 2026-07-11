import React from "react";

/** Underline tabs. items: string[] or {id,label}[]. */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const norm = items.map((i) => (typeof i === "string" ? { id: i, label: i } : i));
  const [internal, setInternal] = React.useState(defaultValue ?? (norm[0] && norm[0].id));
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const [hovered, setHovered] = React.useState(null);
  const pick = (id) => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return (
    <div role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--border-hairline)", ...style }}>
      {norm.map((t) => {
        const on = current === t.id;
        const hov = hovered === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            type="button"
            onClick={() => pick(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              appearance: "none", background: "transparent", border: 0, cursor: "pointer",
              padding: "12px 14px", marginBottom: -1,
              font: `${on ? 600 : 500} var(--text-sm)/1 var(--font-sans)`,
              color: on ? "var(--green-700)" : hov ? "var(--text-body)" : "var(--text-muted)",
              borderBottom: `2px solid ${on ? "var(--green-700)" : hov ? "var(--silver-300)" : "transparent"}`,
              transition: "color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
              whiteSpace: "nowrap",
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
