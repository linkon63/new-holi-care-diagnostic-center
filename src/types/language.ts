import type { TranslationType } from "@/lang";

export type Language = "bn" | "en";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}
