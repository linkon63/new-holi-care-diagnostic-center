"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import servicesData from "@/data/services.json";
import type { TranslationType } from "@/lang";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/shared/ServiceCard";

export default function Services({ t, lang }: { t: TranslationType; lang: "en" | "bn" }) {
  const { servicesSection } = t;
  const { diagnosticServices } = servicesData;
  const isBn = lang === "bn";

  return (
    <section className="bg-background py-20 font-manrope">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-5">
          <span className="text-sm text-white bg-primary px-4 py-1.5 rounded-full uppercase tracking-wider">
            {servicesSection.title}
          </span>
          <h2 className="text-4xl font-bold text-[#034668] tracking-tight leading-tight max-w-2xl">
            {servicesSection.heading}
          </h2>
          <p className="text-[#4A5D6B] text-sm sm:text-base leading-relaxed max-w-2xl">
            {servicesSection.desc}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            className=""
          >
            {diagnosticServices.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  image={service.image || "/placeholder-service.jpg"}
                  title={isBn ? service.title_bn : service.title}
                  description={isBn ? service.description_bn : service.description}
                  href={`/departments/${service.id}`}
                  imageHeight="h-64"
                  footer={
                    <span className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                      SEE MORE <ArrowRight className="w-4 h-4" />
                    </span>
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={cn(
              "swiper-prev",
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10",
              "w-10 h-10 rounded-full bg-white border border-border shadow-md",
              "flex items-center justify-center text-secondary hover:text-secondary-hover",
              "transition-all duration-200 hover:shadow-lg hover:-translate-x-3",
              "hidden lg:flex cursor-pointer"
            )}
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            className={cn(
              "swiper-next",
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10",
              "w-10 h-10 rounded-full bg-white border border-border shadow-md",
              "flex items-center justify-center text-secondary hover:text-secondary-hover",
              "transition-all duration-200 hover:shadow-lg hover:translate-x-3",
              "hidden lg:flex cursor-pointer"
            )}
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/departments"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            {servicesSection.seeAllBtn}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
