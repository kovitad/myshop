/** Radio group; options accept strings or {value,label}. */
export interface RadioProps {
  name?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "column" | "row";
  style?: React.CSSProperties;
}
