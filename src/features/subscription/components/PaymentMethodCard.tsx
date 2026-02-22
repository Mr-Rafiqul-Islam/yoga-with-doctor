export interface PaymentMethodCardProps {
  brand: string;
  last4: string;
  expiry: string;
  isDefault?: boolean;
}

import Link from "next/link";

export function PaymentMethodCard({
  brand,
  last4,
  expiry,
  isDefault = true,
}: PaymentMethodCardProps) {
  return (
    <article className="group relative rounded-3xl border-2 border-primary/20 bg-surface p-6 shadow-card transition-colors hover:border-primary/50 dark:bg-surface-dark">
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <Link
          href="#"
          className="text-muted hover:text-foreground dark:hover:text-white"
          aria-label="Card options"
        >
          <span className="material-icons-outlined text-lg">more_horiz</span>
        </Link>
      </div>
      <div className="mb-6">
        <div className="mb-2 flex h-8 w-12 items-center justify-center rounded bg-gray-200 text-xs font-bold text-gray-500 dark:bg-gray-700">
          {brand}
        </div>
      </div>
      <p className="mb-1 text-xs text-muted">Card Number</p>
      <div className="mb-6 flex items-center gap-2 font-mono md:text-lg text-sm font-medium text-foreground">
        <span className="md:text-2xl text-xl leading-none pt-1">••••</span>
        <span className="md:text-2xl text-xl leading-none pt-1">••••</span>
        <span className="md:text-2xl text-xl leading-none pt-1">••••</span>
        <span className="md:text-lg text-sm">{last4}</span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs text-muted">Expiry</p>
          <p className="font-medium text-foreground">{expiry}</p>
        </div>
        {isDefault && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-icons-round text-lg">check</span>
          </div>
        )}
      </div>
    </article>
  );
}
