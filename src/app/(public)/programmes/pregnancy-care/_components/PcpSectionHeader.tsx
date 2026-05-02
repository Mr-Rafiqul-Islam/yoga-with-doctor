import type { ReactNode } from "react";

type PcpSectionHeaderProps = {
  title: ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function PcpSectionHeader({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: PcpSectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`pcp-text-h2 ${titleClassName}`}>{title}</h2>
      {subtitle ? (
        <p
          className={`pcp-text-body-lg mx-auto mt-4 max-w-2xl text-[color:var(--color-on-surface-variant)] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
