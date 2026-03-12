"use client";

import { useState } from "react";
import Image from "next/image";
import {
  type OrderItem,
  formatCheckoutPrice,
} from "@/features/checkout/data/checkoutReviewData";

type OrderItemCardProps = {
  item: OrderItem;
  onRemove?: () => void;
};

export function OrderItemCard({ item, onRemove }: OrderItemCardProps) {
  const [imageError, setImageError] = useState(false);
  const showBanner = item.bannerUrl && !imageError;

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-surface p-6 shadow-soft transition-colors dark:bg-surface-dark sm:flex-row">
      <div className="relative h-32 w-full flex-shrink-0 overflow-hidden rounded-2xl bg-[#8AB5A8] sm:w-32">
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent"
          aria-hidden
        />
        {showBanner ? (
          <Image
            src={item.bannerUrl!}
            alt=""
            fill
            className="object-cover"
            sizes="128px"
            onError={() => setImageError(true)}
          />
        ) : (
          <span
            className="material-icons-outlined absolute inset-0 flex items-center justify-center text-5xl text-white opacity-90 drop-shadow-sm"
            aria-hidden
          >
            spa
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary dark:bg-green-900/30">
            {item.badge}
          </span>
          <h3 className="font-display text-2xl font-semibold leading-tight text-foreground mb-1 dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm text-muted mb-3">{item.subtitle}</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatCheckoutPrice(item.price, item.currency)}
          </span>
          {onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="text-sm text-muted underline decoration-gray-300 underline-offset-4 transition-colors hover:text-red-500 dark:hover:text-red-400"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
