/**
 * Premium ebook / wellness-product card with silver rim and shine hover.
 * @startingPoint section="Components" subtitle="Premium ebook & product card" viewport="360x420"
 */
export interface ProductCardProps {
  /** Eyebrow kind label: "Ebook", "Guide", "Video course", "Product". */
  kind?: string;
  title: string;
  description?: string;
  /** Display string, e.g. "฿390". */
  price?: string;
  oldPrice?: string;
  /** Cover image URL; omit for the calm green placeholder slot. */
  image?: string;
  /** Lucide icon for the placeholder slot. */
  icon?: string;
  /** Silver rim + Premium badge + shine (default true). */
  premium?: boolean;
  cta?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
