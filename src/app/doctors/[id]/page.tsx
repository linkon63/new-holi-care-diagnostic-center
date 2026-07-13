import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import doctorsData from "@/data/doctors.json";
import DoctorDetail from "@/components/doctors/DoctorDetail";

// Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doctor = doctorsData.doctors.find((d) => d.id === id);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";

  return {
    title: lang === "bn" ? doctor.name_bn : doctor.name,
    description: lang === "bn" ? doctor.desc_bn : doctor.desc,
  };
}

// Main Function
export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = doctorsData.doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <DoctorDetail doctor={doctor} t={t} lang={lang} />;
}
