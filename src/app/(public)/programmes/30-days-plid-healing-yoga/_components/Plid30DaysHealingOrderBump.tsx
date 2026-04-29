"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";

export type Plid30DaysHealingOrderBumpProps = {
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

export function Plid30DaysHealingOrderBump({
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
}: Plid30DaysHealingOrderBumpProps) {
  const reactId = useId();
  const checkboxId = `${reactId}-bump`;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-amber-300/90 bg-amber-50/95 p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,7.5rem)_1fr] lg:items-start lg:gap-5">
        <div className="relative mx-auto aspect-square w-full max-w-[100px] shrink-0 overflow-hidden rounded-lg bg-white shadow-inner ring-1 ring-amber-200/80 sm:mx-0 sm:max-w-none sm:aspect-[4/3] sm:w-full">
          <Image
            fill
            alt={imageAlt}
            className="object-cover"
            sizes="(max-width: 639px) 140px, 120px"
            src={imageSrc}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start gap-2 lg:gap-3">
            <span
              aria-hidden
              className="mt-0.5 flex lg:h-6 h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm"
            >
              <span className="material-symbols-outlined lg:text-[14px] text-[12px] leading-none">
                arrow_forward
              </span>
            </span>
            <input
              checked={checked}
              className="mt-1.5 lg:h-4 h-3 w-3 shrink-0 rounded border-amber-400 text-primary focus:ring-primary"
              id={checkboxId}
              name={name}
              type="checkbox"
              value="on"
              onChange={(e) => onCheckedChange(e.target.checked)}
            />
            <label
              className="min-w-0 flex-1 lg:text-sm text-xs font-bold leading-snug text-on-surface lg:text-[15px]"
              htmlFor={checkboxId}
            >
              {offerLabel}
            </label>
            <span className="shrink-0 lg:text-sm text-xs font-bold tabular-nums text-on-surface xl:text-base">
              {price}
            </span>
          </div>

          <h4 className="mb-2 lg:text-base text-sm font-bold leading-tight text-secondary xl:text-lg">
            {headline}
          </h4>

          <p className="lg:text-sm text-xs leading-relaxed text-on-surface/70">
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
            <div className="mt-3 border-t border-amber-200/80 pt-3 lg:text-sm text-xs leading-relaxed text-on-surface/75">
              {fullDescription}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
