import { RegularYogaProgrammeHero } from "./_components/RegularYogaProgrammeHero";
import { RegularYogaProgrammeMechanism } from "./_components/RegularYogaProgrammeMechanism";
import { RegularYogaProgrammeOfferForm } from "./_components/RegularYogaProgrammeOfferForm";
import { RegularYogaProgrammeProblem } from "./_components/RegularYogaProgrammeProblem";
import { RegularYogaProgrammeProgram } from "./_components/RegularYogaProgrammeProgram";
import { RegularYogaProgrammeTestimonials } from "./_components/RegularYogaProgrammeTestimonials";
import { RegularYogaProgrammeVideo } from "./_components/RegularYogaProgrammeVideo";

export default function RegularYogaProgrammePage() {
  return (
    <main>
      <RegularYogaProgrammeHero />
      <RegularYogaProgrammeVideo />
      <RegularYogaProgrammeProblem />
      <RegularYogaProgrammeMechanism />
      <RegularYogaProgrammeProgram />
      <RegularYogaProgrammeTestimonials />
      <RegularYogaProgrammeOfferForm />
    </main>
  );
}
