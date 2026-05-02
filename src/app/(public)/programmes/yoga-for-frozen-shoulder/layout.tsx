import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import { publicPageMetadata } from "@/lib/publicPageMetadata";

import "./yoga-for-frozen-shoulder-programme.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-yffs-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-yffs-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Frozen Shoulder | Clinical Recovery Program",
    description:
      "A doctor-guided, gentle yoga therapy system for adhesive capsulitis—restore shoulder mobility without aggressive surgery or painful injections.",
    path: "/programmes/yoga-for-frozen-shoulder",
  });
}

export default function YogaForFrozenShoulderProgrammeLayout({
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
        className={`yffs-sales-programme min-h-0 overflow-x-hidden bg-[color:var(--yffs-surface)] text-[color:var(--yffs-on-surface)] antialiased selection:bg-[color:var(--yffs-primary-fixed-dim)] ${newsreader.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
