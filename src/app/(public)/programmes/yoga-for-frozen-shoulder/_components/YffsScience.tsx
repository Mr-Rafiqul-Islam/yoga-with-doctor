import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YffsScience() {
  return (
    <ScrollReveal
      as="section"
      className="bg-[color:var(--yffs-inverse-surface)] py-24 text-[color:var(--yffs-inverse-on-surface)]"
      delay={0.08}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="yffs-label-caps text-[color:var(--yffs-secondary-fixed)]">THE SCIENCE OF HEALING</span>
        <h2 className="yffs-headline-lg mt-4 mb-8">Why &quot;No-Pain, No-Gain&quot; Fails for Frozen Shoulder</h2>
        <div className="grid items-center gap-12 text-left md:grid-cols-2">
          <p className="yffs-body-lg leading-relaxed opacity-90">
            Adhesive capsulitis (Frozen Shoulder) occurs when the connective tissue surrounding the shoulder joint becomes
            thick, stiff, and inflamed. Aggressive stretching triggers a &quot;guarding&quot; reflex that actually makes
            the stiffness worse.
            <br />
            <br />
            Our yoga therapy uses <strong>Isometrics and Micro-movements</strong> to communicate with your nervous system,
            telling it that it is safe to let go of the tension.
          </p>
          <div className="rounded-2xl border border-white/10 bg-[color:rgb(213_227_252/0.1)] p-8">
            <div className="mb-6 h-2 w-full rounded-full bg-slate-700">
              <div className="h-full w-2/3 rounded-full bg-[color:var(--yffs-secondary-fixed)]" />
            </div>
            <h4 className="mb-2 font-bold">The Recovery Phase</h4>
            <p className="text-sm opacity-80">
              Our 3-stage system moves you through Freezing, Frozen, and Thawing phases with specifically calibrated
              movements for each stage.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
