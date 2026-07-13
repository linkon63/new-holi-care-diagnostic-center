"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Facebook, Calendar, GraduationCap, Mail, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import type { TranslationType } from "@/lang";
import doctorsData from "@/data/doctors.json";

export default function ProfessionalDoctors({ t, lang }: { t: TranslationType; lang: string }) {
  const { doctorsSection } = t;
  const doctors = lang === "en" ? doctorsData.doctors : doctorsData.doctors.map(d => ({
    ...d,
    name: d.name_bn,
    specialty: d.specialty_bn,
    education: d.education_bn,
    phone: d.phone_bn,
    quote: d.quote_bn,
    desc: d.desc_bn,
  }));

  return (
    <section className="bg-secondary/5 py-20 relative overflow-hidden">
      <div className="container relative">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center mb-14 space-y-5">
          <span className="text-sm text-white bg-primary px-4 py-1.5 rounded-full uppercase tracking-wider">
            {doctorsSection.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight max-w-2xl">
            {doctorsSection.heading}
          </h2>
        </div>

        {/* Outer Card Container with Border */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            speed={800}
          >
            {doctors.map((doctor: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="grid md:grid-cols-2 gap-0 items-stretch">
                  {/* Info Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 rounded-md text-sm bg-[#D1E0E6] text-[#034668] font-medium w-fit mb-4">
                      {doctor.specialty}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-3">
                      {doctor.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-[#4A5D6B] mb-3">
                      <GraduationCap className="w-4 h-4 shrink-0" />
                      <span>{doctor.education}</span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-[#4A5D6B] mb-5">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>{doctor.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{doctor.phone}</span>
                      </div>
                    </div>

                    <p className="text-base text-[#4A5D6B] leading-relaxed mb-5">
                      {doctor.desc}
                    </p>

                    <blockquote className="text-base md:text-lg text-[#1A2B3C] italic mb-6 border-l-4 border-[#0367E1] pl-4">
                      &ldquo;{doctor.quote}&rdquo;
                    </blockquote>

                    <Link
                      href="/appointment"
                      className="inline-flex items-center gap-2 w-fit text-secondary font-semibold text-sm hover:text-secondary-hover transition-all mb-6"
                    >
                      <Calendar className="w-4 h-4" />
                      {t.bookBtn}
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex gap-4 text-[#4A5D6B]">
                      <Facebook className="w-5 h-5 hover:text-[#0367E1] cursor-pointer transition-colors" />
                      <Twitter className="w-5 h-5 hover:text-[#0367E1] cursor-pointer transition-colors" />
                      <Linkedin className="w-5 h-5 hover:text-[#0367E1] cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative w-full h-[400px] md:h-full min-h-[300px] ">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover rounded-sm"
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover transition-all shadow-lg"
          >
            {doctorsSection.seeAllBtn}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
