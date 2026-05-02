import { YfbpCheckout } from "./_components/YfbpCheckout";
import { YfbpComparison } from "./_components/YfbpComparison";
import { YfbpDependency } from "./_components/YfbpDependency";
import { YfbpExpert } from "./_components/YfbpExpert";
import { YfbpFaq } from "./_components/YfbpFaq";
import { YfbpHero } from "./_components/YfbpHero";
import { YfbpMobileStickyCta } from "./_components/YfbpMobileStickyCta";
import { YfbpOfferBar } from "./_components/YfbpOfferBar";
import { YfbpPricing } from "./_components/YfbpPricing";
import { YfbpRisk } from "./_components/YfbpRisk";
import { YfbpSystem } from "./_components/YfbpSystem";

const MAIN_PT = "pt-[56px]";

export default function YogaForBpProgrammePage() {
  return (
    <>
      <YfbpOfferBar />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth pb-28 md:pb-0`}>
        <YfbpHero />
        <YfbpRisk />
        <YfbpDependency />
        <YfbpComparison />
        <YfbpExpert />
        <YfbpSystem />
        <YfbpPricing />
        <YfbpFaq />
        <YfbpCheckout />
      </main>
      <YfbpMobileStickyCta />
    </>
  );
}
