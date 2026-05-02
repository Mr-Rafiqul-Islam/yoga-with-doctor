import { YfwlEnrollment } from "./_components/YfwlEnrollment";
import { YfwlFaq } from "./_components/YfwlFaq";
import { YfwlHero } from "./_components/YfwlHero";
import { YfwlInstructor } from "./_components/YfwlInstructor";
import { YfwlMechanism } from "./_components/YfwlMechanism";
import { YfwlOfferBar } from "./_components/YfwlOfferBar";
import { YfwlPricing } from "./_components/YfwlPricing";
import { YfwlProblem } from "./_components/YfwlProblem";
import { YfwlTestimonials } from "./_components/YfwlTestimonials";
import { YfwlTransformation } from "./_components/YfwlTransformation";
import { YfwlValueStack } from "./_components/YfwlValueStack";

/** Fixed orange offer bar + safe inset; aligns with `/programmes/yoga-for-back-pain`. */
const MAIN_PT = "pt-[52px]";

export default function YogaForWeightLossProgrammePage() {
  return (
    <>
      <YfwlOfferBar />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth`}>
        <YfwlHero />
        <YfwlProblem />
        <YfwlTransformation />
        <YfwlInstructor />
        <YfwlMechanism />
        <YfwlValueStack />
        <YfwlTestimonials />
        <YfwlPricing />
        <YfwlEnrollment />
        <YfwlFaq />
      </main>
    </>
  );
}
