
import { YogaForWeightLossAgitation } from "./_components/YogaForWeightLossAgitation";
import { YogaForWeightLossAuthority } from "./_components/YogaForWeightLossAuthority";
import { YogaForWeightLossBenefits } from "./_components/YogaForWeightLossBenefits";
import { YogaForWeightLossCurriculum } from "./_components/YogaForWeightLossCurriculum";
import { YogaForWeightLossFaq } from "./_components/YogaForWeightLossFaq";
import { YogaForWeightLossFinalCta } from "./_components/YogaForWeightLossFinalCta";
import { YogaForWeightLossHero } from "./_components/YogaForWeightLossHero";
import { YogaForWeightLossProblem } from "./_components/YogaForWeightLossProblem";
import { YogaForWeightLossRegistration } from "./_components/YogaForWeightLossRegistration";
import { YogaForWeightLossSocialProof } from "./_components/YogaForWeightLossSocialProof";
import { YogaForWeightLossSolution } from "./_components/YogaForWeightLossSolution";

export default function YogaForWeightLossPage() {
  return (
    <div>
      <YogaForWeightLossHero />
      <YogaForWeightLossProblem />
      <YogaForWeightLossAgitation />
      <YogaForWeightLossSolution />
      <YogaForWeightLossAuthority />
      <YogaForWeightLossBenefits />
      <YogaForWeightLossCurriculum />
      <YogaForWeightLossSocialProof />
      <YogaForWeightLossRegistration />
      <YogaForWeightLossFaq />
      <YogaForWeightLossFinalCta />
    </div>
  );
}

