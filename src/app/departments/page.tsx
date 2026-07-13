import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import DepartmentList from "@/components/departments/DepartmentList";

// Dynamic metadata for departments Page
export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: t.departmentsPage.title,
    description: t.departmentsPage.desc,
  };
}

export default async function DepartmentPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <DepartmentList t={t} lang={lang} />;
}
