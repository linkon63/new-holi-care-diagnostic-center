import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import QuickAppointment from "@/components/home/QuickAppointment";
import WhyChoose from "@/components/home/WhyChoose";
import ProfessionalDoctors from "@/components/home/ProfessionalDoctors";
import Services from "@/components/home/Services";
import { cookies } from "next/headers";
import { translations } from "@/lang";

// Dynamic metadata for homepage
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: lang === "bn" ? "হোম" : "Home",
    description: t.heroDesc,
  };
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return (
    <>
      <Hero />
      <QuickAppointment />
      <WhyChoose t={t} />
      <ProfessionalDoctors t={t} lang={lang} />
      <Services t={t} lang={lang} />
    </>
  );
}
