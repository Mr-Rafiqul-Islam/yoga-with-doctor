import { YogaCareDiabetesAgitation } from "./_components/YogaCareDiabetesAgitation";
import { YogaCareDiabetesAuthority } from "./_components/YogaCareDiabetesAuthority";
import { YogaCareDiabetesBenefits } from "./_components/YogaCareDiabetesBenefits";
import { YogaCareDiabetesCurriculum } from "./_components/YogaCareDiabetesCurriculum";
import { YogaCareDiabetesFaq } from "./_components/YogaCareDiabetesFaq";
import { YogaCareDiabetesFinalCta } from "./_components/YogaCareDiabetesFinalCta";
import { YogaCareDiabetesHero } from "./_components/YogaCareDiabetesHero";
import { YogaCareDiabetesMythBuster } from "./_components/YogaCareDiabetesMythBuster";
import { YogaCareDiabetesPainPoints } from "./_components/YogaCareDiabetesPainPoints";
import { YogaCareDiabetesRegistration } from "./_components/YogaCareDiabetesRegistration";
import { YogaCareDiabetesSocialProof } from "./_components/YogaCareDiabetesSocialProof";
import { YogaCareDiabetesSolution } from "./_components/YogaCareDiabetesSolution";

export default function YogaCareForDiabetesPage() {
  return (
    <div>
      <YogaCareDiabetesHero />
      <YogaCareDiabetesPainPoints />
      <YogaCareDiabetesAgitation />
      <YogaCareDiabetesSolution />
      <YogaCareDiabetesAuthority />
      <YogaCareDiabetesBenefits />
      <YogaCareDiabetesCurriculum />
      <YogaCareDiabetesMythBuster />
      <YogaCareDiabetesSocialProof />
      <YogaCareDiabetesRegistration />
      <YogaCareDiabetesFaq />
      <YogaCareDiabetesFinalCta />
    </div>
  );
}

