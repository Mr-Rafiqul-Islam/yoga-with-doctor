const IMG = "https://lh3.googleusercontent.com/aida-public";

export type FeaturedArticle = {
  imageSrc: string;
  imageAlt: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  authorName: string;
  authorTitle: string;
  authorAvatarSrc: string;
  href: string;
};

export type ArticleCardItem = {
  imageSrc: string;
  imageAlt: string;
  badge: "FREE" | "PREMIUM";
  category: string;
  timeAgo: string;
  title: string;
  description: string;
  authorName: string;
  actionLabel: string;
  href: string;
};

export const featuredArticle: FeaturedArticle = {
  imageSrc: `${IMG}/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w`,
  imageAlt: "Woman meditating in morning sunlight",
  category: "Mental Health",
  readTime: "5 min read",
  title: "The Science of Morning Meditation: Rewiring Your Brain for Peace",
  description:
    "Discover how starting your day with just 10 minutes of mindfulness can structurally change your brain, reduce cortisol levels, and enhance your focus for the entire day.",
  authorName: "Dr. Sarah West",
  authorTitle: "Yoga Therapist",
  authorAvatarSrc: `${IMG}/AB6AXuD8-FnpMuQWsRv9j9QqxraIc7Cua-g0V-BL240ajowmJ1qajM5LEQHOp4Je_FjfXr-C1lURzsKewiA--UOvcq_eOJfG4CxRtABpobKUtTysoqY4QqpAwp5jry8EMkJvGAbRamzEmyz-1avzPGpV1mjd-k7YXFg-XG5XGQY_o4r4DU5dRflAibVlakeI6P9YkD8XisP6iodFTngVgAWC2sywne5YUWB75i4LrLBs5bnb4q8M3XqEBJXcSjmtUDCBGlnyvehQjo3lhg`,
  href: "#",
};

