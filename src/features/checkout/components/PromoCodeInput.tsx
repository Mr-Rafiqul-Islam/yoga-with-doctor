"use client";

type PromoCodeInputProps = {
  value: string;
  onChange: (value: string) => void;
  onApply: () => void;
};

export function PromoCodeInput({ value, onChange, onApply }: PromoCodeInputProps) {
  return (
    <div>
      <h3 className="mb-3 text-base font-medium text-foreground">
        Promo Code
      </h3>
      <div className="relative flex items-center">
        <span
          className="material-icons-outlined absolute left-4 text-xl text-muted"
          aria-hidden
        >
          local_offer
        </span>
        <input
          type="text"
          placeholder="Enter code here"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-28 text-foreground shadow-sm placeholder-gray-400 transition-all focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white"
        />
        <button
          type="button"
          onClick={onApply}
          className="absolute right-2 rounded-xl bg-[#0F172A] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-primary"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
