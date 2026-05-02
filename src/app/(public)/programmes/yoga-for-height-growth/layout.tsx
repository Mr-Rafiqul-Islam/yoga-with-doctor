import type { Metadata } from "next";
import { Inter, Lexend, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-height-growth-programme.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-yfhg-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-yfhg-body",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-yfhg-label",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for Height Growth | AuraHeight Programme",
    description:
      "Scientifically proven method to increase your height naturally with yoga — posture, spinal decompression, and confidence.",
    path: "/programmes/yoga-for-height-growth",
  });
}

export default function YogaForHeightGrowthProgrammeLayout({
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
        className={`yfh-sales-programme min-h-0 overflow-x-hidden bg-[color:var(--color-background)] text-[color:var(--color-on-surface)] antialiased ${plusJakartaSans.variable} ${inter.variable} ${lexend.variable}`}
      >
        {children}
      </div>
    </>
  );
}
