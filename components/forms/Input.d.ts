/** Text input with label, help and error. 44px tall, 12px radius, silver hairline border. */
export interface InputProps {
  label?: string;
  /** Muted helper text under the field. */
  help?: string;
  /** Error message; also turns the border red. */
  error?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
