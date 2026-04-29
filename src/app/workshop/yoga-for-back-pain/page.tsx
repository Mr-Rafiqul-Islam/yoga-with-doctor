import { YogaForBackPainAgitation } from "./_components/YogaForBackPainAgitation";
import { YogaForBackPainAuthority } from "./_components/YogaForBackPainAuthority";
import { YogaForBackPainCurriculum } from "./_components/YogaForBackPainCurriculum";
import { YogaForBackPainFaq } from "./_components/YogaForBackPainFaq";
import { YogaForBackPainFinalCta } from "./_components/YogaForBackPainFinalCta";
import { YogaForBackPainHero } from "./_components/YogaForBackPainHero";
import { YogaForBackPainPainPoints } from "./_components/YogaForBackPainPainPoints";
import { YogaForBackPainRegistration } from "./_components/YogaForBackPainRegistration";
import { YogaForBackPainSolution } from "./_components/YogaForBackPainSolution";
import { YogaForBackPainTestimonials } from "./_components/YogaForBackPainTestimonials";
import { YogaForBackPainUrgencyBanner } from "./_components/YogaForBackPainUrgencyBanner";

export default function YogaForBackPainPage() {
  return (
    <div>
      <YogaForBackPainHero />
      <YogaForBackPainPainPoints />
      <YogaForBackPainAgitation />
      <YogaForBackPainUrgencyBanner />
      <YogaForBackPainSolution />
      <YogaForBackPainAuthority />
      <YogaForBackPainCurriculum />
      <YogaForBackPainTestimonials />
      <YogaForBackPainRegistration />
      <YogaForBackPainFaq />
      <YogaForBackPainFinalCta />
    </div>
  );
}
