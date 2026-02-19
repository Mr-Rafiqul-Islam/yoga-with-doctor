import Image from "next/image";
import Link from "next/link";

const NOTFOUND_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrdiCod7Z-ro_dmKwONKPN3OUhawUgcpWlXq7umjGymOgCsU2uwzl4X4If0mJiB2-W9y8HHvfhg3IUcRlx6Jl_uFzNS1_rV3-pbU1OCHPE2X7gRBnw_B3kDBzukw1-3cJKZzRFRoMeDD7KWrudNq-TPybhWNRJ2CiGHJH4B-FL4EVSLCmuq7tcEET6vY72crs29vrLaoqdY-AhRjdPdzfkG-ckayh33uLvW_yex_OyBIgHJTo3pO-IOxXdQBXlJUlviRSIMxZVQ";

/**
 * "A Quiet Space" empty/not-found state. Matches the YWD not-found design.
 * Use inside app not-found.tsx or anywhere a 404-style empty state is needed.
 */
export function NotFoundView() {
  return (
    <main
      className="flex flex-1 flex-col items-center justify-center px-8 pb-24 min-h-screen text-center animate-fade-in-up"
      role="main"
      aria-label="Page not found"
    >
      <div className="relative mb-8 h-64 w-64">
        <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-2xl dark:bg-primary/5" />
        <Image
          src={NOTFOUND_IMAGE}
          alt="Minimalist person sitting in a peaceful empty room meditating"
          width={256}
          height={256}
          className="relative h-full w-full rounded-3xl object-cover shadow-xl dark:opacity-90 dark:shadow-none not-found-image-mask"
        />
        <div className="absolute -right-4 -top-4 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-surface">
          <span className="material-icons-round text-primary text-2xl">spa</span>
        </div>
        <div className="absolute -bottom-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg dark:bg-surface -rotate-12">
          <span className="material-icons-round text-2xl text-amber-400">wb_sunny</span>
        </div>
      </div>
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground mb-3">
        A Quiet Space
      </h1>
      <p className="text-muted mx-auto mb-10 max-w-xs text-lg leading-relaxed">
        We couldn&apos;t find anything here yet. Take a deep breath and explore elsewhere.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-medium text-white shadow-lg shadow-primary/30 transition hover:scale-105 active:scale-95 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <span>Explore Home</span>
        <span className="material-icons-round text-xl">arrow_forward</span>
      </Link>
    </main>
  );
}
