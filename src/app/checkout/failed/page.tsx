import { Suspense } from "react";
import { PaymentFailedContent } from "@/features/checkout";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export const metadata = {
  title: "Payment Failed",
  description: "Your payment could not be processed. Please try again.",
};

/**
 * Payment failed page. Protected route (via checkout layout).
 * Accepts query params: transactionId, courseId, error
 * Example: /checkout/failed?transactionId=TRX-829402&courseId=hormonal-balance-yoga&error=Card%20declined
 */
export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<LoadingScreen className="min-h-[60vh]" />}>
      <PaymentFailedContent />
    </Suspense>
  );
}
