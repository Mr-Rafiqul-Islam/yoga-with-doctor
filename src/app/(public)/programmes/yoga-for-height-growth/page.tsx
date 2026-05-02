import { YfhgBenefits } from "./_components/YfhgBenefits";
import { YfhgEnrollment } from "./_components/YfhgEnrollment";
import { YfhgFaq } from "./_components/YfhgFaq";
import { YfhgFinalCta } from "./_components/YfhgFinalCta";
import { YfhgHero } from "./_components/YfhgHero";
import { YfhgInstructor } from "./_components/YfhgInstructor";
import { YfhgOfferBar } from "./_components/YfhgOfferBar";
import { YfhgPainPoints } from "./_components/YfhgPainPoints";
import { YfhgPricing } from "./_components/YfhgPricing";
import { YfhgProtocol } from "./_components/YfhgProtocol";
import { YfhgScience } from "./_components/YfhgScience";
import { YfhgTestimonials } from "./_components/YfhgTestimonials";

/** Single offer deadline for the fixed bar (ISO 8601). */
export const YFHG_OFFER_ENDS_AT_ISO = "2026-06-30T23:59:59.000Z";

const MAIN_PT = "pt-16 sm:pt-[52px]";

export default function YogaForHeightGrowthProgrammePage() {
  return (
    <>
      <YfhgOfferBar endAt={YFHG_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} scroll-smooth`}>
        <YfhgHero />
        <YfhgPainPoints />
        <YfhgBenefits />
        <YfhgScience />
        <YfhgProtocol />
        <YfhgPricing />
        <YfhgTestimonials />
        <YfhgInstructor />
        <YfhgFaq />
        <YfhgEnrollment />
        <YfhgFinalCta />
      </main>
    </>
  );
}
