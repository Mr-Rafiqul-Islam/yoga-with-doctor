import { YfdCheckout } from "./_components/YfdCheckout";
import { YfdExpertStory } from "./_components/YfdExpertStory";
import { YfdFaq } from "./_components/YfdFaq";
import { YfdFinalCta } from "./_components/YfdFinalCta";
import { YfdFramework } from "./_components/YfdFramework";
import { YfdHero } from "./_components/YfdHero";
import { YfdOfferBar } from "./_components/YfdOfferBar";
import { YfdProblem } from "./_components/YfdProblem";
import { YfdStats } from "./_components/YfdStats";
import { YfdTestimonials } from "./_components/YfdTestimonials";
import { YfdTransformation } from "./_components/YfdTransformation";
import { YfdValueStack } from "./_components/YfdValueStack";

const MAIN_PT = "pt-[56px]";

export default function YogaForDiabetesProgrammePage() {
  return (
    <>
      <YfdOfferBar />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth`}>
        <YfdHero />
        <YfdProblem />
        <YfdTransformation />
        <YfdExpertStory />
        <YfdFramework />
        <YfdValueStack />
        <YfdTestimonials />
        <YfdStats />
        <YfdFaq />
        <YfdCheckout />
        <YfdFinalCta />
      </main>
    </>
  );
}
