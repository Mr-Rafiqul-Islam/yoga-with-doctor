import { YfmiAuthority } from "./_components/YfmiAuthority";
import { YfmiCheckout } from "./_components/YfmiCheckout";
import { YfmiFinalCta } from "./_components/YfmiFinalCta";
import { YfmiHero } from "./_components/YfmiHero";
import { YfmiOfferBar } from "./_components/YfmiOfferBar";
import { YfmiOfferStack } from "./_components/YfmiOfferStack";
import { YfmiProblem } from "./_components/YfmiProblem";
import { YfmiTestimonials } from "./_components/YfmiTestimonials";
import { YfmiTransformation } from "./_components/YfmiTransformation";

/** Single offer deadline for the fixed bar (ISO 8601). */
export const YFMI_OFFER_ENDS_AT_ISO = "2026-06-30T23:59:59.000Z";

const MAIN_PT = "pt-[52px]";

export default function YogaForMenstrualIrregularitiesProgrammePage() {
  return (
    <>
      <YfmiOfferBar endAt={YFMI_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} scroll-smooth overflow-x-hidden`}>
        <YfmiHero />
        <YfmiProblem />
        <YfmiTransformation />
        <YfmiAuthority />
        <YfmiOfferStack />
        <YfmiTestimonials />
        <YfmiCheckout />
        <YfmiFinalCta />
      </main>
    </>
  );
}
