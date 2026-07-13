import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PriceHeroProps } from "@/types/price";

/** Hero banner for the price list page */
export default function PriceHero({
  badge,
  title,
  desc,
  homeLabel,
  priceListLabel,
}: PriceHeroProps) {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/booking-page/booking-appointment.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-white/60 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            {homeLabel}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{priceListLabel}</span>
        </nav>

        {/* Title block */}
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">
            {badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
            {title}
          </h1>
          <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
