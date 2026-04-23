import { PlidEpiduralHero } from "./_components/PlidEpiduralHero";
import { PlidEpiduralMechanism } from "./_components/PlidEpiduralMechanism";
import { PlidEpiduralOfferForm } from "./_components/PlidEpiduralOfferForm";
import { PlidEpiduralProblem } from "./_components/PlidEpiduralProblem";
import { PlidEpiduralProgram } from "./_components/PlidEpiduralProgram";
import { PlidEpiduralTestimonials } from "./_components/PlidEpiduralTestimonials";
import { PlidEpiduralVideo } from "./_components/PlidEpiduralVideo";

export default function PlidTreatmentByEpiduralPage() {
  return (
    <main>
      <PlidEpiduralHero />
      <PlidEpiduralVideo />
      <PlidEpiduralProblem />
      <PlidEpiduralMechanism />
      <PlidEpiduralProgram />
      <PlidEpiduralTestimonials />
      <PlidEpiduralOfferForm />
    </main>
  );
}
