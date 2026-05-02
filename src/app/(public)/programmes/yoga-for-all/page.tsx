import { YfaBundle } from "./_components/YfaBundle";
import { YfaEnrollment } from "./_components/YfaEnrollment";
import { YfaExperts } from "./_components/YfaExperts";
import { YfaFaq } from "./_components/YfaFaq";
import { YfaFinalCta } from "./_components/YfaFinalCta";
import { YfaHero } from "./_components/YfaHero";
import { YfaOfferBar } from "./_components/YfaOfferBar";
import { YfaProblem } from "./_components/YfaProblem";
import { YfaSerenity } from "./_components/YfaSerenity";
import { YfaSystem } from "./_components/YfaSystem";
import { YfaUrgency } from "./_components/YfaUrgency";

/** Single offer deadline for the fixed bar and urgency countdown (ISO 8601). */
export const YFA_OFFER_ENDS_AT_ISO = "2026-06-20T23:59:59.000Z";

const MAIN_PT = "pt-14 sm:pt-[52px]";

export default function YogaForAllProgrammePage() {
  return (
    <>
      <YfaOfferBar endAt={YFA_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth`}>
        <YfaHero />
        <YfaProblem />
        <YfaSerenity />
        <YfaSystem />
        <YfaBundle />
        <YfaExperts />
        <YfaUrgency endAt={YFA_OFFER_ENDS_AT_ISO} />
        <YfaEnrollment />
        <YfaFaq />
        <YfaFinalCta />
      </main>
    </>
  );
}
