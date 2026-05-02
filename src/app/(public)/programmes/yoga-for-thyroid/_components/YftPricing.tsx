import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type CheckItem = {
  label: string;
  icon: "check_circle" | "stars";
  labelClassName?: string;
};

const CHECK_COL_LEFT: CheckItem[] = [
  { label: "30-Day Video Program", icon: "check_circle" },
  { label: "Lifestyle Blueprint", icon: "check_circle" },
  { label: "Energy Reset Library", icon: "check_circle" },
];

const CHECK_COL_RIGHT: CheckItem[] = [
  { label: "Dietary Guidance System", icon: "check_circle" },
  { label: "Private Support Group", icon: "check_circle" },
  {
    label: "BONUS: Daily Habit Tracker",
    icon: "stars",
    labelClassName: "font-bold text-[color:var(--color-primary)]",
  },
];

const ORDER_BUMPS = [
  {
    wrapperClass:
      "flex cursor-pointer items-center gap-3 rounded-xl border border-[color:var(--color-secondary)]/20 bg-[color:var(--color-secondary-container)]/20 p-4 transition-all hover:border-[color:var(--color-secondary)]",
    title: "Add 7-Day Anti-Inflammatory Meal Plan",
    price: "+$5",
    priceClass: "text-[color:var(--color-secondary)]",
    body: "Boost results with exact thyroid-friendly recipes.",
  },
  {
    wrapperClass:
      "flex cursor-pointer items-center gap-3 rounded-xl border border-[color:var(--color-primary)]/10 bg-[color:var(--color-primary-container)]/5 p-4 transition-all hover:border-[color:var(--color-primary)]",
    title: "Stress & Hormone Balance Routine",
    price: "+$10",
    priceClass: "text-[color:var(--color-primary)]",
    body: "15-minute evening rituals for deep recovery.",
  },
] as const;

const PAYMENT_ICONS = [
  {
    alt: "Paypal logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTzkV7CrJC0IRilna4mNvqpurnycGSxrdZsZQ7oAEC7dM_ni4VIl1rs1no8yW-WRRGaTikHzrQUv5nRKkXvruiGfizaYh4x6XRmRZskJX24YrhRqrWblO5snHuCzgNnoFYF9pg-ojyPpecy0VjQp2MofhonjXkCs613vU1kqvyYaQNe1svxRSRbbSp9mFyk3In5lrl0pZTDY8rxC8KfQ8nuWd2tj2goZtoWD6Z8VfC2xsTxKGpOfFx5D3Yvl_hmY_8s-QTxb8BLEdh",
    height: 24,
    className: "h-6",
  },
  {
    alt: "Visa logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm8uoQHS0MMR0Vc3xlu98S-1t2UYDQMxlEkhmHtlpWIUF6IT3xqqHk_X3Vph-4gLh4sGPavKTGSXMKF8OXrqSDzmIxcl2uCqrwC8tHThC0qEp-NPWWyVd4I-2fIKpFNqzfRojphf22XOdyv-1M8v2YiEY7SFh6mGA65LG3-zXFFSkLcJggBODv-hSd7vOi68dQYDep-LfRyACHhZ3PELaUhbsiWme7Df0EvdEx8k7z9uFfoucJQp1mZid9aMgB8VxIWr0Pif2xX6sw",
    height: 16,
    className: "h-4",
  },
  {
    alt: "Mastercard logo",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqv1XH4GdBzRIm-KKIa1aI--KmKtxJB4ogjThKepUFXOAWKk_XtmhakmWSc5MkDzNPO7b2xiT8kfMOiBaHdSimI_XXYdzzKmoRP6AEh0LJK1IGmRb4_bm3jl6nfOlZ45vsFZih9iHYAgq7uzljcPVz1kjMZcZOLXTmOTk2d2WP9dtHwcPW8dlUhj0-WnCa28zWy1dKdojfPbRsRWENkyZHhpUi2zzpBSdqh1KSL6z4x8Z-CPiSQRcuGCbJJPUeRoSUEpgMkiyyMcLo",
    height: 24,
    className: "h-6",
  },
] as const;

