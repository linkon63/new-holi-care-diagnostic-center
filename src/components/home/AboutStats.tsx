"use client";

import { Smile, UserCheck, Award, HeartPulse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutStats() {
  const { t } = useLanguage();

  return (
    <section id="about" className="container py-20">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-border/40 text-center space-y-10">

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 max-w-5xl mx-auto">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            {t.aboutTitlePre}
          </span>
          <div className="relative inline-block w-12 h-12 rounded-full overflow-hidden border-2 border-accent shadow-sm shrink-0">
            <img
              src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150"
              alt="Doctor 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative inline-block w-12 h-12 rounded-full overflow-hidden border-2 border-accent shadow-sm shrink-0">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150"
              alt="Doctor 2"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            {t.aboutTitlePost}
          </span>
        </div>

        <p className="text-muted-foreground font-semibold max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          {t.aboutDesc}
        </p>

        <div>
          <button className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold text-xs hover:bg-accent/90 transition-all cursor-pointer">
            {t.aboutLearnBtn}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          <div className="bg-[#e2f5ee] rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] transition-all hover:shadow-lg hover:shadow-[#e2f5ee]/20 duration-300">
            <span className="text-4xl md:text-5xl font-black text-foreground">{t.aboutStat1Num}</span>
            <div className="mt-8 space-y-3">
              <p className="text-xs font-bold text-foreground/80 leading-relaxed">
                {t.aboutStat1Desc}
              </p>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                <Smile className="w-4 h-4 text-emerald-800" />
              </div>
            </div>
          </div>

          <div className="bg-[#f2f4f7] rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] transition-all hover:shadow-lg hover:shadow-slate-200/50 duration-300">
            <span className="text-4xl md:text-5xl font-black text-foreground">{t.aboutStat2Num}</span>
            <div className="mt-8 space-y-3">
              <p className="text-xs font-bold text-foreground/80 leading-relaxed">
                {t.aboutStat2Desc}
              </p>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-slate-800" />
              </div>
            </div>
          </div>

          <div className="bg-[#fef3eb] rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] transition-all hover:shadow-lg hover:shadow-[#fef3eb]/50 duration-300">
            <span className="text-4xl md:text-5xl font-black text-foreground">{t.aboutStat3Num}</span>
            <div className="mt-8 space-y-3">
              <p className="text-xs font-bold text-foreground/80 leading-relaxed">
                {t.aboutStat3Desc}
              </p>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                <Award className="w-4 h-4 text-amber-800" />
              </div>
            </div>
          </div>

          <div className="bg-[#e8f2f6] rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] transition-all hover:shadow-lg hover:shadow-[#e8f2f6]/50 duration-300">
            <span className="text-4xl md:text-5xl font-black text-foreground">{t.aboutStat4Num}</span>
            <div className="mt-8 space-y-3">
              <p className="text-xs font-bold text-foreground/80 leading-relaxed">
                {t.aboutStat4Desc}
              </p>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                <HeartPulse className="w-4 h-4 text-sky-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
