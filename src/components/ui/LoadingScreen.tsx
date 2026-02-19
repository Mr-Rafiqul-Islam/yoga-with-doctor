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
      className={`flex h-full min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-background p-8 transition-colors duration-300 ${className ?? ""}`}
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
          <div className="loading-screen-lotus relative flex h-32 w-32 items-center justify-center rounded-full border border-gray-100 bg-white shadow-xl transition-colors dark:border-gray-700 dark:bg-gray-800">
            <LotusIcon className="h-16 w-16 text-primary" />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 animate-fade-in-up text-center [animation-delay:0.3s] [animation-fill-mode:both]">
          <h2 className="font-display text-2xl font-semibold tracking-wide text-foreground md:text-3xl dark:text-white">
            Breathe in...
          </h2>
          <p className="mt-3 font-sans text-base font-light tracking-wider text-muted md:text-lg">
            {message}
          </p>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-20 left-1/2 z-10 h-1 w-32 -translate-x-1/2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div className="h-full rounded-full bg-primary animate-loading-progress" />
        </div>
      </div>
    </div>
  );
}

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
    >
      <path
        d="M12,2C12,2 14,8 16,10C18,12 22,12 22,12C22,12 18,14 17,17C16,20 17,23 17,23C17,23 14,20 12,19C10,20 7,23 7,23C7,23 8,20 7,17C6,14 2,12 2,12C2,12 6,12 8,10C10,8 12,2 12,2Z"
        opacity="0.5"
      />
      <path d="M11.99 2C11.99 2 9.5 7.6 7.5 9.5C5.5 11.4 2 12 2 12C2 12 5.5 12.6 7.5 14.5C9.5 16.4 11.99 22 11.99 22C11.99 22 14.48 16.4 16.48 14.5C18.48 12.6 21.98 12 21.98 12C21.98 12 18.48 11.4 16.48 9.5C14.48 7.6 11.99 2 11.99 2ZM12 6.8C12 6.8 13.5 10.2 14.8 11.4C16.1 12.6 18.2 13 18.2 13C18.2 13 16.1 13.4 14.8 14.6C13.5 15.8 12 19.2 12 19.2C12 19.2 10.5 15.8 9.2 14.6C7.9 13.4 5.8 13 5.8 13C5.8 13 7.9 12.6 9.2 11.4C10.5 10.2 12 6.8 12 6.8Z" />
    </svg>
  );
}
