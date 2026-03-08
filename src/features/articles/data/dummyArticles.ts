const IMG = "https://lh3.googleusercontent.com/aida-public";

// ---------- Shared / list types ----------

export type FeaturedArticle = {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: ArticleAuthor;
  tags: string[];
  href: string;
  detailsContent: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ArticleDetails = {
  slug: string;
  image: string;
  imageAlt: string;
  badge?: "FREE" | "PREMIUM";
  readTime?: string;
  category: string;
  timeAgo?: string;
  title: string;
  description: string;
  author: ArticleAuthor;
  actionLabel?: string;
  href: string;
  tags: string[];
  detailsContent: string; // HTML string from rich text editor
};

// ---------- Article details (full page) ----------

export type ArticleAuthor = {
  name: string;
  title: string;
  avatarSrc: string;
  bioSnippet: string;
  fullBio: string;
  profileLink: string;
  quotes?:string;
  tags?:string[];
};


// ---------- Featured article (list) ----------

export const featuredArticle: FeaturedArticle = {
  slug: "the-science-of-morning-meditation",
  image: `${IMG}/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w`,
  imageAlt: "Woman meditating in morning sunlight",
  category: "Mental Health",
  readTime: "5 min read",
  title: "The Science of Morning Meditation: Rewiring Your Brain for Peace",
  description:
    "Discover how starting your day with just 10 minutes of mindfulness can structurally change your brain, reduce cortisol levels, and enhance your focus for the entire day.",
  author: {
    name: "Dr. Sarah West",
    title: "MD, Yoga Therapist",
    avatarSrc: `${IMG}/AB6AXuD8-FnpMuQWsRv9j9QqxraIc7Cua-g0V-BL240ajowmJ1qajM5LEQHOp4Je_FjfXr-C1lURzsKewiA--UOvcq_eOJfG4CxRtABpobKUtTysoqY4QqpAwp5jry8EMkJvGAbRamzEmyz-1avzPGpV1mjd-k7YXFg-XG5XGQY_o4r4DU5dRflAibVlakeI6P9YkD8XisP6iodFTngVgAWC2sywne5YUWB75i4LrLBs5bnb4q8M3XqEBJXcSjmtUDCBGlnyvehQjo3lhg`,
    bioSnippet:
      "Specializing in the intersection of neuroscience and traditional yogic practices.",
    fullBio:
      "Dr. Sarah West combines her background in internal medicine with 15 years of yoga practice. She believes in an integrative approach to health where Western diagnostics meet Eastern preventative wisdom.",
    profileLink: "#",
  },
  tags: ["#Mindfulness", "#Neuroscience", "#MorningRoutine"],
  href: "/articles/the-science-of-morning-meditation",
  detailsContent: `
<h2>The Morning Mind</h2>

<p>
When you first wake up, your brain transitions from delta waves (deep sleep) to theta waves
(a dreamy, drift state), and then finally into alpha waves (relaxed alertness).
This transition period is incredibly fertile ground for setting the tone of your nervous system.
</p>

<p>
Rushing immediately into high-beta wave activity—checking emails, worrying about the commute—
shocks the system into a sympathetic (fight or flight) response before the day has even begun.
</p>

<div style="border-left:4px solid #22c55e;padding:16px;margin:24px 0;background:#f0fdf4;border-radius:8px;">
  <strong>MEDICAL INSIGHT</strong>
  <p style="margin-top:8px;">
    <strong>Theta State Window:</strong> The first 20 minutes after waking allows access to the
    subconscious mind more readily than any other time. Neurologists refer to this as the
    <em>"imprint period"</em>, where positive suggestion and visualization are most effective at
    rewiring neural pathways.
  </p>
</div>

<h2>The Cortisol Connection</h2>

<p>
Cortisol, the stress hormone, naturally peaks about 30–45 minutes after waking.
This is known as the Cortisol Awakening Response (CAR). While necessary for alertness,
an exaggerated CAR is linked to anxiety and chronic stress.
</p>

<p>
Morning meditation has been shown to blunt this spike, keeping cortisol within a healthy range.
By engaging the parasympathetic nervous system through breath awareness,
you signal safety to your body.
</p>

<figure style="margin:32px 0;text-align:center;">
  <img 
    src="${IMG}/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w"
    alt="Meditating helps reduce activity early in the morning"
    style="width:100%;border-radius:16px;"
  />
  <figcaption style="margin-top:12px;font-size:14px;color:#6b7280;">
    Meditating helps reduce activity early in the morning, improving cognitive outcomes.
  </figcaption>
</figure>

<blockquote style="font-style:italic;font-size:20px;margin:40px 0;text-align:center;">
  “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”
  <br />
  <span style="font-size:14px;color:#6b7280;">— Aristotle (via Will Durant)</span>
</blockquote>

<h2>Neuroplasticity & Routine</h2>

<p>
The concept of neuroplasticity suggests that our brains are malleable.
A study from Harvard Medical School found that 8 weeks of consistent mindfulness practice
increased gray matter density in the hippocampus (associated with learning and memory)
and decreased gray matter density in the amygdala (associated with anxiety and stress).
</p>

<p>
The morning is the ideal time for this "workout" because willpower is a finite resource
that depletes throughout the day. By anchoring the habit to waking up,
you bypass the decision fatigue that often derails evening practices.
</p>

<h2>A Simple 10-Minute Practice</h2>

<ol>
  <li>
    <strong>Hydrate:</strong> Drink a glass of water immediately upon waking
    to activate the metabolism.
  </li>
  <li>
    <strong>Seat:</strong> Sit upright. Do not meditate lying in bed,
    as the brain associates that position with sleep.
  </li>
  <li>
    <strong>Breath (4–7–8):</strong> Inhale for 4 counts, hold for 7,
    exhale for 8. Repeat for 5 minutes.
  </li>
  <li>
    <strong>Intention:</strong> Set one word as your intention for the day
    (e.g., <em>Patience</em>, <em>Focus</em>, <em>Clarity</em>).
  </li>
</ol>
`,
};

// ---------- Article cards (grid) ----------

export const dummyArticleCards: ArticleDetails[] = [
  {
    slug: "the-science-of-morning-meditation",
    image: `${IMG}/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w`,
    imageAlt: "Woman meditating in morning sunlight",
    category: "Mental Health",
    readTime: "5 min read",
    timeAgo: "2 hours ago",
    badge: "FREE",
    title: "The Science of Morning Meditation: Rewiring Your Brain for Peace",
    description:
      "Discover how starting your day with just 10 minutes of mindfulness can structurally change your brain, reduce cortisol levels, and enhance your focus for the entire day.",
    author: {
      name: "Dr. Sarah West",
      title: "MD, Yoga Therapist",
      avatarSrc: `${IMG}/AB6AXuD8-FnpMuQWsRv9j9QqxraIc7Cua-g0V-BL240ajowmJ1qajM5LEQHOp4Je_FjfXr-C1lURzsKewiA--UOvcq_eOJfG4CxRtABpobKUtTysoqY4QqpAwp5jry8EMkJvGAbRamzEmyz-1avzPGpV1mjd-k7YXFg-XG5XGQY_o4r4DU5dRflAibVlakeI6P9YkD8XisP6iodFTngVgAWC2sywne5YUWB75i4LrLBs5bnb4q8M3XqEBJXcSjmtUDCBGlnyvehQjo3lhg`,
      bioSnippet:
        "Specializing in the intersection of neuroscience and traditional yogic practices.",
      fullBio:
        "Dr. Sarah West combines her background in internal medicine with 15 years of yoga practice. She believes in an integrative approach to health where Western diagnostics meet Eastern preventative wisdom.",
      profileLink: "#",
    },
    tags: ["#Mindfulness", "#Neuroscience", "#MorningRoutine", "#StressRelief"],
    href: "/articles/the-science-of-morning-meditation",
    detailsContent: `
<h2>The Morning Mind</h2>

<p>
When you first wake up, your brain transitions from delta waves (deep sleep) to theta waves
(a dreamy, drift state), and then finally into alpha waves (relaxed alertness).
This transition period is incredibly fertile ground for setting the tone of your nervous system.
</p>

<p>
Rushing immediately into high-beta wave activity—checking emails, worrying about the commute—
shocks the system into a sympathetic (fight or flight) response before the day has even begun.
</p>

<div style="border-left:4px solid #22c55e;padding:16px;margin:24px 0;background:#f0fdf4;border-radius:8px;">
  <strong>MEDICAL INSIGHT</strong>
  <p style="margin-top:8px;">
    <strong>Theta State Window:</strong> The first 20 minutes after waking allows access to the
    subconscious mind more readily than any other time. Neurologists refer to this as the
    <em>"imprint period"</em>, where positive suggestion and visualization are most effective at
    rewiring neural pathways.
  </p>
</div>

<h2>The Cortisol Connection</h2>

<p>
Cortisol, the stress hormone, naturally peaks about 30–45 minutes after waking.
This is known as the Cortisol Awakening Response (CAR). While necessary for alertness,
an exaggerated CAR is linked to anxiety and chronic stress.
</p>

<p>
Morning meditation has been shown to blunt this spike, keeping cortisol within a healthy range.
By engaging the parasympathetic nervous system through breath awareness,
you signal safety to your body.
</p>

<figure style="margin:32px 0;text-align:center;">
  <img 
    src="${IMG}/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w"
    alt="Meditating helps reduce activity early in the morning"
    style="width:100%;border-radius:16px;"
  />
  <figcaption style="margin-top:12px;font-size:14px;color:#6b7280;">
    Meditating helps reduce activity early in the morning, improving cognitive outcomes.
  </figcaption>
</figure>

<blockquote style="font-style:italic;font-size:20px;margin:40px 0;text-align:center;">
  “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”
  <br />
  <span style="font-size:14px;color:#6b7280;">— Aristotle (via Will Durant)</span>
</blockquote>

<h2>Neuroplasticity & Routine</h2>

<p>
The concept of neuroplasticity suggests that our brains are malleable.
A study from Harvard Medical School found that 8 weeks of consistent mindfulness practice
increased gray matter density in the hippocampus (associated with learning and memory)
and decreased gray matter density in the amygdala (associated with anxiety and stress).
</p>

<p>
The morning is the ideal time for this "workout" because willpower is a finite resource
that depletes throughout the day. By anchoring the habit to waking up,
you bypass the decision fatigue that often derails evening practices.
</p>

<h2>A Simple 10-Minute Practice</h2>

<ol>
  <li>
    <strong>Hydrate:</strong> Drink a glass of water immediately upon waking
    to activate the metabolism.
  </li>
  <li>
    <strong>Seat:</strong> Sit upright. Do not meditate lying in bed,
    as the brain associates that position with sleep.
  </li>
  <li>
    <strong>Breath (4–7–8):</strong> Inhale for 4 counts, hold for 7,
    exhale for 8. Repeat for 5 minutes.
  </li>
  <li>
    <strong>Intention:</strong> Set one word as your intention for the day
    (e.g., <em>Patience</em>, <em>Focus</em>, <em>Clarity</em>).
  </li>
</ol>
`,
  },
  {
    slug: "advanced-yoga-lower-back-pain",
    image: `${IMG}/AB6AXuCy8gPPmpwwL1jof9Sz8UldKmChU0jc2Oc6tc2sHLcPLKzNn7E59ZiXXWpyI_QFij_wLDNvFQwsWm9WWtNid6BfVKgoeBN07P3xDr27ZVa56tZAPsdf30S2DKrNZy-clM7209D-JJbY2sNfqOb5KTKHVhWreFP1UwEPRqu8JEfu_IdjInRiq9ih51URs-SKNrebWyc2jA3VT5mlOe0XoRlUipOeUfEhGshKdOQu6sub6gGa-_cXHJPX3P1UbMs842f3X43yr_ZGNA`,
    imageAlt: "Yoga stretch",
    badge: "FREE",
    category: "FLEXIBILITY",
    timeAgo: "2 hours ago",
    readTime: "5 min read",
    title: "Advanced Yoga Techniques for Lower Back Pain Relief",
    description:
      "A comprehensive guide tailored by physiotherapists to safely strengthen your lumbar region.",
    author: {
      name: "Dr. Emily Stone",
      title: "Physiotherapist & Yoga Instructor",
      avatarSrc: `${IMG}/AB6AXuCy8gPPmpwwL1jof9Sz8UldKmChU0jc2Oc6tc2sHLcPLKzNn7E59ZiXXWpyI_QFij_wLDNvFQwsWm9WWtNid6BfVKgoeBN07P3xDr27ZVa56tZAPsdf30S2DKrNZy-clM7209D-JJbY2sNfqOb5KTKHVhWreFP1UwEPRqu8JEfu_IdjInRiq9ih51URs-SKNrebWyc2jA3VT5mlOe0XoRlUipOeUfEhGshKdOQu6sub6gGa-_cXHJPX3P1UbMs842f3X43yr_ZGNA`,
      bioSnippet:
        "Specializing in therapeutic yoga for chronic pain management.",
      fullBio:
        "Dr. Emily Stone combines her expertise in physical therapy with 12 years of yoga practice, focusing on evidence-based approaches to pain relief and mobility.",
      profileLink: "#",
    },
    actionLabel: "Read More",
    href: "/articles/advanced-yoga-lower-back-pain",
    tags: ["#Flexibility", "#PainRelief", "#TherapeuticYoga", "#Asana"],
    detailsContent: `
<h2>Understanding Lower Back Pain</h2>

<p>
Lower back pain affects millions of people worldwide, often stemming from poor posture,
sedentary lifestyles, or muscle imbalances. Traditional approaches focus on strengthening,
but yoga offers a holistic solution that addresses both physical and mental aspects of pain.
</p>

<p>
The lumbar region requires a delicate balance of strength and flexibility. Too much rigidity
leads to stiffness, while excessive flexibility without strength can cause instability.
</p>

<h2>Key Yoga Poses for Lower Back Relief</h2>

<p>
These poses are specifically selected for their ability to safely strengthen and stretch
the muscles supporting the lumbar spine.
</p>

<ol>
  <li>
    <strong>Cat-Cow Stretch:</strong> Mobilizes the spine and warms up the back muscles,
    promoting flexibility and reducing stiffness.
  </li>
  <li>
    <strong>Child's Pose:</strong> Gently stretches the lower back muscles and provides
    relief from compression.
  </li>
  <li>
    <strong>Bridge Pose:</strong> Strengthens the glutes and hamstrings while opening
    the hip flexors, crucial for lower back health.
  </li>
  <li>
    <strong>Supine Twist:</strong> Releases tension in the lower back and improves
    spinal rotation.
  </li>
</ol>

<h2>Precautions and Best Practices</h2>

<p>
Always consult with a healthcare provider before starting any new exercise regimen,
especially if you have existing back conditions. Move slowly and listen to your body—
pain is a signal to stop and adjust.
</p>
`,
  },
  {
    slug: "anti-inflammatory-diet-yogis",
    image: `${IMG}/AB6AXuA7b0YECIAWCZL5j9G9vVDAE2rCIVbQZuLI8nxlCfufzpqirdtOOt6ljWrlH6ndlERVT47_UtLNawWgY5V4AeTeFxr2EtKLriVO06CRmq5ElieAu6d2kayArJIV3hMeIzP9IpiKNmWTOmxTc_f6xjs-kyy6Trqxwx2hmsk0WCRBdJyrZjhx1vRvhgHimuQ9PclVafds9tTlpVlIcLOAdrWUXtQvOnvgjv4VRJQDQfCPF1PYxHWhXv0XzHpVuE21zjNNwXT6lNTjag`,
    imageAlt: "Healthy smoothie bowl",
    badge: "PREMIUM",
    category: "NUTRITION",
    timeAgo: "1 day ago",
    readTime: "5 min read",
    title: "The Anti-Inflammatory Diet: Essential Foods for Yogis",
    description:
      "Optimize your recovery and energy levels with this science-backed nutritional plan specifically for practitioners.",
    author: {
      name: "Dr. Mark Chen",
      title: "Nutritionist & Ayurvedic Practitioner",
      avatarSrc: `${IMG}/AB6AXuA7b0YECIAWCZL5j9G9vVDAE2rCIVbQZuLI8nxlCfufzpqirdtOOt6ljWrlH6ndlERVT47_UtLNawWgY5V4AeTeFxr2EtKLriVO06CRmq5ElieAu6d2kayArJIV3hMeIzP9IpiKNmWTOmxTc_f6xjs-kyy6Trqxwx2hmsk0WCRBdJyrZjhx1vRvhgHimuQ9PclVafds9tTlpVlIcLOAdrWUXtQvOnvgjv4VRJQDQfCPF1PYxHWhXv0XzHpVuE21zjNNwXT6lNTjag`,
      bioSnippet:
        "Integrating modern nutrition science with traditional healing practices.",
      fullBio:
        "Dr. Mark Chen is a registered dietitian with a passion for combining evidence-based nutrition with Ayurvedic principles to support optimal health and recovery.",
      profileLink: "#",
    },
    actionLabel: "Unlock Now",
    href: "/articles/anti-inflammatory-diet-yogis",
    tags: ["#Nutrition", "#Recovery", "#Ayurveda", "#Wellness"],
    detailsContent: `
<h2>The Science of Inflammation</h2>

<p>
Inflammation is your body's natural response to injury or stress, but chronic inflammation
can hinder recovery and contribute to various health issues. For yogis, managing inflammation
is crucial for maintaining flexibility and preventing injury.
</p>

<p>
Certain foods have been scientifically proven to reduce inflammation markers in the body,
while others can exacerbate it. Understanding this relationship is key to optimizing your
practice and recovery.
</p>

<h2>Top Anti-Inflammatory Foods</h2>

<p>
These foods should form the foundation of a yogi's diet, supporting both physical recovery
and mental clarity.
</p>

<ol>
  <li>
    <strong>Turmeric:</strong> Contains curcumin, a powerful anti-inflammatory compound
    that can reduce muscle soreness and joint pain.
  </li>
  <li>
    <strong>Leafy Greens:</strong> Rich in antioxidants and phytonutrients that combat
    inflammation at the cellular level.
  </li>
  <li>
    <strong>Fatty Fish:</strong> Omega-3 fatty acids found in salmon and mackerel
    are proven to reduce inflammatory markers.
  </li>
  <li>
    <strong>Berries:</strong> Packed with antioxidants that help reduce oxidative stress
    and inflammation.
  </li>
</ol>

<h2>Foods to Avoid</h2>

<p>
Processed foods, refined sugars, and excessive alcohol can increase inflammation.
Limiting these supports both your practice and overall well-being.
</p>
`,
  },
  {
    slug: "integrating-mindfulness-corporate-life",
    image: `${IMG}/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA`,
    imageAlt: "Yoga retreat",
    badge: "FREE",
    category: "LIFESTYLE",
    timeAgo: "3 days ago",
    readTime: "5 min read",
    title: "Integrating Mindfulness into a Busy Corporate Life",
    description:
      "Practical micro-habits you can build at your desk to reduce stress without leaving the office.",
    author: {
      name: "Sarah Jenkins",
      title: "Corporate Wellness Coach",
      avatarSrc: `${IMG}/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA`,
      bioSnippet:
        "Helping professionals find balance through mindful practices.",
      fullBio:
        "Sarah Jenkins has spent over a decade teaching mindfulness techniques to corporate teams, helping thousands of professionals reduce stress and improve focus.",
      profileLink: "#",
    },
    actionLabel: "Read More",
    href: "/articles/integrating-mindfulness-corporate-life",
    tags: ["#Mindfulness", "#WorkLifeBalance", "#StressRelief", "#Wellness"],
    detailsContent: `
<h2>The Corporate Stress Challenge</h2>

<p>
Modern corporate life is characterized by constant demands, tight deadlines, and
information overload. This environment can lead to chronic stress, burnout, and
decreased productivity.
</p>

<p>
Mindfulness doesn't require hours of meditation or leaving your desk. Small,
intentional practices throughout the day can significantly reduce stress and
improve your mental clarity.
</p>

<h2>Desk-Friendly Mindfulness Practices</h2>

<p>
These micro-habits can be integrated seamlessly into your workday without
disrupting your schedule.
</p>

<ol>
  <li>
    <strong>Breath Awareness:</strong> Take three deep breaths before starting
    any new task. This simple practice activates your parasympathetic nervous system.
  </li>
  <li>
    <strong>Mindful Typing:</strong> Notice the sensation of your fingers on the keyboard
    and the sound of keys clicking. This brings you into the present moment.
  </li>
  <li>
    <strong>Desk Stretches:</strong> Every hour, perform gentle neck rolls and shoulder
    stretches to release physical tension.
  </li>
  <li>
    <strong>Gratitude Moments:</strong> Before lunch, write down one thing you're grateful
    for. This shifts your mindset from stress to appreciation.
  </li>
</ol>

<h2>Building the Habit</h2>

<p>
Start with just one practice and commit to it for a week. Once it becomes automatic,
add another. Small, consistent actions create lasting change.
</p>
`,
  },
  {
    slug: "physiology-of-sleep-yoga-nidra",
    image: `${IMG}/AB6AXuAL2At9VNIDV2jYPUYacUgeb5QuCRcdIMpQoiEzjSGgKU-g6-WKDO7WjTs8XOrU2DjC8PZuHGPpgvDGYobaL2mawEpeWE6PMnB6nHJQHjDmY7cp0reGTafNmQ1-lCO9Cepew_ULT8rKzLe9HB09r76HCogIfoPPgcaiNbjRX6TZSFenHv1iYXo9fcTc1LlDgox6O5EYxTueXx1FGL0lew5dZpQD-cCYkbRq2x40kB-QyS2ZgQgONZx04zmeY_CzfOmSrulIinsMiw`,
    imageAlt: "Sleep meditation",
    badge: "PREMIUM",
    category: "SLEEP",
    timeAgo: "1 week ago",
    readTime: "5 min read",
    title: "The Physiology of Sleep: Yoga Nidra Explained",
    description:
      "Deep dive into the non-sleep deep rest (NSDR) protocols that can replace hours of lost sleep.",
    author: {
      name: "Dr. Alan Grant",
      title: "Sleep Medicine Specialist",
      avatarSrc: `${IMG}/AB6AXuAL2At9VNIDV2jYPUYacUgeb5QuCRcdIMpQoiEzjSGgKU-g6-WKDO7WjTs8XOrU2DjC8PZuHGPpgvDGYobaL2mawEpeWE6PMnB6nHJQHjDmY7cp0reGTafNmQ1-lCO9Cepew_ULT8rKzLe9HB09r76HCogIfoPPgcaiNbjRX6TZSFenHv1iYXo9fcTc1LlDgox6O5EYxTueXx1FGL0lew5dZpQD-cCYkbRq2x40kB-QyS2ZgQgONZx04zmeY_CzfOmSrulIinsMiw`,
      bioSnippet:
        "Researching the intersection of sleep science and yogic practices.",
      fullBio:
        "Dr. Alan Grant is a board-certified sleep medicine physician who has dedicated his career to understanding how ancient practices like Yoga Nidra can complement modern sleep medicine.",
      profileLink: "#",
    },
    actionLabel: "Unlock Now",
    href: "/articles/physiology-of-sleep-yoga-nidra",
    tags: ["#Sleep", "#YogaNidra", "#Recovery", "#StressRelief"],
    detailsContent: `
<h2>Understanding Non-Sleep Deep Rest (NSDR)</h2>

<p>
Yoga Nidra, often called "yogic sleep," is a state of consciousness between waking and sleeping.
Research shows that 20-30 minutes of Yoga Nidra can provide the restorative benefits
equivalent to 2-3 hours of deep sleep.
</p>

<p>
This practice activates the parasympathetic nervous system, promoting deep relaxation
and cellular repair. For those struggling with sleep deprivation or insomnia, Yoga Nidra
offers a powerful alternative.
</p>

<h2>The Science Behind Yoga Nidra</h2>

<p>
During Yoga Nidra, brain scans reveal a unique pattern: alpha brain waves increase
while delta waves (deep sleep) are also present. This combination is rare and highly
restorative.
</p>

<p>
The practice also increases heart rate variability (HRV), a marker of recovery and
resilience. Higher HRV is associated with better stress management and overall health.
</p>

<h2>How to Practice</h2>

<p>
Yoga Nidra is typically practiced lying down, guided by an instructor or audio recording.
The practice involves systematic body scanning and visualization techniques that guide
you into deep relaxation.
</p>

<ol>
  <li>
    <strong>Preparation:</strong> Lie in a comfortable position, ensuring you won't be disturbed
    for 20-30 minutes.
  </li>
  <li>
    <strong>Body Scan:</strong> Systematically bring awareness to each part of your body,
    releasing tension as you go.
  </li>
  <li>
    <strong>Breath Awareness:</strong> Follow your natural breath without trying to change it.
  </li>
  <li>
    <strong>Visualization:</strong> Engage in guided imagery that promotes deep relaxation.
  </li>
</ol>
`,
  },
  {
    slug: "building-core-stability-asana",
    image: `${IMG}/AB6AXuAGcbH_kIu67wIhsqgdymXuarItV68HLuzKiW5ZoS9bbATq5n6kdcqROnz5c4SiMDxB3IRLzS3TbqtfMx3rlpyC-_iZDGDTH4aHW3dCYiw_BVIrmgw3mMM9PI-9K-w9KUoDsjZNSvvb6iGU3Os39diTQ6UYPqVG2gmsDMFWBKconjEy6YBNUbB94u5WkQL7yzWILVLBFMoCfRdukwygMUofTHcPXc3K-8oKPEp7tDZN6O7ncrcIBliMvaNWBdmZIR9TKtDfqNf2Cw`,
    imageAlt: "Strength training",
    badge: "FREE",
    category: "STRENGTH",
    timeAgo: "2 weeks ago",
    title: "Building Core Stability Through Asana Practice",
    description:
      "Forget crunches. Here are the 5 essential yoga poses that build true functional core strength.",
    author: {
      name: "Lisa Ray",
      title: "Yoga Instructor & Movement Specialist",
      avatarSrc: `${IMG}/AB6AXuAGcbH_kIu67wIhsqgdymXuarItV68HLuzKiW5ZoS9bbATq5n6kdcqROnz5c4SiMDxB3IRLzS3TbqtfMx3rlpyC-_iZDGDTH4aHW3dCYiw_BVIrmgw3mMM9PI-9K-w9KUoDsjZNSvvb6iGU3Os39diTQ6UYPqVG2gmsDMFWBKconjEy6YBNUbB94u5WkQL7yzWILVLBFMoCfRdukwygMUofTHcPXc3K-8oKPEp7tDZN6O7ncrcIBliMvaNWBdmZIR9TKtDfqNf2Cw`,
      bioSnippet:
        "Teaching functional movement patterns for everyday strength.",
      fullBio:
        "Lisa Ray combines her background in kinesiology with 15 years of yoga teaching experience, focusing on building functional strength that translates to daily life.",
      profileLink: "#",
    },
    actionLabel: "Read More",
    href: "/articles/building-core-stability-asana",
    tags: ["#CoreStrength", "#FunctionalMovement", "#Asana", "#Flexibility"],
    detailsContent: `
<h2>Why Traditional Crunches Fall Short</h2>

<p>
Traditional crunches primarily target the rectus abdominis (the "six-pack" muscle),
but true core stability requires engagement of multiple muscle groups working together.
The core includes not just the abdominals, but also the obliques, transverse abdominis,
erector spinae, and deep stabilizing muscles.
</p>

<p>
Yoga poses challenge your core in multiple planes of movement, building functional
strength that supports your spine and improves posture in ways crunches cannot.
</p>

<h2>The 5 Essential Core-Strengthening Poses</h2>

<p>
These poses build comprehensive core strength while maintaining flexibility and
promoting proper alignment.
</p>

<ol>
  <li>
    <strong>Plank Pose (Phalakasana):</strong> Builds isometric strength throughout
    the entire core while engaging the shoulders and legs.
  </li>
  <li>
    <strong>Boat Pose (Navasana):</strong> Challenges your balance while strengthening
    the deep core muscles and hip flexors.
  </li>
  <li>
    <strong>Side Plank (Vasisthasana):</strong> Targets the obliques and improves
    lateral stability.
  </li>
  <li>
    <strong>Dolphin Pose:</strong> Engages the core while building shoulder strength
    and flexibility.
  </li>
  <li>
    <strong>Warrior III (Virabhadrasana III):</strong> Requires deep core engagement
    to maintain balance while strengthening the entire posterior chain.
  </li>
</ol>

<h2>Progression and Safety</h2>

<p>
Start with modified versions of these poses and gradually build up. Focus on quality
of movement over quantity. Proper form ensures you're strengthening the right muscles
and protecting your spine.
</p>
`,
  },
  {
    slug: "pranayama-for-anxiety-doctors-perspective",
    image: `${IMG}/AB6AXuAT3K0Iynma3Ll_ZahX8MptcKhQmX4LZc3Y_eSgx0cWHIv4AT8TKxUhZ8q0v076XUFgJr3ctGzpEkRRXxTbrZmde5cdgp-V-FtNj8q7Nyi2PMYmaQu8Y46XbjILN2fSfDhumenMfNtpG9CvEGdaynSO05-I2nJSeXcwEB3BuKVvU8mLLu6c6h2xAj130rUQ66g8IYSvnZp11SmtPEUucldf29h90VP05yR8NwyTME68RZeWTRnc-i4q3KTitCzqbifiK1AQVCqevQ`,
    imageAlt: "Breathing exercises",
    badge: "FREE",
    category: "BREATHWORK",
    timeAgo: "2 weeks ago",
    title: "Pranayama for Anxiety: A Doctor's Perspective",
    description:
      "Understanding the sympathetic vs parasympathetic nervous system response to breath control.",
    author: {
      name: "Dr. Sarah West",
      title: "MD, Yoga Therapist",
      avatarSrc: `${IMG}/AB6AXuD8-FnpMuQWsRv9j9QqxraIc7Cua-g0V-BL240ajowmJ1qajM5LEQHOp4Je_FjfXr-C1lURzsKewiA--UOvcq_eOJfG4CxRtABpobKUtTysoqY4QqpAwp5jry8EMkJvGAbRamzEmyz-1avzPGpV1mjd-k7YXFg-XG5XGQY_o4r4DU5dRflAibVlakeI6P9YkD8XisP6iodFTngVgAWC2sywne5YUWB75i4LrLBs5bnb4q8M3XqEBJXcSjmtUDCBGlnyvehQjo3lhg`,
      bioSnippet:
        "Specializing in the intersection of neuroscience and traditional yogic practices.",
      fullBio:
        "Dr. Sarah West combines her background in internal medicine with 15 years of yoga practice. She believes in an integrative approach to health where Western diagnostics meet Eastern preventative wisdom.",
      profileLink: "#",
    },
    actionLabel: "Read More",
    href: "/articles/pranayama-for-anxiety-doctors-perspective",
    tags: ["#Pranayama", "#AnxietyRelief", "#Breathwork", "#Mindfulness"],
    detailsContent: `
<h2>The Autonomic Nervous System</h2>

<p>
Your autonomic nervous system has two main branches: the sympathetic (fight-or-flight)
and parasympathetic (rest-and-digest). Anxiety disorders often involve an overactive
sympathetic nervous system, keeping the body in a constant state of alert.
</p>

<p>
The remarkable thing about breathing is that it's the only autonomic function we can
consciously control. By changing how we breathe, we can directly influence which
branch of the nervous system is dominant.
</p>

<h2>How Pranayama Works</h2>

<p>
Slow, controlled breathing activates the vagus nerve, which signals the brain to
switch from sympathetic to parasympathetic dominance. This physiological shift
reduces heart rate, lowers blood pressure, and calms the mind.
</p>

<p>
Research shows that specific breathing patterns can reduce anxiety symptoms as effectively
as some medications, without side effects. The key is consistency and proper technique.
</p>

<h2>Effective Pranayama Techniques for Anxiety</h2>

<p>
These techniques are specifically chosen for their ability to activate the
parasympathetic nervous system.
</p>

<ol>
  <li>
    <strong>4-7-8 Breathing:</strong> Inhale for 4 counts, hold for 7, exhale for 8.
    This ratio naturally slows the breath and activates relaxation.
  </li>
  <li>
    <strong>Alternate Nostril Breathing (Nadi Shodhana):</strong> Balances the left
    and right hemispheres of the brain, promoting mental clarity and calm.
  </li>
  <li>
    <strong>Box Breathing:</strong> Equal inhale, hold, exhale, hold (each for 4 counts).
    Used by Navy SEALs to maintain calm under pressure.
  </li>
  <li>
    <strong>Belly Breathing:</strong> Deep diaphragmatic breathing that fully engages
    the parasympathetic response.
  </li>
</ol>

<h2>When to Practice</h2>

<p>
Practice these techniques daily for prevention, and use them as needed during moments
of acute anxiety. The more you practice, the more effective they become.
</p>
`,
  },
];

// ---------- Full article details (by slug) ----------

/**
 * Get article card by slug (from list/grid).
 */
export function getArticleDetailsBySlug(slug: string): ArticleDetails | null {
  return dummyArticleCards.find((a) => a.slug === slug) ?? null;
}

/**
 * Get related article cards based on tags matching.
 * Finds articles that share at least one tag with the given article slug.
 * @param slug - The slug of the article to find related articles for
 * @param limit - Maximum number of related articles to return (default: 3)
 * @returns Array of related article cards
 */
export function getRelatedArticles(
  slug: string,
  limit: number = 3,
): ArticleDetails[] {
  const currentArticle = getArticleDetailsBySlug(slug);

  if (
    !currentArticle ||
    !currentArticle.tags ||
    currentArticle.tags.length === 0
  ) {
    return [];
  }

  const currentTags = currentArticle.tags.map((tag) => tag.toLowerCase());

  // Find articles with matching tags, excluding the current article
  const related = dummyArticleCards
    .filter(
      (article) =>
        article.slug !== slug && article.tags && article.tags.length > 0,
    )
    .map((article) => {
      const articleTags = article.tags.map((tag) => tag.toLowerCase());
      const matchingTags = currentTags.filter((tag) =>
        articleTags.includes(tag),
      );
      return {
        article,
        matchCount: matchingTags.length,
      };
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount) // Sort by number of matching tags
    .slice(0, limit)
    .map((item) => item.article);

  return related;
}
