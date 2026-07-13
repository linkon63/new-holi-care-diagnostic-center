"use client";

import { SearchX } from "lucide-react";
import { motion } from "framer-motion";
import type { PriceTableProps } from "@/types/price";
import { getCategoryColors, formatPrice as formatPriceUtil } from "@/utils/price";

export default function PriceTable({ items, lang, labels }: PriceTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-sm overflow-hidden shadow-sm border border-border/60"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-border bg-muted/30">
              <th className="text-left py-3.5 px-6 md:px-8 font-bold text-[#034668] w-12">#</th>
              <th className="text-left py-3.5 px-4 font-bold text-[#034668]">
                {labels.testName}
              </th>
              <th className="text-left py-3.5 px-4 font-bold text-[#034668] hidden sm:table-cell">
                {labels.category}
              </th>
              <th className="text-right py-3.5 px-6 md:px-8 font-bold text-[#034668]">
                {labels.price}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, i) => {
                const isContact = typeof item.price === "string";
                const colors = getCategoryColors(item.categoryId);

                return (
                  <tr
                    key={`${item.categoryId}-${i}`}
                    className="border-b border-border/40 last:border-0 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-3.5 px-6 md:px-8 text-muted-foreground font-medium">
                      {i + 1}
                    </td>
                    <td className="py-3.5 px-4 text-foreground font-medium">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4 hidden sm:table-cell">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm ${colors.activeBg} text-white`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                        {item.categoryTitle}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 md:px-8 text-right">
                      {isContact ? (
                        <span className="inline-flex items-center text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-sm border border-amber-200">
                          {labels.contactForPricing}
                        </span>
                      ) : (
                        <span className="font-bold text-[#034668]">
                          {formatPriceUtil(item.price, lang)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <SearchX className="w-12 h-12 text-muted-foreground/40" />
                    <p className="text-sm font-semibold text-muted-foreground">
                      {labels.noResults}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
