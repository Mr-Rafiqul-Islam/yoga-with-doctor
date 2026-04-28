import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-for-high-blood-pressure.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga For High Blood Pressure – Free Live Workshop",
    description:
      "Join our free workshop to learn gentle, science-informed yoga and breath practices to support blood pressure, stress reduction, and heart health.",
    path: "/workshop/yoga-for-high-blood-pressure",
  });
}

export default function YogaForHighBloodPressureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-hbp min-h-0 bg-[var(--color-background)] text-[var(--color-on-surface)]">
      {children}
    </div>
  );
}
