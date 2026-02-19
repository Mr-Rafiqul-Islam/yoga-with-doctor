import { CheckoutReviewContent } from "@/features/checkout";

export const metadata = {
  title: "Checkout Review",
  description: "Review your order before payment.",
};

export default function CheckoutReviewPage() {
  return <CheckoutReviewContent />;
}
