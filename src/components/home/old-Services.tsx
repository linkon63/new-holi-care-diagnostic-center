"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { scrollCarousel } from "@/utils/carousel";
import { useBooking } from "@/components/layout/old-LayoutClient";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { handleBookClick } = useBooking();

  const serviceImages = [
    "/images/real-images/lab_interior.jpg",
    "/images/real-images/waiting_room.jpg",
    "/images/real-images/building_front.jpg"
  ];

  const services = t.servicesList.map((service, index) => ({
    ...service,
    image: serviceImages[index] || "/images/real-images/lab_interior.jpg"
  }));

  return (
    <section id="services" className="container py-20">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-5 flex items-center">
          <span className="text-sm font-black text-emerald-800 bg-accent/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
            {t.servicesTitlePre}
          </span>
        </div>
        <div className="lg:col-span-7 text-left space-y-4">
          <p className="text-xl sm:text-2xl font-black text-foreground leading-snug">
            {t.servicesDesc}
          </p>
          <div>
            <button
              onClick={() => handleBookClick()}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground font-black text-xs px-5 py-2.5 rounded-full border border-border transition-all cursor-pointer"
            >
              {t.servicesAllBtn}
              <span className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[420px] md:w-[450px] relative aspect-4/3 rounded-3xl overflow-hidden group shadow-sm bg-muted/10 border border-border/20"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />

              <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                {service.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-white/40 backdrop-blur-md text-[10px] text-foreground font-bold px-3 py-1 rounded-full shadow-xs border border-white/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-white/40 flex justify-between items-center shadow-md">
                <span className="font-black text-base text-foreground">
                  {service.title}
                </span>
                <button
                  onClick={() => handleBookClick(service.title)}
                  className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center transition-transform group-hover:translate-x-1 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 text-emerald-800" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-3 mt-6">
          <button
            onClick={() => scrollCarousel(scrollRef, "left")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollCarousel(scrollRef, "right")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
