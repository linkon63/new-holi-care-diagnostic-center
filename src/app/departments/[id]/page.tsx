import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import servicesData from "@/data/services.json";
import DepartmentDetail from "@/components/departments/DepartmentDetail";

// Dynamic per-department metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.diagnosticServices.find((s) => s.id === id);

  if (!service) {
    return { title: "Department Not Found" };
  }

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";

  return {
    title: lang === "bn" ? service.title_bn : service.title,
    description: lang === "bn" ? service.description_bn : service.description,
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.diagnosticServices.find((service) => service.id === id);

  if (!service) {
    notFound();
  }

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <DepartmentDetail service={service} t={t} lang={lang} />;
}
