"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Payment failed page content. Accepts transactionId, courseId, and error from URL query params.
 * Protected route (via checkout layout).
 */
export function PaymentFailedContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId") || "";
  const courseId = searchParams.get("courseId") || "";
  const error = searchParams.get("error") || "Your card was declined. Please check your details or try another card.";

  const handleTryAgain = () => {
    if (courseId) {
      router.push(`/checkout/review?courseId=${courseId}`);
    } else {
      router.push("/checkout/review");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      {/* Background blur orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-red-100/40 blur-[100px] dark:bg-red-900/10" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-orange-50/50 blur-[120px] dark:bg-orange-900/5" />
      </div>

      {/* Nav */}
      <nav className="z-10 flex w-full max-w-7xl items-center justify-between px-6 py-6 mx-auto">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Go back"
        >
          <span className="material-icons-outlined text-xl">arrow_back</span>
        </button>
        <div className="w-10" aria-hidden />
      </nav>

      {/* Main */}
      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-lg flex-col items-center text-center">
          {/* Error icon */}
          <div className="group relative mb-10">
            <div className="absolute inset-0 scale-150 rounded-full bg-red-50 transition-transform duration-700 group-hover:scale-125 dark:bg-red-900/10" />
            <div className="absolute inset-0 scale-125 rounded-full bg-red-100 transition-transform duration-500 group-hover:scale-110 dark:bg-red-900/20" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-error shadow-glow-error animate-bounce-slow">
              <span className="material-icons-outlined text-6xl font-bold text-white">priority_high</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground dark:text-white md:text-5xl">
            Oops! Payment{" "}
            <br />
            Unsuccessful.
          </h1>

          {/* Message */}
          <p className="mb-12 max-w-md text-lg leading-relaxed text-muted">{error}</p>

          {/* Divider */}
          <div className="mb-12 h-1 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />

          {/* Actions */}
          <div className="w-full space-y-6">
            <button
              type="button"
              onClick={handleTryAgain}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-error px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
            >
              Try Again
              <span className="material-icons-outlined text-xl transition-transform duration-500 group-hover:rotate-180">
                refresh
              </span>
            </button>
            <Link
              href="/contact"
              className="inline-block font-medium text-muted transition-colors duration-200 hover:text-error dark:hover:text-error"
            >
              Contact Support
            </Link>
          </div>

          {/* Transaction ID (if available) */}
          {transactionId && (
            <div className="mt-8 rounded-lg border border-gray-200 bg-surface px-4 py-3 dark:border-gray-700 dark:bg-surface-dark">
              <p className="text-xs font-medium text-muted">Transaction ID</p>
              <p className="mt-1 font-mono text-sm text-foreground">{transactionId}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
