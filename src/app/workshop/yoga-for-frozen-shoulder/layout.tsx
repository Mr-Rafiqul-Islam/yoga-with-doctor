import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-frozen-shoulder.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-frozen-shoulder-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-frozen-shoulder-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Frozen Shoulder - Free Live Workshop",
    description:
      "Join our free frozen shoulder workshop and learn clinical yoga methods to restore movement and reduce pain naturally.",
    path: "/workshop/yoga-for-frozen-shoulder",
  });
}

export default function YogaForFrozenShoulderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`workshop-yoga-frozen-shoulder min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)] ${playfairDisplay.variable} ${inter.variable}`}
    >
      {children}
    </div>
  );
}
