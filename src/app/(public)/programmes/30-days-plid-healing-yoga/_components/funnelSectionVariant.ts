export type FunnelSectionVariant = "light" | "dark" | "auto";

const variantClass: Record<FunnelSectionVariant, string> = {
  light: "plid-funnel-section plid-funnel-section--light",
  dark: "plid-funnel-section plid-funnel-section--dark",
  auto: "plid-funnel-section plid-funnel-section--auto",
};

export function funnelSectionClass(variant: FunnelSectionVariant = "auto"): string {
  return variantClass[variant];
}
