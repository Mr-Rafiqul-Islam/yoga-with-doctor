import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YfbpCheckoutFormClient } from "./YfbpCheckoutFormClient";

export function YfbpCheckout() {
  return (
    <ScrollReveal id="pricing" className="scroll-mt-28 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <YfbpCheckoutFormClient />
      </div>
    </ScrollReveal>
  );
}
