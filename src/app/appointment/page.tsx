"use client";

import Link from "next/link";
import AppointmentForm from "@/components/home/AppointmentForm";
import { useLanguage } from "@/context/LanguageContext";

export default function AppointmentPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/booking-page/booking-appointment.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm font-semibold text-white/70 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t.home}
            </Link>
            <span>/</span>
            <span className="text-white">{t.modalTitle}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">
              {t.quickApptTitle}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              {t.modalTitle}
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
              {t.modalDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container py-8 md:py-12 pb-20">
        <AppointmentForm showHeader={false} />
      </div>
    </div>
  );
}
