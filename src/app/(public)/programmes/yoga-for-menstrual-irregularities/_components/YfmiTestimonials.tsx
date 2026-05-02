import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type TCard = {
  quote: string;
  name: string;
  avatarBg: string;
  featured?: boolean;
};

const TESTIMONIALS: TCard[] = [
  {
    quote:
      '"After 8 months of missing cycles, this program helped me reconnect with my body. My period returned in the second week of the guided flows."',
    name: "Sarah M., London",
    avatarBg: "bg-[color:var(--yfmi-primary-fixed-dim)]",
  },
  {
    quote:
      '"I never realized how much my stress was impacting my cycle. These flows are so gentle and the doctor\'s explanation made everything click."',
    name: "Jessica R., NY",
    avatarBg: "bg-[color:var(--yfmi-secondary-fixed)]",
    featured: true,
  },
  {
    quote:
      '"The diet plan combined with the yoga is a game changer. I feel so much more in control and less bloated every month."',
    name: "Emma L., Toronto",
    avatarBg: "bg-[color:var(--yfmi-tertiary-fixed)]",
  },
];

export function YfmiTestimonials() {
  return (
    <ScrollReveal className="bg-[#FAFAFF] py-24" delay={0.08}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 md:px-12">
        <h2 className="yfmi-headline-lg mb-16 text-center">Results From Real Women</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl bg-[color:var(--yfmi-surface-container-lowest)] p-8 shadow-sm md:w-1/3 ${t.featured ? "md:scale-105 border-2 border-[color:rgb(93_74_197/0.1)]" : ""}`}
            >
              <div className="mb-4 flex text-[color:var(--yfmi-secondary-container)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined yfmi-icon-fill">
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className={`size-10 shrink-0 rounded-full ${t.avatarBg}`} />
                <p className="text-sm font-bold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
