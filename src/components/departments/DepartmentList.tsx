"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";
import type { TranslationType } from "@/lang";
import ServiceCard from "@/components/shared/ServiceCard";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/booking-page/booking-appointment.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t.home}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.departments}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">
              {departmentsPage.badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              {departmentsPage.title}
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
              {departmentsPage.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Department Cards */}
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {diagnosticServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </section>
    </div>
  );
}
