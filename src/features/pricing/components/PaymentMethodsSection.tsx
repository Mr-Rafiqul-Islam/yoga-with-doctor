import type { PaymentMethod } from "@/features/pricing/data/pricingPlans";
import { PaymentMethodOption } from "./PaymentMethodOption";

const CREDIT_CARD_ICON = (
  <div className="flex h-8 w-12 items-center justify-center rounded border border-gray-200 bg-white text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
    <span className="material-icons-outlined text-lg">credit_card</span>
  </div>
);

const APPLE_PAY_ICON = (
  <div className="flex h-8 w-12 items-center justify-center rounded bg-black text-white">
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.388 12.87c.025-2.094 1.705-3.1 1.782-3.14-0.97-1.424-2.48-1.616-3.02-1.637-1.282-.132-2.508.762-3.158.762-.656 0-1.66-.743-2.73-.722-1.406.02-2.71.826-3.437 2.097-1.465 2.556-.376 6.315 1.047 8.396.696 1.02 1.524 2.162 2.614 2.122 1.046-.042 1.44-.68 2.707-.68 1.263 0 1.623.68 2.727.658 1.13-.023 1.846-1.028 2.536-2.048.795-1.173 1.12-2.31 1.136-2.37-.024-.01-2.182-.847-2.204-3.358m-1.57-7.854c.575-.705.962-1.678.857-2.652-.828.034-1.83.56-2.424 1.26-.532.617-.996 1.62-.87 2.63.924.073 1.868-.466 2.437-1.238" />
    </svg>
  </div>
);

const GOOGLE_PAY_ICON = (
  <div className="flex h-8 w-12 items-center justify-center rounded border border-gray-200 bg-white">
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  </div>
);

const PAYMENT_OPTIONS: {
  value: PaymentMethod;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "credit_card",
    label: "Credit Card",
    subtitle: "Visa, Mastercard, Amex",
    icon: CREDIT_CARD_ICON,
  },
  {
    value: "apple_pay",
    label: "Apple Pay",
    subtitle: "Fast & Secure",
    icon: APPLE_PAY_ICON,
  },
  {
    value: "google_pay",
    label: "Google Pay",
    subtitle: "Fast & Secure",
    icon: GOOGLE_PAY_ICON,
  },
];

type PaymentMethodsSectionProps = {
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
};

export function PaymentMethodsSection({
  paymentMethod,
  onPaymentMethodChange,
}: PaymentMethodsSectionProps) {
  return (
    <div className="md:col-span-7 lg:col-span-8">
      <h3 className="mb-6 font-display text-2xl font-bold text-foreground">
        Select Payment Method
      </h3>
      <div className="space-y-4">
        {PAYMENT_OPTIONS.map((opt) => (
          <PaymentMethodOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            subtitle={opt.subtitle}
            icon={opt.icon}
            selected={paymentMethod === opt.value}
            onChange={onPaymentMethodChange}
          />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-6 text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="material-icons-outlined text-sm">lock</span>
          <span>SSL Secure Payment</span>
        </div>
        <div className="h-4 border-l border-gray-300 dark:border-gray-600" aria-hidden />
        <div className="flex items-center gap-2">
          <span className="material-icons-outlined text-sm">verified_user</span>
          <span>Money Back Guarantee</span>
        </div>
      </div>
    </div>
  );
}
