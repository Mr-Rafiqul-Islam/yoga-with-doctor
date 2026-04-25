import {
  PremiumCollectionHeader,
  PremiumVideosPageContent,
  PremiumUnlockCTA,
} from "@/features/videos/premium/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Premium Collection",
    description:
      "Unlock masterclasses and doctor-led sessions. Full access to the medical yoga and wellness video library.",
    path: "/videos/premium",
  });
}

/**
 * Premium Collection page. Light variant matches free video pages (design tokens);
 * dark variant keeps Figma dark styling.
 */
export default function PremiumVideosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-[#121212] dark:text-gray-100">
      <PremiumCollectionHeader />
      <PremiumVideosPageContent />
      <div className="pb-8">
        <PremiumUnlockCTA />
      </div>
    </div>
  );
}
