import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ITEMS = [
  {
    icon: "person_off",
    title: "Invisible Presence",
    body: "Feeling overlooked in social gatherings or passed over for opportunities because of your stature.",
  },
  {
    icon: "mood_bad",
    title: "Low Confidence",
    body: "The constant insecurity that stops you from speaking up or standing tall in important moments.",
  },
  {
    icon: "airline_seat_recline_extra",
    title: "Poor Posture",
    body: "Years of desk work and phone usage have compressed your spine, making you look shorter than you are.",
  },
] as const;

export function YfhgPainPoints() {
  return (
    <ScrollReveal
      className="scroll-mt-28 bg-[color:var(--color-surface-container-low)] px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]"
      as="section"
    >
      <div className="mx-auto mb-[var(--yfhg-space-lg)] max-w-7xl text-center">
        <h2 className="yfhg-headline-lg mb-4 text-[color:var(--color-on-background)]">
          Are you tired of feeling small?
        </h2>
        <p className="yfhg-body-lg mx-auto max-w-2xl text-[color:var(--color-on-surface-variant)]">
          Height impacts more than just how you look—it affects how the world sees you and how you see yourself.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-[var(--yfhg-space-md)] md:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
          >
            <span className={`material-symbols-outlined mb-4 block text-4xl text-[color:var(--color-tertiary-container)]`}>
              {item.icon}
            </span>
            <h3 className="yfhg-headline-md mb-3 text-[color:var(--color-on-background)]">{item.title}</h3>
            <p className="text-[color:var(--color-on-surface-variant)]">{item.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
