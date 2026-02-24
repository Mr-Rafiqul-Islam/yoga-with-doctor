const BADGES = ["VISA", "MC", "AMEX"] as const;

export function PaymentMethodBadges() {
  return (
    <div className="flex justify-center gap-4 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
      {BADGES.map((label) => (
        <div
          key={label}
          className="flex h-8 w-12 items-center justify-center rounded bg-gray-200 text-[10px] font-bold text-gray-500 dark:bg-gray-700"
          aria-hidden
        >
          {label}
        </div>
      ))}
    </div>
  );
}
