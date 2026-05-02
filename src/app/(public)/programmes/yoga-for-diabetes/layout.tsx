import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-diabetes-programme.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--yfd-font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--yfd-font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "YogaCare Diabetes | Control Your Blood Sugar Naturally",
    description:
      "Medically-backed clinical yoga to reclaim metabolic flexibility and energy—without more pills. Start your blood sugar journey in 30 days.",
    path: "/programmes/yoga-for-diabetes",
  });
}

export default function YogaForDiabetesProgrammeLayout({
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
        className={`yfd-landing min-h-0 bg-[color:var(--yfd-background)] text-[color:var(--yfd-on-background)] antialiased ${newsreader.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
