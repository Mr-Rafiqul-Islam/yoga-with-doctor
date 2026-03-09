import { getFeatureDisplay, type Plan } from "@/features/pricing/data/pricingPlans";

type PricingPlanCardProps = {
  plan: Plan;
  isSelected: boolean;
  isFeatured?: boolean;
  orderClassName?: string;
  onSelect: () => void;
};

const cardBase =
  "flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md dark:bg-surface-dark xl:p-8";
const selectedButton =
  "w-full rounded-xl border p-4 flex items-center justify-between transition border-primary bg-primary/5 dark:bg-primary/10";
const unselectedButton =
  "w-full rounded-xl border p-4 flex items-center justify-between transition border-border hover:border-gray-400 dark:hover:border-gray-500";

export function PricingPlanCard({
  plan,
  isSelected,
  isFeatured = false,
  orderClassName,
  onSelect,
}: PricingPlanCardProps) {
  const selectLabel = isSelected ? "Selected Plan" : `Select ${plan.name}`;
  const wrapperClass = isFeatured
    ? "group relative order-1 z-10 -mt-4 mb-4 lg:-mt-6 lg:mb-0"
    : `relative flex h-full flex-col ${orderClassName ?? ""}`.trim();

  return (
    <div className={wrapperClass}>
      {isFeatured && (
        <div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-200 to-yellow-100 blur opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-yellow-900/30 dark:to-yellow-800/20"
          aria-hidden
        />
      )}
      <div
        className={
          isFeatured
            ? "relative flex h-full flex-col origin-top transform rounded-2xl border-2 border-transparent bg-surface p-6 shadow-glow-gold dark:bg-surface-dark lg:scale-105 xl:p-8"
            : `relative flex h-full flex-col ${cardBase}`
        }
      >
        {plan.badge && (
          <div className="absolute top-0 right-0 -translate-y-2 translate-x-2">
            <span
              className={
                plan.badge === "Best Value"
                  ? "rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md"
                  : "rounded-full bg-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md dark:bg-gray-600"
              }
            >
              {plan.badge}
            </span>
          </div>
        )}

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="mb-2 font-display text-xl font-bold xl:text-2xl">
              {plan.name}
            </h3>
            <p className="text-xs text-muted xl:text-sm">{plan.description}</p>
          </div>
          <div className="text-right">
            <span className="block text-2xl font-bold xl:text-3xl">
              ${plan.price.toFixed(2)}
            </span>
            {plan.originalPrice != null ? (
              <span className="block text-xs font-medium text-primary line-through xl:text-sm">
                ${plan.originalPrice.toFixed(2)}
              </span>
            ) : (
              <span className="block text-xs text-muted xl:text-sm">
                {plan.period}
              </span>
            )}
          </div>
        </div>

        <hr className="mb-6 border-border" />

        <ul className="mb-8 flex-grow space-y-4 text-sm xl:text-base">
          {plan.features.map((feature, idx) => {
            const { text, included } = getFeatureDisplay(feature);
            return (
              <li
                key={idx}
                className={`flex items-center ${!included ? "opacity-50" : ""}`}
              >
                <span
                  className={`material-icons-outlined mr-3 text-lg ${
                    included
                      ? "text-gray-400 dark:text-gray-500"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  aria-hidden
                >
                  {included ? "check_circle" : "cancel"}
                </span>
                <span className="text-foreground">{text}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto">
          <button
            type="button"
            onClick={onSelect}
            className={
              isSelected
                ? isFeatured
                  ? "w-full rounded-xl border-2 border-primary bg-primary/5 p-4 flex items-center justify-between dark:bg-primary/10"
                  : selectedButton
                : unselectedButton
            }
          >
            <span
              className={`text-sm font-semibold ${
                isSelected ? "text-primary" : "text-muted"
              }`}
            >
              {selectLabel}
            </span>
            <span
              className={`material-icons-outlined ${
                isSelected ? "text-primary" : "text-gray-300 dark:text-gray-600"
              }`}
              aria-hidden
            >
              {isSelected ? "radio_button_checked" : "radio_button_unchecked"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
