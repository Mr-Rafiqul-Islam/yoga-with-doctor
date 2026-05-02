import { YfplidEnrollment } from "./_components/YfplidEnrollment";
import { YfplidFaq } from "./_components/YfplidFaq";
import { YfplidFinalCta } from "./_components/YfplidFinalCta";
import { YfplidHero } from "./_components/YfplidHero";
import { YfplidOfferBar } from "./_components/YfplidOfferBar";
import { YfplidPillars } from "./_components/YfplidPillars";
import { YfplidSurgeryTrap } from "./_components/YfplidSurgeryTrap";
import { YfplidSymptoms } from "./_components/YfplidSymptoms";
import { YfplidTransformation } from "./_components/YfplidTransformation";
import { YfplidValueStack } from "./_components/YfplidValueStack";
import { YfplidVision } from "./_components/YfplidVision";

const MAIN_PT = "pt-[52px]";

export default function YogaForPlidProgrammePage() {
  return (
    <>
      <YfplidOfferBar />
      <main className={`${MAIN_PT} overflow-x-hidden scroll-smooth`}>
        <YfplidHero />
        <YfplidSymptoms />
        <YfplidSurgeryTrap />
        <YfplidTransformation />
        <YfplidVision />
        <YfplidPillars />
        <YfplidValueStack />
        <YfplidFaq />
        <YfplidEnrollment />
        <YfplidFinalCta />
      </main>
    </>
  );
}
