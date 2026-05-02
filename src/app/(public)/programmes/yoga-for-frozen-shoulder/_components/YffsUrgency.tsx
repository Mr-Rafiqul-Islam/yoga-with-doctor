import { ProgrammeOfferCountdown } from "@/app/(public)/programmes/_shared/ProgrammeOfferCountdown";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const SEATS_LEFT = "08";

type YffsUrgencyProps = {
  endAt: string;
};

export function YffsUrgency({ endAt }: YffsUrgencyProps) {
  return (
    <ScrollReveal
      as="section"
      className="bg-[color:rgb(255_218_214/0.3)] py-12"
      delay={0.16}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined yffs-icon-fill text-4xl text-[color:var(--yffs-error)]">
            warning
          </span>
          <div>
            <h4 className="text-lg font-bold">Limited Spots for Coaching Support</h4>
            <p className="text-sm">We limit intake to ensure every member gets guidance.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="rounded-xl border border-[color:rgb(186_26_26/0.2)] bg-white px-4 py-2 text-center shadow-sm">
            <span className="block text-xl font-bold text-[color:var(--yffs-error)]">{SEATS_LEFT}</span>
            <span className="text-[10px] font-bold uppercase">Seats Left</span>
          </div>
          <div className="rounded-xl border border-[color:rgb(186_26_26/0.2)] bg-white px-4 py-3 text-center shadow-sm">
            <ProgrammeOfferCountdown
              className="justify-center gap-2 sm:gap-4"
              endAt={endAt}
              labelClassName="text-[10px] font-bold uppercase text-[color:var(--yffs-on-surface)] opacity-80"
              numberClassName="text-xl font-bold tabular-nums text-[color:var(--yffs-error)]"
              separatorClassName="pt-1 text-xl font-bold text-[color:var(--yffs-error)]"
              variant="blocks"
            />
            <span className="mt-1 block text-[10px] font-bold uppercase">Expires</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
