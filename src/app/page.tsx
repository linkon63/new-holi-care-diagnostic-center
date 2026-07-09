import Hero from "@/components/home/Hero";
import QuickAppointment from "@/components/home/QuickAppointment";
import WhyChoose from "@/components/home/WhyChoose";
import { cookies } from "next/headers";
import { translations } from "@/lang";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return (
    <>
      <Hero />
      <QuickAppointment />
      <WhyChoose t={t} />
    </>
  );
}
