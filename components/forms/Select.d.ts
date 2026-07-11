/** Styled native select. options accept strings or {value,label}. */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  help?: string;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}
