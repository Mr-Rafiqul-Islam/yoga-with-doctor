import type { OrderItem } from "@/features/checkout/data/checkoutReviewData";
import { OrderItemCard } from "./OrderItemCard";

type OrderSummarySectionProps = {
  items: OrderItem[];
  onRemoveItem?: (index: number) => void;
};

export function OrderSummarySection({
  items,
  onRemoveItem,
}: OrderSummarySectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
        Order Summary
      </h2>
      <div className="space-y-6">
      {items.map((item, index) => (
        <OrderItemCard
          key={`${item.title}-${index}`}
          item={item}
          onRemove={
            onRemoveItem ? () => onRemoveItem(index) : undefined
          }
        />
      ))}
      </div>
    </section>
  );
}
