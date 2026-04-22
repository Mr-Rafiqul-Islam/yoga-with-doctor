"use client";

import { useId, useState, type ReactNode } from "react";

export type CheckoutOrderBumpProps = {
  /** Form field name for the checkbox (e.g. orderBump1) */
  name: string;
  imageSrc: string;
  imageAlt: string;
  offerLabel: string;
  headline: string;
  shortDescription: string;
  fullDescription: ReactNode;
  price: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export function CheckoutOrderBump({
  name,
  imageSrc,
  imageAlt,
  offerLabel,
  headline,
  shortDescription,
  fullDescription,
  price,
  checked,
  onCheckedChange,
}: CheckoutOrderBumpProps) {
  const reactId = useId();
  const checkboxId = `${reactId}-bump`;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-amber-300/90 bg-amber-50/95 p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:items-start sm:gap-5">
        <div className="relative mx-auto aspect-square w-full max-w-[140px] shrink-0 overflow-hidden rounded-lg bg-white shadow-inner ring-1 ring-amber-200/80 sm:mx-0 sm:max-w-none sm:aspect-[4/3] sm:w-full">
          <img
            alt={imageAlt}
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
            src={imageSrc}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start gap-2 sm:gap-3">
            <span
              aria-hidden
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-[14px] leading-none">
                arrow_forward
              </span>
            </span>
            <input
              checked={checked}
              className="mt-1.5 h-4 w-4 shrink-0 rounded border-amber-400 text-primary focus:ring-primary"
              id={checkboxId}
              name={name}
              type="checkbox"
              value="on"
              onChange={(e) => onCheckedChange(e.target.checked)}
            />
            <label
              className="min-w-0 flex-1 text-sm font-bold leading-snug text-on-surface sm:text-[15px]"
              htmlFor={checkboxId}
            >
              {offerLabel}
            </label>
            <span className="shrink-0 text-sm font-bold tabular-nums text-on-surface sm:text-base">
              {price}
            </span>
          </div>

          <h4 className="mb-2 text-base font-bold leading-tight text-secondary sm:text-lg">
            {headline}
          </h4>

          <p className="text-sm leading-relaxed text-on-surface/70">
            {shortDescription}{" "}
            <button
              aria-expanded={expanded}
              className="font-semibold text-secondary underline decoration-secondary/60 underline-offset-2 transition hover:text-secondary-container"
              type="button"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "...less" : "...more"}
            </button>
          </p>

          {expanded ? (
            <div className="mt-3 border-t border-amber-200/80 pt-3 text-sm leading-relaxed text-on-surface/75">
              {fullDescription}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
