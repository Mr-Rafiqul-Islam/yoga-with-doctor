import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STATS = [
  { value: "5,000+", label: "Patients Helped" },
  { value: "15+", label: "Clinical Studies" },
  { value: "100%", label: "Medically Vetted" },
  { value: "24/7", label: "Expert Support" },
] as const;

export function YfdStats() {
  return (
    <ScrollReveal className="bg-[color:var(--yfd-primary)] py-16 text-center text-[color:var(--yfd-on-primary)]" delay={0.35}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="yfd-text-headline-xl">{s.value}</p>
            <p className="text-sm uppercase tracking-widest text-[color:var(--yfd-on-primary-container)]">{s.label}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
