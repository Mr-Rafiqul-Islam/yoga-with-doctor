import Image from "next/image";
import Link from "next/link";

type MaterialIconName =
  | "school"
  | "medical_services"
  | "vaccines"
  | "business"
  | "self_improvement"
  | "local_hospital"
  | "science"
  | "groups"
  | "public";

type CredentialItem = {
  icon: MaterialIconName;
  title: string;
  subtitle: string;
};

type CredentialColumn = {
  title: string;
  items: CredentialItem[];
};

export const MEET_OUR_EXPERT = {
  sectionLabel: "THE EXPERT BEHIND YOGA WITH DOCTOR",
  title: "Meet Dr. Shah Alam",
  intro:
    "Orthopedic Specialist, surgeon, and Yoga Instructor dedicated to helping people prevent disease, recover naturally, and build lifelong health through the integration of medical science, therapeutic yoga and Natural Remedy System.",
  credentialColumns: [
    {
      title: "Education & Professional Credentials",
      items: [
        {
          icon: "school" as const,
          title: "MBBS",
          subtitle: "Rangpur Medical College",
        },
        {
          icon: "school" as const,
          title: "D-Ortho (BSMMU)",
          subtitle:
            "Bangabandhu Sheikh Mujib Medical University (PG Hospital), Dhaka",
        },
        {
          icon: "medical_services" as const,
          title: "Clinical Training",
          subtitle: "Shaheed Suhrawardy Medical College Hospital, Dhaka",
        },
        {
          icon: "vaccines" as const,
          title: "Advanced Pain Medicine Training",
          subtitle: "Special Course in Pain Medicine, India",
        },
        {
          icon: "business" as const,
          title: "Industry Experience",
          subtitle: "Former Medical Professional, Square Pharmaceuticals Ltd.",
        },
        {
          icon: "self_improvement" as const,
          title: "Yoga Certification",
          subtitle: "Certified Life Member, Indian Yoga Association",
        },
      ],
    },
    {
      title: "Experience & Impact",
      items: [
        {
          icon: "local_hospital" as const,
          title: "12+ Years",
          subtitle: "Spine Surgery Experience",
        },
        {
          icon: "self_improvement" as const,
          title: "10+ Years",
          subtitle: "Therapeutic Yoga Practice & Teaching",
        },
        {
          icon: "science" as const,
          title: "1,000+",
          subtitle: "PLID & Spine Surgeries Performed",
        },
        {
          icon: "vaccines" as const,
          title: "10,000+",
          subtitle: "Epidural Steroid Injections Administered",
        },
        {
          icon: "groups" as const,
          title: "100,000+",
          subtitle: "PLID Patient Consultations",
        },
        {
          icon: "public" as const,
          title: "3 Million+",
          subtitle:
            "Patients Reached Through Online Health Education & Support",
        },
      ],
    },
  ] satisfies CredentialColumn[],
  cta: {
    href: "https://doctorshahalam.com/",
    label: "Know More About Dr. Shah Alam",
  },
  quote:
    "My vision is to build a future where every person has access to trusted health education, therapeutic yoga, and evidence-based healing solutions—helping millions live healthier, stronger, and pain-free lives.",
  quoteAttribution: "Dr. Shah Alam",
  image: {
    src: "/dr-shah-alam-cutout.png",
    alt: "Dr. Shah Alam — orthopedic specialist and yoga instructor",
    width: 640,
    height: 800,
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
} as const;

function CredentialRow({ item }: { item: CredentialItem }) {
  return (
    <li className="flex items-start gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary dark:bg-[#1b332080] dark:text-primary-on-dark"
        aria-hidden
      >
        <span className="material-icons-outlined text-base">{item.icon}</span>
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-sm text-foreground dark:text-white">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs leading-snug text-muted dark:text-gray-400">
          {item.subtitle}
        </p>
      </div>
    </li>
  );
}

function CredentialColumnBlock({ column }: { column: CredentialColumn }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary dark:text-primary-on-dark">
        {column.title}
      </h3>
      <ul className="space-y-4">
        {column.items.map((item) => (
          <CredentialRow key={`${column.title}-${item.title}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

export function MeetOurExpertSection() {
  const {
    sectionLabel,
    title,
    intro,
    credentialColumns,
    cta,
    quote,
    quoteAttribution,
    image,
  } = MEET_OUR_EXPERT;

  return (
    <section
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="meet-expert-heading"
    >
      <div>
        <div className="mb-4 flex items-center gap-2.5">
          <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
            {sectionLabel}
          </span>
        </div>

        <h2
          id="meet-expert-heading"
          className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
        >
          {title}
        </h2>

        <p className="mt-3 max-w-xl text-body-md text-muted dark:text-gray-400">
          {intro}
        </p>
      </div>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
            {credentialColumns.map((column) => (
              <CredentialColumnBlock key={column.title} column={column} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-visible lg:max-w-none order-1 lg:order-2">
          <div className="relative h-[320px] w-full xl:w-[550px] overflow-visible sm:h-[320px] lg:h-[380px]">
            {/* Layer 1: mint base panel — visible on top and right */}
            <div
              className="absolute right-0 top-6 h-[calc(100%-1rem)] w-[90%] rounded-2xl bg-sage-light dark:bg-sage-dark sm:top-8 sm:w-[88%]"
              aria-hidden
            />

            {/* Layer 2: dark green quote block — tall left overlay on mint panel */}
            <div className="absolute left-0 sm:left-4 bottom-2 z-10 flex h-[76%] w-[58%] flex-col rounded-2xl bg-primary p-5 shadow-lg sm:h-[78%] sm:w-[56%] sm:p-7 lg:p-8">
              <blockquote className="text-white">
                <p className="text-[11px] sm:text-xs md:text-sm italic leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold not-italic sm:mt-5">
                  — {quoteAttribution}
                </footer>
              </blockquote>
            </div>

            {/* Layer 3: cutout portrait — overlaps quote block and mint base */}
            <div className="absolute -top-2 bottom-0 -right-10 z-20 w-[78%] sm:-top-4 sm:w-[74%] lg:w-[72%]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.sizes}
                className="object-contain object-bottom"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-white"
        >
          {cta.label}
          <span className="material-icons-outlined ml-2 text-xl" aria-hidden>
            arrow_forward
          </span>
        </Link>
      </div>
    </section>
  );
}
