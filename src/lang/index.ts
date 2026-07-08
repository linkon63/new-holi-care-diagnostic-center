import bn from "@/lang/bn";
import en from "@/lang/en";

export const translations = { bn, en } as const;

type TranslationType = (typeof translations)["bn"];
export type { TranslationType };
