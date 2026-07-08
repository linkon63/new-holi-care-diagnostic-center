"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/components/layout/old-LayoutClient";

export default function Hero() {
  const { t } = useLanguage();
  const { handleBookClick } = useBooking();

  return (
    <section id="hero" className="container pt-28 pb-10">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3.5">
              <div className="flex -space-x-3.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                  alt="Patient 1"
                />  
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  alt="Patient 2"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Patient 3"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-foreground leading-none">{t.heroPatientsCount}</span>
                <span className="text-[11px] font-bold text-muted-foreground mt-0.5">{t.heroPatientsSub}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] max-w-2xl">
              {t.heroTitle}
            </h1>

            <button
              onClick={() => handleBookClick()}
              className="px-8 py-4 rounded-full bg-primary text-white text-accent-foreground font-black text-sm hover:bg-accent/90 transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              {t.bookBtn}
            </button>

            <div className="grid grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-border/70 w-full max-w-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-black text-foreground">{t.heroReviewRating}</span>
                  <div className="flex text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <span className="text-xs font-bold text-muted-foreground mt-1">{t.heroReviewSub}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-foreground">{t.heroExpYears}</span>
                <span className="text-xs font-bold text-muted-foreground mt-1">{t.heroExpSub}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm bg-muted/20">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt={t.heroDocAlt}
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute bottom-6 right-6">
              <a
                href="#services"
                className="bg-white/90 backdrop-blur-md hover:bg-white text-foreground px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              >
                {t.heroDocButton} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
