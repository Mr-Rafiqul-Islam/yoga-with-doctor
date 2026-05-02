import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TRUST_BADGES_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC-6gRZgig2QvP0cAz9gya4hevnc56BYoGEGYfOOlBHVpn-od9r9Re5vcBuNoe8YfSIThJO8M8RB1WPUTFCZx9EokPhR-WA5yTIvGGPxWcfTLzID0omtwlmFymMNemLn20ECUkO9voIi5HzkN53uEsv6zZtiSA0EP_Br-aEb5lZ_SZ2juiPVLevGZk99IUuslU5kotsPVNrM0KpjY8efoCbGELI07N4gTy3J1KZM14BVlV6t9DII_UDaEAF78ceAT1WWWuxFVgS5Fql";

const TRUST_POINTS = [
  { icon: "verified_user" as const, label: "30-Day Money Back Guarantee", border: "border-[color:rgb(0_109_55/0.2)]" },
  { icon: "lock" as const, label: "256-Bit SSL Encrypted Checkout", border: "border-[color:rgb(0_71_141/0.2)]" },
];

const ADD_ONS = [
  {
    title: "Add: Frozen Shoulder Pain Relief Guide",
    price: "+$5",
    description: "Quick-start dietary anti-inflammatory guide.",
  },
  {
    title: "Add: Advanced Mobility Plan",
    price: "+$10",
    description: "Post-recovery strength training for shoulders.",
  },
];

export function YffsCheckout() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-7xl px-6 py-24" delay={0.18} id="join">
      <div className="grid items-start gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="yffs-headline-lg">Secure Your Recovery Now</h2>
          <p className="text-[color:var(--yffs-on-surface-variant)]">
            Complete the form below to get instant access to the clinical portal. All transactions are secure and
            encrypted.
          </p>
          <div className="space-y-4">
            {TRUST_POINTS.map(({ icon, label, border }) => (
              <div
                key={label}
                className={`flex items-center gap-4 rounded-2xl border bg-white p-4 ${border}`}
              >
                <span className={`material-symbols-outlined shrink-0 ${icon === "verified_user" ? "text-[color:var(--yffs-secondary)]" : "text-[color:var(--yffs-primary)]"}`}>
                  {icon}
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
          <Image
            alt="Payment trust badges"
            className="h-12 opacity-80"
            height={48}
            src={TRUST_BADGES_IMG}
            width={48}
          />
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-12">
          <form className="space-y-6" noValidate>
            <div className="space-y-2">
              <label className="yffs-label-caps uppercase text-slate-500" htmlFor="yffs-name">
                Full Name
              </label>
              <input
                className="w-full rounded-xl border-0 bg-[color:var(--yffs-surface-container-low)] px-4 py-3 focus:ring-2 focus:ring-[color:var(--yffs-primary)] focus:outline-none"
                id="yffs-name"
                name="name"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="yffs-label-caps uppercase text-slate-500" htmlFor="yffs-email">
                Email Address
              </label>
              <input
                className="w-full rounded-xl border-0 bg-[color:var(--yffs-surface-container-low)] px-4 py-3 focus:ring-2 focus:ring-[color:var(--yffs-primary)] focus:outline-none"
                id="yffs-email"
                name="email"
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="yffs-label-caps uppercase text-slate-500" htmlFor="yffs-phone">
                Phone Number
              </label>
              <input
                className="w-full rounded-xl border-0 bg-[color:var(--yffs-surface-container-low)] px-4 py-3 focus:ring-2 focus:ring-[color:var(--yffs-primary)] focus:outline-none"
                id="yffs-phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div className="space-y-4 pt-6">
              <span className="yffs-label-caps block uppercase text-slate-500">Special Add-ons</span>
              {ADD_ONS.map(({ title, price, description }) => (
                <label
                  key={title}
                  className="flex cursor-pointer items-start gap-4 rounded-2xl border border-[color:rgb(0_109_55/0.2)] bg-[color:rgb(107_254_156/0.1)] p-4"
                >
                  <input className="mt-1 rounded accent-[color:var(--yffs-secondary)]" type="checkbox" />
                  <div>
                    <p className="text-sm font-bold">
                      {title} <span className="text-[color:var(--yffs-secondary)]">{price}</span>
                    </p>
                    <p className="text-xs text-slate-500">{description}</p>
                  </div>
                </label>
              ))}
            </div>
            <button
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--yffs-primary)] py-5 text-xl font-bold text-[color:var(--yffs-on-primary)] transition-all hover:bg-[color:var(--yffs-primary-container)]"
              type="button"
            >
              <span>Complete My Enrollment</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="px-8 text-center text-[10px] text-slate-400">
              By clicking above, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}
