import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Amanda K., Architect",
    quote:
      "I've tried everything for my anxiety. This workshop was the first time I felt a physical shift in my nervous system. Truly life-changing.",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt2bQ-rGn_2754dK0OH0znd8Boogn9Y773HAqGevcSLlR_zzmgahVz9u4-J9rXLrc0tX0KdlGQKPQjc9R1Lx47Gq2mAQegn8BqhhPFMr1nwP_LOGt60bIf7EQANhGH1WGynBZI_CIoZa0vlULMgHAaESoh0ugGffkTC8km6ETbOYVJxGP_Hp_8iMGoxKlmLCCWnxja0aszB8SCPvJVMPgppi_LRVD5mPrL4XVblZyUXENRX4btgVXpyshfMzgRZgijJn14SFQdqhv",
  },
  {
    name: "David L., HR Director",
    quote:
      "The breathing exercises Sarah teaches are my new go-to whenever I feel a panic attack coming. I finally feel in control again.",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdULmbo69E4CyTHjdn-wiU1xPhOJvtAwcgp8dNXjAzeiSSf9Gu4jI-NtWZ9NWhmkf7F_kBvNKXq4-eEDE37upn1XPmTmWfk4w1ZzN4tsBeMyzqnsgtEYqxCwA35wiqdg6MvzqpnyBksFmOQO163BLTto9tR2i7hmP8lYvi5Ohf-JUuD051vgN7e0IAzfR_jS7aRxYwkVcUVZdwME8xOH6m-AroyulkhpcUVWsqB79_qRVUjp1pfMJ89MdTwiVQkK9f3GXnPh0WX9mA",
  },
  {
    name: "Elena R., Surgeon",
    quote:
      "Simple, effective, and professional. No fluff, just real tools that work for high-stress professionals like me.",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp0eDYk1iYoGwOjO25M1wtb44IACr6BkmSwfP-2-da5IB19eWtwoPWou3LoOp2OHxRrWy-RjjYHPXz0gnlO9MhZ6BW6v4SFkLcxoYYgN7F9Y_TaClMethFzT8h80EcA47NAV6qeOpJ6OW-2hzQ2bAfiYuvy_xdBWyoPOuVrewAS5twFSzhLcI63O4eJ4DjASugm1wkfRXkSTXjDvR4qCdMjIWZc3ztW0GNsRlsdf0H-XZPJGfrY9UkL49_UODFTsAg4e62nwTvqrUb",
  },
] as const;

const STAR_KEYS = [0, 1, 2, 3, 4] as const;

export function YogaForWellbeingReviews() {
  return (
    <ScrollReveal
      className="bg-[var(--color-surface-container-high)]/50 px-6 py-24"
      as="section"
      id="reviews"
    >
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h2 className="text-[32px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
          Transformed Lives
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="wellbeing-glass-card wellbeing-ambient-shadow rounded-[32px] p-8"
          >
            <div className="mb-4 flex text-yellow-500">
              {STAR_KEYS.map((k) => (
                <span key={k} className="material-symbols-outlined wellbeing-symbol--fill">
                  star
                </span>
              ))}
            </div>
            <p className="mb-6 text-base italic leading-[1.6] text-[var(--color-on-surface)]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[var(--color-primary-fixed-dim)]">
                <Image alt="" className="h-full w-full object-cover" height={40} src={t.avatarSrc} width={40} />
              </div>
              <span className="text-sm font-bold leading-tight tracking-[0.01em] text-[var(--color-on-surface)]">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
