import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-back-pain.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Back Pain - Free Live Workshop",
    description:
      "Join our free live workshop to learn medically-informed yoga practices for relieving chronic back pain naturally.",
    path: "/workshop/yoga-for-back-pain",
  });
}

export default function YogaForBackPainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-back-pain min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}
