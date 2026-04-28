import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-weight-loss.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For Weight Loss – Free Live Workshop",
    description:
      "Join our free live workshop to discover mindful, high-intensity yoga flows designed to support fat loss naturally.",
    path: "/workshop/yoga-for-weight-loss",
  });
}

export default function YogaForWeightLossLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-weight-loss min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}

