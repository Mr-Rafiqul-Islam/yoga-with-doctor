import Link from "next/link";
import type { QuickAccessItem } from "@/features/dashboard/data/dashboardData";

type DashboardQuickAccessSectionProps = {
  items: QuickAccessItem[];
};

export function DashboardQuickAccessSection({
  items,
}: DashboardQuickAccessSectionProps) {
  return (
    <section>
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
        Quick Access
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-border bg-surface p-4 text-center shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
          >
            <span
              className={`material-icons-outlined mb-2 block text-2xl ${item.color}`}
              aria-hidden
            >
              {item.icon}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary">
              {item.label}
            </h3>
            {item.count && (
              <p className="text-body-md text-muted">{item.count}</p>
            )}
            {item.action && (
              <p className="text-body-md text-primary">{item.action}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
