"use client";

import { useState, useMemo, useCallback } from "react";
import servicesData from "@/data/services.json";
import type { PriceListProps } from "@/types/price";
import {
  flattenServiceItems,
  extractCategories,
  filterItems,
  calculatePriceStats,
  formatPrice,
} from "@/utils/price";
import { useScrollPosition } from "@/utils/scroll";
import PriceHero from "@/components/prices/PriceHero";
import SearchFilterBar from "@/components/shared/SearchFilterBar";
import PriceTable from "@/components/prices/PriceTable";
import PriceCta from "@/components/prices/PriceCta";

export default function PriceList({ t, lang }: PriceListProps) {
  const { priceListPage } = t;
  const isBn = lang === "bn";
  const { diagnosticServices } = servicesData;

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const isSticky = useScrollPosition(380);

  // Derived data — all memoised
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

  // Locale-aware price formatter
  const formatPriceFn = useCallback(
    (price: number) => formatPrice(price, lang),
    [lang]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Hero banner */}
      <PriceHero
        badge={priceListPage.badge}
        title={priceListPage.title}
        desc={priceListPage.desc}
        homeLabel={t.home}
        priceListLabel={t.priceList}
      />

      {/* Sticky search + category filter bar */}
      <div
        className={`transition-all duration-300 ${
          isSticky
            ? "sticky top-[60px] z-40 bg-white/95 backdrop-blur-sm shadow-md border-b border-border/60"
            : "relative bg-white border border-border/60"
        } rounded-sm mt-8 md:mt-10`}
      >
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categories={categories}
          filteredCount={filteredItems.length}
          totalCount={stats.total}
          allLabel={priceListPage.allCategories}
          searchPlaceholder={priceListPage.searchPlaceholder}
          isBn={isBn}
        />
      </div>

      {/* Data table + CTA */}
      <section className="container pb-16 md:pb-20 mt-6">
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
        <PriceCta
          title={priceListPage.ctaTitle}
          desc={priceListPage.ctaDesc}
          buttonText={priceListPage.bookAppointment}
        />
      </section>
    </div>
  );
}
