"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import { useAppSelector } from "@/stores";

/** Light-on-dark artwork (`white` wordmark); use when the surrounding UI is dark. */
export const SITE_LOGO_LIGHT_SRC = "/logo-light.png";
/** Dark-on-light artwork; use when the surrounding UI is light. Footer always uses this file. */
export const SITE_LOGO_DARK_SRC = "/logo-dark.png";

function subscribePreferredDark(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getPreferredDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function usePreferredColorSchemeDark() {
  return useSyncExternalStore(
    subscribePreferredDark,
    getPreferredDarkSnapshot,
    () => false,
  );
}

const wordmark = {
  header: {
    linkClass:
      "flex items-center gap-2 rounded-radius-sm focus:outline-none",
    iconBox:
      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-radius-md bg-primary text-white",
    iconMaterial: "material-icons-outlined text-2xl",
    textClass: "font-display text-xl font-bold tracking-wide text-foreground",
    imageClass: "h-12 w-auto max-w-[220px] object-contain object-left",
    imageWidth: 220,
    imageHeight: 64,
  },
  footer: {
    linkClass:
      "mb-4 flex items-center gap-2 rounded-radius-sm focus:outline-none focus:ring-offset-gray-900",
    iconBox:
      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white",
    iconMaterial: "material-icons-outlined text-sm",
    textClass: "font-display text-xl font-bold tracking-wide text-white",
    imageClass: "h-10 w-auto max-w-[200px] object-contain object-left",
    imageWidth: 200,
    imageHeight: 56,
  },
} as const;

export type SiteLogoVariant = "header" | "footer" | "badge";

export type SiteLogoProps = {
  variant?: SiteLogoVariant;
  /**
   * Only applies to `variant="badge"`. Header uses `logo-light` / `logo-dark` from theme; footer always uses `logo-dark`.
   */
  logoSrc?: string;
  href?: string;
  "aria-label"?: string;
  priority?: boolean;
  className?: string;
};

export function SiteLogo({
  variant = "header",
  logoSrc,
  href = "/",
  "aria-label": ariaLabel = "Yoga With Doctor — Home",
  priority = false,
  className,
}: SiteLogoProps) {
  const theme = useAppSelector((state) => state.ui.theme);
  const systemPrefersDark = usePreferredColorSchemeDark();
  const isDark =
    theme === "dark" || (theme === "system" && systemPrefersDark);

  const resolvedSrc =
    variant === "footer"
      ? SITE_LOGO_DARK_SRC
      : (variant === "header" || variant === "badge")
        ? isDark
          ? SITE_LOGO_DARK_SRC
          : SITE_LOGO_LIGHT_SRC
        : logoSrc?.trim() || SITE_LOGO_LIGHT_SRC;

  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [resolvedSrc]);

  const trimmedSrc = resolvedSrc;
  const showImage = trimmedSrc.length > 0 && !imageFailed;

  if (variant === "badge") {
    return (
      <div
        className={`mb-6 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary/10 ${className ?? ""}`}
      >
        {showImage ? (
          <Image
            src={trimmedSrc}
            alt="Yoga With Doctor"
            width={64}
            height={64}
            className="h-full w-full object-contain p-2"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span
            className="material-icons-outlined text-3xl text-primary"
            aria-hidden
          >
            self_improvement
          </span>
        )}
      </div>
    );
  }

  const s = variant === "footer" ? wordmark.footer : wordmark.header;
  const linkClass = [s.linkClass, className].filter(Boolean).join(" ");

  const inner = showImage ? (
    <Image
      src={trimmedSrc}
      alt="Yoga With Doctor"
      width={s.imageWidth}
      height={s.imageHeight}
      className={s.imageClass}
      priority={priority}
      sizes="(max-width: 768px) 160px, 220px"
      onError={() => setImageFailed(true)}
    />
  ) : (
    <>
      <span className={s.iconBox}>
        <span className={s.iconMaterial} aria-hidden>
          self_improvement
        </span>
      </span>
      <span className={s.textClass}>
        Yoga<span className="text-primary">Dr.</span>
      </span>
    </>
  );

  return (
    <Link href={href} className={linkClass} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
