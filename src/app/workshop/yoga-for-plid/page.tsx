import { YogaForPlidAuthority } from "./_components/YogaForPlidAuthority";
import { YogaForPlidCountdownBar } from "./_components/YogaForPlidCountdownBar";
import { YogaForPlidCurriculum } from "./_components/YogaForPlidCurriculum";
import { YogaForPlidFaq } from "./_components/YogaForPlidFaq";
import { YogaForPlidFinalCta } from "./_components/YogaForPlidFinalCta";
import { YogaForPlidHero } from "./_components/YogaForPlidHero";
import { YogaForPlidMythBuster } from "./_components/YogaForPlidMythBuster";
import { YogaForPlidPainFear } from "./_components/YogaForPlidPainFear";
import { YogaForPlidRegistration } from "./_components/YogaForPlidRegistration";
import { YogaForPlidSolution } from "./_components/YogaForPlidSolution";
import { YogaForPlidTestimonials } from "./_components/YogaForPlidTestimonials";

export default function YogaForPlidPage() {
  return (
    <div>
      <YogaForPlidHero />
      <YogaForPlidCountdownBar />
      <YogaForPlidPainFear />
      <YogaForPlidSolution />
      <YogaForPlidAuthority />
      <YogaForPlidMythBuster />
      <YogaForPlidCurriculum />
      <YogaForPlidTestimonials />
      <YogaForPlidRegistration />
      <YogaForPlidFaq />
      <YogaForPlidFinalCta />
    </div>
  );
}

