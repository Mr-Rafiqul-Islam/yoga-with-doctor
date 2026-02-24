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
    <article className="rounded-2xl border border-border bg-surface p-6 text-center shadow-elevation-sm">
      <p
        className={`mb-1 font-display text-2xl xl:text-3xl font-bold ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </p>
      <p className="text-body-md text-muted">{label}</p>
    </article>
  );
}
