import type { Metadata } from "next";
import { Inter, Lexend, Plus_Jakarta_Sans } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-height-growth.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-height-growth-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-height-growth-body",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-height-growth-label",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Height Growth – Free Live Workshop",
    description:
      "Join our free live workshop to improve posture, reduce spinal compression, and unlock your natural height potential through guided yoga.",
    path: "/workshop/yoga-for-height-growth",
  });
}

export default function YogaForHeightGrowthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-height-growth min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)] ${plusJakartaSans.variable} ${inter.variable} ${lexend.variable}`}
    >
      {children}
    </div>
  );
}
