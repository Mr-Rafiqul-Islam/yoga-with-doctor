import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZcpTUa4Sm04oWx8WxLBuoJCdgo9DHIsicmis5VAUv-aksAJwQ7Jo55lb1FCgKoWs_IRvyMo9-hXFmJbDiE-sDkLeRY_5ID8qd4P6ZX6BBQ_VMwxklEB5nMtg5UzirwFwsadyQQMjbHwQeIFKeynZvu-m_42eyqCaEVUeuQwqK45zIOaRm7s9LK3hBVhA9z9HtJuCSQpOuJihGuTDz0-ZdP1_yGcQ4LqP4_v3DEmTzirWLb8G6GxsP-VqznfEXN0-UR5QIX5C8Nn9-";

export function YfplidHero() {
  return (
    <ScrollReveal className="py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="flex-1 space-y-6">
          <span className="inline-flex rounded-full bg-[color:var(--yfplid-secondary-container)] px-4 py-1 yfplid-text-label-caps uppercase tracking-wider text-[color:var(--yfplid-on-secondary-container)]">
            Limited Seats: 12 Remaining
          </span>
          <h1 className="yfplid-text-h1 text-[color:var(--yfplid-primary)]">
            Relieve PLID Pain Naturally Without Surgery
          </h1>
          <p className="yfplid-text-body-lg max-w-xl text-[color:var(--yfplid-on-surface-variant)]">
            A medically-backed yoga therapy system designed specifically for Prolapsed Lumbar
            Intervertebral Disc recovery. Regain your mobility through gentle, evidence-based
            movement.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              className="rounded-xl bg-[color:var(--yfplid-tertiary-container)] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              href="#enrollment"
            >
              Join The Program Now
            </a>
            <div className="flex items-center gap-3 px-4">
              <span className="material-symbols-outlined text-[color:var(--yfplid-primary)]" aria-hidden>
                verified
              </span>
              <span className="text-sm font-semibold text-[color:var(--yfplid-secondary)]">
                Medically Supervised Method
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div
            aria-hidden
            className="absolute -top-10 right-10 -z-10 size-64 rounded-full bg-[color:rgba(122,213,217,0.3)] blur-3xl"
          />
          <Image
            src={HERO_IMG}
            alt="Doctor explaining spine health"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-2xl object-cover yfplid-shadow-soft"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
