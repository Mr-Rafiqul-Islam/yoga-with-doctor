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
            <h3 className="mb-4 md:mb-8 md:text-4xl text-3xl text-center md:text-left font-extrabold">আরোগ্য লাভের প্রথম পদক্ষেপ</h3>
            <p className="mb-4 md:mb-8 md:text-base text-sm text-center md:text-left leading-relaxed text-on-surface/70">
              নিচের ফর্মটি পূরণ করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে এবং
              পরবর্তী নির্দেশনা প্রদান করবে।
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">security</span>
                <span className="font-medium text-sm md:text-base">100% Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">support_agent</span>
                <span className="font-medium text-sm md:text-base">Direct Clinical Support</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">thumb_up</span>
                <span className="font-medium text-sm md:text-base">Satisfaction Guaranteed</span>
              </div>
            </div>
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
