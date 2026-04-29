import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-thyroid.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-thyroid-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-thyroid-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Thyroid – Free Live Workshop",
    description:
      "Join a free live workshop to support thyroid health naturally with guided yoga, breathwork, and sustainable lifestyle habits.",
    path: "/workshop/yoga-for-thyroid",
  });
}

export default function YogaForThyroidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-thyroid min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)] ${plusJakartaSans.variable} ${inter.variable}`}
    >
      {children}
    </div>
  );
}
