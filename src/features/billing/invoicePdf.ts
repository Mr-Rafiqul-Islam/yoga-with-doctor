import { jsPDF } from "jspdf";

import type { PurchaseProductType, PurchaseRecord } from "@/slices/purchase";

/** Dark logo on white PDF (matches SiteLogo). */
const INVOICE_LOGO_PATH = "/logo-light.png";

const PRODUCT_TYPE_LABEL: Record<PurchaseProductType, string> = {
  COURSE_ONE_TIME: "Course",
  BUNDLE_ONE_TIME: "Bundle",
  BUNDLE_SUBSCRIPTION: "Subscription",
  PREMIUM_SUBSCRIPTION: "Premium",
  LIVE_EVENT_TICKET: "Live event",
};

/** Seller — matches site metadata; override with NEXT_PUBLIC_INVOICE_* in env. */
export const INVOICE_SELLER_NAME = "Yoga With Doctor";

function sellerAddressLines(): string[] {
  const lines = [
    process.env.NEXT_PUBLIC_INVOICE_ADDRESS_LINE1,
    process.env.NEXT_PUBLIC_INVOICE_ADDRESS_LINE2,
    process.env.NEXT_PUBLIC_INVOICE_ADDRESS_LINE3,
  ].filter((l): l is string => Boolean(l?.trim()));
  if (lines.length > 0) return lines;
  return ["Dhaka", "Bangladesh"];
}

function sellerEmail(): string {
  return process.env.NEXT_PUBLIC_INVOICE_EMAIL?.trim() || "support@yogawithdoctor.com";
}

function sellerTaxLabel(): string | null {
  const t = process.env.NEXT_PUBLIC_INVOICE_TAX_LABEL?.trim();
  return t || null;
}

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

function formatLongDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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

/** Append wrapped normal text in a column; returns next Y below the block. */
function columnWrappedLines(
  doc: jsPDF,
  x: number,
  y: number,
  maxW: number,
  fontSize: number,
  parts: string[],
): number {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(fontSize);
  let yNext = y;
  for (const s of parts) {
    const wrapped = doc.splitTextToSize(s, maxW);
    doc.text(wrapped, x, yNext);
    yNext += wrapped.length * fontSize * 0.45 + 1.2;
  }
  return yNext;
}

