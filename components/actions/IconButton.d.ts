/** Round icon-only button (44px default hit target). */
export interface IconButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  /** Accessible name — required. */
  label: string;
  /** An <Icon/> element. */
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
