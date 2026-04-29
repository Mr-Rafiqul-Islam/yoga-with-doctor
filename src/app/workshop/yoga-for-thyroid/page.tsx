import { YogaForThyroidAgitation } from "./_components/YogaForThyroidAgitation";
import { YogaForThyroidAuthority } from "./_components/YogaForThyroidAuthority";
import { YogaForThyroidBenefits } from "./_components/YogaForThyroidBenefits";
import { YogaForThyroidCurriculum } from "./_components/YogaForThyroidCurriculum";
import { YogaForThyroidFaq } from "./_components/YogaForThyroidFaq";
import { YogaForThyroidFinalCta } from "./_components/YogaForThyroidFinalCta";
import { YogaForThyroidHero } from "./_components/YogaForThyroidHero";
import { YogaForThyroidMythBuster } from "./_components/YogaForThyroidMythBuster";
import { YogaForThyroidPainPoints } from "./_components/YogaForThyroidPainPoints";
import { YogaForThyroidRegistration } from "./_components/YogaForThyroidRegistration";
import { YogaForThyroidSolution } from "./_components/YogaForThyroidSolution";
import { YogaForThyroidTestimonials } from "./_components/YogaForThyroidTestimonials";

export default function YogaForThyroidPage() {
  return (
    <div>
      <YogaForThyroidHero />
      <YogaForThyroidPainPoints />
      <YogaForThyroidAgitation />
      <YogaForThyroidSolution />
      <YogaForThyroidAuthority />
      <YogaForThyroidBenefits />
      <YogaForThyroidCurriculum />
      <YogaForThyroidMythBuster />
      <YogaForThyroidTestimonials />
      <YogaForThyroidRegistration />
      <YogaForThyroidFaq />
      <YogaForThyroidFinalCta />
    </div>
  );
}
