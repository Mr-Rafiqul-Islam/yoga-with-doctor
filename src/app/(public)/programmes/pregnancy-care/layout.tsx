import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./pregnancy-care-programme.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-pcp-headline",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-pcp-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Pregnancy Care | Safe & Gentle Prenatal Yoga",
    description:
      "Doctor-guided yoga for a calm, confident pregnancy—trimester-balanced movement, breathwork, and holistic support for mother and baby.",
    path: "/programmes/pregnancy-care",
  });
}

export default function PregnancyCareProgrammeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <div
        className={`pcp-sales-programme min-h-0 overflow-x-hidden bg-[color:var(--color-background)] text-[color:var(--color-on-surface)] antialiased selection:bg-[color:var(--color-primary-container)] selection:text-[color:var(--color-on-primary-container)] ${newsreader.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </div>
    </>
  );
}
