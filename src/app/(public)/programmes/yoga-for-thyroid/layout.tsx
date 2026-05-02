import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-thyroid-programme.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-yft-headline",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-yft-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for Thyroid | Thyroid Yoga Protocol",
    description:
      "Doctor-guided yoga protocol for hormone balance, metabolic health, and sustained energy — mindful movement for thyroid support.",
    path: "/programmes/yoga-for-thyroid",
  });
}

export default function YogaForThyroidProgrammeLayout({
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
        className={`yft-sales-programme min-h-0 overflow-x-hidden bg-[color:var(--color-background)] text-[color:var(--color-on-surface)] antialiased ${newsreader.variable} ${plusJakartaSans.variable}`}
      >
        {children}
      </div>
    </>
  );
}
