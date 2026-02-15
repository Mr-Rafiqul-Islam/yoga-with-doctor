import Image from "next/image";
import type { PremiumVideoItem } from "../data/premiumVideosData";

export interface PremiumVideoCardProps {
  video: PremiumVideoItem;
}

/**
 * Single premium (locked) video card for the Premium Collection grid.
 * Thumbnail with PREMIUM badge, lock overlay, title, subtitle, duration.
 */
export function PremiumVideoCard({ video }: PremiumVideoCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:shadow-elevation-sm dark:border-gray-800 dark:bg-[#1E1E1E] dark:shadow-md dark:hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/60 dark:bg-gray-800">
        <Image
          src={video.thumbnailUrl}
          alt=""
          fill
          className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute top-3 right-3 rounded-md bg-accent px-2 py-1 text-xs font-bold uppercase tracking-wide text-gray-900">
          Premium
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full border border-white/20 bg-black/20 p-4 shadow-lg backdrop-blur-sm dark:bg-white/10">
            <span className="material-icons-outlined text-3xl text-white">lock</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-foreground dark:text-white">
          {video.title}
        </h3>
        <p className="mb-3 text-sm text-muted dark:text-gray-400">{video.subtitle}</p>
        <div className="flex items-center text-xs text-muted dark:text-gray-500">
          <span className="material-icons-outlined mr-1 text-base">schedule</span>
          {video.duration}
        </div>
      </div>
    </article>
  );
}
