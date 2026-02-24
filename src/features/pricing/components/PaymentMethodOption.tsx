import type { ReactNode } from "react";
import type { PaymentMethod } from "@/features/pricing/data/pricingPlans";

type PaymentMethodOptionProps = {
  value: PaymentMethod;
  label: string;
  subtitle: string;
  icon: ReactNode;
  selected: boolean;
  onChange: (value: PaymentMethod) => void;
};

const baseClass =
  "flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all shadow-sm";
const selectedClass = "border-primary bg-primary/5 dark:bg-primary/10";
const unselectedClass =
  "border-border bg-surface hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800";

export function PaymentMethodOption({
  value,
  label,
  subtitle,
  icon,
  selected,
  onChange,
}: PaymentMethodOptionProps) {
  const borderClass = selected ? "border-2" : "border";

  return (
    <label
      className={`${baseClass} ${borderClass} ${
        selected ? selectedClass : unselectedClass
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="[&>svg]:h-4 [&>svg]:w-4">{icon}</div>
        <div>
          <p className="font-semibold text-foreground">{label}</p>
          <p className="text-xs text-muted">{subtitle}</p>
        </div>
      </div>
      <input
        type="radio"
        name="payment"
        value={value}
        checked={selected}
        onChange={(e) => onChange(e.target.value as PaymentMethod)}
        className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-surface dark:bg-surface-dark"
      />
    </label>
  );
}
