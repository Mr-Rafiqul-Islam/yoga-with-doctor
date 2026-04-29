import { YogaForHeartCareAuthority } from "./_components/YogaForHeartCareAuthority";
import { YogaForHeartCareCountdownBar } from "./_components/YogaForHeartCareCountdownBar";
import { YogaForHeartCareCurriculum } from "./_components/YogaForHeartCareCurriculum";
import { YogaForHeartCareFaq } from "./_components/YogaForHeartCareFaq";
import { YogaForHeartCareFinalCta } from "./_components/YogaForHeartCareFinalCta";
import { YogaForHeartCareHero } from "./_components/YogaForHeartCareHero";
import { YogaForHeartCareMythBuster } from "./_components/YogaForHeartCareMythBuster";
import { YogaForHeartCarePainPoints } from "./_components/YogaForHeartCarePainPoints";
import { YogaForHeartCareRegistration } from "./_components/YogaForHeartCareRegistration";
import { YogaForHeartCareReviews } from "./_components/YogaForHeartCareReviews";
import { YogaForHeartCareTransformation } from "./_components/YogaForHeartCareTransformation";
import { YogaForHeartCareWarningQuote } from "./_components/YogaForHeartCareWarningQuote";

export default function YogaForHeartCarePage() {
  return (
    <div>
      <YogaForHeartCareHero />
      <YogaForHeartCarePainPoints />
      <YogaForHeartCareWarningQuote />
      <YogaForHeartCareAuthority />
      <YogaForHeartCareTransformation />
      <YogaForHeartCareCountdownBar />
      <YogaForHeartCareCurriculum />
      <YogaForHeartCareMythBuster />
      <YogaForHeartCareReviews />
      <YogaForHeartCareRegistration />
      <YogaForHeartCareFaq />
      <YogaForHeartCareFinalCta />
    </div>
  );
}
