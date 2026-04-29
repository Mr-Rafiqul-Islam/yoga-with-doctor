import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-menstrual-irregularities.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-mi-display",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga for Menstrual Irregularities | Free Live Workshop",
    description:
      "Regain hormonal balance and find your natural rhythm through evidence-based yoga practices designed specifically for menstrual irregularities.",
    path: "/workshop/yoga-for-menstrual-irregularities",
  });
}

export default function YogaForMenstrualIrregularitiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-menstrual-irregularities min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)] ${newsreader.variable}`}
    >
      {children}
    </div>
  );
}
