import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const statTiles: Array<
  | { kind: "stat"; value: string; label: string; wrapperClass: string }
  | { kind: "icon"; icon: string; label: string; wrapperClass: string }
> = [
  {
    kind: "stat",
    value: "85%",
    label: "Report chronic stress over cycle issues",
    wrapperClass: "bg-[var(--color-primary-fixed)] justify-end",
  },
  {
    kind: "icon",
    icon: "psychology_alt",
    label: "Information Overload",
    wrapperClass: "bg-[var(--color-secondary-fixed)] justify-center",
  },
];

export function YogaForMenstrualIrregularitiesAgitation() {
  return (
    <ScrollReveal className="mx-auto max-w-5xl px-6 py-32" as="section">
      <div className="flex flex-col items-center gap-16 md:flex-row">
        <div className="flex-1">
          <div className="space-y-6">
            <div className="rounded-xl border border-[var(--color-outline-variant)] bg-white p-6 shadow-sm">
              <p className="text-lg italic text-[var(--color-on-surface-variant)] md:text-xl">
                &ldquo;Is it stress? Is it my diet? Is this normal? Google says one thing, my doctor says
                another...&rdquo;
              </p>
            </div>
            <h2 className="text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
              The Noise is Exhausting.
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-on-surface-variant)] md:text-lg">
              Living with hormonal confusion is taxing. The constant second-guessing, the emotional
              rollercoasters, and the physical discomfort create a cycle of stress that only further impacts
              your hormonal health.
            </p>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          {statTiles.map((tile, i) => (
            <div
              key={i}
              className={`flex aspect-square flex-col rounded-2xl p-8 ${tile.wrapperClass}`}
            >
              {tile.kind === "stat" ? (
                <>
                  <span className="mi-font-display text-4xl font-semibold text-[var(--color-primary)]">
                    {tile.value}
                  </span>
                  <p className="text-xs font-semibold text-[var(--color-on-surface)] md:text-sm">{tile.label}</p>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-4xl text-[var(--color-on-secondary-fixed-variant)]">
                    {tile.icon}
                  </span>
                  <p className="mt-4 text-xs font-semibold text-[var(--color-on-surface)] md:text-sm">
                    {tile.label}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
