import { RequireAuth } from "@/components/auth";
import { CheckoutFooter } from "@/features/checkout/components";

export default function CheckoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RequireAuth>{children}
  <CheckoutFooter />
  </RequireAuth>;
}
