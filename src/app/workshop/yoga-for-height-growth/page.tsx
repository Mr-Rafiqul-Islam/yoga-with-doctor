import { YogaForHeightGrowthAuthority } from "./_components/YogaForHeightGrowthAuthority";
import { YogaForHeightGrowthBenefits } from "./_components/YogaForHeightGrowthBenefits";
import { YogaForHeightGrowthCurriculum } from "./_components/YogaForHeightGrowthCurriculum";
import { YogaForHeightGrowthFaq } from "./_components/YogaForHeightGrowthFaq";
import { YogaForHeightGrowthFinalCta } from "./_components/YogaForHeightGrowthFinalCta";
import { YogaForHeightGrowthHero } from "./_components/YogaForHeightGrowthHero";
import { YogaForHeightGrowthMythBuster } from "./_components/YogaForHeightGrowthMythBuster";
import { YogaForHeightGrowthPainPoints } from "./_components/YogaForHeightGrowthPainPoints";
import { YogaForHeightGrowthRegistration } from "./_components/YogaForHeightGrowthRegistration";
import { YogaForHeightGrowthSolution } from "./_components/YogaForHeightGrowthSolution";
import { YogaForHeightGrowthTestimonials } from "./_components/YogaForHeightGrowthTestimonials";

export default function YogaForHeightGrowthPage() {
  return (
    <div>
      <YogaForHeightGrowthHero />
      <YogaForHeightGrowthPainPoints />
      <YogaForHeightGrowthSolution />
      <YogaForHeightGrowthAuthority />
      <YogaForHeightGrowthBenefits />
      <YogaForHeightGrowthCurriculum />
      <YogaForHeightGrowthMythBuster />
      <YogaForHeightGrowthTestimonials />
      <YogaForHeightGrowthRegistration />
      <YogaForHeightGrowthFaq />
      <YogaForHeightGrowthFinalCta />
    </div>
  );
}
