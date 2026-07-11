/** Small uppercase status pill. `silver` = premium marker. */
export interface BadgeProps {
  tone?: "green" | "silver" | "ivory" | "dark" | "success" | "warning" | "danger";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
