import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-all.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For All – Free Live Workshop",
    description:
      "Join our free live workshop to discover simple, accessible yoga practices designed to improve your energy, flexibility, and stress resilience.",
    path: "/workshop/yoga-for-all",
  });
}

export default function YogaForAllLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-for-all min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}

