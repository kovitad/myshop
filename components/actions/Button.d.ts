/**
 * KOVITAD pill button — silver shine sweep on hover for primary/chrome.
 * @startingPoint section="Components" subtitle="Pill CTA with silver shine hover" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual style. `chrome` is the premium metallic CTA; `dark` sits on green/charcoal surfaces. */
  variant?: "primary" | "secondary" | "ghost" | "chrome" | "dark";
  size?: "sm" | "md" | "lg";
  /** Leading icon node (use <Icon name="…" size={16} />). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
