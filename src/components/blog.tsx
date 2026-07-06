"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();

  const blogImages = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=400"
  ];

  const posts = t.blogList.map((post, i) => ({
    ...post,
    image: blogImages[i] || blogImages[0]
  }));

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      
      {/* Top Header Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-6 text-left space-y-5">
          <span className="text-sm font-black text-emerald-800 bg-accent/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
            {t.blogCategory}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-[1.1] max-w-lg">
            {t.blogHeading}
          </h2>
          <div>
            <button className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground font-black text-xs px-5 py-2.5 rounded-full border border-border transition-all cursor-pointer">
              {t.blogLearnBtn}
              <span className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 flex items-end text-left">
          <p className="text-muted-foreground font-semibold leading-relaxed text-sm md:text-base lg:pl-10">
            {t.blogDesc}
          </p>
        </div>
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="flex flex-col group space-y-4 text-left">
            {/* Card Image Wrapper */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted/10 border border-border/20 shadow-xs">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[10px] text-foreground font-black px-3.5 py-1.5 rounded-full shadow-xs">
                {post.readTime}
              </span>
            </div>

            {/* Content info */}
            <div className="space-y-2.5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-black text-base text-foreground group-hover:text-emerald-800 transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-muted-foreground/90 leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-border/40 pt-3 mt-4 text-[11px] font-black text-foreground">
                <a href="#" className="hover:underline flex items-center gap-1">
                  {t.blogReadMore} <ArrowUpRight className="w-3 h-3 text-emerald-800" />
                </a>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
