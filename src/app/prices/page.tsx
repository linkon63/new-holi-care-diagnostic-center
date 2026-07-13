import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import PriceList from "@/components/prices/PriceList";

// Dynamic metadata for test price list page
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: t.priceListPage.title,
    description: t.priceListPage.desc,
  };
}

export default async function PriceListPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <PriceList t={t} lang={lang} />;
}
