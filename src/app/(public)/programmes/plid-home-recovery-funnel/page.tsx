import { SalesAuthority } from "./_components/SalesAuthority";
import { SalesBenefits } from "./_components/SalesBenefits";
import { SalesBonus } from "./_components/SalesBonus";
import { SalesCheckout } from "./_components/SalesCheckout";
import { SalesClose } from "./_components/SalesClose";
import { SalesFaq } from "./_components/SalesFaq";
import { SalesHero } from "./_components/SalesHero";
import { SalesMechanism } from "./_components/SalesMechanism";
import { SalesOffer } from "./_components/SalesOffer";
import { SalesProblem } from "./_components/SalesProblem";
import { SalesProgram } from "./_components/SalesProgram";
import { SalesProof } from "./_components/SalesProof";
import { SalesUrgency } from "./_components/SalesUrgency";

/** Deadline for the urgency countdown (ISO string or change to `new Date(...)`). */
const OFFER_ENDS_AT = "2026-05-03T23:59:59+06:00";

export default function PlidHomeRecoveryFunnelPage() {
  return (
    <>
      {/* Hero / Proof / Benefits: variant "auto" = light on light site, dark UI when html.dark; use "light" | "dark" to force */}
      <SalesHero />
      <SalesProblem />
      <SalesMechanism />
      <SalesAuthority />
      <SalesProof />
      <SalesBenefits />
      <SalesProgram />
      <SalesBonus />
      <SalesUrgency endsAt={OFFER_ENDS_AT} />
      <SalesOffer />
      <SalesCheckout />
      <SalesClose />
      <SalesFaq />
    </>
  );
}
