"use client";

import { notifyToast } from "@/lib/notifier";

type ArticleShareButtonProps = {
  onAfterShare?: () => void;
  className?: string;
};

export function ArticleShareButton({
  onAfterShare,
  className = "",
}: ArticleShareButtonProps) {
  const handleShare = async () => {
    // Keeping behavior simple: show a toast for now.
    // You can extend this to navigator.share or copy-link later.
    try {
      if (navigator?.share) {
        await navigator.share({
          title: document.title || "Yoga With Doctor",
          text: "Check out this article!",
          url: window.location.href,
        });
      } else {
        notifyToast({
          variant: "info",
          title: "Share",
          message: "Sharing is not implemented yet. Please copy the URL.",
          durationMs: 4000,
        });
      }
    } catch {
      // User might cancel share dialog; ignore.
    } finally {
      onAfterShare?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
      aria-label="Share"
    >
      <span className="material-icons-outlined text-sm">share</span>
    </button>
  );
}

