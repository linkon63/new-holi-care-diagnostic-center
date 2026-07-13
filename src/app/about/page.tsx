import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import AboutPage from "@/components/about/AboutPage";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: t.about,
    description: t.aboutDesc,
  };
}

export default async function About() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <AboutPage t={t} />;
}
