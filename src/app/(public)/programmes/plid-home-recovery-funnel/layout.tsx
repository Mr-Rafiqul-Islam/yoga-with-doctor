import type { Metadata } from "next";
import { Anek_Bangla, Hind_Siliguri, Tiro_Bangla } from "next/font/google";
import "./plid-funnel.css";

const anek = Anek_Bangla({
  subsets: ["latin", "bengali"],
  variable: "--font-plid-anek",
  display: "swap",
});

const hind = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plid-hind",
  display: "swap",
});

const tiro = Tiro_Bangla({
  subsets: ["latin", "bengali"],
  weight: "400",
  variable: "--font-plid-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLID Home Treatment",
  description:
    "Scientifically proven home-based system for PLID recovery without surgery.",
};

export default function PlidHomeRecoveryFunnelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        rel="stylesheet"
      />
      <div
        className={`plid-funnel font-body min-h-0 antialiased selection:bg-primary-container selection:text-on-primary-container ${anek.variable} ${hind.variable} ${tiro.variable}`}
      >
        {children}
      </div>
    </>
  );
}