export const dummyArticleCards: ArticleCardItem[] = [
  {
    imageSrc: `${IMG}/AB6AXuCy8gPPmpwwL1jof9Sz8UldKmChU0jc2Oc6tc2sHLcPLKzNn7E59ZiXXWpyI_QFij_wLDNvFQwsWm9WWtNid6BfVKgoeBN07P3xDr27ZVa56tZAPsdf30S2DKrNZy-clM7209D-JJbY2sNfqOb5KTKHVhWreFP1UwEPRqu8JEfu_IdjInRiq9ih51URs-SKNrebWyc2jA3VT5mlOe0XoRlUipOeUfEhGshKdOQu6sub6gGa-_cXHJPX3P1UbMs842f3X43yr_ZGNA`,
    imageAlt: "Yoga stretch",
    badge: "FREE",
    category: "FLEXIBILITY",
    timeAgo: "2 hours ago",
    title: "Advanced Yoga Techniques for Lower Back Pain Relief",
    description:
      "A comprehensive guide tailored by physiotherapists to safely strengthen your lumbar region.",
    authorName: "Dr. Emily Stone",
    actionLabel: "Read More",
    href: "#",
  },
  {
    imageSrc: `${IMG}/AB6AXuA7b0YECIAWCZL5j9G9vVDAE2rCIVbQZuLI8nxlCfufzpqirdtOOt6ljWrlH6ndlERVT47_UtLNawWgY5V4AeTeFxr2EtKLriVO06CRmq5ElieAu6d2kayArJIV3hMeIzP9IpiKNmWTOmxTc_f6xjs-kyy6Trqxwx2hmsk0WCRBdJyrZjhx1vRvhgHimuQ9PclVafds9tTlpVlIcLOAdrWUXtQvOnvgjv4VRJQDQfCPF1PYxHWhXv0XzHpVuE21zjNNwXT6lNTjag`,
    imageAlt: "Healthy smoothie bowl",
    badge: "PREMIUM",
    category: "NUTRITION",
    timeAgo: "1 day ago",
    title: "The Anti-Inflammatory Diet: Essential Foods for Yogis",
    description:
      "Optimize your recovery and energy levels with this science-backed nutritional plan specifically for practitioners.",
    authorName: "Dr. Mark Chen",
    actionLabel: "Unlock Now",
    href: "#",
  },
  {
    imageSrc: `${IMG}/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA`,
    imageAlt: "Yoga retreat",
    badge: "FREE",
    category: "LIFESTYLE",
    timeAgo: "3 days ago",
    title: "Integrating Mindfulness into a Busy Corporate Life",
    description:
      "Practical micro-habits you can build at your desk to reduce stress without leaving the office.",
    authorName: "Sarah Jenkins",
    actionLabel: "Read More",
    href: "#",
  },
  {
    imageSrc: `${IMG}/AB6AXuAL2At9VNIDV2jYPUYacUgeb5QuCRcdIMpQoiEzjSGgKU-g6-WKDO7WjTs8XOrU2DjC8PZuHGPpgvDGYobaL2mawEpeWE6PMnB6nHJQHjDmY7cp0reGTafNmQ1-lCO9Cepew_ULT8rKzLe9HB09r76HCogIfoPPgcaiNbjRX6TZSFenHv1iYXo9fcTc1LlDgox6O5EYxTueXx1FGL0lew5dZpQD-cCYkbRq2x40kB-QyS2ZgQgONZx04zmeY_CzfOmSrulIinsMiw`,
    imageAlt: "Sleep meditation",
    badge: "PREMIUM",
    category: "SLEEP",
    timeAgo: "1 week ago",
    title: "The Physiology of Sleep: Yoga Nidra Explained",
    description:
      "Deep dive into the non-sleep deep rest (NSDR) protocols that can replace hours of lost sleep.",
    authorName: "Dr. Alan Grant",
    actionLabel: "Unlock Now",
    href: "#",
  },
  {
    imageSrc: `${IMG}/AB6AXuAGcbH_kIu67wIhsqgdymXuarItV68HLuzKiW5ZoS9bbATq5n6kdcqROnz5c4SiMDxB3IRLzS3TbqtfMx3rlpyC-_iZDGDTH4aHW3dCYiw_BVIrmgw3mMM9PI-9K-w9KUoDsjZNSvvb6iGU3Os39diTQ6UYPqVG2gmsDMFWBKconjEy6YBNUbB94u5WkQL7yzWILVLBFMoCfRdukwygMUofTHcPXc3K-8oKPEp7tDZN6O7ncrcIBliMvaNWBdmZIR9TKtDfqNf2Cw`,
    imageAlt: "Strength training",
    badge: "FREE",
    category: "STRENGTH",
    timeAgo: "2 weeks ago",
    title: "Building Core Stability Through Asana Practice",
    description:
      "Forget crunches. Here are the 5 essential yoga poses that build true functional core strength.",
    authorName: "Lisa Ray",
    actionLabel: "Read More",
    href: "#",
  },
  {
    imageSrc: `${IMG}/AB6AXuAT3K0Iynma3Ll_ZahX8MptcKhQmX4LZc3Y_eSgx0cWHIv4AT8TKxUhZ8q0v076XUFgJr3ctGzpEkRRXxTbrZmde5cdgp-V-FtNj8q7Nyi2PMYmaQu8Y46XbjILN2fSfDhumenMfNtpG9CvEGdaynSO05-I2nJSeXcwEB3BuKVvU8mLLu6c6h2xAj130rUQ66g8IYSvnZp11SmtPEUucldf29h90VP05yR8NwyTME68RZeWTRnc-i4q3KTitCzqbifiK1AQVCqevQ`,
    imageAlt: "Breathing exercises",
    badge: "FREE",
    category: "BREATHWORK",
    timeAgo: "2 weeks ago",
    title: "Pranayama for Anxiety: A Doctor's Perspective",
    description:
      "Understanding the sympathetic vs parasympathetic nervous system response to breath control.",
    authorName: "Dr. Sarah West",
    actionLabel: "Read More",
    href: "#",
  },
];
