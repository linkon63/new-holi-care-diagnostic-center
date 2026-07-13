"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { TranslationType } from "@/lang";
import PriceCta from "@/components/prices/PriceCta";

const iconMap = [
  "/icons/equipment.svg",
  "/icons/doctor.svg",
  "/icons/report.svg",
  "/icons/patient.svg",
];

const galleryImages = [
  { src: "/images/real-images/building_front.jpg", alt: "Building front", className: "col-span-1 row-span-2" },
  { src: "/images/real-images/lab_interior.jpg", alt: "Lab interior", className: "col-span-1 row-span-1" },
  { src: "/images/real-images/waiting_room.jpg", alt: "Waiting room", className: "col-span-1 row-span-1" },
  { src: "/images/real-images/price_list.jpg", alt: "Price list area", className: "col-span-1 row-span-1" },
  { src: "/images/real-images/building_front_2.jpeg", alt: "Building entrance", className: "col-span-1 row-span-1" },
  { src: "/images/real-images/building_woman.jpg", alt: "Our staff", className: "col-span-1 row-span-1" },
  { src: "/images/real-images/building_rickshaw.jpg", alt: "Street view", className: "col-span-1 row-span-1" },
];

export default function AboutPage({
  t,
}: {
  t: TranslationType;
}) {
  const { aboutPage } = t;

  const stats = [
    { num: t.aboutStat1Num, desc: t.aboutStat1Desc, icon: iconMap[0] },
    { num: t.aboutStat2Num, desc: t.aboutStat2Desc, icon: iconMap[1] },
    { num: t.aboutStat3Num, desc: t.aboutStat3Desc, icon: iconMap[2] },
    { num: t.aboutStat4Num, desc: t.aboutStat4Desc, icon: iconMap[3] },
  ];

  const values = [
    { title: aboutPage.value1Title, desc: aboutPage.value1Desc },
    { title: aboutPage.value2Title, desc: aboutPage.value2Desc },
    { title: aboutPage.value3Title, desc: aboutPage.value3Desc },
  ];

  return (
    <>
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-images/building_front.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm font-semibold text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t.home}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.about}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">
              {t.about}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              {t.aboutTitlePre} {t.aboutTitlePost}
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
              {aboutPage.heroDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5">
      <div className="container py-10 md:py-14">

        {/* Image Gallery — Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-xl font-bold text-[#034668] mb-5">
            {aboutPage.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-sm overflow-hidden bg-muted ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stat Cards — 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <p className="text-3xl font-black text-secondary mb-2">
                {stat.num}
              </p>
              <p className="text-sm text-[#4A5D6B] leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section — 2 Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14"
        >
          {/* Image */}
          <div className="relative rounded-sm overflow-hidden bg-muted min-h-[300px]">
            <Image
              src="/images/real-images/lab_interior.jpg"
              alt="Our lab"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Mission + Values */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-black text-[#034668] mb-4">
              {aboutPage.missionTitle}
            </h2>
            <p className="text-[#4A5D6B] leading-relaxed mb-8">
              {aboutPage.missionDesc}
            </p>

            <div className="space-y-5">
              {values.map((val, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-black text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#034668]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#4A5D6B] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <PriceCta
          title={aboutPage.ctaTitle}
          desc={aboutPage.ctaDesc}
          buttonText={aboutPage.bookAppointment}
        />
      </div>
      </div>
    </>
  );
}
