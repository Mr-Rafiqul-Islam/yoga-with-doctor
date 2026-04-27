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

const CAMPAIGN_SLUG = "plid-home-recovery-funnel";
const FALLBACK_CAMPAIGN_ID = "plid-home-recovery-funnel";
const FALLBACK_PRICE_TAKA = 2999;

export default async function PlidHomeRecoveryFunnelPage() {
  const campaignItem = await fetchCampaignItemBySlug(CAMPAIGN_SLUG);
  const campaignItemId =
    (campaignItem?.id && String(campaignItem.id)) || FALLBACK_CAMPAIGN_ID;
  const basePriceTaka =
    resolvePriceTakaFromCampaignItem(campaignItem) ?? FALLBACK_PRICE_TAKA;

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
