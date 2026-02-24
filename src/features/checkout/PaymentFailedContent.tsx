"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  PaymentFailedActions,
  PaymentFailedBackground,
  PaymentFailedHeading,
  PaymentFailedIcon,
  PaymentFailedMessage,
  PaymentFailedNav,
  PaymentFailedTransactionBox,
} from "@/features/checkout/components/failed";

/**
 * Payment failed page content. Accepts transactionId, courseId, and error from URL query params.
 * Protected route (via checkout layout).
 */
export function PaymentFailedContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId") || "";
  const courseId = searchParams.get("courseId") || "";
  const error =
    searchParams.get("error") ||
    "Your card was declined. Please check your details or try another card.";

  const handleTryAgain = () => {
    if (courseId) {
      router.push(`/checkout/review?courseId=${courseId}`);
    } else {
      router.push("/checkout/review");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      <PaymentFailedBackground />

      <PaymentFailedNav />

      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-lg flex-col items-center text-center">
          <PaymentFailedIcon />
          <PaymentFailedHeading />
          <PaymentFailedMessage message={error} />

          <div className="mb-12 h-1 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />

          <PaymentFailedActions onTryAgain={handleTryAgain} />

          <PaymentFailedTransactionBox transactionId={transactionId} />
        </div>
      </main>
    </div>
  );
}

