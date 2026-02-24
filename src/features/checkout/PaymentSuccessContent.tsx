"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import {
  PaymentSuccessActions,
  PaymentSuccessBackground,
  PaymentSuccessHeading,
  PaymentSuccessIcon,
  PaymentSuccessReceiptCard,
  type PaymentSuccessCourseData,
} from "@/features/checkout/components";

const DEFAULT_COURSE_DATA: PaymentSuccessCourseData = {
  title: "Hormonal Balance & Yoga",
  instructor: "Dr. Sarah Jenkins",
  modules: 8,
  price: 49.0,
};

/**
 * Payment success page content. Accepts transactionId and courseId from URL query params.
 * Protected route (via checkout layout).
 */
export function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId") || "TRX-000000";
  const courseId = searchParams.get("courseId") || "";

  const courseData = DEFAULT_COURSE_DATA;

  useEffect(() => {
    // TODO: Fetch course details by courseId from API
  }, [courseId]);

  const purchaseDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      <PaymentSuccessBackground />

      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <PaymentSuccessIcon />
          <PaymentSuccessHeading courseTitle={courseData.title} />
          <PaymentSuccessReceiptCard
            transactionId={transactionId}
            courseData={courseData}
            purchaseDate={purchaseDate}
          />
          <PaymentSuccessActions courseId={courseId} />
        </div>
      </main>
    </div>
  );
}
