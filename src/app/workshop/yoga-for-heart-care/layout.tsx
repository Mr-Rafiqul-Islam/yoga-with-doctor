import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-heart-care.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Heart Care | Clinical Wellness",
    description:
      "Discover the scientifically-proven method to lower blood pressure and reduce cardiac stress through rhythmic movement and breath-work.",
    path: "/workshop/yoga-for-heart-care",
  });
}

export default function YogaForHeartCareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-heart-care min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)]">
      {children}
    </div>
  );
}
