import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STATS = [
  { value: "94%", label: "Reduced Attack Frequency" },
  { value: "15+", label: "Years Medical Experience" },
  { value: "2,400+", label: "Successful Students" },
  { value: "4.9/5", label: "Average Patient Rating" },
];

export function YfmStats() {
  return (
    <ScrollReveal className="bg-[color:var(--yfm-surface-container-low)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="mb-2 text-4xl font-bold text-[color:var(--yfm-primary)]">{value}</p>
              <p className="text-sm text-[color:var(--yfm-secondary)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
