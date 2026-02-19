import Image from "next/image";

const OFFLINE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4i8ocSoDD4UZOYIgW-5oD3eiIGzoh2rtpe5wvXmqWiBRUDnGrpBhXqYj4_vAwXq5-PLWnsvantNIz3c1FNAeykBrcGCCTWjGOfMucMpyy2O7LIpvYmFs6feRz6Og6RTfF_3n2dGsY9UlTNXmvG5sByxoD8sXBZDKu2n6RLtS2EcWqrVByMjDFar8dc0zNzTmIlG5PQO9Z8m4h4I_0y86BCeWZYOt5hFQtCTbog7dxY9Q7egiCtMGLxh84MXNDO4I5zT25PadDXg";

/**
 * Offline / no-internet state. Matches the YWD "Pause for a Moment" design.
 * Shown when navigator.onLine is false.
 */
export function OfflineView({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col items-center justify-center bg-background px-8 pb-20 text-center">
      <div className="relative w-full max-w-[280px] aspect-square mb-8">
        <div className="absolute inset-0 scale-90 rounded-full bg-primary/10 blur-3xl animate-pulse dark:bg-primary/5" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl border-4 border-white shadow-soft transition-transform duration-500 hover:rotate-0 dark:border-surface dark:shadow-none rotate-3">
          <Image
            src={OFFLINE_IMAGE}
            alt="Rolled up yoga mat on floor"
            width={280}
            height={280}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div
          className="absolute -right-4 -top-4 flex items-center justify-center rounded-2xl border border-gray-100 bg-surface p-4 shadow-lg dark:border-gray-700 dark:bg-surface-dark animate-bounce [animation-duration:3s]"
          aria-hidden
        >
          <div className="rounded-xl bg-red-50 p-3 dark:bg-red-900/20">
            <span className="material-icons-round text-3xl text-red-500">wifi_off</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-xs space-y-4 animate-fade-in-up [animation-fill-mode:both]">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Pause for a Moment
        </h1>
        <p className="text-base leading-relaxed text-muted">
          You&apos;re offline. Please check your connection to continue your practice.
        </p>
      </div>
      <div className="mt-10 w-full max-w-xs">
        <button
          type="button"
          onClick={onRetry}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-white shadow-glow transition-all active:scale-95 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
        >
          <span>Retry Connection</span>
          <span className="material-icons-round transition-transform duration-500 group-hover:rotate-180">
            refresh
          </span>
        </button>
      </div>
    </div>
  );
}
