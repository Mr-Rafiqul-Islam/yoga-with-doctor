import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const COUNTDOWN = [
  { id: "mins", value: "08", label: "Mins" },
  { id: "sep", value: ":", label: "" },
  { id: "secs", value: "42", label: "Secs" },
] as const;

const OFFERS = [
  {
    id: "plan",
    title: "Beginner Yoga Plan",
    price: "$19",
    description: "30-day guided video sequence to build a rock-solid habit. (Value $97)",
  },
  {
    id: "kit",
    title: "7-Day Starter Kit",
    price: "$9",
    description: "PDF guides, pose checklists, and nutrition basics. (Value $47)",
  },
] as const;

export function YogaForAllRegistration() {
  return (
    <ScrollReveal
      className="bg-[rgb(var(--color-primary-container-rgb)/0.05)] py-24"
      id="register"
      as="section"
    >
      <div className="mx-auto max-w-[800px] px-8">
        <div className="overflow-hidden rounded-3xl border border-[rgb(var(--color-primary-container-rgb)/0.1)] bg-white shadow-2xl">
          <div className="bg-[var(--color-primary-container)] p-8 text-center text-white">
            <h2 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Claim Your Free Seat
            </h2>
            <div className="mt-4 flex justify-center gap-4 text-[var(--color-primary-fixed)]">
              {COUNTDOWN.map((c) =>
                c.id === "sep" ? (
                  <div key={c.id} className="text-2xl font-bold">
                    {c.value}
                  </div>
                ) : (
                  <div key={c.id} className="text-center">
                    <div className="text-2xl font-bold">{c.value}</div>
                    <div className="text-[10px] uppercase">{c.label}</div>
                  </div>
                ),
              )}
            </div>
          </div>

          <form className="space-y-6 p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-on-surface-variant)]">
                  Full Name
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:ring-2 focus:ring-[var(--color-primary-container)]"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--color-on-surface-variant)]">
                  Phone Number
                </label>
                <input
                  className="w-full rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:ring-2 focus:ring-[var(--color-primary-container)]"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--color-on-surface-variant)]">
                Email
              </label>
              <input
                className="w-full rounded-xl border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:ring-2 focus:ring-[var(--color-primary-container)]"
                placeholder="example@gmail.com"
                type="email"
              />
            </div>

            <div className="space-y-4 rounded-2xl border border-[var(--color-secondary-container)] bg-[rgb(var(--color-secondary-container-rgb)/0.3)] p-6">
              <div className="flex items-center gap-2 font-bold text-[var(--color-primary)]">
                <span className="material-symbols-outlined">local_fire_department</span>
                EXCLUSIVE ONE-TIME OFFERS
              </div>
              <p className="text-sm text-[var(--color-on-surface-variant)]">
                Add these special resources now for 80% off. Only available on this page!
              </p>

              {OFFERS.map((o) => (
                <label
                  key={o.id}
                  className="flex cursor-pointer items-start gap-4 rounded-xl border border-[var(--color-outline-variant)] bg-white p-4 transition-all hover:border-[var(--color-primary-container)]"
                >
                  <input
                    className="mt-1 rounded text-[var(--color-primary-container)] focus:ring-[var(--color-primary-container)]"
                    type="checkbox"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{o.title}</span>
                      <span className="font-bold text-[var(--color-primary)]">{o.price}</span>
                    </div>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">{o.description}</p>
                  </div>
                </label>
              ))}
            </div>

            <button
              className="w-full rounded-full bg-[#FF6D00] py-5 text-xl font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:shadow-[#FF6D00]/20"
              type="button"
            >
              Reserve My Free Seat
            </button>
            <p className="text-center text-xs text-[var(--color-on-surface-variant)]">
              Join 12,000+ happy students. Spam-free zone.
            </p>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}

