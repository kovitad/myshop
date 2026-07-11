/** Topic chip — selectable filter or removable token. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  /** Shows an × affordance. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}
