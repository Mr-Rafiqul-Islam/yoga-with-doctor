export type Plid30DaysHealingSectionCtaProps = {
  /** Button label—unique per section for clearer conversion messaging */
  label: string;
};

export function Plid30DaysHealingSectionCta() {
  return (
    <div className="flex justify-center border-y border-outline-variant/10 bg-transparent py-10 px-6">
      <a
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-center text-base font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] md:px-12 md:py-4 md:text-lg"
        href="#checkout"
      >
        Start My Healing Journey
      </a>
    </div>
  );
}
