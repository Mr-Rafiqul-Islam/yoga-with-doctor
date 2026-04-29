import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const offers = [
  {
    title: "Back Pain Relief Routine (Digital Guide)",
    price: "$19",
    body: "Printable PDF and high-resolution posters for your home routine.",
  },
  {
    title: "7-Day Mobility Accelerator Plan",
    price: "$27",
    body: "Step-by-step follow-along videos to accelerate your progress.",
  },
];

export function YogaForBackPainRegistration() {
  return (
    <ScrollReveal id="register" className="bg-[rgb(var(--color-primary-container-rgb)/0.1)] px-6 py-24">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-[rgb(var(--color-primary-container-rgb)/0.2)] bg-white shadow-2xl">
        <div className="bg-[var(--color-primary)] p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join the Free Workshop</h2>
          <p className="mt-2 text-white/80">Fill in your details to secure your live link</p>
        </div>
        <div className="space-y-6 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border-0 bg-[var(--color-surface-container-low)] px-4 py-3"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">WhatsApp Number (for reminders)</label>
              <input
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                className="w-full rounded-xl border-0 bg-[var(--color-surface-container-low)] px-4 py-3"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full rounded-xl border-0 bg-[var(--color-surface-container-low)] px-4 py-3"
            />
          </div>

          <div className="mt-10 border-t border-[var(--color-surface-container-high)] pt-10">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">workspace_premium</span>
              One-Time Special Offers
            </h3>
            <div className="space-y-4">
              {offers.map((offer) => (
                <label
                  key={offer.title}
                  className="flex cursor-pointer items-center rounded-2xl border-2 border-[rgb(0_109_61/0.2)] bg-[rgb(151_243_181/0.15)] p-4 transition hover:bg-[rgb(151_243_181/0.25)]"
                >
                  <input type="checkbox" className="h-6 w-6 rounded-lg border-[var(--color-outline)]" />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between gap-3">
                      <span className="font-bold">{offer.title}</span>
                      <span className="font-bold text-[var(--color-secondary)]">{offer.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-on-surface-variant)]">{offer.body}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="orange-cta-glow mt-8 w-full rounded-xl bg-[var(--color-action-orange)] py-5 text-lg font-semibold text-white transition hover:brightness-105"
          >
            Join Free Workshop &amp; Get My Resources
          </button>
          <p className="text-center text-xs text-[var(--color-on-surface-variant)]">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
