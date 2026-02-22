import Link from "next/link";

export interface InfoCardProps {
  title: string;
  subtitle: string;
  icon: string;
  iconBgClassName?: string;
  iconClassName?: string;
  href?: string;
}

export function InfoCard({
  title,
  subtitle,
  icon,
  iconBgClassName = "bg-teal-50 dark:bg-teal-900/20",
  iconClassName = "text-teal-600 dark:text-teal-400",
  href = "#",
}: InfoCardProps) {
  const content = (
    <>
      <div
        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${iconBgClassName} ${iconClassName}`}
      >
        <span className="material-icons-outlined text-3xl">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-lg font-bold text-foreground">{title}</h4>
        <p className="text-sm text-muted">{subtitle}</p>
      </div>
      <span className="material-icons-round ml-auto text-muted">chevron_right</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-4 rounded-3xl border border-transparent bg-surface p-6 shadow-card transition-shadow hover:border-gray-200 hover:shadow-lg dark:bg-surface-dark dark:hover:border-gray-700"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-3xl border border-transparent bg-surface p-6 shadow-card transition-shadow hover:border-gray-200 hover:shadow-lg dark:bg-surface-dark dark:hover:border-gray-700">
      {content}
    </div>
  );
}
