import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Addon = {
  title: string;
  description: string;
  priceStrong: string;
};

const ADDONS: Addon[] = [
  {
    title: "Add: Cycle Tracking Journal (Digital)",
    description: "Step-by-step PDF to log your data. ",
    priceStrong: "Only $9.00",
  },
  {
    title: "Add: 1-on-1 Kickoff Consultation",
    description: "15 mins with a fertility specialist. ",
    priceStrong: "Only $27.00",
  },
];

export function YfmiCheckout() {
  return (
    <ScrollReveal className="mx-auto max-w-4xl px-6 py-24" delay={0.06} id="checkout">
      <div className="overflow-hidden rounded-[32px] bg-[color:var(--yfmi-surface-container-lowest)] shadow-2xl">
        <div className="bg-[color:var(--yfmi-primary)] p-12 text-center text-white">
          <h2 className="yfmi-headline-lg mb-4">Secure Your Spot</h2>
          <p className="opacity-80">Start your journey to balance today</p>
        </div>
        <div className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="yfmi-label-md text-[color:var(--yfmi-on-surface-variant)]" htmlFor="yfmi-full-name">
                  Full Name
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-lg border-0 border-b-2 border-indigo-50 bg-[color:rgb(253_247_255/0.5)] px-4 py-3 outline-none transition-colors focus:border-[color:var(--yfmi-primary)]"
                  id="yfmi-full-name"
                  name="fullName"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="yfmi-label-md text-[color:var(--yfmi-on-surface-variant)]" htmlFor="yfmi-email">
                  Email Address
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-lg border-0 border-b-2 border-indigo-50 bg-[color:rgb(253_247_255/0.5)] px-4 py-3 outline-none transition-colors focus:border-[color:var(--yfmi-primary)]"
                  id="yfmi-email"
                  name="email"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <p className="yfmi-label-md text-[color:var(--yfmi-primary)]">Special One-Click Add-ons:</p>
              {ADDONS.map((a) => (
                <label
                  key={a.title}
                  className="flex cursor-pointer items-center gap-4 rounded-xl border border-[color:rgb(93_74_197/0.2)] bg-[color:var(--yfmi-surface-container-low)] p-4 transition-colors hover:bg-[color:var(--yfmi-surface-container)]"
                >
                  <input
                    className="h-5 w-5 shrink-0 rounded border-[color:var(--yfmi-outline-variant)] text-[color:var(--yfmi-primary)] focus:ring-[color:var(--yfmi-primary)]"
                    name={a.title}
                    type="checkbox"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold">{a.title}</p>
                    <p className="text-xs text-[color:var(--yfmi-on-surface-variant)]">
                      {a.description}
                      <strong>{a.priceStrong}</strong>
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <button
              className="yfmi-headline-md mt-8 w-full rounded-full bg-[color:var(--yfmi-primary)] py-6 text-xl text-[color:var(--yfmi-on-primary)] shadow-lg shadow-[color:rgb(93_74_197/0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              type="button"
            >
              Start Your Balance Journey Today ($47)
            </button>
            <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
              <span className="material-symbols-outlined">lock</span>
              <span className="yfmi-label-sm uppercase tracking-widest">SSL Encrypted Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
