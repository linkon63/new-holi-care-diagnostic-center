"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  ];

  const reviews = t.reviewsList.map((review, i) => ({
    ...review,
    avatar: avatars[i] || avatars[0]
  }));

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Image Column */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] rounded-[2.5rem] overflow-hidden bg-muted/10 border border-border/40 shadow-xs">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
            alt="আমাদের ডক্টরস টিম"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
          />
        </div>

        {/* Right Testimonials Column */}
        <div className="lg:col-span-7 space-y-8 text-left relative">
          
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <span className="text-sm font-black text-emerald-800 bg-accent/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
                {t.testimonialsTitlePre}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight max-w-lg leading-tight">
                {t.testimonialsTitle}
              </h2>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-all cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-muted-foreground font-semibold leading-relaxed max-w-xl text-sm md:text-base">
            {t.testimonialsDesc}
          </p>

          {/* Testimonial Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 lg:-ml-28 z-10 relative pt-2"
            style={{ scrollbarWidth: "none" }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full sm:w-[360px] bg-white rounded-3xl p-6 md:p-8 border border-border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* User Profile info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border border-accent">
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-foreground leading-none">{review.name}</h4>
                      <span className="text-[10px] font-bold text-muted-foreground mt-1 block">{review.role}</span>
                    </div>
                  </div>
                  {/* Review Text */}
                  <p className="text-xs md:text-sm font-semibold text-foreground/80 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                {/* Rating Footer */}
                <div className="flex justify-between items-center border-t border-border/40 pt-4 mt-6">
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-black text-foreground bg-slate-50 px-2 py-0.5 rounded-md border border-border">
                    {review.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
