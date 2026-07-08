"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/lang";
import type { Language, LanguageContextType } from "@/types/language";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function setLanguageCookie(lang: Language) {
  document.cookie = `lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLang);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setLanguageCookie(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
