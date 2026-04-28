import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARDS = [
  {
    id: "pain",
    icon: "bolt",
    title: "Debilitating Pain",
    body: "Sharp lower back pain that shoots down your legs, making simple tasks like sitting or standing feel impossible.",
  },
  {
    id: "surgery",
    icon: "warning",
    title: "The Fear of Surgery",
    body: "Worrying that your condition will worsen until a risky, expensive spine surgery becomes your only option.",
  },
  {
    id: "mobility",
    icon: "disabled_by_default",
    title: "Loss of Mobility",
    body: "Feeling like a prisoner in your own body, unable to play with your kids or enjoy your favorite hobbies.",
  },
] as const;

export function YogaForPlidPainFear() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-8 py-20" as="section">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Is Your Back Pain Controlling Your Life?
        </h2>
        <p className="text-lg text-[var(--color-on-surface-variant)]">
          Living with PLID isn't just about the physical ache—it's the constant fear of what comes
          next.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-3">
        {CARDS.map((c) => (
          <div key={c.id} className="glass-card rounded-2xl p-8">
            <span className="material-symbols-outlined mb-4 text-[40px] text-[var(--color-tertiary)]">
              {c.icon}
            </span>
            <h3 className="mb-2 text-2xl font-semibold">{c.title}</h3>
            <p className="text-[var(--color-on-surface-variant)]">{c.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

