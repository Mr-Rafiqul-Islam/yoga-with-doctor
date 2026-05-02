import { YfmBundle } from "./_components/YfmBundle";
import { YfmEnrollment } from "./_components/YfmEnrollment";
import { YfmFaq } from "./_components/YfmFaq";
import { YfmHero } from "./_components/YfmHero";
import { YfmOfferBar } from "./_components/YfmOfferBar";
import { YfmPainPoints } from "./_components/YfmPainPoints";
import { YfmScience } from "./_components/YfmScience";
import { YfmStats } from "./_components/YfmStats";
import { YfmTestimonials } from "./_components/YfmTestimonials";
import { YfmTransformation } from "./_components/YfmTransformation";

/** Fixed offer bar (~52px) + safe inset. */
const MAIN_PT = "pt-[52px]";

export default function YogaForMigraineProgrammePage() {
  return (
    <>
      <YfmOfferBar />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth`}>
        <YfmHero />
        <YfmPainPoints />
        <YfmTransformation />
        <YfmScience />
        <YfmBundle />
        <YfmStats />
        <YfmTestimonials />
        <YfmFaq />
        <YfmEnrollment />
      </main>
    </>
  );
}
