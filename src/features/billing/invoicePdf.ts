import { jsPDF } from "jspdf";

import type { PurchaseProductType, PurchaseRecord } from "@/slices/purchase";

const PRODUCT_TYPE_LABEL: Record<PurchaseProductType, string> = {
  COURSE_ONE_TIME: "Course",
  BUNDLE_ONE_TIME: "Bundle",
  BUNDLE_SUBSCRIPTION: "Subscription",
  PREMIUM_SUBSCRIPTION: "Premium",
  LIVE_EVENT_TICKET: "Live event",
};

/** Seller block — matches public site branding in app layout metadata. */
export const INVOICE_SELLER_NAME = "Yoga With Doctor";

export type InvoiceCustomer = {
  name: string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
};

function formatMoney(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

function formatIsoDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-BD", { dateStyle: "medium" });
}

function productTypeLabel(type: PurchaseProductType): string {
  return PRODUCT_TYPE_LABEL[type] ?? type;
}

function transactionRef(purchase: PurchaseRecord): string {
  return (
    purchase.displayId?.trim() ||
    purchase.transactionId?.trim() ||
    purchase.id
  );
}

function sanitizeFilenamePart(s: string): string {
  return s.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 80) || "invoice";
}

/** Builds PDF and triggers browser download. Bill-to uses current profile at click time (Option B). */
export function downloadPurchaseInvoicePdf(
  purchase: PurchaseRecord,
  customer: InvoiceCustomer,
): void {
  const doc = new jsPDF();
  const margin = 20;
  const pageW = doc.internal.pageSize.getWidth();
  const maxW = pageW - margin * 2;
  let y = margin;

  const line = (
    text: string,
    size = 10,
    style: "normal" | "bold" = "normal",
  ) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    const lines = doc.splitTextToSize(text, maxW);
    doc.text(lines, margin, y);
    y += lines.length * (size * 0.45) + 3;
  };

  line("INVOICE", 18, "bold");
  line(INVOICE_SELLER_NAME, 11, "bold");
  y += 4;

  line("Bill to", 10, "bold");
  line(customer.name || "Customer", 10);
  if (customer.email) line(customer.email, 10);
  if (customer.phone) line(customer.phone, 10);
  const addrParts = [customer.address, customer.city].filter(Boolean);
  if (addrParts.length) line(addrParts.join(", "), 10);
  y += 6;

  line("Order details", 10, "bold");
  line(`Invoice ref: ${transactionRef(purchase)}`, 10);
  line(`Date: ${formatIsoDate(purchase.paidAt ?? purchase.createdAt)}`, 10);
  line(`Status: ${purchase.status}`, 10);
  if (purchase.transactionId)
    line(`Transaction ID: ${purchase.transactionId}`, 10);
  if (purchase.providerTrxId)
    line(`Provider trx: ${purchase.providerTrxId}`, 10);
  line(`Payment provider: ${purchase.provider}`, 10);
  y += 6;

  line("Item", 10, "bold");
  line(
    `${purchase.product.title || "Purchase"} (${productTypeLabel(purchase.product.type)})`,
    10,
  );
  y += 4;

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Total", margin, y);
  doc.text(formatMoney(purchase.amount, purchase.currency), pageW - margin, y, {
    align: "right",
  });
  y += 12;

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  const footer = disclaimerFooter();
  doc.text(doc.splitTextToSize(footer, maxW), margin, y);

  const fileBase = sanitizeFilenamePart(transactionRef(purchase));
  doc.save(`invoice-${fileBase}.pdf`);
}

function disclaimerFooter(): string {
  return "This document was generated for your records. For billing questions, contact support. Amounts and status reflect your account at download time.";
}

export function profileUserToInvoiceCustomer(user: {
  name: string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  city?: string | null;
}): InvoiceCustomer {
  return {
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    city: user.city,
  };
}
