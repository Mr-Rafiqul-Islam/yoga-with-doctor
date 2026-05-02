import { SalesAuthority } from "./_components/SalesAuthority";
import { SalesBenefits } from "./_components/SalesBenefits";
import { SalesBonus } from "./_components/SalesBonus";
import { SalesCheckout } from "./_components/SalesCheckout";
import { SalesClose } from "./_components/SalesClose";
import { SalesFaq } from "./_components/SalesFaq";
import { SalesHero } from "./_components/SalesHero";
import { SalesMechanism } from "./_components/SalesMechanism";
import { SalesOffer } from "./_components/SalesOffer";
import { SalesProblem } from "./_components/SalesProblem";
import { SalesProgram } from "./_components/SalesProgram";
import { SalesProof } from "./_components/SalesProof";
import { SalesUrgency } from "./_components/SalesUrgency";
import {
  fetchCampaignItemBySlug,
  resolvePriceTakaFromCampaignItem,
} from "@/lib/campaignPublicApi";

/** Deadline for the urgency countdown (ISO string or change to `new Date(...)`). */
const OFFER_ENDS_AT = "2026-05-03T23:59:59+06:00";

console.log("OFFER_ENDS_AT", OFFER_ENDS_AT);
const CAMPAIGN_SLUG = "plid-home-recovery-funnel";
console.log("CAMPAIGN_SLUG", CAMPAIGN_SLUG);
const FALLBACK_PRICE_TAKA = 2999;
console.log("FALLBACK_PRICE_TAKA", FALLBACK_PRICE_TAKA);
const FALLBACK_CAMPAIGN_ID = "plid-home-recovery-funnel";
console.log("FALLBACK_CAMPAIGN_ID", FALLBACK_CAMPAIGN_ID);

export default async function PlidHomeRecoveryFunnelPage() {
  const campaignItem = await fetchCampaignItemBySlug(CAMPAIGN_SLUG);
  console.log("campaignItem", campaignItem);
  const campaignItemId =
    (campaignItem?.id && String(campaignItem.id)) || FALLBACK_CAMPAIGN_ID;
  console.log("campaignItemId", campaignItemId);
  const basePriceTaka =
    resolvePriceTakaFromCampaignItem(campaignItem) ?? FALLBACK_PRICE_TAKA;
  console.log("basePriceTaka", basePriceTaka);
  return (
    <>
      {/* Hero / Proof / Benefits: variant "auto" = light on light site, dark UI when html.dark; use "light" | "dark" to force */}
      <SalesHero />
      <SalesProblem />
      <SalesMechanism />
      <SalesAuthority />
      <SalesProof />
      <SalesBenefits />
      <SalesProgram />
      <SalesBonus />
      <SalesUrgency endsAt={OFFER_ENDS_AT} />
      <SalesOffer basePriceTaka={basePriceTaka} />
      <SalesCheckout
        basePriceTaka={basePriceTaka}
        campaignItem={campaignItem}
        campaignItemId={campaignItemId}
      />
      <SalesClose />
      <SalesFaq />
    </>
  );
}
