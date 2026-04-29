import { Plid30DaysHealingAuthority } from "./_components/Plid30DaysHealingAuthority";

import { Plid30DaysHealingBenefits } from "./_components/Plid30DaysHealingBenefits";

import { Plid30DaysHealingCheckout } from "./_components/Plid30DaysHealingCheckout";

import { Plid30DaysHealingClose } from "./_components/Plid30DaysHealingClose";

import { Plid30DaysHealingFaq } from "./_components/Plid30DaysHealingFaq";

import { Plid30DaysHealingHero } from "./_components/Plid30DaysHealingHero";

import { Plid30DaysHealingMechanism } from "./_components/Plid30DaysHealingMechanism";

import { Plid30DaysHealingOffer } from "./_components/Plid30DaysHealingOffer";

import { Plid30DaysHealingProblem } from "./_components/Plid30DaysHealingProblem";

import { Plid30DaysHealingProgram } from "./_components/Plid30DaysHealingProgram";

import { Plid30DaysHealingProof } from "./_components/Plid30DaysHealingProof";

import {
  fetchCampaignItemBySlug,
  resolvePriceTakaFromCampaignItem,
} from "@/lib/campaignPublicApi";

const CAMPAIGN_SLUG = "30-days-plid-healing-yoga";

const FALLBACK_CAMPAIGN_ID = "30-days-plid-healing-yoga";

const FALLBACK_PRICE_TAKA = 4990;

export default async function ThirtyDaysPlidHealingYogaPage() {
  const campaignItem = await fetchCampaignItemBySlug(CAMPAIGN_SLUG);

  const campaignItemId =
    (campaignItem?.id && String(campaignItem.id)) || FALLBACK_CAMPAIGN_ID;

  const basePriceTaka =
    resolvePriceTakaFromCampaignItem(campaignItem) ?? FALLBACK_PRICE_TAKA;

  return (
    <>
      <Plid30DaysHealingHero />

      <Plid30DaysHealingProblem />

      <Plid30DaysHealingMechanism />

      <Plid30DaysHealingAuthority />

      <Plid30DaysHealingProof />

      <Plid30DaysHealingBenefits />

      <Plid30DaysHealingProgram />

      <Plid30DaysHealingOffer basePriceTaka={basePriceTaka} />

      <Plid30DaysHealingCheckout
        basePriceTaka={basePriceTaka}
        campaignItem={campaignItem}
        campaignItemId={campaignItemId}
      />

      <Plid30DaysHealingClose />

      <Plid30DaysHealingFaq />
    </>
  );
}
