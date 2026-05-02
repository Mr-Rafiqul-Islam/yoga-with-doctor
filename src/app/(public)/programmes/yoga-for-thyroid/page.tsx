import { YftEmotional } from "./_components/YftEmotional";
import { YftFaq } from "./_components/YftFaq";
import { YftFinalCta } from "./_components/YftFinalCta";
import { YftHero } from "./_components/YftHero";
import { YftOfferBar } from "./_components/YftOfferBar";
import { YftPricing } from "./_components/YftPricing";
import { YftProblem } from "./_components/YftProblem";
import { YftProtocol } from "./_components/YftProtocol";
import { YftScience } from "./_components/YftScience";
import { YftTransformation } from "./_components/YftTransformation";

/** Single offer deadline for the fixed bar (ISO 8601). */
export const YFT_OFFER_ENDS_AT_ISO = "2026-06-30T23:59:59.000Z";

const MAIN_PT = "pt-16 sm:pt-[52px]";

export default function YogaForThyroidProgrammePage() {
  return (
    <>
      <YftOfferBar endAt={YFT_OFFER_ENDS_AT_ISO} />
      <main className={`${MAIN_PT} scroll-smooth`}>
        <YftHero />
        <YftProblem />
        <YftEmotional />
        <YftTransformation />
        <YftScience />
        <YftProtocol />
        <YftPricing />
        <YftFaq />
        <YftFinalCta />
      </main>
    </>
  );
}
