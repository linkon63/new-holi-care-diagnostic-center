"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Calendar } from "lucide-react";
import type { DoctorCardProps } from "@/types/doctor";

export default function DoctorCard({
  id,
  image,
  name,
  specialty,
  education,
  email,
  phone,
  lang,
}: DoctorCardProps) {
  const isBn = lang === "bn";

  return (
    <Link
      href={`/doctors/${id}`}
      className="group block bg-white rounded-sm border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-5px_#00A65133] hover:border-secondary cursor-pointer"
    >
      {/* Portrait image with hover contact overlay */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Contact icons — slide up on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          <a
            href={`mailto:${email}`}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#034668] hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
            title={isBn ? "ইমেইল" : "Email"}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${phone}`}
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#034668] hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
            title={isBn ? "ফোন" : "Phone"}
          >
            <Phone className="w-4 h-4" />
          </a>
          <Link
            href="/appointment"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#034668] hover:bg-secondary hover:text-white transition-colors duration-200 cursor-pointer"
            title={isBn ? "অ্যাপয়েন্টমেন্ট" : "Appointment"}
          >
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Info section */}
      <div className="p-4">
        <h3 className="text-base font-bold text-[#034668] line-clamp-1 group-hover:text-secondary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm font-semibold text-secondary mt-1 line-clamp-1">
          {specialty}
        </p>
        <p className="text-xs font-medium text-muted-foreground mt-1.5 line-clamp-1">
          {education}
        </p>
      </div>
    </Link>
  );
}
