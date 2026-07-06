"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-foreground text-background/80 border-t border-border mt-auto">
      {/* Top Banner Info / Socials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-xl">
              <ShieldAlert className="w-6 h-6 rotate-180" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl leading-none tracking-tight text-white">
                {t.logoTitle}
              </span>
              <span className="text-[10px] text-background/60 font-semibold uppercase tracking-wider mt-0.5">
                {t.logoSubtitle}
              </span>
            </div>
          </div>
          <p className="text-sm max-w-md text-center md:text-left text-background/60 leading-relaxed font-semibold">
            {t.footerDesc}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-background/5 hover:bg-primary/20 hover:text-white rounded-lg transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-background/5 hover:bg-primary/20 hover:text-white rounded-lg transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-background/5 hover:bg-primary/20 hover:text-white rounded-lg transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-background/5 hover:bg-primary/20 hover:text-white rounded-lg transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Middle Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerQuickLinks}</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="#hero" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerHomeLink}
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerServicesLink}
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerAboutLink}
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.testimonials}
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.blog}
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Departments */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerCoreDepts}</h4>
          <ul className="space-y-3.5">
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerLabLink}</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerMriLink}</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerRadLink}</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerCardioLink}</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerUltrasoundLink}</a>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerHours}</h4>
          <ul className="space-y-3.5 text-sm font-semibold">
            <li className="flex flex-col border-b border-background/5 pb-2">
              <span className="text-[11px] text-background/60">{t.footerSatThu}</span>
              <span className="text-white mt-0.5">{t.footerSatThuHours}</span>
            </li>
            <li className="flex flex-col border-b border-background/5 pb-2">
              <span className="text-[11px] text-background/60">{t.footerFri}</span>
              <span className="text-white mt-0.5">{t.footerFriHours}</span>
            </li>
            <li className="flex justify-between border-b border-background/5 pb-2 items-center">
              <span className="text-[11px] text-background/60">{t.footerPathHours}</span>
              <span className="text-emerald-400 font-bold text-xs">{language === "bn" ? "২৪ ঘণ্টা খোলা" : "24 Hours Open"}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-[11px] text-background/60">{t.footerReportHours}</span>
              <span className="text-emerald-400 font-bold text-xs">{language === "bn" ? "২৪/৭ উপলব্ধ" : "24/7 Available"}</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerContactUs}</h4>
          <ul className="space-y-4 font-semibold">
            <li className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{t.address}</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>{t.hotline}</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>info@newholicare.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-black/20 border-t border-background/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/40 gap-4">
          <p>© {currentYear} {t.logoTitle} {t.logoSubtitle}. {t.footerCopyright}</p>
          <div className="flex space-x-6 font-semibold">
            <a href="#" className="hover:text-white transition-colors duration-200">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-white transition-colors duration-200">{t.footerTerms}</a>
            <a href="#" className="hover:text-white transition-colors duration-200">{t.footerRefund}</a>
            <a href="#" className="hover:text-white transition-colors duration-200">{t.footerSitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
