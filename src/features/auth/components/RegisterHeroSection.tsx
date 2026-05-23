/**
 * RegisterHeroSection - Left panel component for registration page.
 * Displays marketing content with benefits and features.
 *  

 */
export function RegisterHeroSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-12">
      <div className="mb-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-wider text-primary">
        DOCTOR-GUIDED • EVIDENCE-BASED • TRANSFORMATION-FOCUSED
        </p>
        <h1 className="mb-4 font-anek-bangla text-3xl lg:text-4xl font-bold text-foreground">
        Build a Healthier Future, One Day at a Time 
        </h1>
        <p className="text-sm md:text-base leading-relaxed text-muted">
        Discover structured programs, practical health education, and therapeutic yoga systems designed by medical professionals to help you prevent disease, recover naturally, and live healthier.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">check_circle</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Doctor-Guided Healing Programs</p>
            <p className="text-sm text-muted">Learn proven recovery and wellness strategies developed by healthcare professionals.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">folder</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Evidence-Based Health Education</p>
            <p className="text-sm text-muted">Access trusted insights on yoga, nutrition, pain relief, posture, and preventive healthcare.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">groups</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Supportive Wellness Community</p>
            <p className="text-sm text-muted">Stay motivated with expert guidance and a community committed to better health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
