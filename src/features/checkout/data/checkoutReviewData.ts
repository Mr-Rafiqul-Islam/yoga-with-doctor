export const CHECKOUT_REVIEW = {
  subtotal: 49.0,
  taxRate: 0.08,
  defaultDiscount: 0,
} as const;

/** Format price for checkout display using product currency (e.g. BDT → ৳, USD → $) */
export function formatCheckoutPrice(
  price: number,
  currency: string | null | undefined
): string {
  const code = (currency ?? "BDT").toUpperCase();
  if (code === "BDT") {
    return `৳ ${price.toLocaleString("en-BD")}`;
  }
  if (code === "USD") {
    return `$ ${price.toFixed(2)}`;
  }
  return `${code} ${price.toFixed(2)}`;
}

export type OrderItem = {
  badge: string;
  title: string;
  subtitle: string;
  price: number;
  /** Currency from course product (e.g. BDT, USD) for display */
  currency?: string | null;
  /** Course banner image URL; fallback icon shown when missing or on error */
  bannerUrl?: string | null;
};

export const DEFAULT_ORDER_ITEM: OrderItem = {
  badge: "Course",
  title: "Restorative Yoga for Anxiety Relief",
  subtitle: "Dr. Sarah Jenkins • 8 Modules",
  price: 49.0,
};
