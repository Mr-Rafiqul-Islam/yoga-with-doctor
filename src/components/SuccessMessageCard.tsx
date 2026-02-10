"use client";

import Link from "next/link";

export type SuccessMessageCardProps = {
  /** Main heading (e.g. "Password Reset Successful") */
  title: string;
  /** Descriptive message below the title */
  description: string;
  /** Primary action button */
  primaryAction: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /** Optional support/secondary link at bottom (e.g. "Need help? Contact Support") */
  supportLink?: {
    /** Text before the link (e.g. "Need help? ") */
    prefix: string;
    /** Link text (e.g. "Contact Support") */
    linkText: string;
    href: string;
  };
  /** Optional custom icon (default: checkmark in green circle) */
  icon?: React.ReactNode;
  /** Optional additional class for the card container */
  className?: string;
};

/**
 * Reusable success message card. Centered card with icon, title, description,
 * primary action button, and optional support link.
 * Use after password reset, email verification, or any completed action.
 */
export function SuccessMessageCard({
  title,
  description,
  primaryAction,
  supportLink,
  icon,
  className = "",
}: SuccessMessageCardProps) {
  const defaultIcon = (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#00a86a7e] blur-xl" aria-hidden />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/30">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <span className="material-icons-outlined text-3xl text-white" aria-hidden>
            check
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`mx-auto w-full max-w-md ${className}`}>
      <div className="overflow-hidden rounded-xl bg-surface p-8 shadow-elevation-md dark:bg-[#1a2e26]">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          {icon ?? defaultIcon}
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-center text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mb-8 text-center text-sm leading-relaxed text-foreground sm:text-base">
          {description}
        </p>

        {/* Primary Action Button */}
        <div className="mb-6">
          {primaryAction.href ? (
            <Link
              href={primaryAction.href}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-primary font-bold text-white transition-all hover:bg-primary-dark"
            >
              {primaryAction.label}
            </Link>
          ) : (
            <button
              type="button"
              onClick={primaryAction.onClick}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-primary font-bold text-white transition-all hover:bg-primary-dark"
            >
              {primaryAction.label}
            </button>
          )}
        </div>

        {/* Support Link */}
        {supportLink && (
          <p className="text-center text-sm text-foreground">
            {supportLink.prefix}
            <Link
              href={supportLink.href}
              className="font-medium text-primary hover:underline"
            >
              {supportLink.linkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
