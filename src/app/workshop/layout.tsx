import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-workshop-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-workshop-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Workshops",
    description: "Free workshops from Yoga With Doctor.",
    path: "/workshop",
  });
}

export default function WorkshopLayout({
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
        className={`workshop-shell min-h-0 font-body antialiased ${manrope.variable} ${inter.variable}`}
      >
        {children}
      </div>
    </>
  );
}

