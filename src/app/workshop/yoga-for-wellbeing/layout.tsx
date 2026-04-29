import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-wellbeing.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-wellbeing-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-wellbeing-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Stress & Wellbeing — Free Live Workshop",
    description:
      "Find calm with simple yoga. Join our free live workshop for emotional regulation, stress relief, and science-backed movement for busy minds.",
    path: "/workshop/yoga-for-wellbeing",
  });
}

export default function YogaForWellbeingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-wellbeing min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)] ${plusJakartaSans.variable} ${inter.variable}`}
    >
      {children}
    </div>
  );
}
