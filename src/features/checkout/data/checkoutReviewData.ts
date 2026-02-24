export const CHECKOUT_REVIEW = {
  subtotal: 49.0,
  taxRate: 0.08,
  defaultDiscount: 0,
} as const;

export const TAX = Math.round(
  CHECKOUT_REVIEW.subtotal * CHECKOUT_REVIEW.taxRate * 100
) / 100;

export type OrderItem = {
  badge: string;
  title: string;
  subtitle: string;
  price: number;
};

export const DEFAULT_ORDER_ITEM: OrderItem = {
  badge: "Course",
  title: "Restorative Yoga for Anxiety Relief",
  subtitle: "Dr. Sarah Jenkins • 8 Modules",
  price: 49.0,
};
