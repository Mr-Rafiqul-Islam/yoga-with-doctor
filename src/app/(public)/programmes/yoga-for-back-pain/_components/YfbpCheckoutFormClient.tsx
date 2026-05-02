"use client";

import Image from "next/image";

const PAYMENT_MARKS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaTuP88muUmEV8yRnIGM8JF8NxK6MrFfN2UcOcehy-bKEdnCb3jWHpsWNabNpMBUaqyPUDhUvcLb71SGzVOT_LnSS0-UJ1qc0iKxNVnToizX9MR4C2MTCjXEa_RM4GQYsw9gX10zNrvn1kVTj044C5Y8V2TKzOvbdlPOainStCllvI8cHg-JJdbX3O-8fccJ9I0xcodCDwI09h4ZiijSIOd58hT-6ZemQPC6UM2zaC1mmpaMZBHgxN4294g8eGhpGIPk_UMmyyn2cn",
    alt: "Visa",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBClsdk8BlytEofwjk1CyLKPeOzlXZMAFTfAPRwmqdmnPES8RaekmubhsGTz4FDM62xxPJHxChauiRndfflDbHgot-6cDCoMkWMF3Vf1luPk0qdH-aOGbmJZvrXFqTMTnhPpbeRDzUdhH4vDKkearnvVlH509pHgorxRIYF988qu3ibUcTGsLa5D0LJ5pmY-E4GGuj6uQalrhGodfjaqdTfA7Sw3LCV0CfzsqiK3MKyWM259GznDJ1i9mbettnqPIV43-iiYdw7xqNO",
    alt: "Mastercard",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASIftdl5H9fgKXKTFblrpvHkVUBymepiBmVWP24-5wXit0UGfC88GsVfbyE77IfqPiQWbnZX_naNU5qeus4OuooIwoI6aWGELePturFo03rQUMCs-cSYsDSetTiu2s7niA10h1BpDE6Y4VrYYvqL_UPHNzb4fxkDRLJyIjj370O40NVisgyvf7_Pi_2aPdpBlEL8KUJcqw-iOCP0mk0bxwnqEFQje6tuOfKMoOn-kxCXY7FgQYQvlwYVAhWhbcwwuVlLsYhnU4sm8",
    alt: "Norton secure",
  },
] as const;

const ADDONS = [
  {
    id: "guide",
    label: "Add Back Pain Relief Guide (+$12.00)",
  },
  {
    id: "plan",
    label: "Add Advanced Spine Exercise Plan (+$19.00)",
  },
] as const;

export function YfbpCheckoutFormClient() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-12" id="checkout">
      <div className="space-y-12">
        <h2 className="text-slate-900 yfbp-text-display-xl">
          Secure Your <span className="text-[var(--yfbp-primary)]">Spot</span>
        </h2>
        <div className="space-y-6 rounded-3xl bg-[var(--yfbp-surface-container)] p-12">
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined shrink-0 text-3xl text-[var(--yfbp-primary)]"
              aria-hidden
            >
              verified_user
            </span>
            <p className="text-slate-900 yfbp-text-headline-md">7-Day Money Back Guarantee</p>
          </div>
          <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
            If you don&apos;t feel a noticeable reduction in stiffness within your first week,
            we&apos;ll refund every penny. No questions asked.
          </p>
        </div>
        <div className="space-y-4">
          <p className="uppercase tracking-widest text-slate-400 yfbp-text-label-bold">
            You&apos;re Protected By:
          </p>
          <div className="flex flex-wrap gap-4 opacity-50 grayscale">
            {PAYMENT_MARKS.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={72}
                height={32}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="yfbp-glass-card rounded-3xl border-2 border-[var(--yfbp-primary-container)] p-12 shadow-2xl">
        <form
          className="space-y-6"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="space-y-1">
            <label htmlFor="yfbp-name" className="block yfbp-text-label-bold yfbp-text-label-md">
              Full Name
            </label>
            <input
              id="yfbp-name"
              name="fullname"
              className="w-full rounded-2xl border-0 bg-[var(--yfbp-surface-container-low)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--yfbp-primary)]"
              placeholder="John Doe"
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="yfbp-email" className="block yfbp-text-label-bold yfbp-text-label-md">
              Email Address
            </label>
            <input
              id="yfbp-email"
              name="email"
              className="w-full rounded-2xl border-0 bg-[var(--yfbp-surface-container-low)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--yfbp-primary)]"
              placeholder="john@example.com"
              type="email"
              autoComplete="off"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="yfbp-phone" className="block yfbp-text-label-bold yfbp-text-label-md">
              Phone Number
            </label>
            <input
              id="yfbp-phone"
              name="phone"
              className="w-full rounded-2xl border-0 bg-[var(--yfbp-surface-container-low)] p-4 focus:outline-none focus:ring-2 focus:ring-[var(--yfbp-primary)]"
              placeholder="+1 (555) 000-0000"
              type="tel"
              autoComplete="off"
            />
          </div>
          <div className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <p className="font-bold text-orange-800 yfbp-text-label-bold">
              ONE TIME OFFERS (ADD TO ORDER)
            </p>
            {ADDONS.map(({ id, label }) => (
              <label key={id} htmlFor={`yfbp-addon-${id}`} className="group flex cursor-pointer items-center gap-4">
                <input id={`yfbp-addon-${id}`} type="checkbox" className="size-6 rounded border-orange-300 text-orange-500 focus:ring-orange-500" />
                <span className="font-medium text-[var(--yfbp-on-background)] group-hover:text-orange-700 yfbp-text-body-md">
                  {label}
                </span>
              </label>
            ))}
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--yfbp-primary)] py-6 text-[var(--yfbp-on-primary)] shadow-lg shadow-[rgba(0,110,28,0.2)] transition-all hover:scale-[1.02] active:scale-95 yfbp-text-headline-md"
          >
            <span className="material-symbols-outlined" aria-hidden>
              rocket_launch
            </span>
            Start Your Pain-Free Life Today
          </button>
        </form>
      </div>
    </div>
  );
}
