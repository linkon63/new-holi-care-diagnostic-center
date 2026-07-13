"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background/80 border-t border-border mt-auto">
      {/* Top Section — Logo, Desc, Social */}
      <div className="container py-10 border-b border-background/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl leading-none tracking-tight text-white">
                {t.logoTitle}
              </span>
              <span className="text-[10px] text-background/60 font-semibold uppercase tracking-wider mt-0.5">
                {t.logoSubtitle}
              </span>
            </div>
          </Link>
          <p className="text-sm max-w-md text-center md:text-left text-background/60 leading-relaxed font-semibold">
            {t.footerDesc}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/5 hover:bg-secondary/30 hover:text-white rounded-lg transition-colors duration-200"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section — 4 Columns */}
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerQuickLinks}</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="/#hero" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerHomeLink}
              </Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerServicesLink}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerAboutLink}
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerCoreDepts}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200 text-sm font-semibold">
                {t.footerContactUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Departments */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerCoreDepts}</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerLabLink}</Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerMriLink}</Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerRadLink}</Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerCardioLink}</Link>
            </li>
            <li>
              <Link href="/departments" className="hover:text-white transition-colors duration-200 text-sm font-semibold">{t.footerUltrasoundLink}</Link>
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
              <span className="text-emerald-400 font-bold text-xs">{t.footerPathOpen}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-[11px] text-background/60">{t.footerReportHours}</span>
              <span className="text-emerald-400 font-bold text-xs">{t.footerReportOpen}</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-wider mb-6">{t.footerContactUs}</h4>
          <ul className="space-y-4 font-semibold">
            <li className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>{t.address}</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>{t.hotline}</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>info@newholicare.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar — Copyright & Legal */}
      <div className="bg-black/20 border-t border-background/5 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-background/40 gap-4">
          <p>&copy; {currentYear} {t.logoTitle} {t.logoSubtitle}. {t.footerCopyright}</p>
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
