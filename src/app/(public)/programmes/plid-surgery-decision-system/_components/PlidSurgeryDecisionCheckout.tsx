import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const INCLUSIONS = [
  { label: "PLID Mastery Protocol (Value $497)", value: "Included" },
  { label: "Live Consultations (Value $297)", value: "Included" },
  { label: "Spinal Care Exercise Library (Value $197)", value: "Included" },
] as const;

const FAQS = [
  "Is this safe for a 65+ age group?",
  "How long before I see results?",
  "Do I need any equipment?",
] as const;

export function PlidSurgeryDecisionCheckout() {
  return (
    <ScrollReveal className="bg-surface-container-low py-20 md:py-28" id="checkout">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
                Investment in Your Health
              </h2>
            </div>

            <div className="space-y-4">
              {INCLUSIONS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-6 rounded-2xl bg-surface-container-lowest p-5 md:p-6"
                >
                  <span className="text-sm text-on-surface md:text-base">{row.label}</span>
                  <span className="text-sm font-bold text-primary md:text-base">{row.value}</span>
                </div>
              ))}

              <div className="border-t border-outline-variant pt-6">
                <p className="text-lg text-on-surface-variant line-through md:text-xl">
                  Total Value: $991
                </p>
                <p className="mt-2 font-headline text-5xl font-extrabold text-primary md:text-6xl">
                  $297
                </p>
                <p className="mt-2 text-sm italic text-on-surface-variant">
                  One-time payment. Lifetime access.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold text-on-surface">Frequently Asked Questions</h3>
              <div className="divide-y divide-outline-variant rounded-2xl bg-surface-container-lowest px-6">
                {FAQS.map((q) => (
                  <details key={q} className="py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-on-surface">
                      <span>{q}</span>
                      <span className="material-symbols-outlined text-on-surface-variant">add</span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                      We’ll guide you based on your condition and mobility. If you have red-flag symptoms
                      or severe neurological weakness, consult your physician first.
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl bg-surface-container-lowest p-6 shadow-2xl md:p-10">
              <h3 className="mb-8 text-2xl font-extrabold text-on-surface">Secure Checkout</h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
                  <input
                    className="w-full rounded-2xl border-none bg-surface-container-high p-4 transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Email Address</label>
                  <input
                    className="w-full rounded-2xl border-none bg-surface-container-high p-4 transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Phone Number</label>
                  <input
                    className="w-full rounded-2xl border-none bg-surface-container-high p-4 transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="+880 1XXX-XXXXXX"
                    type="tel"
                  />
                </div>

                <div className="rounded-2xl border-2 border-dashed border-tertiary-container bg-tertiary-fixed/25 p-5">
                  <label className="flex cursor-pointer items-start gap-4">
                    <input
                      className="mt-1 h-6 w-6 rounded text-tertiary focus:ring-tertiary"
                      type="checkbox"
                    />
                    <div>
                      <p className="text-base font-bold text-on-tertiary-fixed">
                        ADD: PLID Treatment By Epidural
                      </p>
                      <p className="mt-1 text-sm text-on-tertiary-fixed-variant">
                        Unlock the advanced module for acute L4-L5 herniation for just{" "}
                        <span className="font-bold">$49 extra</span> (Regular $120).
                      </p>
                    </div>
                  </label>
                </div>

                <button
                  className="w-full rounded-2xl bg-primary py-5 text-lg font-extrabold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  type="submit"
                >
                  Complete My Purchase
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant/70">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  256-Bit Secure SSL Encryption
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

