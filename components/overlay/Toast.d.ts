/** Toast notice (charcoal, calm). */
export interface ToastProps {
  tone?: "default" | "success" | "danger";
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  /** "fixed" pins to bottom-center of the viewport. */
  position?: "static" | "fixed";
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
