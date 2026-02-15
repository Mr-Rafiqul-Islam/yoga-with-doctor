/**
 * Extended data for the free video details page: medical benefits, doctor's note,
 * next in series, related premium. Image URLs hotlinked from design/HTML source.
 */

export interface MedicalBenefit {
  title: string;
  description: string;
  icon: "mood" | "heart" | "energy" | "sleep";
}

export interface DoctorNote {
  name: string;
  title: string;
  avatarUrl: string;
  quote: string;
  tags: string[];
}

export interface NextInSeriesItem {
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  duration: string;
  slug: string;
}

export interface RelatedPremiumItem {
  title: string;
  author: string;
  duration: string;
  thumbnailUrl: string;
}

export interface FreeVideoDetails {
  /** e.g. "Beginner", "Intermediate" */
  difficulty?: string;
  /** e.g. "Certified Yoga Therapist" */
  instructorTitle?: string;
  /** Medical benefits paragraph */
  medicalBenefitsIntro: string;
  benefits: MedicalBenefit[];
  doctorNote: DoctorNote;
  nextInSeries: NextInSeriesItem[];
  relatedPremium: RelatedPremiumItem[];
}

const MORNING_SUNSHINE_DETAILS: FreeVideoDetails = {
  difficulty: "Beginner",
  instructorTitle: "Certified Yoga Therapist",
  medicalBenefitsIntro:
    "Start your day with gentle movements designed to wake up your spine and joints. From a medical perspective, this flow increases blood circulation and lymphatic drainage, helping reduce morning stiffness commonly associated with inflammatory conditions.",
  benefits: [
    {
      title: "Mood Boost",
      description: "Increases serotonin levels naturally.",
      icon: "mood",
    },
    {
      title: "Heart Health",
      description: "Mild cardio stimulation.",
      icon: "heart",
    },
  ],
  doctorNote: {
    name: "Dr. Emily Stone",
    title: "MD",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfrZBrZrQTGudbw1s_of5w9QgtbfhVa0ch1VL4VIAO65-myLuTa3F16Ce0vL_XXy6A0gD2V_fpoQ_WUj7eplobZIqm1RlcM3MDWhGk24B1DUs2cNWszJYs1wu7biRz7y4hV179Cr1xgEG6A5_wnnt_VlNAw-Qdz8C6zwpXS62pTpLjzIjMPeT-UESnVHia4nrGSTx8FVHjk8yRc9eouNMFbjkJQZ_tO8CbjMn0C_tUR_GRV2JLf0IL04B9bept6zWEk4hC9_8Omg",
    quote:
      "This sequence is particularly effective for patients recovering from mild lower back strain. The gentle mobilization of the lumbar spine promotes hydration of intervertebral discs.",
    tags: ["#LowImpact", "#SpineHealth"],
  },
  nextInSeries: [
    {
      title: "Deep Stretch",
      subtitle: "With Master Yogi",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgSFmwYS4cD0L9At8No3xAUU7tIQredRyrGmDKyqm3i5sbUKEKW07HgVk4IQD4PpuIaxp0mXyMdBCVfZrUvtrjY2DdGqXwy8JZItdCzbTJ2qQLTJc2Z560P9V7vuMLyQd1wEJOK98OkExrETnIqOgD6tmppgifvdHpOC9wODV1vkaP8KPtIlKwQ30sY70QOkJHvK_A2d-qeuoujA16T5nDysyHF13LsRCnffR-TLjy1e04isVRthuR7Fimi9flAEnLDyyCIs49bQ",
      duration: "20m",
      slug: "deep-stretch",
    },
    {
      title: "Mind Clarity",
      subtitle: "Sound Therapy",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAj1FyLyI5fapLFZ9-f9ODklFaD-Htul51xMLCPzyREqcWkNUkd35rnyUWiHhWVqlgjNZP6kdravmKvitHmCKA-1Nmq3xPWiVhQaAepG17JXLSRCFD3WIsZamEdU40fqcFGNukavsQn6C0TbQjWoRhBFlIA9VwrJeXKJztr3SO9l89FnNrY2f4NoUu40wipQKBX8kzilZwOuWk7-2ptJ6YNu_arLAkkBy9tPP_lvi40ZEcPCHsKOxRJ8argVAYPWzFiK1ycKif1Zg",
      duration: "10m",
      slug: "mind-clarity",
    },
  ],
  relatedPremium: [
    {
      title: "Advanced Flow",
      author: "With Master Yogi",
      duration: "0h 45m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlFHh_JSg3Vjc5E5l5sSInL4cUdUs1gJzRJpZH3JKHQ7UtrPgU7ydROC3iGrF6v2lp-KxtSI9HnDhliPs62-Gg9B3KXnFPeSslV_bywxZRGpDVjOn0P4NPodHNrpMTDvRt-5HO-Jfk_Wtesh36xPiv9bppAHdzyEdawHUWAOaDxet5krBytlazt_T5-16Hl2S4K9p6H1k-DqF8Gk5PyZ-_AHpeRhE81BvfyaSTmCmtQHYN4YbZvd3g0CK0yRDIUgSfjgiN4SVCBA",
    },
    {
      title: "Core Strength",
      author: "Dr. Sarah Jen",
      duration: "0h 30m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoZXF9e0FPC5dn97ykRKDBGXMHUF7ZkEpx3lBS7YPcQ9HbntYtXIIuXki1VqYAcC2cbOYIfiu39CK5rdKDLcJ1UCLKg4oju8jcxtNNAGUmoxjyLOQ_DNNt5HShvdhSeUdpEi4RPR_Je1HGaKPoaCFYgY8ouU3HFFlTFBPwpUzk4ltRlsCWPnnuX5Bp_kW8q9FASijJKQs8QjWN_bAUNYV_AzcZ54HoWdQqH4hjm2EcVo4qMDGS5BnFLIacljpoMJpifdCc96QQwg",
    },
    {
      title: "Deep Sleep",
      author: "Restorative Yoga",
      duration: "0h 90m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNDju-IUSBSY6qsz4C7LKFFzcWWsS53lSjnoHbHHooZ-myId6vuK02r3T6a8tqOxZLmdMX6hLx0OG3DWmszXHpAGZajObAO37KxefNpolwPVtEv-d4hNhsI-R3o0-XtHSgTS7uOi2WrhxdcAEZjnpLTzc1aeBl4_b-jp-pxjJlwy3emnxV-i8QKSn0wtBtFjGccib2lLOKDGyrU-VoZVfNJk6LqKI7cMlKSQ3xQEN6PExNT5Lpp8EVFSxuHhqDm0L6bXX7Ed7Pxg",
    },
  ],
};

