import Link from "next/link";
import type { TransactionItemProps } from "./TransactionItem";
import { TransactionItem } from "./TransactionItem";

export type TransactionListItem = TransactionItemProps & { id?: string };

export interface TransactionListProps {
  transactions: TransactionListItem[];
  /** When omitted, the “See all” action is hidden. */
  seeAllHref?: string;
}

export function TransactionList({ transactions, seeAllHref }: TransactionListProps) {
  return (
    <section className="h-full rounded-3xl border border-gray-100 bg-surface p-6 shadow-card dark:border-gray-800 dark:bg-surface-dark">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-foreground">Transactions</h3>
        {seeAllHref ? (
          <Link href={seeAllHref} className="text-sm font-medium text-primary hover:underline">
            See all
          </Link>
        ) : null}
      </div>
      <div className="space-y-6">
        {transactions.map((tx, index) => {
          const { id, ...item } = tx;
          return <TransactionItem key={id ?? `${item.title}-${index}`} {...item} />;
        })}
      </div>
    </section>
  );
}
