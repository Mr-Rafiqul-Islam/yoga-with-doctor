import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-all-programme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--yfa-font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--yfa-font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For All | Transform Your Body & Mind",
    description:
      "A gentle, medically-backed approach to yoga for everyone—no flexibility required. Lower stress, improve heart health, and build a simple daily practice in 30 days.",
    path: "/programmes/yoga-for-all",
  });
}

export default function YogaForAllProgrammeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <div
        className={`yfa-landing min-h-0 bg-[color:var(--yfa-background)] text-[color:var(--yfa-on-background)] antialiased ${playfair.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
