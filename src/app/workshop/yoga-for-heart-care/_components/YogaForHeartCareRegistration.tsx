import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const UPSSELS = [
  {
    title: "Heart Care Yoga Routine",
    badge: "SAVE 80%",
    price: "$19",
    description: "A printable daily checklist and 15-min guided audio sequence. (Value: $97)",
    idSuffix: "routine",
  },
  {
    title: "Stress Control Guide",
    price: "$27",
    description:
      "Master the 4-7-8 breathing technique for immediate calming. (Value: $147)",
    idSuffix: "guide",
  },
] as const;

export function YogaForHeartCareRegistration() {
  return (
    <ScrollReveal className="px-6 py-20" as="section" id="register">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-[rgb(var(--color-primary-rgb)/0.10)] bg-white shadow-2xl">
          <div className="bg-[var(--color-primary)] p-8 text-center text-[var(--color-on-primary)]">
            <h2 className="mb-2 text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
              Join the Next Workshop
            </h2>
            <p className="opacity-90">100% Free • No Credit Card Required</p>
          </div>
          <div className="space-y-8 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-on-surface-variant)]"
                  htmlFor="heart-care-name"
                >
                  Full Name
                </label>
                <input
                  id="heart-care-name"
                  readOnly
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)]"
                  autoComplete="off"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-on-surface-variant)]"
                  htmlFor="heart-care-email"
                >
                  Email Address
                </label>
                <input
                  id="heart-care-email"
                  readOnly
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)]"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-[var(--color-on-background)]">Boost Your Journey (One-Time Offers):</p>
              {UPSSELS.map((u) => (
                <label
                  key={u.idSuffix}
                  htmlFor={`heart-care-upsell-${u.idSuffix}`}
                  className="flex cursor-pointer items-start gap-4 rounded-xl border border-[rgb(var(--color-primary-rgb)/0.20)] bg-[var(--color-surface-container-low)] p-4"
                >
                  <input
                    id={`heart-care-upsell-${u.idSuffix}`}
                    readOnly
                    type="checkbox"
                    className="mt-1 h-6 w-6 rounded border-[var(--color-primary)] text-[var(--color-primary)] accent-[var(--color-primary)]"
                  />
                  <span className="flex-1 text-left">
                    <span className="flex flex-wrap items-start justify-between gap-2 font-bold">
                      <span>
                        {u.title}
                        {"badge" in u && u.badge ? (
                          <span className="ml-2 rounded bg-orange-100 px-2 py-0.5 text-[10px] font-normal text-orange-800">
                            {u.badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="text-[var(--color-primary)]">{u.price}</span>
                    </span>
                    <span className="block text-sm font-normal text-[var(--color-on-surface-variant)]">
                      {u.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-[#F2994A] py-5 text-xl font-semibold leading-[1.4] text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              Secure My Workshop Seat Now
            </button>
            <p className="text-center text-xs text-[var(--color-on-surface-variant)]">
              We value your privacy. Your data is encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
