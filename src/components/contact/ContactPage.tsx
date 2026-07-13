"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import type { TranslationType } from "@/lang";
import {
  type ContactFormData,
  initialContactForm,
  handleContactInput,
  submitContactForm,
} from "@/utils/contact";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function ContactPage({
  t,
  lang,
}: {
  t: TranslationType;
  lang: "en" | "bn";
}) {
  const [formData, setFormData] = useState<ContactFormData>(initialContactForm);

  const handleSubmit = (e: React.FormEvent) => {
    submitContactForm(e, formData, lang, setFormData);
  };

  return (
    <>
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/real-images/building_front_2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm font-semibold text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              {t.home}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t.contact}</span>
          </nav>
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-secondary uppercase tracking-widest">
              {t.contactBtn}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-2 tracking-tight">
              {t.contactTitlePre}
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
              {t.contactHeroDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5">
      <div className="container py-10 md:py-14">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column — Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-[#034668] mb-6">
                {t.contactBtn}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      {t.contactLabelFirstName}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleContactInput(e, setFormData)}
                      placeholder={t.contactPlaceholderFirstName}
                      required
                      className="w-full px-4 py-3 rounded-sm bg-muted/30 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      {t.contactLabelLastName}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleContactInput(e, setFormData)}
                      placeholder={t.contactPlaceholderLastName}
                      required
                      className="w-full px-4 py-3 rounded-sm bg-muted/30 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      {t.contactLabelPhone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleContactInput(e, setFormData)}
                      placeholder={t.contactPlaceholderPhone}
                      required
                      className="w-full px-4 py-3 rounded-sm bg-muted/30 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      {t.contactLabelEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleContactInput(e, setFormData)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-sm bg-muted/30 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    {t.contactLabelMessage}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleContactInput(e, setFormData)}
                    placeholder={t.contactPlaceholderMessage}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-muted/30 border border-border/60 text-sm font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {t.contactSubmitBtn}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column — Contact Info Cards */}
          <div className="lg:col-span-1 space-y-5">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {t.footerContactUs}
                </p>
                <p className="text-sm font-bold text-[#034668] leading-relaxed">
                  {t.address}
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {t.contactLabelPhone}
                </p>
                <a
                  href="tel:+8801707811010"
                  className="text-sm font-bold text-[#034668] hover:text-secondary transition-colors"
                >
                  {t.hotline}
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  {t.contactLabelEmail}
                </p>
                <a
                  href="mailto:info@newholicare.com"
                  className="text-sm font-bold text-[#034668] hover:text-secondary transition-colors break-all"
                >
                  info@newholicare.com
                </a>
              </div>
            </motion.div>

            {/* 24/7 Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                    {t.contactSupportStatus}
                  </p>
                </div>
                <p className="text-sm font-bold text-[#034668]">
                  {t.contactSupportTitle}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.contactSupportSub}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm shadow-sm p-5"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {lang === "bn" ? "সোশ্যাল মিডিয়া" : "Follow Us"}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white transition-all duration-200"
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
