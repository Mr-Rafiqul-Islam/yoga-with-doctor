/**
 * Premium Collection videos. Image URLs hotlinked from design/HTML source.
 * category used for filter tabs: Masterclass | Doctor-Led | Therapy
 */
export type PremiumCategory = "Masterclass" | "Doctor-Led" | "Therapy";

export interface PremiumVideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnailUrl: string;
  category: PremiumCategory;
}

export const PREMIUM_VIDEOS: PremiumVideoItem[] = [
  {
    id: "advanced-flow",
    title: "Advanced Flow",
    subtitle: "With Master Yogi",
    duration: "45 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNU7p72XD49Nm1ENBQXsOvu2uDc20INShoZ8SqtpBEWRstPS-EDKU6yOa-CXENOclTyZy9KV9KXL6iHvMuufWv-qVuwHrqFzV3FU_2b4BmcDsZDAYs30W1OX0Es6ErnH_uDhed9C844jbpTFoeHV5a7Kwj3cDUabpIr8_jjL-F1UmrNjTTn_Ap3SpeDLm0Ei6MslboNaZV6Dz1OCI40it8cuwjyrez64M8IGCWB6FhmqWdYjpdmP5Kui0XOboUBaXd6ehPrFW_2w",
    category: "Masterclass",
  },
  {
    id: "mind-clarity",
    title: "Mind Clarity",
    subtitle: "Sound Therapy",
    duration: "20 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyYO9w9Vw9ZiI8U2PBPCmmK4hx8qV-m3JeKQYNotSOY4hZkYoXH0UqSuiHmT7mGXxlt689LiuUoeBYk6a-qW3Tnh1EbhBZup9Y-G23uvZ9NYq5JFJdCDORI7Cc9_WD7inRY6n-t3BUTNYwL9iy1AhmUqFS34ZxrezLrpF6LRAt-j10AITQq9JQg6q7-ozABjwh3t2d3KwOqdKfgR71TmhVBfmQWA8udvPZMG53RfriEMCWE7u-PMBUv7tJ4T_Vx-PArqA5U2yWHw",
    category: "Therapy",
  },
  {
    id: "core-strength",
    title: "Core Strength",
    subtitle: "Dr. Sarah Jen",
    duration: "30 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQOhXdZnggngkaYeYgp6e4sPfHAjwmlZc9qVf6aL0iv44ZnihOHrRcCPVXwy-6QuHNDDC6ktubqoR2GS7QPetdjNAI2-HThBlDTmdd-HOkbs6QTR0oJHa5tSyUiTiSsKck5yaLyznQ6qiYIRSu0ha4fiiXZcq_apoNOJFNl42wXM5MxgyfyurfSKXwKUQQZImQzdIVNEEscw5GwMMJ1w9CjiGqbmTLHijOpWky7g2lQCV26fnAlDqKgLrcwyP82IabZqu2FO84Qg",
    category: "Doctor-Led",
  },
  {
    id: "deep-sleep",
    title: "Deep Sleep",
    subtitle: "Restorative Yoga",
    duration: "60 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC23u2uudJ2kWhtEOTCRGOJI-m98lrVcFn1Vv8GLJpLJ7fN2g7OT1HFSTvZAPZ9KXF-Fnzjs3Ag_dgNrIwR4CjBv0jawDIxwoK5t-_GEm7fyt5QH8olr7R2AgB7IXI6QogkMV_5-ZFg9xP4jO2eEPtsjKUGB5R9vhj6ZX5KfrUkVY_r0r_UGGyeRZDcmmR7G4WU3a5nnM14LTanS_nmTKeChzAcTYp__X3mA8gboGmk_sTtfqnxOLPFlISLOHdfY4nFmYx2BQmo9A",
    category: "Therapy",
  },
  {
    id: "runners-hips",
    title: "Runner's Hips",
    subtitle: "Physio Approved",
    duration: "15 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUoJnr2iBqD0XPd5JrX_M4BdlJxCcF8tSr50CQA8JgA-xGSOIAldMzsRZUcf_SKBiZrVQ73wNQfhrTtZPU3MLIJMCVN7t9YmEI5-b-0LVUd6rie-42cMo-iKQzpScowH7arbQn9SPEoYu2G1yJK0cPPfEbzspXQDouiKosRsiI7EWyVKGctRf1S0wl4Goy9nzSBBeWPxM_dZgXN8Wcx2YUt-SpzhEEX06aLuvbdYgdg_FBfZrb071aZzcpC-MRFSlb-TT6Fadz0g",
    category: "Doctor-Led",
  },
  {
    id: "lung-capacity",
    title: "Lung Capacity",
    subtitle: "Breath Master",
    duration: "12 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADLY14e2Hhqe7uj01jIOMTX_YBvmInDdGlm4xQ9iuM5OMhFU_HNwHE0a8Gd6JNySax09wqy4iKGc5lQpGu-6j6TLFrVRCQtMt9KqY2XOsEqSL9AHr2v7Y0cY_lGGVaWgEqlYO6qcOWwLZwaiBmuASmt91uiOdsE8NbaTIWJQzik4mjoYW5kW8-z5KpJr-WHojkm8j-E1Y0dm3BTFSUG0E8WDYLEVM4eZCCATcmB2qmqawB7rpDqkcCI_QMufGRrd6JIPEYhXiBXg",
    category: "Therapy",
  },
  {
    id: "balance-focus",
    title: "Balance & Focus",
    subtitle: "Mind Body Sync",
    duration: "25 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvJe9VeDzeA892dHPvDxZ2avqZHzxv7XnDQvT_4sg2KoIE0q0186fq2l2dIxbk225eMSvPSI35gzXYXx7MNZYX3eKkZgaqy7nr3p5OdhnTTTtB-McwekdGzF6XzFUJaipN8-0Jz3LU5luNbieMPBm5dLQaD7Vkt1PFv914VvQ9l_tjlxQlhHsUY3GoW1Va5FAsDTwYFQTAeDkfjsrJuj4HfnM5Fk0z9u8XfVLkFobt5msH1f4bRcmrf4sJrzN_ZF3u10PWtADhWQ",
    category: "Masterclass",
  },
  {
    id: "spinal-health",
    title: "Spinal Health",
    subtitle: "Dr. Emily Stone",
    duration: "35 min",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmmtzIVKU-gq4LtasgTb09fXkFCVz2Fas9UGuBTN5meHMY4wghuCUGV8YB4UJkjOy3MwTbCtZHUIYys2vKXqg5XbbJvwbnE3dCtP4NYYekkVmrEA7jvtxb56C3LejJ8ms-4JAlPqvITUkN6MJD6U_PRkDdIk1siQCttndTVM2HevShz3BK7fDhCLzEXf0Ly8ZotfXKfQamyt7CIxjAikai_scDl52QqR-q4Wx3h9pQKf5M3aCWAOB3d0_hLpaIuAtkrBoNAQ1L4A",
    category: "Doctor-Led",
  },
];

export const PREMIUM_FILTER_TABS: { value: "" | PremiumCategory; label: string }[] = [
  { value: "", label: "All Videos" },
  { value: "Masterclass", label: "Masterclass" },
  { value: "Doctor-Led", label: "Doctor-Led" },
  { value: "Therapy", label: "Therapy" },
];
