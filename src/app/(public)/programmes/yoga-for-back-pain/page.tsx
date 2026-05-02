import { YfbpCheckout } from "./_components/YfbpCheckout";
import { YfbpDecompression } from "./_components/YfbpDecompression";
import { YfbpFaq } from "./_components/YfbpFaq";
import { YfbpHero } from "./_components/YfbpHero";
import { YfbpInstructor } from "./_components/YfbpInstructor";
import { YfbpLimitedOfferBar } from "./_components/YfbpLimitedOfferBar";
import { YfbpScience } from "./_components/YfbpScience";
import { YfbpStickyClosingBar } from "./_components/YfbpStickyClosingBar";
import { YfbpStruggling } from "./_components/YfbpStruggling";
import { YfbpValueStack } from "./_components/YfbpValueStack";

/** Top urgency bar (~44–52px) + safe offset; sticky site chrome not shown on `/programmes`. */
const MAIN_PT = "pt-[52px]";
/** Bottom sticky CTA height + cushion so content clears bar. */
const MAIN_PB = "pb-28";

export default function YogaForBackPainProgrammePage() {
  return (
    <>
      <YfbpLimitedOfferBar />
      <main className={`${MAIN_PT} ${MAIN_PB} overflow-x-hidden scroll-smooth`}>
        <YfbpHero />
        <YfbpStruggling />
        <YfbpDecompression />
        <YfbpScience />
        <YfbpInstructor />
        <YfbpValueStack />
        <YfbpCheckout />
        <YfbpFaq />
      </main>
      <YfbpStickyClosingBar />
    </>
  );
}
