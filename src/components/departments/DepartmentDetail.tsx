"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { DepartmentDetailProps } from "@/types/department";
import { formatPrice } from "@/utils/price";

/** Department detail page */
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-cover bg-center h-[340px] md:h-[400px]">
        <Image
          src={service.image || "/placeholder-service.jpg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container pb-10 md:pb-14">
            <nav className="flex items-center gap-2 text-sm font-semibold text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                {t.home}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href="/departments"
                className="hover:text-white transition-colors"
              >
                {t.departments}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{title}</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {title}
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 md:py-16 space-y-10">
        {/* Facility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-sm p-6 md:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-[#034668]">
              {departmentDetail.facility}
            </h2>
          </div>
          <p className="text-[#4A5D6B] leading-relaxed">{facility}</p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-sm p-6 md:p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-[#034668] mb-5">
            {departmentDetail.keyHighlights}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* Price Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-sm overflow-hidden shadow-sm"
        >
          <div className="p-6 md:p-8 pb-0">
            <h2 className="text-xl font-bold text-[#034668]">
              {departmentDetail.testAndPricing}
            </h2>
          </div>
          <div className="p-6 md:p-8 pt-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-[#034668] w-12">
                      {departmentDetail.testNo}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-[#034668]">
                      {departmentDetail.testName}
                    </th>
                    <th className="text-right py-3 px-4 font-bold text-[#034668]">
                      {departmentDetail.testPrice}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.items.map((item, i) => {
                    const isContact = typeof item.price === "string";
                    const testName = isBn ? item.name_bn : item.name;

                    return (
                      <tr
                        key={i}
                        className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3.5 px-4 text-muted-foreground font-medium">
                          {i + 1}
                        </td>
                        <td className="py-3.5 px-4 text-foreground font-medium">
                          {testName}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          {isContact ? (
                            <span className="inline-flex items-center text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                              {departmentDetail.contactForPricing}
                            </span>
                          ) : (
                            <span className="font-bold text-[#034668]">
                              {formatPrice(item.price, lang)}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#034668] to-[#0a5f8f] rounded-sm p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            {departmentDetail.ctaTitle}
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-6">
            {departmentDetail.ctaDesc}
          </p>
          <Link
            href="/appointment"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            {departmentDetail.bookAppointment}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Back Link */}
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
  );
}
