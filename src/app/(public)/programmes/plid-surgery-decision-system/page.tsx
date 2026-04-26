import { PlidSurgeryDecisionHero } from "./_components/PlidSurgeryDecisionHero";
import { PlidSurgeryDecisionProblem } from "./_components/PlidSurgeryDecisionProblem";
import { PlidSurgeryDecisionMechanism } from "./_components/PlidSurgeryDecisionMechanism";
import { PlidSurgeryDecisionSystemProgram } from "./_components/PlidSurgeryDecisionSystemProgram";
import { PlidSurgeryDecisionAuthority } from "./_components/PlidSurgeryDecisionAuthority";
import { PlidSurgeryDecisionCheckout } from "./_components/PlidSurgeryDecisionCheckout";

export default function PlidSurgeryDecisionSystemPage() {
  return (
    <main>
      <PlidSurgeryDecisionHero />
      <PlidSurgeryDecisionProblem />
      <PlidSurgeryDecisionMechanism />
      <PlidSurgeryDecisionSystemProgram />
      <PlidSurgeryDecisionAuthority />
      <PlidSurgeryDecisionCheckout />
    </main>
  );
}