const DEFAULT_DETAILS: FreeVideoDetails = {
  medicalBenefitsIntro:
    "This practice supports overall wellness with evidence-based movements. Always consult your healthcare provider before starting a new exercise routine.",
  benefits: [
    { title: "Mood Boost", description: "Supports mental wellbeing.", icon: "mood" },
    { title: "Heart Health", description: "Gentle cardiovascular support.", icon: "heart" },
  ],
  doctorNote: {
    name: "Dr. Emily Stone",
    title: "MD",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfrZBrZrQTGudbw1s_of5w9QgtbfhVa0ch1VL4VIAO65-myLuTa3F16Ce0vL_XXy6A0gD2V_fpoQ_WUj7eplobZIqm1RlcM3MDWhGk24B1DUs2cNWszJYs1wu7biRz7y4hV179Cr1xgEG6A5_wnnt_VlNAw-Qdz8C6zwpXS62pTpLjzIjMPeT-UESnVHia4nrGSTx8FVHjk8yRc9eouNMFbjkJQZ_tO8CbjMn0C_tUR_GRV2JLf0IL04B9bept6zWEk4hC9_8Omg",
    quote:
      "Gentle movement and mindful breathing can support recovery and daily function. Listen to your body and modify as needed.",
    tags: ["#Wellness", "#MindBody"],
  },
  nextInSeries: [],
  relatedPremium: [
    {
      title: "Advanced Flow",
      author: "With Master Yogi",
      duration: "0h 45m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlFHh_JSg3Vjc5E5l5sSInL4cUdUs1gJzRJpZH3JKHQ7UtrPgU7ydROC3iGrF6v2lp-KxtSI9HnDhliPs62-Gg9B3KXnFPeSslV_bywxZRGpDVjOn0P4NPodHNrpMTDvRt-5HO-Jfk_Wtesh36xPiv9bppAHdzyEdawHUWAOaDxet5krBytlazt_T5-16Hl2S4K9p6H1k-DqF8Gk5PyZ-_AHpeRhE81BvfyaSTmCmtQHYN4YbZvd3g0CK0yRDIUgSfjgiN4SVCBA",
    },
    {
      title: "Core Strength",
      author: "Dr. Sarah Jen",
      duration: "0h 30m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoZXF9e0FPC5dn97ykRKDBGXMHUF7ZkEpx3lBS7YPcQ9HbntYtXIIuXki1VqYAcC2cbOYIfiu39CK5rdKDLcJ1UCLKg4oju8jcxtNNAGUmoxjyLOQ_DNNt5HShvdhSeUdpEi4RPR_Je1HGaKPoaCFYgY8ouU3HFFlTFBPwpUzk4ltRlsCWPnnuX5Bp_kW8q9FASijJKQs8QjWN_bAUNYV_AzcZ54HoWdQqH4hjm2EcVo4qMDGS5BnFLIacljpoMJpifdCc96QQwg",
    },
    {
      title: "Deep Sleep",
      author: "Restorative Yoga",
      duration: "0h 90m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNDju-IUSBSY6qsz4C7LKFFzcWWsS53lSjnoHbHHooZ-myId6vuK02r3T6a8tqOxZLmdMX6hLx0OG3DWmszXHpAGZajObAO37KxefNpolwPVtEv-d4hNhsI-R3o0-XtHSgTS7uOi2WrhxdcAEZjnpLTzc1aeBl4_b-jp-pxjJlwy3emnxV-i8QKSn0wtBtFjGccib2lLOKDGyrU-VoZVfNJk6LqKI7cMlKSQ3xQEN6PExNT5Lpp8EVFSxuHhqDm0L6bXX7Ed7Pxg",
    },
  ],
};

const DETAILS_BY_SLUG: Record<string, FreeVideoDetails> = {
  "morning-sunshine-flow": MORNING_SUNSHINE_DETAILS,
};

/** Get extended details for a free video by slug. Returns default details when slug has no override. */
export function getFreeVideoDetailsBySlug(slug: string): FreeVideoDetails {
  return DETAILS_BY_SLUG[slug] ?? DEFAULT_DETAILS;
}
