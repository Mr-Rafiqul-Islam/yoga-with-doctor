import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LAPTOP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuClnHVzsY1ua9FQUmF_3BFdjtp0XDvJXKNKsL9DSq0nqYCMR0Yx7-bda0zeeE5gbO02E3fy3qXHoNGUIsUX4RnKbjKO1GIKnrFhrXpGacC7-3HN9p9tcxGmvCshdMLc7ukLHmJ4amHuf-ZAyCXiPUoQb5yuR9WXM6tXRfsPEo3BZuaTpo8ryYKti3syFdUEprbNUxz_3zX8oLWdP4hZkiOvw-dBGxdrqjlf62SXaAmQCqubdSVqzO6rKc8FOylPjP6Q9BaKdTxv0Ms7";

type StackRow = { icon: string; title: string; body: string; value: string };

const STACK_ROWS: StackRow[] = [
  {
    icon: "cycle",
    title: "Cycle Balance Routine",
    body: "Strategic poses to support spinal alignment and pelvic blood flow.",
    value: "Value: $97",
  },
  {
    icon: "diversity_1",
    title: "Private Support Group",
    body: "Lifetime access to our community of sisters on the same path.",
    value: "Value: $149",
  },
];

type Bonus = { title: string; body: string; valueLabel: string };

const BONUSES: Bonus[] = [
  {
    title: "Hormone Support Diet Plan",
    body: "Nutrition for each phase of your cycle.",
    valueLabel: "FREE ($47 Value)",
  },
  {
    title: "The Lifestyle Checklist",
    body: "Daily habits for a stress-free reproductive system.",
    valueLabel: "FREE ($29 Value)",
  },
];

export function YfmiOfferStack() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-24 md:px-12" delay={0.06} id="offer">
      <div className="mb-16 text-center">
        <h2 className="yfmi-headline-lg mb-4">Everything You Get Inside The Flow Program</h2>
        <p className="yfmi-body-md text-[color:var(--yfmi-on-surface-variant)]">
          A comprehensive toolkit for long-term cycle health.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-indigo-50 bg-[color:var(--yfmi-surface-container-lowest)] p-8 shadow-sm lg:col-span-2">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <Image
              alt="Yoga video lessons on a laptop"
              className="h-48 w-full rounded-2xl object-cover md:w-64"
              height={192}
              sizes="(max-width: 768px) 100vw, 256px"
              src={LAPTOP_IMG}
              width={256}
            />
            <div>
              <h3 className="yfmi-headline-md mb-2">30 Days Guided Yoga Journey</h3>
              <p className="mb-4 text-sm max-md:text-pretty text-[color:var(--yfmi-on-surface-variant)]">
                Daily 20-minute flows specifically sequenced for the follicular, ovulatory, luteal, and menstrual phases.
              </p>
              <span className="font-bold text-[color:var(--yfmi-primary)]">Value: $199</span>
            </div>
          </div>
          <hr className="my-8 border-indigo-50" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {STACK_ROWS.map((row) => (
              <div key={row.title} className="flex gap-4">
                <span className="material-symbols-outlined shrink-0 text-[color:var(--yfmi-primary)]">
                  {row.icon}
                </span>
                <div>
                  <h4 className="text-sm font-bold">{row.title}</h4>
                  <p className="text-xs text-[color:var(--yfmi-on-surface-variant)]">{row.body}</p>
                  <p className="mt-1 text-[10px] font-bold text-[color:var(--yfmi-primary)]">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-[color:var(--yfmi-surface-container)] p-8">
          <div>
            <h3 className="yfmi-headline-md mb-6">Exclusive Bonuses</h3>
            <div className="space-y-6">
              {BONUSES.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-white bg-[color:rgb(255_255_255/0.5)] p-4"
                >
                  <p className="mb-1 text-sm font-bold">{b.title}</p>
                  <p className="text-xs text-[color:var(--yfmi-on-surface-variant)]">{b.body}</p>
                  <p className="mt-2 text-xs font-bold text-[color:var(--yfmi-primary)]">{b.valueLabel}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-indigo-100 pt-8">
            <p className="yfmi-label-md text-center text-[color:var(--yfmi-on-surface-variant)]">
              Total Value: <span className="line-through">$521</span>
            </p>
            <p className="yfmi-headline-md text-center text-[color:var(--yfmi-primary)]">Today Only: $47</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
