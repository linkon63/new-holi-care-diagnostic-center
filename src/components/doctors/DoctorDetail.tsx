"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  Stethoscope,
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import type { DoctorDetailProps } from "@/types/doctor";
import PriceCta from "@/components/prices/PriceCta";

const educationHistory = {
  en: [
    {
      degree: "MBBS",
      institution: "Dhaka Medical College",
      year: "2005",
    },
    {
      degree: "FCPS (Medicine)",
      institution: "Bangladesh College of Physicians & Surgeons",
      year: "2012",
    },
    {
      degree: "MD (Cardiology)",
      institution: "National Institute of Cardiovascular Diseases",
      year: "2016",
    },
  ],
  bn: [
    {
      degree: "এমবিবিএস",
      institution: "ঢাকা মেডিকেল কলেজ",
      year: "২০০৫",
    },
    {
      degree: "এফসিপিএস (মেডিসিন)",
      institution: "বাংলাদেশ কলেজ অব ফিজিশিয়ান্স এন্ড সার্জন্স",
      year: "২০১২",
    },
    {
      degree: "এমডি (কার্ডিওলজি)",
      institution: "জাতীয় হৃদরোগ ইনস্টিটিউট",
      year: "২০১৬",
    },
  ],
};

const experienceHistory = {
  en: [
    {
      role: "Senior Consultant",
      place: "New Holi Care Diagnostic Center",
      period: "2018 — Present",
    },
    {
      role: "Consultant",
      place: "National Heart Foundation",
      period: "2012 — 2018",
    },
    {
      role: "Registrar",
      place: "Dhaka Medical College Hospital",
      period: "2008 — 2012",
    },
  ],
  bn: [
    {
      role: "সিনিয়র কনসালট্যান্ট",
      place: "নিউ হোলি কেয়ার ডায়াগনস্টিক সেন্টার",
      period: "২০১৮ — বর্তমান",
    },
    {
      role: "কনসালট্যান্ট",
      place: "জাতীয় হৃদরোগ ফাউন্ডেশন",
      period: "২০১২ — ২০১৮",
    },
    {
      role: "রেজিস্ট্রার",
      place: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
      period: "২০০৮ — ২০১২",
    },
  ],
};

const awards = {
  en: [
    "Best Doctor Award — National Health Conference 2022",
    "15+ Research Publications in International Medical Journals",
    "Fellow of the Bangladesh Cardiac Society",
  ],
  bn: [
    "সেরা চিকিৎসক পুরস্কার — জাতীয় স্বাস্থ্য সম্মেলন ২০২২",
    "আন্তর্জাতিক মেডিকেল জার্নালে ১৫+ গবেষণা প্রকাশনা",
    "বাংলাদেশ কার্ডিয়াক সোসাইটির ফেলো",
  ],
};

export default function DoctorDetail({
  doctor,
  t,
  lang,
}: DoctorDetailProps) {
  const { doctorDetailPage } = t;
  const isBn = lang === "bn";

  const name = isBn ? doctor.name_bn : doctor.name;
  const specialty = isBn ? doctor.specialty_bn : doctor.specialty;
  const education = isBn ? doctor.education_bn : doctor.education;
  const phone = isBn ? doctor.phone_bn : doctor.phone;
  const desc = isBn ? doctor.desc_bn : doctor.desc;
  const quote = isBn ? doctor.quote_bn : doctor.quote;

  const edHistory = isBn ? educationHistory.bn : educationHistory.en;
  const expHistory = isBn ? experienceHistory.bn : experienceHistory.en;
  const awardList = isBn ? awards.bn : awards.en;

  return (
    <div className="min-h-screen bg-primary/5">
      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t.home}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href="/doctors"
            className="hover:text-foreground transition-colors"
          >
            {t.doctors}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{name}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-2">
          {name}
        </h1>
        <p className="text-secondary text-sm md:text-base font-semibold mb-8">
          {specialty}
        </p>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column — Image + Info + CTA (single card) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              {/* Doctor Image */}
              <div className="relative aspect-[3/4] bg-muted">
                <Image
                  src={doctor.image}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Info Items */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {doctorDetailPage.specialty}
                    </p>
                    <p className="text-sm font-bold text-[#034668]">{specialty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {doctorDetailPage.degree}
                    </p>
                    <p className="text-sm font-bold text-[#034668]">{education}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {doctorDetailPage.phone}
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm font-bold text-[#034668] hover:text-secondary transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {doctorDetailPage.email}
                    </p>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="text-sm font-bold text-[#034668] hover:text-secondary transition-colors break-all"
                    >
                      {doctor.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {doctorDetailPage.website}
                    </p>
                    <span className="text-sm font-bold text-secondary">
                      {doctorDetailPage.visitWebsite}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA + Back Link — below the card, same column */}
            <div className="mt-6 space-y-4">
              <PriceCta
                title={doctorDetailPage.ctaTitle}
                desc={doctorDetailPage.ctaDesc}
                buttonText={doctorDetailPage.bookAppointment}
              />
              <div className="flex justify-center">
                <Link
                  href="/doctors"
                  className="group inline-flex items-center gap-2 text-sm font-bold text-[#034668] hover:text-secondary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  {doctorDetailPage.backToDoctors}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column — Bio + Education + Experience (no card bg) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-[#034668] mb-4">
                {doctorDetailPage.about}
              </h2>
              <p className="text-[#4A5D6B] leading-relaxed">{desc}</p>
              {quote && (
                <blockquote className="mt-4 pl-4 border-l-4 border-secondary/30 italic text-[#4A5D6B]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              )}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-[#034668]">
                  {doctorDetailPage.education}
                </h2>
              </div>
              <div className="space-y-4">
                {edHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-sm bg-muted/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#034668]">
                        {item.degree}
                      </p>
                      <p className="text-sm text-[#4A5D6B]">
                        {item.institution}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground mt-1">
                        {item.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-[#034668]">
                  {doctorDetailPage.experience}
                </h2>
              </div>
              <div className="space-y-4">
                {expHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-sm bg-muted/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#034668]">
                        {item.role}
                      </p>
                      <p className="text-sm text-[#4A5D6B]">{item.place}</p>
                      <p className="text-xs font-semibold text-muted-foreground mt-1">
                        {item.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-[#034668]">
                  {doctorDetailPage.awards}
                </h2>
              </div>
              <div className="space-y-3">
                {awardList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-[#4A5D6B] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
