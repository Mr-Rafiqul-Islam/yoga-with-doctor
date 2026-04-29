import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const REGISTRATION_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQxGoaPsspU98iC_F95a9DHwXNymiSNWQca4cTqYiBAYdp6Iqpq5r53AZ9he2CVFRrpoh9wDIfElIhpjkiVUPqsRCvO5M353l0gxFyq4h23-1X_GYNp7ZtbjowBMby7yaF34PesxW55dk1JQEaWB3cczz_KifISyy0gx0Rp1e3aQ3064EKgxLJmXtsBmAEDRzqVXyf5C3NOfpio6bedkMLR69BwlRMcfuVp6rqIjBMWzhIr1YtfMVvVhoTEXOTMTvu0lRUm4XMNTwd";

const upsellRows = [
  { label: "Cycle Balance Yoga Plan", price: "$19", strike: "$47" },
  { label: "Hormone Support Diet Guide", price: "$12", strike: "$29" },
];

export function YogaForMenstrualIrregularitiesRegistration() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-32" as="section" id="register">
      <div className="flex flex-col overflow-hidden rounded-[3rem] bg-white mi-soft-shadow lg:flex-row">
        <div className="space-y-8 p-12 lg:w-1/2 lg:p-20">
          <h2 className="mi-font-display text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
            Claim Your Free Seat
          </h2>
          <p className="text-[var(--color-on-surface-variant)]">
            Join Dr. Sarah for this 90-minute deep dive into your cycle health. We&apos;ll send the link and
            workbook to your inbox.
          </p>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]" htmlFor="mi-name">
                Full Name
              </label>
              <input
                id="mi-name"
                name="fullName"
                type="text"
                placeholder="Sarah Jenkins"
                className="w-full rounded-xl border border-[var(--color-outline-variant)] px-6 py-4 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]" htmlFor="mi-email">
                Email Address
              </label>
              <input
                id="mi-email"
                name="email"
                type="email"
                placeholder="sarah@example.com"
                className="w-full rounded-xl border border-[var(--color-outline-variant)] px-6 py-4 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[var(--color-on-surface)]" htmlFor="mi-phone">
                WhatsApp Number (For reminders)
              </label>
              <input
                id="mi-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-[var(--color-outline-variant)] px-6 py-4 outline-none transition-all focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div className="space-y-3 border-t border-[var(--color-outline-variant)] pt-8">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                <span className="material-symbols-outlined">stars</span>
                Exclusive Workshop-Only Offer
              </p>
              {upsellRows.map((row) => (
                <label
                  key={row.label}
                  className="group flex cursor-pointer items-center justify-between rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-offer-bg)] p-4 transition-all hover:border-[var(--color-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[var(--color-outline-variant)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                    />
                    <span className="text-sm font-semibold text-[var(--color-on-surface)]">{row.label}</span>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-primary)]">
                    {row.price}{" "}
                    <span className="text-xs font-normal text-slate-400 line-through">{row.strike}</span>
                  </span>
                </label>
              ))}
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-[var(--color-cta)] py-5 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Reserve My Free Seat
            </button>
          </div>
        </div>
        <div className="relative hidden min-h-[420px] flex-1 bg-[var(--color-primary-fixed)] lg:block lg:min-h-0 lg:w-1/2">
          <Image
            src={REGISTRATION_IMAGE}
            alt="Close up of a person's hands holding a warm cup of tea and a journal, creating a cozy and reflective mood"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]/20">
            <div className="max-w-sm rounded-2xl bg-white/80 p-8 text-center backdrop-blur-md">
              <span className="material-symbols-outlined mb-4 block text-4xl text-[var(--color-primary)]">lock</span>
              <p className="text-sm font-semibold text-[var(--color-on-surface)]">
                Your data is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
