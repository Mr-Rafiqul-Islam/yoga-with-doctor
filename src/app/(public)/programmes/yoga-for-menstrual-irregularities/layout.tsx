import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-menstrual-irregularities-programme.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-yfmi-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-yfmi-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for Flow | Balance Your Cycle Naturally",
    description:
      "A gentle, evidence-based yoga programme for menstrual health, hormonal harmony, and emotional resilience—doctor-guided and designed for real life.",
    path: "/programmes/yoga-for-menstrual-irregularities",
  });
}

export default function YogaForMenstrualIrregularitiesProgrammeLayout({
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
        className={`yfmi-sales-programme min-h-0 overflow-x-hidden bg-[color:var(--yfmi-background)] text-[color:var(--yfmi-on-surface)] antialiased selection:bg-[color:var(--yfmi-primary-fixed-dim)] ${newsreader.variable} ${manrope.variable}`}
      >
        {children}
      </div>
    </>
  );
}
