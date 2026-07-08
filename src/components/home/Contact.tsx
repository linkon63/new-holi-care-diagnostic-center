"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ContactFormData,
  initialContactForm,
  handleContactInput,
  submitContactForm,
} from "@/utils/contact";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(initialContactForm);

  return (
    <section id="contact" className="container py-20 bg-background">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-border/40 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <div className="lg:col-span-5 flex flex-col justify-between h-full items-start text-left space-y-8 lg:space-y-16">
          <div className="space-y-4">
            <span className="text-sm font-black text-emerald-800 bg-accent/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
              {t.contactTitlePre}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight leading-none">
              {language === "bn" ? (
                <>আমরা আছি<br />আপনার পাশে।</>
              ) : (
                <>We are by<br />your side.</>
              )}
            </h2>
          </div>

          <div className="bg-[#f2f4f7] rounded-2xl p-5 flex items-center space-x-4 border border-border/50 shadow-xs max-w-xs w-full">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-accent shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150"
                alt="সহায়তা কর্মী"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left leading-none">
              <h4 className="font-black text-sm text-foreground mb-1">{t.contactSupportTitle}</h4>
              <span className="text-[10px] text-muted-foreground font-bold block mb-1.5">{t.contactSupportSub}</span>
              <span className="inline-flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full border border-border text-[9px] font-black text-emerald-800">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                {t.contactSupportStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={(e) => submitContactForm(e, formData, language, setFormData)} className="space-y-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col text-left space-y-2">
                <label className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">{t.contactLabelFirstName}</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleContactInput(e, setFormData)}
                  placeholder={t.contactPlaceholderFirstName}
                  required
                  className="w-full border-0 border-b border-border bg-transparent py-2.5 focus:outline-none focus:border-foreground text-sm font-semibold transition-all rounded-none px-0"
                />
              </div>
              <div className="flex flex-col text-left space-y-2">
                <label className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">{t.contactLabelLastName}</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleContactInput(e, setFormData)}
                  placeholder={t.contactPlaceholderLastName}
                  required
                  className="w-full border-0 border-b border-border bg-transparent py-2.5 focus:outline-none focus:border-foreground text-sm font-semibold transition-all rounded-none px-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col text-left space-y-2">
                <label className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">{t.contactLabelPhone}</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleContactInput(e, setFormData)}
                  placeholder={t.contactPlaceholderPhone}
                  type="tel"
                  required
                  className="w-full border-0 border-b border-border bg-transparent py-2.5 focus:outline-none focus:border-foreground text-sm font-semibold transition-all rounded-none px-0"
                />
              </div>
              <div className="flex flex-col text-left space-y-2">
                <label className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">{t.contactLabelEmail}</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleContactInput(e, setFormData)}
                  placeholder="name@example.com"
                  type="email"
                  className="w-full border-0 border-b border-border bg-transparent py-2.5 focus:outline-none focus:border-foreground text-sm font-semibold transition-all rounded-none px-0"
                />
              </div>
            </div>

            <div className="flex flex-col text-left space-y-2">
              <label className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">{t.contactLabelMessage}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => handleContactInput(e, setFormData)}
                placeholder={t.contactPlaceholderMessage}
                required
                rows={3}
                className="w-full border-0 border-b border-border bg-transparent py-2.5 focus:outline-none focus:border-foreground text-sm font-semibold transition-all rounded-none resize-none px-0"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-black text-xs hover:bg-accent/90 transition-all flex items-center gap-1.5 shadow-sm hover:shadow cursor-pointer"
              >
                {t.contactSubmitBtn} <Send className="w-3.5 h-3.5 text-emerald-800" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
