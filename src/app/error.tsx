"use client";

import { ErrorView } from "@/components/ui/ErrorView";

/**
 * Next.js error boundary. Catches runtime errors in this segment and below.
 * Renders the YWD "Something shifted" error UI with Return to Home and Try again.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-[60vh] flex-col overflow-hidden bg-background">
      <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-primary/5 to-transparent -z-10 dark:from-primary/10" />
      <ErrorView onReset={reset} showTryAgain />
    </div>
  );
}
