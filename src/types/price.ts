// Price list item flattened from all service categories
export interface PriceListItem {
  name: string;
  price: number | string;
  categoryId: string;
  categoryTitle: string;
}

// Category with display title and item count
export interface PriceCategory {
  id: string;
  title: string;
  itemCount: number;
}

// Stats for the price list overview
export interface PriceStats {
  total: number;
  categories: number;
  lowest: number;
  highest: number;
}

// Color config for category badges
export interface CategoryColor {
  border: string;
  text: string;
  activeBg: string;
  dot: string;
}

// Props for the price list search filter bar
export interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  categories: PriceCategory[];
  filteredCount: number;
  totalCount: number;
  allLabel: string;
  searchPlaceholder: string;
  isBn: boolean;
}

// Props for the price list component
export interface PriceListProps {
  t: import("@/lang").TranslationType;
  lang: "en" | "bn";
}

// Props for the price list hero section
export interface PriceHeroProps {
  badge: string;
  title: string;
  desc: string;
  homeLabel: string;
  priceListLabel: string;
}

// Props for the price table component
export interface PriceTableProps {
  items: PriceListItem[];
  lang: "en" | "bn";
  labels: {
    testName: string;
    category: string;
    price: string;
    contactForPricing: string;
    noResults: string;
  };
}

// Props for the price list CTA banner
export interface PriceCtaProps {
  title: string;
  desc: string;
  buttonText: string;
}
