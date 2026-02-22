import Link from "next/link";
import type { TransactionItemProps } from "./TransactionItem";
import { TransactionItem } from "./TransactionItem";

export interface TransactionListProps {
  transactions: TransactionItemProps[];
  seeAllHref?: string;
}

export function TransactionList({ transactions, seeAllHref = "#" }: TransactionListProps) {
  return (
    <section className="h-full rounded-3xl border border-gray-100 bg-surface p-6 shadow-card dark:border-gray-800 dark:bg-surface-dark">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">Transactions</h3>
        <Link href={seeAllHref} className="text-sm font-medium text-primary hover:underline">
          See all
        </Link>
      </div>
      <div className="space-y-6">
        {transactions.map((tx, index) => (
          <TransactionItem key={`${tx.title}-${index}`} {...tx} />
        ))}
      </div>
    </section>
  );
}
