import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCy38BMjMDmp8NMxs56M6B4KIhj1h_GgzqB8_etfP3tiwFYO4xdZTMU_E3HmkF8Tv13fw4eas7mw1T2_GVo4FNNMgh6xK22ORTbIhM7niOv6c4Xc9dUZHUACWLx_q2QSpt0LGURyQJH3p6JCJkJssnGXGWlyW53ohCl_xdzjT5hFL2ezbZvUZg7ZGCFg7YAmPVuE7pNyoTtpvEFczLpu7fkOD9llxZ-oCQxGv3kJ7sWNpkKxHXPJDwyoezNUrayUoQ8Knz4jRV2spuU";

const AVATAR_SLOTS = [{ bg: "bg-slate-200" }, { bg: "bg-slate-300" }, { bg: "bg-slate-400" }] as const;

export function YffsHero() {
  return (
    <ScrollReveal
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2"
      delay={0.02}
    >
      <div className="space-y-8">
        <span className="yffs-label-caps inline-block rounded-full bg-[color:var(--yffs-surface-container)] px-3 py-1 text-[color:var(--yffs-primary)]">
          CLINICALLY VALIDATED METHOD
        </span>
        <h1 className="yffs-headline-display text-[color:var(--yffs-on-surface)]">
          Relieve Frozen Shoulder Pain &amp; Restore Movement Naturally
        </h1>
        <p className="yffs-body-lg max-w-lg text-[color:var(--yffs-on-surface-variant)]">
          A doctor-guided, gentle yoga therapy system designed to break through adhesive capsulitis without
          aggressive surgery or painful injections.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            className="rounded-2xl bg-[color:var(--yffs-primary)] px-8 py-4 text-center text-lg font-bold text-[color:var(--yffs-on-primary)] shadow-lg transition-all hover:bg-[color:var(--yffs-primary-container)]"
            href="#join"
          >
            Start Your Recovery Today
          </Link>
          <div className="flex items-center gap-2 px-4">
            <div className="flex -space-x-2">
              {AVATAR_SLOTS.map(({ bg }, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full border-2 border-white ${bg}`}
                  aria-hidden
                />
              ))}
            </div>
            <span className="yffs-label-caps text-[color:var(--yffs-on-surface-variant)]">
              4,800+ Members Recovered
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-[color:rgb(0_94_184/0.1)] blur-2xl" />
        <Image
          alt="Woman performing a gentle shoulder stretch in a bright studio"
          className="relative aspect-[4/3] w-full rounded-3xl border border-white object-cover shadow-xl"
          height={675}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          src={HERO_IMG}
          width={900}
        />
        <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-xl border border-[color:var(--yffs-outline-variant)] bg-white p-4 shadow-lg">
          <div className="mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined yffs-icon-fill text-[color:var(--yffs-secondary)]">
              check_circle
            </span>
            <span className="text-sm font-bold">85% Mobility Increase</span>
          </div>
          <p className="text-[10px] text-slate-500">Average result after 30 days of consistent therapy.</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
