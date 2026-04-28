import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PERKS = [
  { id: "class", icon: "check_circle", label: "90‑Minute Masterclass" },
  { id: "qa", icon: "check_circle", label: "Live Q&A" },
  { id: "toolkit", icon: "check_circle", label: "Starter Guide (PDF)" },
] as const;

export function YogaCareDiabetesRegistration() {
  return (
    <ScrollReveal className="bg-[var(--color-primary)] py-24 text-white" id="register">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Secure Your Free Spot Now
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-primary-fixed)]">
            Limited capacity for live interaction. Register to receive the pre‑workshop starter
            guide.
          </p>

          <div className="space-y-4 pt-2">
            {PERKS.map((p) => (
              <div key={p.id} className="flex items-center gap-3">
                <span className="material-symbols-outlined material-symbols-outlined--fill">
                  {p.icon}
                </span>
                <span className="font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-shadow rounded-2xl bg-white p-10 text-[var(--color-on-background)]">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold">Full Name</label>
              <input
                className="w-full rounded-xl border border-[var(--color-outline-variant)] p-4 outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">WhatsApp / Phone Number</label>
              <input
                className="w-full rounded-xl border border-[var(--color-outline-variant)] p-4 outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                placeholder="+8801XXXXXXXXX"
                type="tel"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>
              <input
                className="w-full rounded-xl border border-[var(--color-outline-variant)] p-4 outline-none focus:ring-2 focus:ring-[var(--color-primary-container)]"
                placeholder="example@gmail.com"
                type="email"
              />
            </div>

            <div className="border-t border-[rgb(0_0_0/0.06)] pt-5">
              <p className="mb-4 text-sm font-bold text-[var(--color-primary)]">
                Special Workshop Offers (optional):
              </p>
              <label className="mb-3 flex cursor-pointer items-center gap-3">
                <input
                  className="h-5 w-5 rounded border-[var(--color-outline-variant)] text-[var(--color-primary)]"
                  type="checkbox"
                />
                <span className="text-sm">
                  Add 30‑Day Diabetes Diet Plan{" "}
                  <span className="text-[var(--color-secondary)]">
                    ($97 <span className="line-through">$19</span>)
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  className="h-5 w-5 rounded border-[var(--color-outline-variant)] text-[var(--color-primary)]"
                  type="checkbox"
                />
                <span className="text-sm">
                  Daily 15‑Min Routine Videos{" "}
                  <span className="text-[var(--color-secondary)]">
                    ($47 <span className="line-through">$9</span>)
                  </span>
                </span>
              </label>
            </div>

            <button
              className="w-full rounded-full bg-[var(--color-tertiary-container)] py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.98]"
              type="button"
            >
              Register For Free Now
            </button>
            <p className="text-center text-[10px] text-[var(--color-secondary)]">
              By registering, you agree to our terms and medical disclaimer.
            </p>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}

