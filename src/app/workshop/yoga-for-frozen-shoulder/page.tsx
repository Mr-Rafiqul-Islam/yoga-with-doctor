import { YogaForFrozenShoulderAuthority } from "./_components/YogaForFrozenShoulderAuthority";
import { YogaForFrozenShoulderFaq } from "./_components/YogaForFrozenShoulderFaq";
import { YogaForFrozenShoulderHero } from "./_components/YogaForFrozenShoulderHero";
import { YogaForFrozenShoulderPainPoints } from "./_components/YogaForFrozenShoulderPainPoints";
import { YogaForFrozenShoulderRegistration } from "./_components/YogaForFrozenShoulderRegistration";
import { YogaForFrozenShoulderSolution } from "./_components/YogaForFrozenShoulderSolution";

export default function YogaForFrozenShoulderPage() {
  return (
    <div>
      <YogaForFrozenShoulderHero />
      <YogaForFrozenShoulderPainPoints />
      <YogaForFrozenShoulderSolution />
      <YogaForFrozenShoulderAuthority />
      <YogaForFrozenShoulderRegistration />
      <YogaForFrozenShoulderFaq />
    </div>
  );
}
