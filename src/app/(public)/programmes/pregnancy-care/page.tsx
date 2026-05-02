import { PcpFaq } from "./_components/PcpFaq";
import { PcpFinalCta } from "./_components/PcpFinalCta";
import { PcpHero } from "./_components/PcpHero";
import { PcpHope } from "./_components/PcpHope";
import { PcpInstructor } from "./_components/PcpInstructor";
import { PcpOfferBar } from "./_components/PcpOfferBar";
import { PcpPricing } from "./_components/PcpPricing";
import { PcpSafety } from "./_components/PcpSafety";
import { PcpTestimonials } from "./_components/PcpTestimonials";
import { PcpTrimesters } from "./_components/PcpTrimesters";
import { PcpTransformation } from "./_components/PcpTransformation";

/** Single offer deadline for the fixed bar (ISO 8601). */
export const PCP_OFFER_ENDS_AT_ISO = "2026-06-30T23:59:59.000Z";

const MAIN_PT = "pt-[52px] sm:pt-14";

export default function PregnancyCareProgrammePage() {
  return (
    <>
      <PcpOfferBar endAt={PCP_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} scroll-smooth`}>
        <PcpHero />
        <PcpSafety />
        <PcpHope />
        <PcpTransformation />
        <PcpInstructor />
        <PcpTrimesters />
        <PcpPricing />
        <PcpTestimonials />
        <PcpFaq />
        <PcpFinalCta />
      </main>
    </>
  );
}
