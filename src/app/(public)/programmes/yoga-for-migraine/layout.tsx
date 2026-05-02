import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-migraine-programme.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--yfm-font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--yfm-font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for Migraine | Naturally Reduce Pain in 30 Days",
    description:
      "Doctor-guided yoga system targeting the root cause of migraine using nervous system regulation and mindful movement.",
    path: "/programmes/yoga-for-migraine",
  });
}

export default function YogaForMigraineProgrammeLayout({
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
        className={`yfm-landing min-h-0 bg-[color:var(--yfm-background)] text-[color:var(--yfm-on-background)] antialiased ${playfair.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
