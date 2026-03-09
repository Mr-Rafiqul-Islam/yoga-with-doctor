import { CheckoutFooter } from "@/features/checkout/components";
import { RequireAuth } from "@/components/auth";

export default function CheckoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RequireAuth>
      <>
        {children}
        <CheckoutFooter />
      </>
    </RequireAuth>
  );
}
