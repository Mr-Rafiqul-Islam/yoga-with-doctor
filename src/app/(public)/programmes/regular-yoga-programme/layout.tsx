import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "../plid-treatment-by-epidural/plid-epidural-landing.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-epi-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-epi-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Regular Yoga Programme",
    description:
      "Structured regular yoga programme for strength, mobility, and wellbeing—same trusted layout and design as our clinical landing pages.",
    path: "/programmes/regular-yoga-programme",
  });
}

export default function RegularYogaProgrammeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <div
        className={`plid-epidural-landing min-h-0 font-body text-on-surface antialiased selection:bg-primary-container/30 selection:text-on-primary-container ${notoSerif.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
