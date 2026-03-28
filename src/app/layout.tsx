import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DomusVita Gesundheit | Ambulante Pflege Berlin",
  description: "Ihr ambulanter Pflegedienst in Berlin — Behandlungspflege, Grundpflege, Hauswirtschaft und mehr. Familiengeführt seit über 20 Jahren. Jetzt anrufen: (030) 53 00 555 0",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.domusvita.de",
    siteName: "DomusVita Gesundheit",
    title: "DomusVita Gesundheit | Ambulante Pflege Berlin",
    description: "Ihr ambulanter Pflegedienst in Berlin — Familiengeführt, 20+ Jahre Erfahrung, 4.8/5.0 Bewertung.",
    images: [{ url: "https://www.domusvita.de/images/hero-main.jpeg", width: 1200, height: 630, alt: "DomusVita Gesundheit Berlin" }],
  },
  metadataBase: new URL("https://www.domusvita.de"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
