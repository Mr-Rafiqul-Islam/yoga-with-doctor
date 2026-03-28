type DashboardStatCardProps = {
  value: number | string;
  label: string;
  highlight?: boolean;
};

export function DashboardStatCard({
  value,
  label,
  highlight = false,
}: DashboardStatCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-4 sm:p-6 text-center shadow-elevation-sm grid place-items-center">
      <div>
        <p
          className={` font-display text-base sm:text-2xl xl:text-3xl font-bold ${
            highlight ? "text-primary" : "text-foreground"
          }`}
        >
          {value}
        </p>
        <p className="text-[8px] !text-wrap text-center sm:text-body-md text-muted">
          {label}
        </p>
      </div>
    </article>
  );
}
