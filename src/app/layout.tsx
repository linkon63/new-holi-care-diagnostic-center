import type { Metadata } from "next";
import { Inter, Tiro_Bangla } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LayoutClient from "@/components/layout/LayoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla",
  weight: "400",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: {
    default: "New Holy Care Diagnostic Center | Premium Healthcare Diagnostics & Laboratory",
    template: "%s | New Holy Care Diagnostic Center",
  },
  description: "New Holy Care Diagnostic Center offers state-of-the-art pathology, 3T MRI, 128-Slice CT scan, cardiology, and preventive full body health checkup packages.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLang = cookieStore.get("lang")?.value === "en" ? "en" : "bn";

  return (
    <html
      lang={initialLang}
      className={`${inter.variable} ${tiroBangla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLang={initialLang}>
          <LayoutClient>{children}</LayoutClient>
        </LanguageProvider>
      </body>
    </html>
  );
}
