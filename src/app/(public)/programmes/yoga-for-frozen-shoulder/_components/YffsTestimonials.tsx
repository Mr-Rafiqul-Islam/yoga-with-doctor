import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const ITEMS = [
  {
    quote:
      "After 4 months of physical therapy that felt like torture, this program was a breath of fresh air. I could finally sleep on my left side again after just 2 weeks.",
    name: "Sarah Jenkins",
    subtitle: "Aged 54, Recovered in 6 weeks",
  },
  {
    quote:
      "I was scheduled for surgery in June. My doctor is amazed—I canceled the surgery because I have 90% mobility back using Dr. Reed's yoga system.",
    name: "Michael Thorne",
    subtitle: "Aged 62, Avoided Surgery",
  },
  {
    quote:
      "The pain was so sharp I couldn't even hug my grandkids. This course gave me my life back. It's gentle, clear, and it actually works.",
    name: "Linda G.",
    subtitle: "Aged 48, Grandma & Teacher",
  },
];

export function YffsTestimonials() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-7xl px-6 py-24" delay={0.14} id="stories">
      <h2 className="yffs-headline-lg mb-16 text-center text-[color:var(--yffs-on-surface)]">
        Real Stories of Recovery
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {ITEMS.map(({ quote, name, subtitle }, i) => (
          <ScrollReveal
            key={name}
            as="div"
            className="relative rounded-2xl bg-[color:var(--yffs-surface-bright)] p-8 italic text-[color:var(--yffs-on-surface-variant)]"
            delay={0.15 + i * 0.03}
          >
            <span className="material-symbols-outlined absolute -top-4 -left-2 text-6xl text-[color:var(--yffs-primary-container)] opacity-20">
              format_quote
            </span>
            <p className="mb-6">&quot;{quote}&quot;</p>
            <div className="flex items-center gap-3 not-italic">
              <div className="h-10 w-10 shrink-0 rounded-full bg-slate-300" aria-hidden />
              <div>
                <p className="text-sm font-bold">{name}</p>
                <p className="text-xs">{subtitle}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
}
