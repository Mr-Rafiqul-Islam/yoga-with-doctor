import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const SOLUTION_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByqNsRVubFJrH04nqr1QMegHAGGKPI1C43ii10VNPe_dDK4r8wS6Ehf8znl0U2en87b2YU0YWicPAcjHgo29wfHX0icumitIAe1nQv2j86_KjAL5KvErezYXBEhqw3nYkpNSr6L-KVsKJepDC-wSBhWtHUhKvV1dOd4coSJdqveDw7liORvcW2Gz-uV54Jwd-_VLjVTwDGCQ0uJEkYVtZjkACPXckw4dIZ9LBlcrqIrtvojCNDImDZlZBv0op90tIaUaS5cV3X4iUz";

const pillars = [
  {
    icon: "self_improvement" as const,
    title: "Endocrine-Focused Yoga",
    body: "Specific asanas designed to stimulate the ovaries and pituitary gland for better communication.",
  },
  {
    icon: "spa" as const,
    title: "Nervous System Regulation",
    body: "Techniques to shift from 'Fight or Flight' into 'Rest and Digest' where healing happens.",
  },
  {
    icon: "nutrition" as const,
    title: "Lifestyle Anchors",
    body: "Simple, daily rituals that support your circadian and infradian rhythms.",
  },
];

export function YogaForMenstrualIrregularitiesSolution() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-32" as="section">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <div className="relative order-2 w-full flex-1 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl mi-soft-shadow">
            <Image
              src={SOLUTION_IMAGE}
              alt="Overhead view of a peaceful yoga mat with a candle, a journal, and a sprig of lavender on a light wood floor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="order-1 flex-1 space-y-8 lg:order-2">
          <h2 className="text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">The LunaFlow Method</h2>
          <p className="text-base text-[var(--color-on-surface-variant)] md:text-lg">
            Our workshop introduces a three-pillar system that works with your biology, not against it.
          </p>
          <ul className="space-y-6">
            {pillars.map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-fixed)]">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--color-on-surface)]">{item.title}</h4>
                  <p className="text-sm text-[var(--color-on-surface-variant)]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
