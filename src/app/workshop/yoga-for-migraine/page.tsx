import { YogaForMigraineAgitation } from "./_components/YogaForMigraineAgitation";
import { YogaForMigraineAuthority } from "./_components/YogaForMigraineAuthority";
import { YogaForMigraineBenefits } from "./_components/YogaForMigraineBenefits";
import { YogaForMigraineCurriculum } from "./_components/YogaForMigraineCurriculum";
import { YogaForMigraineFaq } from "./_components/YogaForMigraineFaq";
import { YogaForMigraineFinalCta } from "./_components/YogaForMigraineFinalCta";
import { YogaForMigraineHero } from "./_components/YogaForMigraineHero";
import { YogaForMigrainePainPoints } from "./_components/YogaForMigrainePainPoints";
import { YogaForMigraineRegistration } from "./_components/YogaForMigraineRegistration";
import { YogaForMigraineSocialProof } from "./_components/YogaForMigraineSocialProof";
import { YogaForMigraineSolution } from "./_components/YogaForMigraineSolution";

export default function YogaForMigrainePage() {
  return (
    <div>
      <YogaForMigraineHero />
      <YogaForMigrainePainPoints />
      <YogaForMigraineAgitation />
      <YogaForMigraineSolution />
      <YogaForMigraineAuthority />
      <YogaForMigraineBenefits />
      <YogaForMigraineCurriculum />
      <YogaForMigraineSocialProof />
      <YogaForMigraineRegistration />
      <YogaForMigraineFaq />
      <YogaForMigraineFinalCta />
    </div>
  );
}

