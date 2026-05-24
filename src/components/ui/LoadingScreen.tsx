import Image from "next/image";

/**
 * Full-screen loading UI matching the YWD loading page design.
 * Use for route guards, suspense fallbacks, or app loading.tsx.
 */
export function LoadingScreen({
  className,
  message = "Preparing your wellness journey",
}: {
  className?: string;
  message?: string;
} = {}) {
  return (
    <div
      className={`flex h-full min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-background p-8 transition-colors duration-300 ${className ?? ""}`}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="relative flex max-w-md flex-1 flex-col items-center justify-center">
        {/* Blur orbs */}
        <div className="absolute left-10 top-1/4 h-64 w-64 rounded-full bg-primary/10 opacity-70 mix-blend-multiply blur-3xl animate-pulse-slow dark:bg-primary/5 dark:mix-blend-normal" />
        <div className="absolute bottom-1/4 right-10 h-64 w-64 rounded-full bg-teal-200/20 opacity-70 mix-blend-multiply blur-3xl animate-pulse-slow dark:bg-teal-900/20 dark:mix-blend-normal [animation-delay:2000ms]" />

        {/* Lotus + glow */}
        <div className="relative z-10 mb-12 animate-breathe">
          <div
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-ping [animation-duration:3s]"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-full bg-primary/10 blur-2xl animate-ping [animation-duration:4s] [animation-delay:0.5s]"
            aria-hidden
          />
          <div className="loading-screen-lotus relative flex h-36 w-36 bg-transparent items-center justify-center rounded-full border border-gray-100 bg-white shadow-xl transition-colors dark:border-gray-700 dark:bg-gray-800">
            <Image src="/loading-icon.png" alt="Yoga With Doctor" width={100} height={100} className="" />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 animate-fade-in-up text-center [animation-delay:0.3s] [animation-fill-mode:both] xl:mb-0 mb-20">
          <h2 className="font-display text-2xl font-semibold tracking-wide text-foreground md:text-3xl dark:text-white">
            Breathe in...
          </h2>
          <p className="mt-3 font-sans text-base font-light tracking-wider text-muted md:text-lg">
            {message}
          </p>
        <div className="absolute top-32 left-1/2 z-10 h-1 w-32 -translate-x-1/2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div className="h-full rounded-full bg-primary animate-loading-progress" />
        </div>
        </div>

        {/* Progress bar */}
      </div>
    </div>
  );
}


