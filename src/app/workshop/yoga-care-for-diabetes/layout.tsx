import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";
import "./yoga-care-for-diabetes.css";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Yoga Care For Diabetes – Free Live Workshop",
    description:
      "Join our free live workshop to learn a doctor-led clinical yoga protocol for supporting healthy blood sugar, stress reduction, and sustainable energy.",
    path: "/workshop/yoga-care-for-diabetes",
  });
}

export default function YogaCareForDiabetesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="workshop-yoga-care-diabetes min-h-0 bg-background text-on-surface">
      {children}
    </div>
  );
}

