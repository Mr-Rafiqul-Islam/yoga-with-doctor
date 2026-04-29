import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { Plid30DaysHealingCheckoutForm } from "./Plid30DaysHealingCheckoutForm";
import type { CampaignItemSummary } from "@/lib/campaignPublicApi";

export type Plid30DaysHealingCheckoutProps = {
  campaignItemId: string;
  basePriceTaka: number;
  campaignItem: CampaignItemSummary | null;
};

export function Plid30DaysHealingCheckout({
  campaignItemId,
  basePriceTaka,
  campaignItem,
}: Plid30DaysHealingCheckoutProps) {
  return (
    <ScrollReveal className="bg-surface-container-low py-24" id="checkout">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="mb-4 md:mb-8 text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-extrabold">আপনার সুস্থ জীবনের যাত্রা শুরু হোক আজ থেকেই।</h3>
            <p className="mb-4 md:mb-8 md:text-base text-sm text-center md:text-left leading-relaxed text-on-surface/70">
            ৯০% ক্ষেত্রে অপারেশন ছাড়াই PLID মুক্ত হওয়া সম্ভব। শুধু একটি সঠিক সিদ্ধান্তের নিলে আপনি আপনার আগের প্রাণবন্ত জীবনে ফিরে যেতে পারেন।
            </p>
          </div>
          <div className="rounded-3xl bg-surface-container-lowest p-6 md:p-10 shadow-xl shadow-primary/5">
            <Plid30DaysHealingCheckoutForm
              basePriceTaka={basePriceTaka}
              campaignItem={campaignItem}
              campaignItemId={campaignItemId}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
