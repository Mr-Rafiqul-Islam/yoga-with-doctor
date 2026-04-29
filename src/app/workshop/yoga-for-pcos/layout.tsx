import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-pcos.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-pcos-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-pcos-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For PCOS | Support Your Hormonal Balance Naturally",
    description:
      "Reclaim your health and rhythm through a medically-backed, restorative yoga practice designed specifically for PCOS and PCOD management.",
    path: "/workshop/yoga-for-pcos",
  });
}

export default function YogaForPcosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-pcos min-h-0 bg-[var(--color-background)] text-[var(--color-on-background)] ${notoSerif.variable} ${inter.variable}`}
    >
      {children}
    </div>
  );
}
