"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import doctorsData from "@/data/doctors.json";
import type { DoctorListProps } from "@/types/doctor";
import DoctorCard from "@/components/doctors/DoctorCard";
import { extractDoctorCategories, filterDoctors } from "@/utils/doctor";

export default function DoctorList({ t, lang }: DoctorListProps) {
  const { doctors } = doctorsData;
  const { doctorsPage } = t;
  const isBn = lang === "bn";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = extractDoctorCategories(doctors, isBn);
  const filtered = filterDoctors(doctors, activeCategory, searchQuery, isBn);

  return (
    <div className="min-h-screen bg-primary/5">
      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t.home}  
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{t.doctors}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-8">
          {doctorsPage.title}
        </h1>

        {/* Search + Specialty Dropdown */}
        <div className="flex items-center gap-3 mb-10">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={doctorsPage.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-4 rounded-sm bg-white border border-border/60 text-sm font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
            />
            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/30 transition-colors cursor-pointer"
              >
                <span className="text-xs text-muted-foreground">&times;</span>
              </button>
            )}
          </div>

          {/* Specialty dropdown */}
          <div className="relative shrink-0">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none bg-white border border-border/60 rounded-sm px-4 py-4 pr-9 text-sm font-semibold text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
            >
              <option value="all">{doctorsPage.allSpecialties}</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <DoctorCard
                id={doctor.id}
                image={doctor.image}
                name={isBn ? doctor.name_bn : doctor.name}
                specialty={isBn ? doctor.specialty_bn : doctor.specialty}
                education={isBn ? doctor.education_bn : doctor.education}
                email={doctor.email}
                phone={isBn ? doctor.phone_bn : doctor.phone}
                lang={lang}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm font-medium">
              {isBn
                ? "আপনার অনুসন্ধানে কোনো ডাক্তার পাওয়া যায়নি।"
                : "No doctors found matching your search."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
