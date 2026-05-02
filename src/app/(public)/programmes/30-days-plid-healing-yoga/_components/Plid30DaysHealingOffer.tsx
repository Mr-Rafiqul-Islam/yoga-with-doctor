import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export type Plid30DaysHealingOfferProps = {
  /** BDT integer (taka) */
  basePriceTaka: number;
  /** Optional "was" price (BDT) */
  originalPriceTaka?: number;
};

function formatBanglaNumber(amount: number): string {
  return amount.toLocaleString("bn-BD");
}

type OfferRow =
  | {
      id: string;
      kind: "line";
      label: string;
      price: string;
    }
  | {
      id: string;
      kind: "heading";
      label: string;
      price: string;
    };

const OFFER_ROWS: OfferRow[] = [
  {
    id: "yoga-program",
    kind: "line",
    label: "30 Days PLID Yoga",
    price: "৳ ২৪,০০০",
  },
  {
    id: "diet-pdf",
    kind: "line",
    label: "PLID Diet & Food Plan (PDF)",
    price: "৳ ১,০০০",
  },
  {
    id: "movement-guide",
    kind: "line",
    label: "Correct Sitting, Movement Guide (PDF)",
    price: "৳ ১,৫০০",
  },
  {
    id: "live-qa",
    kind: "line",
    label: "২টি Live Q&A Session (Personal Guide)",
    price: "৳ ৫,০০০",
  },
  {
    id: "guideline",
    kind: "line",
    label: "PLID নিরাময় গাইডলাইন",
    price: "৳ ২,০০০",
  },
  {
    id: "bonus-6day",
    kind: "heading",
    label: "PLID ব্যথা বাড়লে ৬ দিনের চিকিৎসা",
    price: "৳ ১০০০ (ফ্রী )",
  },
  {
    id: "bonus-14day",
    kind: "heading",
    label: "PLID ব্যথা বাড়লে ১৪ দিনের চিকিৎসা",
    price: "৳ ২০০০  (ফ্রী )",
  },
  {
    id: "bonus-routine-1",
    kind: "heading",
    label: "PLID নিরাময় রুটিন",
    price: "৳ ১০০০  (ফ্রী )",
  },
  {
    id: "bonus-routine-2",
    kind: "heading",
    label: "PLID নিরাময় রুটিন",
    price: "৳ ২০০০ (ফ্রি)",
  },
];

export function Plid30DaysHealingOffer({
  basePriceTaka,
  originalPriceTaka = 33500,
}: Plid30DaysHealingOfferProps) {
  return (
    <>
      <ScrollReveal className="bg-primary py-24 text-on-primary" id="offer">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-12 text-2xl md:text-3xl lg:text-4xl font-extrabold">
            আপনার PLID নিরাময় এর জন্য ইনভেস্টমেন্ট
          </h3>
          <div className="relative rounded-3xl bg-surface-container-lowest p-8 text-on-surface shadow-2xl md:p-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full text-nowrap bg-secondary px-4 md:px-6 py-1.5 md:py-2 font-bold text-on-primary shadow-lg text-sm md:text-base">
              Special Limited Offer
            </div>
            <div className="mb-10 space-y-4 border-b border-outline-variant/20 pb-6 md:pb-10 text-left">
              {OFFER_ROWS.map((row) =>
                row.kind === "heading" ? (
                  <div
                    key={row.id}
                    className="flex items-center justify-between font-headline"
                  >
                    <span className="text-xs md:text-lg">{row.label}</span>
                    <span className="text-xs md:text-lg line-through text-secondary font-bold">
                      {row.price}
                    </span>
                  </div>
                ) : (
                  <div
                    key={row.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs md:text-lg">{row.label}</span>
                    <span className="font-bold text-xs md:text-lg">
                      {row.price}
                    </span>
                  </div>
                ),
              )}
            </div>
            <div className="mb-10 flex flex-col items-center gap-2">
              <span className="md:text-2xl text-xl font-bold italic text-on-surface/40 line-through">
                ৳ {formatBanglaNumber(originalPriceTaka)}
              </span>
              <div className="flex items-start gap-1 md:text-6xl text-4xl font-extrabold text-primary">
                <span className="mt-2 text-3xl font-bold">৳</span>{" "}
                {formatBanglaNumber(basePriceTaka)}
              </div>
              <p className="md:text-base text-sm font-medium text-on-surface/60">
                Limited Seats • Live Interaction
              </p>
            </div>
            <a
              className="block w-full rounded-2xl bg-secondary py-4 md:py-6 text-xl md:text-2xl font-bold text-on-primary shadow-xl transition-all hover:scale-[1.01] active:scale-[0.98]"
              href="#checkout"
            >
              Get Instant Access Now
            </a>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
