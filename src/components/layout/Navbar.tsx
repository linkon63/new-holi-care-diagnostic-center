"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Globe, Menu, X, Facebook, Twitter, Linkedin, Instagram, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { NavItem } from "@/types/navbar";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && latest > lastScrollY.current) {
      setIsTopBarHidden(true);
    } else if (latest < lastScrollY.current) {
      setIsTopBarHidden(false);
    }
    lastScrollY.current = latest;
  });

  const navItems: NavItem[] = [
    { key: "home", href: "/#hero" },
    { key: "departments", href: "/departments" },
    { key: "priceList", href: '/prices' },
    { key: "doctors", href: "/doctors" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  const getLabel = (key: string): string => {
    const labels: Record<string, string> = {
      home: t.home,
      departments: t.departments,
      priceList: t.priceList,
      doctors: t.doctors,
      about: t.about,
      contact: t.contact,
    };
    return labels[key] || key;
  };

  return (
    <>
      {/* Top Bar  */}
      <motion.div
        animate={{ y: isTopBarHidden ? -50 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:block border-b border-border py-2 text-xs text-muted-foreground"
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@newholicare.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" /> info@newholicare.com
            </a>
            <a href="tel:+8801707811010" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> {t.hotline}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href }, indx) => (
              <Link key={indx} href={href} className="p-1.5 hover:text-primary transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </Link>
            ))}
            <div className="w-px h-4 bg-border mx-1" />
            <button
              onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
              className="flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar - sticky */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image src="/logo.jpeg" alt="logo" width={40} height={40} className="rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-black text-xl text-foreground leading-none">{t.logoTitle}</span>
              <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">{t.logoSubtitle}</span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => <Link
              key={item.key}
              href={item.href || "#"}
              className="text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              {getLabel(item.key)}
            </Link>

            )}
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/appointment"
              className="group inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-primary-foreground font-bold rounded-lg px-6 py-3 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4 animate-bounce" />
              {t.bookBtn}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) =>
                  <Link
                    key={item.key}
                    href={item.href || "#"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold  text-foreground hover:text-primary transition-colors block py-2"
                  >
                    {getLabel(item.key)}
                  </Link>

                )}
              </nav>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {socialLinks.map(({ icon: Icon, href }, indx) => (
                  <Link key={indx} href={href} className="p-2 hover:text-primary transition-colors text-muted-foreground">
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
                <div className="w-px h-5 bg-border mx-1" />
                <button
                  onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
                  className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </button>
              </div>

              <Link
                href="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-primary-foreground font-bold rounded-lg w-full hover:-translate-y-0.5 transition-all duration-300 py-6 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4 animate-bounce" />
                {t.bookBtn}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