async function fetchInvoiceLogoDataUrl(): Promise<string | null> {
  if (typeof window === "undefined") return null;
  try {
    const url = `${window.location.origin}${INVOICE_LOGO_PATH}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const r = new FileReader();
      r.onloadend = () =>
        resolve(typeof r.result === "string" ? r.result : null);
      r.onerror = () => resolve(null);
      r.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function lineItemDescription(purchase: PurchaseRecord): string {
  const title = purchase.product.title?.trim() || "Purchase";
  const kind = productTypeLabel(purchase.product.type);
  const when = formatLongDate(purchase.paidAt ?? purchase.createdAt);
  return `${title}\n${kind} · ${when}`;
}

/** Builds PDF and triggers browser download. Bill-to uses current profile at click time. */
export async function downloadPurchaseInvoicePdf(
  purchase: PurchaseRecord,
  customer: InvoiceCustomer,
): Promise<void> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 18;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const contentRight = pageW - margin;
  let y = margin;

  const logoDataUrl = await fetchInvoiceLogoDataUrl();
  const logoMaxW = 45;
  let headerBottom = y + 28;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Invoice", margin, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  let metaY = y + 16;
  doc.text(`Invoice number ${transactionRef(purchase)}`, margin, metaY);
  metaY += 5;
  const issueDate = formatLongDate(purchase.paidAt ?? purchase.createdAt);
  doc.text(`Date of issue ${issueDate}`, margin, metaY);
  metaY += 5;
  const dueLine =
    purchase.status === "PAID"
      ? `Date due Paid on ${issueDate}`
      : "Date due Upon payment";
  doc.text(dueLine, margin, metaY);
  metaY += 5;
  headerBottom = Math.max(headerBottom, metaY);

  if (logoDataUrl) {
    try {
      const fmt = logoDataUrl.includes("image/png") ? "PNG" : "JPEG";
      const props = doc.getImageProperties(logoDataUrl);
      const logoW = logoMaxW;
      const logoH = (props.height * logoW) / props.width;
      const logoX = contentRight - logoW;
      doc.addImage(logoDataUrl, fmt, logoX, margin, logoW, logoH);
      headerBottom = Math.max(headerBottom, margin + logoH + 4);
    } catch {
      /* skip logo */
    }
  }

  doc.setTextColor(0, 0, 0);
  y = headerBottom + 6;

  const colGutter = 10;
  const colHalfW = (pageW - 2 * margin - colGutter) / 2;
  const colRightX = margin + colHalfW + colGutter;
  const bodyFontSize = 9;

  let yLeft = y;
  let yRight = y;

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(INVOICE_SELLER_NAME, margin, yLeft);
  yLeft += 6;

  doc.setTextColor(55, 55, 55);
  const sellerLines = [...sellerAddressLines(), sellerEmail()];
  const sellerTaxLine = sellerTaxLabel();
  if (sellerTaxLine) sellerLines.push(sellerTaxLine);
  yLeft = columnWrappedLines(doc, margin, yLeft, colHalfW, bodyFontSize, sellerLines);

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Bill to", colRightX, yRight);
  yRight += 6;

  doc.setTextColor(55, 55, 55);
  const billLines: string[] = [customer.name || "Customer"];
  if (customer.address?.trim()) billLines.push(customer.address.trim());
  if (customer.city?.trim()) billLines.push(customer.city.trim());
  if (customer.phone?.trim()) billLines.push(customer.phone.trim());
  if (customer.email?.trim()) billLines.push(customer.email.trim());
  yRight = columnWrappedLines(doc, colRightX, yRight, colHalfW, bodyFontSize, billLines);

  doc.setTextColor(0, 0, 0);
  y = Math.max(yLeft, yRight) + 8;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  const totalStr = formatMoney(purchase.amount, purchase.currency);
  const highlight =
    purchase.status === "PAID"
      ? `${totalStr} paid on ${issueDate}`
      : `${totalStr} due ${issueDate}`;
  doc.text(highlight, margin, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(90, 90, 90);
  doc.text("View purchases and receipts in your account.", margin, y);
  y += 8;
  doc.setTextColor(0, 0, 0);

  const qty = 1;
  const lineAmount = purchase.amount;
  const unitPrice = lineAmount;

  const colDesc = margin;
  const colQty = 118;
  const colUnit = 132;
  const colTax = 155;
  const colAmt = contentRight;

  doc.setFillColor(245, 245, 245);
  doc.rect(margin, y - 4, contentRight - margin, 7, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("Description", colDesc, y);
  doc.text("Qty", colQty, y);
  doc.text("Unit price", colUnit, y);
  doc.text("Tax", colTax, y);
  doc.text("Amount", colAmt, y, { align: "right" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const descText = lineItemDescription(purchase);
  const descLines = doc.splitTextToSize(descText, colQty - colDesc - 4);
  const rowStartY = y;
  doc.text(descLines, colDesc, y);
  const descHeight = Math.max(5, descLines.length * 3.6);
  doc.text(String(qty), colQty, rowStartY);
  doc.text(formatMoney(unitPrice, purchase.currency), colUnit, rowStartY);
  doc.text("—", colTax, rowStartY);
  doc.text(
    formatMoney(lineAmount, purchase.currency),
    colAmt,
    rowStartY,
    { align: "right" },
  );
  y = rowStartY + descHeight + 4;

  doc.setDrawColor(220, 220, 220);
  doc.line(margin, y, contentRight, y);
  y += 8;

  const subtotal = lineAmount;
  const totalsX = 130;
  doc.setFontSize(9);
  doc.text("Subtotal", totalsX, y);
  doc.text(
    formatMoney(subtotal, purchase.currency),
    colAmt,
    y,
    { align: "right" },
  );
  y += 6;
  doc.text("Total excluding tax", totalsX, y);
  doc.text(
    formatMoney(subtotal, purchase.currency),
    colAmt,
    y,
    { align: "right" },
  );
  y += 6;
  doc.setTextColor(90, 90, 90);
  doc.text("VAT / tax", totalsX, y);
  doc.text("Included / N/A", colAmt, y, { align: "right" });
  doc.setTextColor(0, 0, 0);
  y += 6;
  doc.setFont("helvetica", "bold");
  doc.text("Total", totalsX, y);
  doc.text(
    formatMoney(purchase.amount, purchase.currency),
    colAmt,
    y,
    { align: "right" },
  );
  y += 6;
  doc.text(
    purchase.status === "PAID" ? "Amount paid" : "Amount due",
    totalsX,
    y,
  );
  doc.text(
    formatMoney(purchase.amount, purchase.currency),
    colAmt,
    y,
    { align: "right" },
  );
  y += 12;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  const metaBits = [
    `Purchase ID: ${purchase.id}`,
    purchase.transactionId ? `Transaction ID: ${purchase.transactionId}` : null,
    purchase.providerTrxId ? `Provider trx: ${purchase.providerTrxId}` : null,
    purchase.providerPaymentId
      ? `Provider payment ID: ${purchase.providerPaymentId}`
      : null,
    `Provider: ${purchase.provider}`,
    `Status: ${purchase.status}`,
    `Product ID: ${purchase.productId}`,
    purchase.entitlement?.id
      ? `Entitlement ID: ${purchase.entitlement.id}`
      : null,
  ].filter(Boolean) as string[];
  const footerPara = [
    disclaimerFooter(),
    ...metaBits,
  ].join(" · ");
  const footerLines = doc.splitTextToSize(footerPara, contentRight - margin);
  if (y + footerLines.length * 3.2 > pageH - margin) {
    y = pageH - margin - footerLines.length * 3.2;
  }
  doc.text(footerLines, margin, y);

  const fileBase = sanitizeFilenamePart(transactionRef(purchase));
  doc.save(`invoice-${fileBase}.pdf`);
}

function disclaimerFooter(): string {
  return "Generated for your records. Not a tax invoice unless separately issued. For support, use the contact details above.";
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
