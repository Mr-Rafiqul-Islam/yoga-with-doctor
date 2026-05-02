import { YffsAuthority } from "./_components/YffsAuthority";
import { YffsCheckout } from "./_components/YffsCheckout";
import { YffsFinalCta } from "./_components/YffsFinalCta";
import { YffsHero } from "./_components/YffsHero";
import { YffsOfferBar } from "./_components/YffsOfferBar";
import { YffsOfferStack } from "./_components/YffsOfferStack";
import { YffsPain } from "./_components/YffsPain";
import { YffsScience } from "./_components/YffsScience";
import { YffsTestimonials } from "./_components/YffsTestimonials";
import { YffsTransformation } from "./_components/YffsTransformation";
import { YffsUrgency } from "./_components/YffsUrgency";

/** Single offer deadline for the fixed bar and urgency section (ISO 8601). */
export const YFFS_OFFER_ENDS_AT_ISO = "2026-06-30T23:59:59.000Z";

const MAIN_PT = "pt-[52px]";

export default function YogaForFrozenShoulderProgrammePage() {
  return (
    <>
      <YffsOfferBar endAt={YFFS_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} scroll-smooth overflow-x-hidden`}>
        <YffsHero />
        <YffsPain />
        <YffsTransformation />
        <YffsScience />
        <YffsAuthority />
        <YffsOfferStack />
        <YffsTestimonials />
        <YffsUrgency endAt={YFFS_OFFER_ENDS_AT_ISO} />
        <YffsCheckout />
        <YffsFinalCta />
      </main>
    </>
  );
}
