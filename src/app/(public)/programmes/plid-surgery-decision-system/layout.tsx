import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./plid-surgery-decision-system.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-psds-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-psds-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "PLID Surgery Decision System",
    description: "Heal your spine naturally: doctor-led yoga protocol for PLID recovery.",
    path: "/programmes/plid-surgery-decision-system",
  });
}

export default function PlidSurgeryDecisionSystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <div
        className={`plid-surgery-decision-system min-h-0 font-body text-on-surface antialiased selection:bg-primary-container/30 selection:text-on-primary-container ${notoSerif.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}

