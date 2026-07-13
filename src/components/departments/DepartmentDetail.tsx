"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Layers,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import type { DepartmentDetailProps } from "@/types/department";
import { getCategoryColors } from "@/utils/price";
import PriceTable from "@/components/prices/PriceTable";
import PriceCta from "@/components/prices/PriceCta";

export default function DepartmentDetail({
  service,
  t,
  lang,
}: DepartmentDetailProps) {
  const { departmentDetail } = t;
  const isBn = lang === "bn";

  const title = isBn ? service.title_bn : service.title;
  const description = isBn ? service.description_bn : service.description;
  const facility = isBn ? service.facility_bn : service.facility;
  const keyPoints = isBn ? service.keyPoints_bn : service.keyPoints;
  const category = isBn ? service.category_bn : service.category;
  const testCount = service.items.length;
  const colors = getCategoryColors(service.id);

  return (
    <div className="min-h-screen bg-primary/5">
      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/departments"
            className="hover:text-foreground transition-colors"
          >
            {t.departments}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{title}</span>
        </nav>

        {/* Title + Category Badge */}
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            {title}
          </h1>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${colors.activeBg} text-white shrink-0`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed mb-8">
          {description}
        </p>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column — Quick Info + Key Highlights + CTA */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-6 space-y-5"
            >
              {/* Category */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {departmentDetail.categoryLabel}
                  </p>
                  <p className="text-sm font-bold text-[#034668]">{category}</p>
                </div>
              </div>

              {/* Total Tests */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {departmentDetail.testAndPricing}
                  </p>
                  <p className="text-sm font-bold text-[#034668]">
                    {departmentDetail.totalTests.replace("{n}", String(testCount))}
                  </p>
                </div>
              </div>

              {/* Facility */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {departmentDetail.facilityLabel}
                  </p>
                  <p className="text-sm text-[#4A5D6B] leading-relaxed">
                    {facility}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-6"
            >
              <h2 className="text-lg font-bold text-[#034668] mb-4">
                {departmentDetail.keyHighlights}
              </h2>
              <div className="space-y-3">
                {keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-[#4A5D6B] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA + Back Link */}
            <div className="space-y-4">
              <PriceCta
                title={departmentDetail.ctaTitle}
                desc={departmentDetail.ctaDesc}
                buttonText={departmentDetail.bookAppointment}
              />
              <div className="flex justify-center">
                <Link
                  href="/departments"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#034668] hover:text-secondary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  {departmentDetail.backToDepartments}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column — Price Table */}
          <div className="lg:col-span-2">
            {/* Price Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-[#034668] mb-5">
                {departmentDetail.testAndPricing}
              </h2>
              <PriceTable
                items={service.items.map((item) => ({
                  name: isBn ? item.name_bn : item.name,
                  price: item.price,
                  categoryId: service.id,
                  categoryTitle: isBn ? service.title_bn : service.title,
                }))}
                lang={lang}
                labels={{
                  testName: departmentDetail.testName,
                  category: departmentDetail.category,
                  price: departmentDetail.testPrice,
                  contactForPricing: departmentDetail.contactForPricing,
                  noResults: "",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
