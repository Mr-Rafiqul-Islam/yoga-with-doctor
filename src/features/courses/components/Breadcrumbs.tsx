import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string | null;
  /** Material icon name, e.g. "home". Only first item typically has one. */
  icon?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Optional class for the root nav. */
  className?: string;
};

/**
 * Reusable breadcrumb nav. Last item without `href` is rendered as current page (aria-current="page").
 * Tailwind-only, responsive, accessible. No inline styles.
 */
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={[ "mb-8", className ].filter(Boolean).join(" ")}
    >
      <ol className="inline-flex flex-wrap items-center gap-x-1 gap-y-1 md:gap-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = isLast && item.href == null;

          return (
            <li
              key={index}
              className="inline-flex items-center"
              aria-current={isCurrent ? "page" : undefined}
            >
              {index > 0 && (
                <span
                  className="material-icons-outlined mr-1 text-body-md text-muted md:mr-2"
                  aria-hidden
                >
                  chevron_right
                </span>
              )}
              {item.href != null && item.href !== "" ? (
                <Link
                  href={item.href}
                  className="inline-flex items-center text-body-md font-medium text-muted transition-colors hover:text-primary dark:hover:text-primary"
                >
                  {item.icon && (
                    <span className="material-icons-outlined mr-2 text-base text-muted" aria-hidden>
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </Link>
              ) : (
                <span className="inline-flex items-center text-body-md font-medium text-foreground">
                  {item.icon && (
                    <span className="material-icons-outlined mr-2 text-base text-muted" aria-hidden>
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
