import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/lang";
import ContactPage from "@/components/contact/ContactPage";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return {
    title: t.contact,
    description: t.contactHeading,
  };
}

export default async function Contact() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";
  const t = translations[lang];

  return <ContactPage t={t} lang={lang} />;
}
