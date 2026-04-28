import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-migraine.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Migraine – Free Live Workshop",
    description:
      "Join our free 2-day live workshop to discover clinically-backed yoga protocols that target the neurological root of migraine pain.",
    path: "/workshop/yoga-for-migraine",
  });
}

export default function YogaForMigraineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-migraine min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}

