"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, HeartPulse, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onBookClick: () => void;
  onPriceListClick: () => void;
}

export default function Navbar({ onBookClick, onPriceListClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "#hero" },
    { name: t.about, href: "#about" },
    { name: t.services, href: "#services" },
    { name: t.priceList, href: "#price-list", onClick: (e: any) => { e.preventDefault(); onPriceListClick(); } },
    { name: t.testimonials, href: "#testimonials" },
    { name: t.blog, href: "#blog" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/80 py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="bg-accent text-accent-foreground p-2 rounded-full transition-transform duration-200 group-hover:scale-105">
                <HeartPulse className="w-5 h-5 text-emerald-800" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-foreground leading-none">
                  {t.logoTitle}
                </span>
                <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest leading-none mt-1">
                  {t.logoSubtitle}
                </span>
              </div>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex space-x-2 items-center bg-white/40 backdrop-blur-xs border border-border/40 px-3.5 py-1.5 rounded-full shadow-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  className="px-4 py-2 rounded-full text-xs font-bold text-foreground/80 hover:text-foreground hover:bg-muted transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Contact button & Language Selector */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Sleek Language Switcher */}
              <div className="flex items-center bg-white/50 backdrop-blur-xs border border-border/40 p-0.5 rounded-full shadow-xs">
                <button
                  onClick={() => setLanguage("bn")}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider transition-all duration-200 cursor-pointer ${
                    language === "bn"
                      ? "bg-accent text-accent-foreground shadow-xs"
                      : "text-foreground/75 hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  BN
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider transition-all duration-200 cursor-pointer ${
                    language === "en"
                      ? "bg-accent text-accent-foreground shadow-xs"
                      : "text-foreground/75 hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={onBookClick}
                className="px-6 py-2.5 rounded-full border border-foreground/60 text-xs font-bold text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
              >
                {t.contactBtn}
              </button>
            </div>

            {/* Mobile Menu Trigger & Language Selector */}
            <div className="flex items-center space-x-2.5 lg:hidden">
              {/* Quick Language Toggle for Mobile Header */}
              <button
                onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
                className="p-2 bg-white/50 backdrop-blur-xs border border-border text-[10px] font-black text-foreground rounded-full flex items-center justify-center w-9 h-9 shadow-xs hover:bg-muted transition-colors cursor-pointer"
                title={language === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
              >
                <Globe className="w-3.5 h-3.5 mr-0.5" />
                <span className="uppercase text-[9px]">{language === "bn" ? "en" : "bn"}</span>
              </button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="p-2.5 text-foreground hover:bg-muted rounded-full focus:outline-none transition-all cursor-pointer flex items-center justify-center border border-border bg-white/50">
                  <Menu className="w-4 h-4" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] rounded-l-3xl border-l border-border bg-background">
                  <SheetTitle className="text-left font-black text-xl mb-4 text-foreground tracking-tight">
                    {t.logoTitle}
                  </SheetTitle>
                  <div className="flex flex-col space-y-3 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          setIsOpen(false);
                          if (link.onClick) link.onClick(e);
                        }}
                        className="text-sm font-bold text-foreground/80 hover:text-foreground hover:bg-muted px-4 py-3 rounded-full transition-all text-left"
                      >
                        {link.name}
                      </a>
                    ))}

                    {/* Mobile Language Switcher Inside Drawer */}
                    <div className="pt-4 flex items-center justify-between border-t border-border/65 mt-2 pl-4 pr-2">
                      <span className="text-xs font-black text-muted-foreground flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" /> Language
                      </span>
                      <div className="flex items-center bg-muted/60 p-0.5 rounded-full border border-border/30">
                        <button
                          onClick={() => setLanguage("bn")}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all ${
                            language === "bn"
                              ? "bg-accent text-accent-foreground shadow-xs"
                              : "text-foreground/75"
                          }`}
                        >
                          বাংলা
                        </button>
                        <button
                          onClick={() => setLanguage("en")}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all ${
                            language === "en"
                              ? "bg-accent text-accent-foreground shadow-xs"
                              : "text-foreground/75"
                          }`}
                        >
                          English
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/65 mt-4">
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          onBookClick();
                        }}
                        className="w-full font-bold rounded-full py-6 bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        {t.bookBtn}
                      </Button>
                      <div className="mt-8 space-y-2 text-xs text-muted-foreground pl-2 text-left">
                        <p className="font-bold text-foreground flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-emerald-800" /> {t.hotline}
                        </p>
                        <p>{t.address}</p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
