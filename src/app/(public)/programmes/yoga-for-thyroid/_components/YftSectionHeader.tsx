type YftSectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function YftSectionHeader({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: YftSectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`yft-text-h2 ${titleClassName}`}>{title}</h2>
      {subtitle ? (
        <p
          className={`yft-text-body-lg mx-auto mt-4 max-w-2xl text-[color:var(--color-on-surface-variant)] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
