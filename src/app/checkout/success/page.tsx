import { Suspense } from "react";
import { PaymentSuccessContent } from "@/features/checkout";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export const metadata = {
  title: "Payment Successful",
  description: "Your payment was successful. Start learning now!",
};

/**
 * Payment success page. Protected route (via checkout layout).
 * Accepts query params: transactionId, courseId
 * Example: /checkout/success?transactionId=TRX-829402&courseId=hormonal-balance-yoga
 */
export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<LoadingScreen className="min-h-screen" />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
