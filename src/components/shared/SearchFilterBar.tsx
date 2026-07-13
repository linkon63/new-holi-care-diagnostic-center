"use client";

import { Search, X } from "lucide-react";
import type { SearchFilterBarProps } from "@/types/price";
import { getCategoryColors } from "@/utils/price";

export default function SearchFilterBar({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories,
  filteredCount,
  totalCount,
  allLabel,
  searchPlaceholder,
  isBn,
}: SearchFilterBarProps) {
  return (
    <div className="container">
      {/* Search row */}
      <div className="flex items-center gap-4 py-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-sm bg-muted/40 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
          />
          {searchQuery.length > 0 && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/30 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-muted-foreground shrink-0">
          <span className="text-foreground">{filteredCount}</span>
          <span>/</span>
          <span>{totalCount}</span>
          <span className="text-xs font-medium">{isBn ? "টেস্ট" : "tests"}</span>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-border/60" />

      {/* Category pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-3.5">
        {/* All button */}
        <button
          onClick={() => onCategoryChange("all")}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-all duration-200 cursor-pointer ${
            activeCategory === "all"
              ? "bg-secondary text-white shadow-md scale-[1.02]"
              : "bg-white border-2 border-secondary/30 text-secondary hover:border-secondary/60 hover:shadow-sm"
          }`}
        >
          {allLabel}
          <span
            className={`text-xs font-bold px-1.5 py-0.5 rounded-sm ${
              activeCategory === "all"
                ? "bg-white/20 text-white"
                : "bg-secondary/10 text-secondary"
            }`}
          >
            {totalCount}
          </span>
        </button>

        {/* Category buttons */}
        {categories.map((cat) => {
          const colors = getCategoryColors(cat.id);
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? `${colors.activeBg} text-white shadow-md scale-[1.02]`
                  : `bg-white border-2 ${colors.border} ${colors.text} hover:shadow-sm`
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  isActive ? "bg-white/70" : colors.dot
                }`}
              />
              {cat.title}
              <span
                className={`text-xs font-bold px-1.5 py-0.5 rounded-sm ${
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {cat.itemCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
