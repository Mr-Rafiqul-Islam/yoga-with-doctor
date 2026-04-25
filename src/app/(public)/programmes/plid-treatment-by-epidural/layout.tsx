import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./plid-epidural-landing.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-epi-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-epi-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "PLID Epidural Recovery",
    description:
      "Heal your spine naturally: doctor-led yoga for PLID recovery. Scientifically-backed home protocol by Dr. Shah Alam.",
    path: "/programmes/plid-treatment-by-epidural",
  });
}

export default function PlidTreatmentByEpiduralLayout({
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
        className={`plid-epidural-landing min-h-0 font-body text-on-surface antialiased selection:bg-primary-container/30 selection:text-on-primary-container ${notoSerif.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}
