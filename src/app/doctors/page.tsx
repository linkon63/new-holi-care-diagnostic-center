import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import DoctorList from "@/components/doctors/DoctorList";

// Dynamic metadata for doctors listing page
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: t.doctorsPage.title,
    description: t.doctorsPage.desc,
  };
}

export default async function DoctorsPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <DoctorList t={t} lang={lang} />;
}
