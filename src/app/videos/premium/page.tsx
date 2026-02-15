import {
  PremiumCollectionHeader,
  PremiumVideosPageContent,
  PremiumUnlockCTA,
} from "@/features/videos/premium/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Collection",
  description:
    "Unlock all 50+ masterclasses and doctor-led sessions. Get access to the complete medical yoga library.",
};

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
