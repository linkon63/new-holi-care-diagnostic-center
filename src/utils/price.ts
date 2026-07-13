import type { PriceListItem, PriceCategory, PriceStats, CategoryColor } from "@/types/price";

// Color mapping for each service category
const categoryColors: Record<string, CategoryColor> = {
  pathology: {
    border: "border-blue-400",
    text: "text-blue-700",
    activeBg: "bg-blue-600",
    dot: "bg-blue-500",
  },
  ultrasonogram: {
    border: "border-purple-400",
    text: "text-purple-700",
    activeBg: "bg-purple-600",
    dot: "bg-purple-500",
  },
  "ct-scan": {
    border: "border-indigo-400",
    text: "text-indigo-700",
    activeBg: "bg-indigo-600",
    dot: "bg-indigo-500",
  },
  "digital-xray": {
    border: "border-cyan-400",
    text: "text-cyan-700",
    activeBg: "bg-cyan-600",
    dot: "bg-cyan-500",
  },
  cardiology: {
    border: "border-rose-400",
    text: "text-rose-700",
    activeBg: "bg-rose-600",
    dot: "bg-rose-500",
  },
  endoscopy: {
    border: "border-amber-400",
    text: "text-amber-700",
    activeBg: "bg-amber-600",
    dot: "bg-amber-500",
  },
  eeg: {
    border: "border-teal-400",
    text: "text-teal-700",
    activeBg: "bg-teal-600",
    dot: "bg-teal-500",
  },
  "surgical-maternity": {
    border: "border-orange-400",
    text: "text-orange-700",
    activeBg: "bg-orange-600",
    dot: "bg-orange-500",
  },
};

// Default color fallback for unknown categories
const defaultColors: CategoryColor = {
  border: "border-gray-300",
  text: "text-gray-700",
  activeBg: "bg-gray-600",
  dot: "bg-gray-500",
};

// Get color config for a category
export function getCategoryColors(categoryId: string): CategoryColor {
  return categoryColors[categoryId] || defaultColors;
}

// Format price with taka symbol and locale
export function formatPrice(price: number | string, lang: "en" | "bn"): string {
  if (typeof price === "string") return price;
  return lang === "bn"
    ? `\u09F3${price.toLocaleString("bn-BD")}`
    : `\u09F3${price.toLocaleString("en-US")}`;
}

// Flatten all service categories into a single array with category info
export function flattenServiceItems(
  diagnosticServices: Array<{
    id: string;
    title: string;
    title_bn: string;
    items: Array<{ name: string; name_bn: string; price: number | string }>;
  }>,
  isBn: boolean
): PriceListItem[] {
  const items: PriceListItem[] = [];

  diagnosticServices.forEach((cat) => {
    cat.items.forEach((item) => {
      items.push({
        name: isBn ? item.name_bn : item.name,
        price: item.price,
        categoryId: cat.id,
        categoryTitle: isBn ? cat.title_bn : cat.title,
      });
    });
  });

  return items;
}

// Extract category list with titles and counts
export function extractCategories(
  diagnosticServices: Array<{
    id: string;
    title: string;
    title_bn: string;
    items: unknown[];
  }>,
  isBn: boolean
): PriceCategory[] {
  return diagnosticServices.map((cat) => ({
    id: cat.id,
    title: isBn ? cat.title_bn : cat.title,
    itemCount: cat.items.length,
  }));
}

// Filter items by category and search query
export function filterItems(
  allItems: PriceListItem[],
  activeCategory: string,
  searchQuery: string
): PriceListItem[] {
  let items = allItems;

  if (activeCategory !== "all") {
    items = items.filter((item) => item.categoryId === activeCategory);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    items = items.filter((item) => item.name.toLowerCase().includes(query));
  }

  return items;
}

// Calculate price stats from all items
export function calculatePriceStats(
  allItems: PriceListItem[],
  categoryCount: number
): PriceStats {
  const pricedItems = allItems.filter((item) => typeof item.price === "number");
  const prices = pricedItems.map((item) => item.price as number);

  return {
    total: allItems.length,
    categories: categoryCount,
    lowest: prices.length > 0 ? Math.min(...prices) : 0,
    highest: prices.length > 0 ? Math.max(...prices) : 0,
  };
}
