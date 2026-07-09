"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Calendar, ArrowRight, Stethoscope } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useLanguage } from "@/context/LanguageContext";

const heroSlides = [
  { id: 1, image: "/images/hero/1.webp" },
  { id: 2, image: "/images/hero/2.webp" },
  { id: 3, image: "/images/hero/3.webp" },
];

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 250]);

  return (
    <section id="hero" className="relative container">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000}
        className="w-full h-[80vh] min-h-0 sm:min-h-[500px] hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full overflow-hidden">
              <motion.div className="absolute inset-0 scale-110" style={{ y: parallaxY }}>
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md border border-white/20 text-white/90">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {t.heroBadge}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                  >
                    {t.heroTitle}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg text-white/80 max-w-xl font-medium"
                  >
                    {t.heroDesc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center gap-4 flex-wrap pt-2"
                  >
                    <Link
                      href="/appointment"
                      className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-black text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-lg"
                    >
                      <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                      {t.bookBtn}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/departments"
                      className="group flex items-center gap-1.5 text-sm font-bold text-white border border-white/30 rounded-full px-6 py-4 hover:bg-secondary hover:border-secondary hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Stethoscope className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                      {t.heroDocButton}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
