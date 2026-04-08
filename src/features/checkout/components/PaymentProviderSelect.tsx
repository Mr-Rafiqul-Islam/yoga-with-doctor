"use client";

import type { PaymentProvider } from "@/slices/payment";

const OPTIONS: {
  id: PaymentProvider;
  title: string;
  description: string;
  icon: string;
  iconWrapClass: string;
}[] = [
  {
    id: "SSL",
    title: "SSLCOMMERZ",
    description: "Cards, mobile banking & net banking",
    icon: "account_balance",
    iconWrapClass: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  },
  {
    id: "BKASH",
    title: "bKash",
    description: "Pay with your bKash wallet",
    icon: "smartphone",
    iconWrapClass: "bg-rose-50 text-[#C2185B] dark:bg-rose-950/40 dark:text-rose-300",
  },
];

export type PaymentProviderSelectProps = {
  value: PaymentProvider;
  onChange: (provider: PaymentProvider) => void;
  disabled?: boolean;
};

export function PaymentProviderSelect({ value, onChange, disabled }: PaymentProviderSelectProps) {
  return (
    <fieldset
      className="rounded-lg bg-surface p-6 shadow-soft transition-colors dark:bg-surface-dark"
      disabled={disabled}
    >
      <legend className="mb-4 block w-full px-0 text-base font-display font-semibold text-foreground">
        Pay with
      </legend>
      <p className="mb-4 text-sm text-muted">Choose how you want to complete this payment.</p>
      <div className="flex flex-col gap-3" role="radiogroup" aria-label="Payment provider">
        {OPTIONS.map((opt) => {
          const inputId = `payment-provider-${opt.id}`;
          const checked = value === opt.id;
          return (
            <label
              key={opt.id}
              htmlFor={inputId}
              className={[
                "relative flex cursor-pointer items-start gap-4 rounded-xl border-2 border-gray-100 bg-white p-4 transition-all dark:border-gray-700 dark:bg-surface",
                disabled ? "cursor-not-allowed opacity-60" : "hover:border-gray-200 dark:hover:border-gray-600",
                checked && opt.id === "SSL" && "border-primary ring-2 ring-primary/20",
                checked && opt.id === "BKASH" && "border-[#E2136E] ring-2 ring-[#E2136E]/25",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <input
                id={inputId}
                type="radio"
                name="paymentProvider"
                value={opt.id}
                checked={checked}
                onChange={() => onChange(opt.id)}
                disabled={disabled}
                className="sr-only"
              />
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${opt.iconWrapClass}`}
                aria-hidden
              >
                <span className="material-icons-outlined text-[22px]">{opt.icon}</span>
              </div>
              <span className="min-w-0 flex-1 pt-0.5">
                <span className="block font-semibold text-foreground">{opt.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{opt.description}</span>
              </span>
              <span
                className={[
                  "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                  checked
                    ? opt.id === "BKASH"
                      ? "border-[#E2136E] bg-[#E2136E]"
                      : "border-primary bg-primary"
                    : "border-gray-300 dark:border-gray-600",
                ].join(" ")}
                aria-hidden
              >
                {checked ? (
                  <span className="material-icons-outlined text-[14px] text-white leading-none">check</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
