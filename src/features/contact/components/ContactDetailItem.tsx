import type { ReactNode } from "react";

type ContactDetailItemProps = {
  icon: string;
  label: string;
  value: ReactNode;
};

const iconWrapperClass =
  "flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-primary/20";

export function ContactDetailItem({ icon, label, value }: ContactDetailItemProps) {
  return (
    <div className="group flex items-start gap-5">
      <div className={iconWrapperClass}>
        <span className="material-icons-outlined text-[20px]" aria-hidden>
          {icon}
        </span>
      </div>
      <div className="flex flex-col pt-1">
        <p className="font-display text-base font-semibold text-foreground">
          {label}
        </p>
        <div className="text-sm text-muted [&_a]:transition-colors [&_a]:hover:text-primary">
          {value}
        </div>
      </div>
    </div>
  );
}
