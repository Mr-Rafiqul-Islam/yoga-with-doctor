
import { ClassItem } from "@/services/classApi";
import type { VideoCardProps } from "../components/VideoCard";

/** Default free wellness videos from Figma/HTML design. Image URLs hotlinked from design source. */
export const FREE_VIDEOS: VideoCardProps[] = [
  {
    slug: "morning-sunshine-flow",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1IpTFbBbp0_qWB91TCxBz4UgTTJNCu-X3xTAYqM12dVTAHbYIaSKMYs5VukrNpA41PFvS8bbPCLR78FHywt0fHirPJnieYwmZI4_tFrdpFukU9rpmxilzTTNP6rPzwBxMBLH68RK_1njcaGfeB0z4XtplWF0knVGAqmJ8SxcxZvI54qBzc-xrPswlc6OEs6H46rz9D8Zmv4UFhjKhW3XfYqVUMO_HuMLSjgzOgV34R9yQEV4cinendrKEN0MBUvAdIMRZG5wPew",
    duration: "15:00",
    category: "Yoga Therapy",
    title: "Morning Sunshine Flow",
    description:
      "Start your day with gentle movements designed to wake up your spine and joints.",
    authorName: "Sarah Jenkins",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGuYqjgSRaJx2pVpYTY7OzMVYfA1z5IHkE6YAQocqA-1CbpA80jbfNBfFVAHt5SRivYJ-HuAgIbj8hFoFl9gpGmTBIy88nXfwBFyTktL3yXSiIhE39xjvDtl_ZhFCo8LVNrndqep4gB1xM9sDNjayzRFpw2Xhw-ltt30nRt7rLNeEArqlThcADqhjA7tHZ09PMRC366iKntapanophdHGSzCuOEy0LBq22eIgZTcv1lm0xUsa3uol0YDGmRVyPo8tSnz3XL9UYhg",
    isFree: true,
  },
  {
    slug: "morning-spine-relief-mobility",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1MHMTq1GB1JQmv4Q2KHx4AyPkoCbNTwUb1PeLTVljDxTQZ4GcGbRGfzAmo_IHgZ6-_YI_ffEgoAcYnuk_vpJJwWRt9lw8rOUpO1VsOtMHrt7I_NiEcxhGFESOxbozg05SthnQD0SHUN90k96igWfPbLLseGJCE2i3SjEm8FitmP18cTRBhyRMxTFg4oUXxtRZ0zWLHkSnD3NHylTAaXcAslvYpU8ekHCbfYQBT0jQ4hh8zTx4x8vHgjAhCWI05ko9_tVZI_rtqEhY",
    duration: "15:00",
    category: "Yoga Therapy",
    title: "Morning Spine Relief & Mobility",
    description:
      "Gentle movements to wake up your spine and reduce stiffness after sleeping.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBooIN0oPNQ3ExP7JddGju_KvKlOKlyPQy_TzJ8Sm4Gb0LdZdFfQAJMHv4G0PlzwiO7XVB11Ss54vei5Gh4vp2YZXYoiXKk_h24gauki4-3PUuqDLgXdEq7R4RfE1NauafglbLdT4Up6tveFiNBs1fYtBSFXmDQo2uXPz0GFqJBkIWTYRvLJbELClUeYd5-4eztHRaSLia0hvFrZgU03GQMkiklQq2s65aMg-kTPOjkC6l9_O46hkx1f7NTvSs3WJ2ZyTy-UjNxeUe5",
    isFree: true,
  },
  {
    slug: "anxiety-reduction-breathwork",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYq02mnVRiNIgM0mx9UowtVxPINUvtjQPHfbfuUP5UrfiRLWw_gdOjZIMs4prfieeaf5Sg_HbtS5ZlsoY6HFVbdbUyTWsPYdthWAvIy3mRqTuasl_Pci5ey0c8uK-TDORLiS5rfqqOo5I3y9qA1id_aIymUWPrvsPK83pulf3SVXZ_pPBBtFU5Ncs_ZndhUjaPl_IYFQv7puzbVjWwYO83p6AqO4f7nAhpvVp6pBr4-OjC5q4mjUS7fjrN_LmLUjeUC6ZqvEnLTPH",
    duration: "10:00",
    category: "Meditation",
    title: "Anxiety Reduction Breathwork",
    description:
      "Clinically proven breathing techniques to lower cortisol and calm the nervous system.",
    authorName: "Dr. Chen",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACZbYEf_4IOBU6Xw7H-7IG2fumwVmfnRMOArgiwFtPgxAEQIYe-e4o9_iuWBMQ9GlGZbTF12DHGaG-y8fWVQ5kZvtXvIqcu6MDUE7Mn6FUV2po5tybZRLT0kT4gulZ9Tz2l8z_dsBPW4p4HkfE3YtcpsWsLY1X6wSaULGlMOZ0cvCvRtvRiskMuUr5OcTc7FULrmBPIPSGWudvVNO-HEllQw8FM1H8h1r50eJwZ6jlovTJvduyi_4Q7BhKpWyQ_TNmR3XQhDNGXRAQ",
    isFree: true,
  },
  {
    slug: "anti-inflammatory-breakfast-ideas",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpXfR3P9eeCXCEkP2HuVHRWMFkWghMQrWjtU2l21-ybFbek0d_DwgSNZN8-gax46bKDM6UDElHjfXJuZ7WcxupqaqLtcM0wuUyjdMxVks9wJ6LIPXfOQiakaI05mzMXAGlApj7jEOKkSlpddyg1K9DWHMm_69c30deCuNdEEPNi2xWC8tMwJT1bk0-HjwJ9wa8ztHGcxp8mXdClqS7Bqhw-EsOq4KYGVVvs_ppwp9oMPRhjV8g8Xf0WBPJt2KShW3rRFUxb7EMcij1",
    duration: "05:30",
    category: "Nutrition",
    title: "Anti-Inflammatory Breakfast Ideas",
    description:
      "Quick recipes designed to reduce systemic inflammation and boost energy.",
    authorName: "Lisa Ray, RD",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsN2aadSmRqZ4NuoCaoJ48rvyZlC5F_XyYldH7_yaGDiNUQwVtW4e7r-GJi1k53wOnRoXja85P3_A7t70Uty6cn9XSxbOmM0Qzb4-8RZYY8G9jXMVdNBYekoSSfqmQpIG2EKCuZRlXB_TFA3DdrfBcLyTB7Z3NmDqtVGZhTphzAysMhEEK6AK1x-cZ0Z2KsSz-Fevt_Uf7D3vqS7HMFt-7csJ0o4ejSQLc_fhPacOTSeAXFd9D_VhUBxMES-wbU9LrM7IWpZ3U71B3",
    isFree: true,
  },
  {
    slug: "lower-back-recovery-sequence",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD82iUQR-DRIMncyYqYluerXmiEKk0fllaptVauThM1ojRIUt9GgaC0NuVe46TNcTRGxG249JEc112t2h_nE2x65LC5kN8WempFZSpKPCbf4g1uHjStlSk6WgrkGmhaNO3-LrBhJQZkA4OumoSplPnHai6omdAtu4WN5CjY-VNMX9iDycqq-CI7oZpw9EU3dyUwMZMZs4_5WHMrVnfAWI95AWKVFKm6T5bx2wHI231g4QtFWZ2_tsE5g5pOEscpgg4m4tw0NfyPzA7R",
    duration: "22:00",
    category: "Yoga Therapy",
    title: "Lower Back Recovery Sequence",
    description:
      "A focused session for alleviating chronic lower back tension safely.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaaAj7DBMr4jldipnck-HUi2CBGWE0KICcdceuMiAR4dpHeG2B9pWqguROE9gNTgCxAlzJ6HKffYZVmHM1JccM7JFW-ghiZgaTKsSiqE4Q-NSFKCHEIQTTgz9Jqp3TGn_ScQn-ti8gEMaDpidNBlhp6pozPt9R8H6WjwCZoaAjyl6LwZDOFxltv4VjgIlGTyue26fV0pisGX-lJiiGK_3GDDorSPwLz4EYEdSHIzF6O_yoTytVBV1iooMkq5DAgrGtLIO6ucPskAVU",
    isFree: true,
  },
  {
    slug: "mindfulness-for-better-sleep",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRoA7--VcNE7sLQDUIFAKTUMggRbRk3oFAlmE272mov0ooicE5zzWdaQ0eusX4TVH9zl3iMCJhaZYXZKrKjSZEBKXCNF2tLwHPYhkPna1Tkd_7pT11jFEl1MX_J9R77t7XX5AVanc4O8jDRwekKUN26mDm0hQ5igRn4UuClgECCcpUhTemru5JsFalxI5JPE4YVi69_66jUk5HaJ1of7KhsH7R5k5G6I-lIkFnFa40rgz9hB-ptfFjype80w9fzI10WeVl7miaQgUt",
    duration: "18:00",
    category: "Meditation",
    title: "Mindfulness for Better Sleep",
    description:
      "Prepare your mind for deep rest with this evening mindfulness practice.",
    authorName: "Dr. Chen",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTqVZWTO-kRyy8mzmcEP-LZM_rM8NHO2BntovMLBpx8WB2-Y8s8zy7fbq1fg-E1AhU3oiRCnuWPcc1DBKLAMh70WE7jQQz8dRs6CsLGVvv_GnwpesZDL96-gPDZhbT9QNtWupeMfXgmWzzPxh7G_lASE41SmkduM5C6zo3eyx_l7VpB9TNBlgkjIH0iOqoREO830iSP3DfdWr1LQ1NMp_Cw8KTHpgrQtbBjBMmEKAhrzSFhR9sxDTp_pXiJEAYCORfXItuQ2jkXc6H",
    isFree: true,
  },
  {
    slug: "desk-job-mobility-routine",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASA9s_sFSS_Kb4ResknwPD5ty_6VFxnVCC7DCGU0_uN2wI4vwXloH828ATnucE3UTk9yUkitjsy-Sqlv0yvEyFsdRy0D9gnzUrd4LeE7p85w3b0WB-eGGKH3wXfZP0Jig-vrd3gaCcuVX-2xTQ_y8GUMDFjdxfuoHYCRSZRkUi8iAU19sIXO9IWFwSh-ZHLc-uAHDWoeIg0D15Jh3dK-er7R29HGZGgVlliEoGh96DyYNDIwNIVBLdRcLWY0olM_6H1rB70QAjrSXN",
    duration: "08:00",
    category: "Yoga Therapy",
    title: "Desk Job Mobility Routine",
    description:
      "Counteract the effects of sitting all day with these quick stretches.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0eOcoQw8krMb1OAB7zhdkMBi07CAVRdIJ-uYCpceTOW1Thvd0mvpo06c2fxcvWpmh83IqBFk8DTKHM9qcWeUpVl_mQU2z6_7-rjhaXXVKm98Rp1kyQmcu06LM7mtgwtbRq0ArsJ5M1Y2SuiWtVIiZUFek7fwcgfAYfIqe2C4f1HLvG__3sSYjN1XcaN8hTvV3u7fSaTHmFEKTUOYUdOvS6lh59jLf-WDtWz4QwOJhDR-XnFRJjFA-kzOnfjxFcNWvjDUrMdtGkf8J",
    isFree: true,
  },
  // Additional videos for Load More (entries 7–12)
  {
    slug: "evening-wind-down-stretch",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1MHMTq1GB1JQmv4Q2KHx4AyPkoCbNTwUb1PeLTVljDxTQZ4GcGbRGfzAmo_IHgZ6-_YI_ffEgoAcYnuk_vpJJwWRt9lw8rOUpO1VsOtMHrt7I_NiEcxhGFESOxbozg05SthnQD0SHUN90k96igWfPbLLseGJCE2i3SjEm8FitmP18cTRBhyRMxTFg4oUXxtRZ0zWLHkSnD3NHylTAaXcAslvYpU8ekHCbfYQBT0jQ4hh8zTx4x8vHgjAhCWI05ko9_tVZI_rtqEhY",
    duration: "12:00",
    category: "Yoga Therapy",
    title: "Evening Wind-Down Stretch",
    description:
      "Release tension from your day with gentle stretches before bed.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBooIN0oPNQ3ExP7JddGju_KvKlOKlyPQy_TzJ8Sm4Gb0LdZdFfQAJMHv4G0PlzwiO7XVB11Ss54vei5Gh4vp2YZXYoiXKk_h24gauki4-3PUuqDLgXdEq7R4RfE1NauafglbLdT4Up6tveFiNBs1fYtBSFXmDQo2uXPz0GFqJBkIWTYRvLJbELClUeYd5-4eztHRaSLia0hvFrZgU03GQMkiklQq2s65aMg-kTPOjkC6l9_O46hkx1f7NTvSs3WJ2ZyTy-UjNxeUe5",
    isFree: true,
  },
  {
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYq02mnVRiNIgM0mx9UowtVxPINUvtjQPHfbfuUP5UrfiRLWw_gdOjZIMs4prfieeaf5Sg_HbtS5ZlsoY6HFVbdbUyTWsPYdthWAvIy3mRqTuasl_Pci5ey0c8uK-TDORLiS5rfqqOo5I3y9qA1id_aIymUWPrvsPK83pulf3SVXZ_pPBBtFU5Ncs_ZndhUjaPl_IYFQv7puzbVjWwYO83p6AqO4f7nAhpvVp6pBr4-OjC5q4mjUS7fjrN_LmLUjeUC6ZqvEnLTPH",
    slug: "quick-calm-5-minute-reset",
    duration: "08:00",
    category: "Meditation",
    title: "Quick Calm: 5-Minute Reset",
    description:
      "A short breathing exercise to recenter when stress builds up.",
    authorName: "Dr. Chen",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACZbYEf_4IOBU6Xw7H-7IG2fumwVmfnRMOArgiwFtPgxAEQIYe-e4o9_iuWBMQ9GlGZbTF12DHGaG-y8fWVQ5kZvtXvIqcu6MDUE7Mn6FUV2po5tybZRLT0kT4gulZ9Tz2l8z_dsBPW4p4HkfE3YtcpsWsLY1X6wSaULGlMOZ0cvCvRtvRiskMuUr5OcTc7FULrmBPIPSGWudvVNO-HEllQw8FM1H8h1r50eJwZ6jlovTJvduyi_4Q7BhKpWyQ_TNmR3XQhDNGXRAQ",
    isFree: true,
  },
  {
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpXfR3P9eeCXCEkP2HuVHRWMFkWghMQrWjtU2l21-ybFbek0d_DwgSNZN8-gax46bKDM6UDElHjfXJuZ7WcxupqaqLtcM0wuUyjdMxVks9wJ6LIPXfOQiakaI05mzMXAGlApj7jEOKkSlpddyg1K9DWHMm_69c30deCuNdEEPNi2xWC8tMwJT1bk0-HjwJ9wa8ztHGcxp8mXdClqS7Bqhw-EsOq4KYGVVvs_ppwp9oMPRhjV8g8Xf0WBPJt2KShW3rRFUxb7EMcij1",
    slug: "green-smoothies-for-energy",
    duration: "07:00",
    category: "Nutrition",
    title: "Green Smoothies for Energy",
    description:
      "Simple recipes to fuel your body and support recovery.",
    authorName: "Lisa Ray, RD",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsN2aadSmRqZ4NuoCaoJ48rvyZlC5F_XyYldH7_yaGDiNUQwVtW4e7r-GJi1k53wOnRoXja85P3_A7t70Uty6cn9XSxbOmM0Qzb4-8RZYY8G9jXMVdNBYekoSSfqmQpIG2EKCuZRlXB_TFA3DdrfBcLyTB7Z3NmDqtVGZhTphzAysMhEEK6AK1x-cZ0Z2KsSz-Fevt_Uf7D3vqS7HMFt-7csJ0o4ejSQLc_fhPacOTSeAXFd9D_VhUBxMES-wbU9LrM7IWpZ3U71B3",
    isFree: true,
  },
  {
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD82iUQR-DRIMncyYqYluerXmiEKk0fllaptVauThM1ojRIUt9GgaC0NuVe46TNcTRGxG249JEc112t2h_nE2x65LC5kN8WempFZSpKPCbf4g1uHjStlSk6WgrkGmhaNO3-LrBhJQZkA4OumoSplPnHai6omdAtu4WN5CjY-VNMX9iDycqq-CI7oZpw9EU3dyUwMZMZs4_5WHMrVnfAWI95AWKVFKm6T5bx2wHI231g4QtFWZ2_tsE5g5pOEscpgg4m4tw0NfyPzA7R",
    slug: "hip-openers-for-sedentary-lifestyles",
    duration: "25:00",
    category: "Yoga Therapy",
    title: "Hip Openers for Sedentary Lifestyles",
    description:
      "Target tight hips from sitting with safe, progressive stretches.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaaAj7DBMr4jldipnck-HUi2CBGWE0KICcdceuMiAR4dpHeG2B9pWqguROE9gNTgCxAlzJ6HKffYZVmHM1JccM7JFW-ghiZgaTKsSiqE4Q-NSFKCHEIQTTgz9Jqp3TGn_ScQn-ti8gEMaDpidNBlhp6pozPt9R8H6WjwCZoaAjyl6LwZDOFxltv4VjgIlGTyue26fV0pisGX-lJiiGK_3GDDorSPwLz4EYEdSHIzF6O_yoTytVBV1iooMkq5DAgrGtLIO6ucPskAVU",
    isFree: true,
  },
  {
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRoA7--VcNE7sLQDUIFAKTUMggRbRk3oFAlmE272mov0ooicE5zzWdaQ0eusX4TVH9zl3iMCJhaZYXZKrKjSZEBKXCNF2tLwHPYhkPna1Tkd_7pT11jFEl1MX_J9R77t7XX5AVanc4O8jDRwekKUN26mDm0hQ5igRn4UuClgECCcpUhTemru5JsFalxI5JPE4YVi69_66jUk5HaJ1of7KhsH7R5k5G6I-lIkFnFa40rgz9hB-ptfFjype80w9fzI10WeVl7miaQgUt",
    slug: "body-scan-for-sleep",
    duration: "20:00",
    category: "Meditation",
    title: "Body Scan for Sleep",
    description:
      "Progressive relaxation to drift off faster and sleep deeper.",
    authorName: "Dr. Chen",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTqVZWTO-kRyy8mzmcEP-LZM_rM8NHO2BntovMLBpx8WB2-Y8s8zy7fbq1fg-E1AhU3oiRCnuWPcc1DBKLAMh70WE7jQQz8dRs6CsLGVvv_GnwpesZDL96-gPDZhbT9QNtWupeMfXgmWzzPxh7G_lASE41SmkduM5C6zo3eyx_l7VpB9TNBlgkjIH0iOqoREO830iSP3DfdWr1LQ1NMp_Cw8KTHpgrQtbBjBMmEKAhrzSFhR9sxDTp_pXiJEAYCORfXItuQ2jkXc6H",
    isFree: true,
  },
  {
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASA9s_sFSS_Kb4ResknwPD5ty_6VFxnVCC7DCGU0_uN2wI4vwXloH828ATnucE3UTk9yUkitjsy-Sqlv0yvEyFsdRy0D9gnzUrd4LeE7p85w3b0WB-eGGKH3wXfZP0Jig-vrd3gaCcuVX-2xTQ_y8GUMDFjdxfuoHYCRSZRkUi8iAU19sIXO9IWFwSh-ZHLc-uAHDWoeIg0D15Jh3dK-er7R29HGZGgVlliEoGh96DyYNDIwNIVBLdRcLWY0olM_6H1rB70QAjrSXN",
    slug: "full-body-flow-for-flexibility",
    duration: "50:00",
    category: "Yoga Therapy",
    title: "Full Body Flow for Flexibility",
    description:
      "A longer session covering major muscle groups for overall mobility.",
    authorName: "Dr. Sarah Mitchell",
    authorAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0eOcoQw8krMb1OAB7zhdkMBi07CAVRdIJ-uYCpceTOW1Thvd0mvpo06c2fxcvWpmh83IqBFk8DTKHM9qcWeUpVl_mQU2z6_7-rjhaXXVKm98Rp1kyQmcu06LM7mtgwtbRq0ArsJ5M1Y2SuiWtVIiZUFek7fwcgfAYfIqe2C4f1HLvG__3sSYjN1XcaN8hTvV3u7fSaTHmFEKTUOYUdOvS6lh59jLf-WDtWz4QwOJhDR-XnFRJjFA-kzOnfjxFcNWvjDUrMdtGkf8J",
    isFree: true,
  },
];

/** Get a free video by slug, or undefined if not found. */
export async function getFreeVideoBySlug(slug: string): Promise<ClassItem | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/classes/${slug}`,
      {
        next: { revalidate: 60 }, // ISR caching (optional)
      }
    );
    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data.data.class;
  } catch (error) {
    console.error("Error fetching services:", error);
    return undefined;
  }
}