function CheckList({ items }: { items: CheckItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label} className={`yft-text-body-md flex items-center gap-3 ${item.labelClassName ?? ""}`}>
          <span className="material-symbols-outlined text-[color:var(--color-secondary)]">
            {item.icon}
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function YftPricing() {
  return (
    <ScrollReveal
      className="border-y border-[color:var(--color-outline-variant)]/30 bg-[color:var(--color-surface-container-low)] px-8 py-24"
      delay={0.18}
      id="pricing"
    >
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-primary)]/10 bg-[color:var(--color-surface-container-lowest)] shadow-2xl">
          <div className="bg-[color:var(--color-primary)] p-12 text-center text-white">
            <h2 className="yft-text-h2 mb-4">Complete Access to Thyroid Yoga</h2>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-white/60">
              <span className="yft-text-body-lg text-2xl line-through">Total Value: $951</span>
              <span className="yft-label-caps rounded-full bg-white/20 px-4 py-1 text-sm text-white">
                95% Discount Today
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="yft-text-h1 text-white">$47</span>
              <span className="yft-text-body-md text-white/80">one-time payment</span>
            </div>
          </div>
          <div className="space-y-8 p-12">
            <div className="grid gap-4 md:grid-cols-2">
              <CheckList items={CHECK_COL_LEFT} />
              <CheckList items={CHECK_COL_RIGHT} />
            </div>

            <div
              className="rounded-2xl border-2 border-[color:var(--color-primary-container)]/20 bg-[color:var(--color-surface-container-lowest)] p-8"
              id="checkout"
            >
              <h3 className="yft-text-h3 mb-6 text-[color:var(--color-primary)]">Complete Your Enrollment</h3>
              <form className="space-y-4" noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="yft-text-body-md h-14 w-full rounded-xl border-0 bg-[color:var(--color-surface-container-low)] px-6 focus:ring-2 focus:ring-[color:var(--color-primary)]"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className="yft-text-body-md h-14 w-full rounded-xl border-0 bg-[color:var(--color-surface-container-low)] px-6 focus:ring-2 focus:ring-[color:var(--color-primary)]"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <input
                  className="yft-text-body-md h-14 w-full rounded-xl border-0 bg-[color:var(--color-surface-container-low)] px-6 focus:ring-2 focus:ring-[color:var(--color-primary)]"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                />
                <div className="space-y-3 py-4">
                  <p className="yft-label-caps text-[color:var(--color-on-surface-variant)]">
                    Exclusive order bumps
                  </p>
                  {ORDER_BUMPS.map((bump) => (
                    <label key={bump.title} className={bump.wrapperClass}>
                      <input className="h-5 w-5 rounded accent-[color:var(--color-secondary)]" type="checkbox" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold">{bump.title}</span>
                          <span className={`font-bold ${bump.priceClass}`}>{bump.price}</span>
                        </div>
                        <p className="text-xs text-[color:var(--color-on-surface-variant)]">{bump.body}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  className="yft-text-body-md w-full rounded-xl bg-[color:var(--color-primary)] py-5 font-bold text-[color:var(--color-on-primary)] transition-all hover:bg-[color:var(--color-primary-container)] hover:shadow-2xl active:scale-[0.98]"
                  type="button"
                >
                  Activate My Program Access
                </button>
              </form>
              <div className="mt-6 flex items-center justify-center gap-6 opacity-60">
                {PAYMENT_ICONS.map((icon) => (
                  <Image
                    key={icon.src}
                    alt={icon.alt}
                    className={icon.className}
                    height={icon.height}
                    src={icon.src}
                    width={24}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-secondary-container)] text-[color:var(--color-secondary)]">
              <span className="material-symbols-outlined material-symbols-outlined--fill text-3xl">
                verified_user
              </span>
            </div>
            <div>
              <p className="font-bold">7-Day Peace of Mind</p>
              <p className="text-sm text-[color:var(--color-on-surface-variant)]">
                Full refund if you don&apos;t feel a shift in energy.
              </p>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-[color:var(--color-outline-variant)] md:block" />
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl text-[color:var(--color-tertiary)]">timer</span>
            <div>
              <p className="font-bold text-[color:var(--color-tertiary)]">Limited Offer Pricing</p>
              <p className="text-sm text-[color:var(--color-on-surface-variant)]">
                Price increases once spots fill up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
