import { YogaForAllAgitation } from "./_components/YogaForAllAgitation";
import { YogaForAllAuthority } from "./_components/YogaForAllAuthority";
import { YogaForAllBeliefShift } from "./_components/YogaForAllBeliefShift";
import { YogaForAllBenefits } from "./_components/YogaForAllBenefits";
import { YogaForAllCurriculum } from "./_components/YogaForAllCurriculum";
import { YogaForAllFaq } from "./_components/YogaForAllFaq";
import { YogaForAllFinalCta } from "./_components/YogaForAllFinalCta";
import { YogaForAllHero } from "./_components/YogaForAllHero";
import { YogaForAllProblem } from "./_components/YogaForAllProblem";
import { YogaForAllRegistration } from "./_components/YogaForAllRegistration";
import { YogaForAllSolution } from "./_components/YogaForAllSolution";
import { YogaForAllTestimonials } from "./_components/YogaForAllTestimonials";

export default function YogaForAllPage() {
  return (
    <div>
      <YogaForAllHero />
      <YogaForAllProblem />
      <YogaForAllAgitation />
      <YogaForAllSolution />
      <YogaForAllAuthority />
      <YogaForAllBenefits />
      <YogaForAllCurriculum />
      <YogaForAllBeliefShift />
      <YogaForAllTestimonials />
      <YogaForAllRegistration />
      <YogaForAllFaq />
      <YogaForAllFinalCta />
    </div>
  );
}

