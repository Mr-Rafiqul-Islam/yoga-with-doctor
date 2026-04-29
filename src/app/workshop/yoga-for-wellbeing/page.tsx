import { YogaForWellbeingAuthority } from "./_components/YogaForWellbeingAuthority";
import { YogaForWellbeingHero } from "./_components/YogaForWellbeingHero";
import { YogaForWellbeingPainPoints } from "./_components/YogaForWellbeingPainPoints";
import { YogaForWellbeingRegistration } from "./_components/YogaForWellbeingRegistration";
import { YogaForWellbeingReviews } from "./_components/YogaForWellbeingReviews";

export default function YogaForWellbeingPage() {
  return (
    <div>
      <YogaForWellbeingHero />
      <YogaForWellbeingPainPoints />
      <YogaForWellbeingAuthority />
      <YogaForWellbeingReviews />
      <YogaForWellbeingRegistration />
    </div>
  );
}
