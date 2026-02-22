import Link from "next/link";

export interface AddPaymentMethodCardProps {
  href?: string;
}

export function AddPaymentMethodCard({ href = "/pricing" }: AddPaymentMethodCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[200px] h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 p-6 text-muted transition-all hover:border-primary hover:text-primary dark:border-gray-700 dark:hover:border-primary"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-primary/10 dark:bg-white/5">
        <span className="material-icons-round text-2xl">add</span>
      </div>
      <span className="font-medium">Add Payment Method</span>
    </Link>
  );
}
