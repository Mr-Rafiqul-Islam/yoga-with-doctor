import Link from "next/link";
import {
  // ActiveSubscriptionCard,
  // AddPaymentMethodCard,
  // PaymentMethodCard,
} from "@/features/subscription/components";
import { BillingPageClient } from "./BillingPageClient";

export const metadata = {
  title: "Subscription",
  description: "Manage your billing and subscription details.",
};
// commment out for v2.0

// Sample data - in a real app, fetch from API or auth
// const subscription = {
//   planName: "Premium Annual",
//   description:
//     "Full access to all advanced medical yoga modules, priority support, and certification tracks.",
//   nextBillingDate: "Oct 24, 2024",
//   amount: "$129.99",
//   period: "/year",
//   progressPercent: 75,
//   manageHref: "/pricing",
// };

// const paymentMethods = [
//   { brand: "VISA", last4: "4288", expiry: "12/25", isDefault: true },
// ];

// const transactions = [
//   {
//     title: "Mindfulness Mastery",
//     type: "Course Purchase",
//     amount: "-$85.00",
//     isCredit: false,
//     date: "Today",
//     icon: "self_improvement",
//     iconBgClassName: "bg-orange-100 dark:bg-orange-900/20",
//     iconClassName: "text-orange-600 dark:text-orange-400",
//     statusDotClassName: "bg-primary",
//   },
//   {
//     title: "Monthly Premium",
//     type: "Subscription",
//     amount: "-$12.99",
//     isCredit: false,
//     date: "Sep 24",
//     icon: "autorenew",
//     iconBgClassName: "bg-green-100 dark:bg-green-900/20",
//     iconClassName: "text-green-600 dark:text-green-400",
//     statusDotClassName: "bg-primary",
//   },
//   {
//     title: "Wallet Top-up",
//     type: "Deposit",
//     amount: "+$50.00",
//     isCredit: true,
//     date: "Sep 20",
//     icon: "account_balance_wallet",
//     iconBgClassName: "bg-blue-100 dark:bg-blue-900/20",
//     iconClassName: "text-blue-600 dark:text-blue-400",
//     statusDotClassName: "bg-primary",
//   },
//   {
//     title: "Supplements Pack",
//     type: "Store",
//     amount: "-$45.50",
//     isCredit: false,
//     date: "Sep 15",
//     icon: "medication",
//     iconBgClassName: "bg-purple-100 dark:bg-purple-900/20",
//     iconClassName: "text-purple-600 dark:text-purple-400",
//     statusDotClassName: "bg-gray-300 dark:bg-gray-600",
//   },
//   {
//     title: "Consultation Fee",
//     type: "Services",
//     amount: "-$150.00",
//     isCredit: false,
//     date: "Sep 10",
//     icon: "receipt",
//     iconBgClassName: "bg-gray-100 dark:bg-gray-800",
//     iconClassName: "text-gray-500 dark:text-gray-400",
//     statusDotClassName: "bg-gray-300 dark:bg-gray-600",
//     className: "opacity-75",
//   },
// ];

export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Section 1: Current Subscription commented out for v2.0*/}

      {/* <header className="mb-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-lg font-semibold text-foreground md:block">Current Subscription</h2>
        <Link
          href={subscription.manageHref}
          className="flex items-center text-sm font-medium text-primary transition-colors md:hidden hover:text-primary-dark"
        >
          Manage Subscription
          <span className="material-icons-round ml-1 text-sm">arrow_forward</span>
        </Link>
      </header>
      <ActiveSubscriptionCard
        planName={subscription.planName}
        description={subscription.description}
        nextBillingDate={subscription.nextBillingDate}
        amount={subscription.amount}
        period={subscription.period}
        progressPercent={subscription.progressPercent}
        manageHref={subscription.manageHref}
      /> */}

      {/* Section 2 & 3: Payment Methods + Invoices/Support + Transactions */}
          {/* Payment Methods commented out for v2.0*/}
      {/* <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section aria-labelledby="payment-methods-heading">
            <div className="mb-6 flex items-center justify-between">
              <h3
                id="payment-methods-heading"
                className="text-xl font-bold text-foreground"
              >
                Payment Methods
              </h3>
              <Link
                href="/pricing"
                className="flex items-center rounded-lg px-3 py-1.5 font-medium text-primary transition-colors hover:bg-primary/5"
              >
                <span className="material-icons-round mr-1 text-sm">
                  add_circle_outline
                </span>
                Add New
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {paymentMethods.map((pm) => (
                <PaymentMethodCard
                  key={pm.last4}
                  brand={pm.brand}
                  last4={pm.last4}
                  expiry={pm.expiry}
                  isDefault={pm.isDefault}
                />
              ))}
              <AddPaymentMethodCard href="/pricing" />
            </div>
          </section>
        </div>
      </div> */}
      <BillingPageClient />
    </div>
  );
}
