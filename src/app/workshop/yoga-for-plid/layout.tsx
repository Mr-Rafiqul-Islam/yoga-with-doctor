import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-plid.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For PLID – Free Live Workshop",
    description:
      "Join our free live workshop to learn clinically-safe yoga protocols for PLID recovery and long-term spinal health.",
    path: "/workshop/yoga-for-plid",
  });
}

export default function YogaForPlidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-plid min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}

