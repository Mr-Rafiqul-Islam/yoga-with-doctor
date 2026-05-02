import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-bp-programme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--yfbp-font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--yfbp-font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for BP | Control High Blood Pressure Naturally",
    description:
      "A medically-informed approach to lowering your readings, reducing stress, and reclaiming your heart health in just 30 days. No advanced flexibility required.",
    path: "/programmes/yoga-for-bp",
  });
}

export default function YogaForBpProgrammeLayout({
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
        className={`yfbp-landing min-h-0 bg-[color:var(--yfbp-background)] text-[color:var(--yfbp-on-background)] antialiased ${playfair.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
