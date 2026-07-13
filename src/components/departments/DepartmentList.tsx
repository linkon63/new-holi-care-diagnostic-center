"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, Search, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";
import type { TranslationType } from "@/lang";
import ServiceCard from "@/components/shared/ServiceCard";
import PriceCta from "@/components/prices/PriceCta";
import { extractDepartmentCategories, filterDepartments } from "@/utils/department";

export default function DepartmentList({
  t,
  lang,
}: {
  t: TranslationType;
  lang: "en" | "bn";
}) {
  const { diagnosticServices } = servicesData;
  const { departmentsPage } = t;
  const isBn = lang === "bn";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => extractDepartmentCategories(diagnosticServices, isBn),
    [diagnosticServices, isBn]
  );

  const filtered = useMemo(
    () =>
      filterDepartments(diagnosticServices, activeCategory, searchQuery, isBn),
    [diagnosticServices, activeCategory, searchQuery, isBn]
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
          <span className="text-foreground">{t.departments}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-8">
          {departmentsPage.title}
        </h1>

        {/* Search + Category Dropdown */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={departmentsPage.searchPlaceholder}
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
              <option value="all">{departmentsPage.allCategories}</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                image={service.image || "/placeholder-service.jpg"}
                title={isBn ? service.title_bn : service.title}
                description={isBn ? service.description_bn : service.description}
                href={`/departments/${service.id}`}
                imageHeight="h-52"
                footer={
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {departmentsPage.itemsCount.replace(
                        "{n}",
                        String(service.items.length)
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#034668] group-hover:text-secondary transition-colors duration-300">
                      {departmentsPage.viewDetails}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm font-medium">
              {isBn
                ? "আপনার অনুসন্ধানে কোনো বিভাগ পাওয়া যায়নি।"
                : "No departments found matching your search."}
            </p>
          </div>
        )}

        {/* CTA Banner */}
        <PriceCta
          title={departmentsPage.ctaTitle}
          desc={departmentsPage.ctaDesc}
          buttonText={departmentsPage.bookAppointment}
        />
      </div>
    </div>
  );
}
