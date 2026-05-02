import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAIN_CARDS = [
  {
    icon: "nights_stay" as const,
    title: "Sleepless Nights",
    body: "Tossing and turning because every position puts pressure on your joint, leading to chronic fatigue.",
  },
  {
    icon: "do_not_disturb_on" as const,
    title: "Limited Reach",
    body: "Struggling with simple tasks like putting on a coat, reaching for a shelf, or brushing your hair.",
  },
  {
    icon: "bolt" as const,
    title: "Sharp Zingers",
    body: "That sudden, agonizing bolt of pain from a simple accidental movement that leaves you breathless.",
  },
];

export function YffsPain() {
  return (
    <ScrollReveal as="section" className="bg-[color:var(--yffs-surface-container-low)] py-24" delay={0.04}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="yffs-headline-lg mb-4 text-[color:var(--yffs-on-surface)]">
            Is Your Shoulder Keeping You &quot;Frozen&quot; in Life?
          </h2>
          <p className="mx-auto max-w-2xl text-[color:var(--yffs-on-surface-variant)]">
            Frozen shoulder isn&apos;t just physical pain—it&apos;s the loss of independence and the constant fear of a
            sudden, sharp jolt.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PAIN_CARDS.map(({ icon, title, body }, i) => (
            <ScrollReveal
              key={title}
              as="div"
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              delay={0.05 + i * 0.04}
            >
              <span className="material-symbols-outlined mb-4 text-4xl text-[color:var(--yffs-error)]">
                {icon}
              </span>
              <h3 className="yffs-headline-md mb-3">{title}</h3>
              <p className="text-[color:var(--yffs-on-surface-variant)]">{body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
