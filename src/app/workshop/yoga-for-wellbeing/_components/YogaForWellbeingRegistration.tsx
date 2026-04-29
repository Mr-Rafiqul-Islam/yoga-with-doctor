import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const inputBase =
  "w-full rounded-2xl border-none bg-[var(--color-surface-container)] px-6 py-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]";

export function YogaForWellbeingRegistration() {
  return (
    <ScrollReveal className="px-6 py-24" as="section" id="register">
      <div className="relative mx-auto max-w-screen-md">
        <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-[var(--color-surface-container-lowest)] p-8 wellbeing-ambient-shadow md:p-12">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-[100px] bg-[var(--color-registration-accent)]" />
          <div className="relative mb-10 text-center">
            <h2 className="mb-4 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
              Secure Your Free Spot
            </h2>
            <p className="mx-auto max-w-lg text-base leading-[1.6] text-[var(--color-on-surface-variant)]">
              Limited to 100 participants to ensure an interactive experience.
            </p>
          </div>
          <div className="relative space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium leading-tight tracking-[0.01em] text-[var(--color-on-surface)]">
                  Full Name
                </label>
                <input className={inputBase} autoComplete="name" name="fullName" placeholder="Jane Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium leading-tight tracking-[0.01em] text-[var(--color-on-surface)]">
                  Phone Number
                </label>
                <input
                  className={inputBase}
                  autoComplete="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="ml-1 text-sm font-medium leading-tight tracking-[0.01em] text-[var(--color-on-surface)]">
                Email
              </label>
              <input
                className={inputBase}
                autoComplete="email"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="space-y-4 rounded-3xl border-2 border-dashed border-[rgb(var(--color-primary-rgb)/0.2)] bg-[rgb(var(--color-primary-rgb)/0.08)] p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <input
                    className="h-6 w-6 rounded-lg border-[var(--color-primary)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    id="wellbeing-oso"
                    name="oso"
                    type="checkbox"
                  />
                </div>
                <label className="cursor-pointer" htmlFor="wellbeing-oso">
                  <span className="block text-sm font-bold leading-tight text-[var(--color-on-primary-fixed-variant)]">
                    Yes! Add the &quot;Stress Relief Yoga Routine&quot; for just $17 (Normally $47)
                  </span>
                  <span className="mt-1 block text-sm text-[var(--color-on-primary-fixed-variant)]/80">
                    Get our best-selling daily 10-minute video sequence to use immediately. Recommended for those
                    experiencing peak burnout.
                  </span>
                </label>
              </div>
            </div>
            <button
              className="wellbeing-ambient-shadow w-full rounded-full bg-[var(--color-primary)] py-5 text-center text-2xl font-semibold leading-[1.4] text-[var(--color-on-primary)] shadow-lg transition-colors hover:bg-[var(--color-primary-container)]"
              type="button"
            >
              Register For Free Now
            </button>
            <p className="px-8 text-center text-xs text-[var(--color-outline)]">
              By registering, you agree to receive workshop details and mental wellbeing tips. We value your privacy and
              never share your data.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
