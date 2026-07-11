/** Modal dialog. Render conditionally; Escape and scrim-click call onClose. */
export interface DialogProps {
  title?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px (default 480). */
  width?: number;
  /** Right-aligned action row, e.g. <Button>…</Button> nodes. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
