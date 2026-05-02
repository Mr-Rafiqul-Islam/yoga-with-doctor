import type { Metadata } from "next";
import { Inter, Lexend, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-back-pain-programme.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--yfbp-font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--yfbp-font-body",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--yfbp-font-label",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Relieve Back Pain — Yoga for Back Pain",
    description:
      "Relieve back pain naturally without medicine or surgery — a scientifically-backed, doctor-guided yoga system.",
    path: "/programmes/yoga-for-back-pain",
  });
}

export default function YogaForBackPainProgrammeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <div
        className={`yfbp-landing min-h-0 antialiased selection:bg-orange-500/20 selection:text-orange-950 ${plusJakarta.variable} ${inter.variable} ${lexend.variable}`}
      >
        {children}
      </div>
    </>
  );
}
