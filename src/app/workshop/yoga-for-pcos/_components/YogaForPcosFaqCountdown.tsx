import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import YogaForPcosFaqList from "./YogaForPcosFaqList";

const COUNTDOWN = [
  { value: "02", label: "Days" },
  { value: "14", label: "Hours" },
  { value: "45", label: "Mins" },
];

export default function YogaForPcosFaqCountdown() {
  return (
    <ScrollReveal className="px-6 py-[var(--pcos-section-y)]" as="section" id="faq">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-headline-lg mb-8 text-[var(--color-on-surface)]">
            Frequently Asked Questions
          </h2>
          <YogaForPcosFaqList />
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[rgb(var(--color-primary-rgb)/0.05)] p-12 text-center">
          <h3 className="font-headline-md mb-6 text-[var(--color-primary)]">Starting Soon!</h3>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {COUNTDOWN.map((unit) => (
              <div
                key={unit.label}
                className="ambient-shadow w-20 rounded-xl bg-[var(--color-surface-lowest)] p-4"
              >
                <span className="block text-3xl font-bold text-[var(--color-primary)]">
                  {unit.value}
                </span>
                <span className="text-xs font-semibold uppercase opacity-50">{unit.label}</span>
              </div>
            ))}
          </div>
          <p className="mb-8 max-w-sm text-[var(--color-on-surface-variant)]">
            Don&apos;t let another month go by feeling out of sync with your body. Start your natural
            healing journey today.
          </p>
          <a
            href="#register"
            className="text-label-sm w-full rounded-full bg-[var(--color-primary)] px-8 py-4 text-[var(--color-on-primary)] sm:w-auto"
          >
            Claim Your Seat Now
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
