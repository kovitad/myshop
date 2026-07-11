/** Warm-white surface card. */
export interface CardProps {
  /** Silver rim, silver shadow and shine sweep — for paid/featured content. */
  premium?: boolean;
  /** Lifts 2px with a deeper shadow on hover. */
  interactive?: boolean;
  padding?: number | string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
