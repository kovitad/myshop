/** Underline tabs — green active underline, silver hover underline. */
export interface TabsProps {
  items?: Array<string | { id: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
