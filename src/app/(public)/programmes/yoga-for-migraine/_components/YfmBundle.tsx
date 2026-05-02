import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type BundleRow =
  | {
      variant: "line";
      icon: string;
      title: string;
      subtitle: string;
      crossedPrice: string;
    }
  | {
      variant: "bonus";
      icon: string;
      title: string;
      subtitle: string;
      badgeLabel: string;
    };

const BUNDLE_ROWS: BundleRow[] = [
  {
    variant: "line",
    icon: "calendar_today",
    title: "30 Days Live Guided Sessions",
    subtitle: "Daily morning practice for migraine prevention",
    crossedPrice: "৳5,000",
  },
  {
    variant: "line",
    icon: "track_changes",
    title: "Trigger Control Workshop",
    subtitle: "Masterclass on identifying & stopping triggers",
    crossedPrice: "৳2,500",
  },
  {
    variant: "line",
    icon: "groups",
    title: "Exclusive Support Group",
    subtitle: "24/7 access to our community & experts",
    crossedPrice: "৳1,500",
  },
  {
    variant: "bonus",
    icon: "redeem",
    title: "BONUS: Migraine Diet Plan",
    subtitle: "Science-backed nutritional guide",
    badgeLabel: "FREE",
  },
];

export function YfmBundle() {
  return (
    <ScrollReveal as="section" id="curriculum" className="bg-white py-24 scroll-mt-[52px]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="yfm-text-h2 mb-16 text-center text-[color:var(--yfm-primary)]">
          Your Path to Healing: The Complete Bundle
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {BUNDLE_ROWS.map((row) => {
              if (row.variant === "bonus") {
                return (
                  <div
                    key={row.title}
                    className="flex items-center justify-between rounded-2xl border border-[color:rgba(0,95,98,0.2)] bg-[color:rgba(0,95,98,0.08)] p-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[color:var(--yfm-primary)]" aria-hidden>
                        {row.icon}
                      </span>
                      <div>
                        <p className="font-bold text-[color:var(--yfm-primary)]">{row.title}</p>
                        <p className="text-xs text-[color:var(--yfm-secondary)]">{row.subtitle}</p>
                      </div>
                    </div>
                    <span className="rounded bg-[color:var(--yfm-primary)] px-2 py-1 text-[10px] font-bold text-[color:var(--yfm-on-primary)]">
                      {row.badgeLabel}
                    </span>
                  </div>
                );
              }
              return (
                <div
                  key={row.title}
                  className="flex items-center justify-between rounded-2xl bg-[color:var(--yfm-surface-container)] p-6 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[color:var(--yfm-primary)]" aria-hidden>
                      {row.icon}
                    </span>
                    <div>
                      <p className="font-bold text-[color:var(--yfm-on-surface)]">{row.title}</p>
                      <p className="text-xs text-[color:var(--yfm-secondary)]">{row.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-sm text-[color:var(--yfm-secondary)] line-through">{row.crossedPrice}</span>
                </div>
              );
            })}
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[color:var(--yfm-primary)] p-12 text-center text-[color:var(--yfm-on-primary)] shadow-2xl">
            <div className="absolute right-0 top-0 p-8 opacity-10" aria-hidden>
              <span className="material-symbols-outlined text-[120px]">spa</span>
            </div>
            <p className="yfm-text-label-caps mb-4 text-[color:var(--yfm-on-primary-container)]">
              TOTAL VALUE: ৳9,000
            </p>
            <h3 className="yfm-text-h1 mb-4">Enroll Today For Only</h3>
            <div className="mb-8 text-6xl font-bold">৳2,999</div>
            <p className="mb-8 opacity-80">
              Join 2,400+ others who have reclaimed their lives from pain.
            </p>
            <Link
              className="inline-block rounded-full bg-[color:var(--yfm-tertiary)] px-12 py-5 text-xl font-bold text-[color:var(--yfm-on-tertiary)] shadow-xl transition-transform hover:scale-105"
              href="#checkout"
            >
              Secure My Seat Now
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
