/** Lucide icon by kebab-case name, e.g. "book-open". Requires the Lucide CDN script. */
export interface IconProps {
  /** Lucide icon name in kebab-case (e.g. "leaf", "book-open", "arrow-right"). */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
