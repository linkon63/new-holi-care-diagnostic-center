"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, Search, ChevronDown } from "lucide-react";
import servicesData from "@/data/services.json";
import type { PriceListProps } from "@/types/price";
import {
  flattenServiceItems,
  extractCategories,
  filterItems,
  calculatePriceStats,
  formatPrice,
} from "@/utils/price";
import PriceTable from "@/components/prices/PriceTable";
import PriceCta from "@/components/prices/PriceCta";

export default function PriceList({ t, lang }: PriceListProps) {
  const { priceListPage } = t;
  const isBn = lang === "bn";
  const { diagnosticServices } = servicesData;

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => extractCategories(diagnosticServices, isBn),
    [diagnosticServices, isBn]
  );

  const allItems = useMemo(
    () => flattenServiceItems(diagnosticServices, isBn),
    [diagnosticServices, isBn]
  );

  const filteredItems = useMemo(
    () => filterItems(allItems, activeCategory, searchQuery),
    [allItems, activeCategory, searchQuery]
  );

  const stats = useMemo(
    () => calculatePriceStats(allItems, diagnosticServices.length),
    [allItems, diagnosticServices]
  );

  const formatPriceFn = useCallback(
    (price: number) => formatPrice(price, lang),
    [lang]
  );

  return (
    <div className="min-h-screen bg-primary/5">
      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{t.priceList}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-8">
          {priceListPage.title}
        </h1>

        {/* Search + Category Dropdown */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={priceListPage.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-4 rounded-sm bg-white border border-border/60 text-sm font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
            />
            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/30 transition-colors cursor-pointer"
              >
                <span className="text-xs text-muted-foreground">&times;</span>
              </button>
            )}
          </div>

          <div className="relative shrink-0">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none bg-white border border-border/60 rounded-sm px-4 py-4 pr-9 text-sm font-semibold text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
            >
              <option value="all">{priceListPage.allCategories}</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Price Table */}
        <PriceTable
          items={filteredItems}
          lang={lang}
          labels={{
            testName: priceListPage.testName,
            category: priceListPage.category,
            price: priceListPage.price,
            contactForPricing: priceListPage.contactForPricing,
            noResults: priceListPage.noResults,
          }}
        />

        {/* CTA Banner */}
        <PriceCta
          title={priceListPage.ctaTitle}
          desc={priceListPage.ctaDesc}
          buttonText={priceListPage.bookAppointment}
        />
      </div>
    </div>
  );
}
