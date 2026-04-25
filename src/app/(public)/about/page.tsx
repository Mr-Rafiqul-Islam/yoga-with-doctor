import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "About",
    description:
      "Learn about Yoga With Doctor — our mission, clinical approach, and how we combine medicine with yoga for your wellness journey.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-serif text-h1 font-semibold text-foreground">
        About
      </h1>
      <p className="mt-4 text-body-lg text-muted">About content coming soon.</p>
    </div>
  );
}
