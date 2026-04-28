import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const COUNTDOWN = [
  { id: "days", value: "02", label: "Days" },
  { id: "hrs", value: "14", label: "Hrs" },
  { id: "min", value: "56", label: "Min" },
  { id: "sec", value: "12", label: "Sec" },
] as const;

export function YogaForPlidCountdownBar() {
  return (
    <ScrollReveal
      as="div"
      className="sticky top-0 z-40 bg-[var(--color-primary)] py-4 text-[var(--color-on-primary)]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-8">
        <span className="font-bold tracking-tight">FREE WORKSHOP STARTS IN:</span>
        <div className="flex gap-4 text-2xl font-semibold">
          {COUNTDOWN.map((c) => (
            <div key={c.id} className="flex flex-col items-center">
              <span>{c.value}</span>
              <span className="text-[10px] font-semibold uppercase opacity-80">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

