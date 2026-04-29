import YogaForPcosAgitation from "./_components/YogaForPcosAgitation";
import YogaForPcosAuthority from "./_components/YogaForPcosAuthority";
import YogaForPcosBenefits from "./_components/YogaForPcosBenefits";
import YogaForPcosCurriculum from "./_components/YogaForPcosCurriculum";
import YogaForPcosFaqCountdown from "./_components/YogaForPcosFaqCountdown";
import YogaForPcosFinalCta from "./_components/YogaForPcosFinalCta";
import YogaForPcosHero from "./_components/YogaForPcosHero";
import YogaForPcosMythBuster from "./_components/YogaForPcosMythBuster";
import YogaForPcosRegistration from "./_components/YogaForPcosRegistration";
import YogaForPcosReviews from "./_components/YogaForPcosReviews";
import YogaForPcosSolution from "./_components/YogaForPcosSolution";
import YogaForPcosSymptoms from "./_components/YogaForPcosSymptoms";

export default function YogaForPcosPage() {
  return (
    <div>
      <YogaForPcosHero />
      <YogaForPcosSymptoms />
      <YogaForPcosAgitation />
      <YogaForPcosSolution />
      <YogaForPcosAuthority />
      <YogaForPcosBenefits />
      <YogaForPcosCurriculum />
      <YogaForPcosMythBuster />
      <YogaForPcosReviews />
      <YogaForPcosRegistration />
      <YogaForPcosFaqCountdown />
      <YogaForPcosFinalCta />
    </div>
  );
}
