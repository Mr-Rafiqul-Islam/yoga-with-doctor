/**
 * RegisterHeroSection - Left panel component for registration page.
 * Displays marketing content with benefits and features.
 */
export function RegisterHeroSection() {
  return (
    <div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-12">
      <div className="mb-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-wider text-primary">
          PREMIUM MEDICAL WELLNESS
        </p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">
          Begin Your Path to Healing
        </h1>
        <p className="text-base leading-relaxed text-muted">
          Join a community where medical expertise meets holistic wellness. Access
          guided sessions designed by healthcare professionals.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">check_circle</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Evidence-based yoga protocols</p>
            <p className="text-sm text-muted">Scientifically validated practices</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">folder</span>
          </div>
          <div>
            <p className="font-medium text-foreground">HIPAA compliant data storage</p>
            <p className="text-sm text-muted">Your health data is secure</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-primary">groups</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Community of medical professionals</p>
            <p className="text-sm text-muted">Connect with experts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
