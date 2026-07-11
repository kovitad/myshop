/** "KOVITAD" in Marcellus + ".shop" in Figtree silver — use wherever a logo would go. */
export interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "xl";
  /** "light" = green on ivory; "dark" = ivory on green/charcoal. */
  tone?: "light" | "dark";
  /** Show the ".shop" suffix (default true). */
  withDomain?: boolean;
  style?: React.CSSProperties;
}
