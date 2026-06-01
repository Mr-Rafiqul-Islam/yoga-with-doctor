import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

type CommunityChannel = {
  id: string;
  title: string;
  description: string;
  href: string;
  Icon: typeof FaWhatsapp;
  iconClassName: string;
};

const WHATSAPP_COMMUNITY_URL =
  "https://wa.me/8801349002180?text=" +
  encodeURIComponent("Hello, I would like to join the Yoga With Doctor community.");

export const JOIN_COMMUNITY = {
  sectionLabel: "Join Our Community",
  title: "Stronger Together",
  subtitle:
    "Join our growing health community and stay motivated on your healing journey.",
  channels: [
    {
      id: "whatsapp",
      title: "WhatsApp Community",
      description: "Get daily tips, updates & support",
      href: WHATSAPP_COMMUNITY_URL,
      Icon: FaWhatsapp,
      iconClassName: "bg-[#25D366]/10 text-[#25D366]",
    },
    {
      id: "facebook",
      title: "Facebook Group",
      description: "Join discussions & share experiences",
      href: "https://www.facebook.com/yogawithdoctor",
      Icon: FaFacebook,
      iconClassName: "bg-[#1877F2]/10 text-[#1877F2]",
    },
    {
      id: "telegram",
      title: "Telegram Channel",
      description: "Get instant updates & live session alerts",
      href: "https://t.me/yogawithdoctor",
      Icon: FaTelegram,
      iconClassName: "bg-[#0088cc]/10 text-[#0088cc]",
    },
  ] satisfies CommunityChannel[],
  ctaCard: {
    title: "Be Part of a Movement",
    description:
      "Thousands are already on their journey to better health. Don't do it alone—join our community today!",
    memberCountLabel: "+2K",
    backgroundImage: "/movement.jpg",
    button: {
      href: "/",
      label: "Join Our Community Now",
    },
  },
  avatars: [
    "/clients.jpg",
    "/clients-2.jpg",
    "/clients-3.jpg",
  ],
} as const;

function CommunityChannelCard({ channel }: { channel: CommunityChannel }) {
  const { Icon } = channel;

  return (
    <li>
      <Link
        href={channel.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface p-3 shadow-soft transition-all hover:border-primary/30 hover:shadow-elevation-md dark:border-white/10 dark:bg-surface dark:hover:border-primary/30 sm:p-4"
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${channel.iconClassName}`}
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <p className="font-semibold text-sm text-foreground dark:text-white">
            {channel.title}
          </p>
          <p className="mt-0.5 text-xs text-muted dark:text-gray-400">
            {channel.description}
          </p>
        </div>
        <span
          className="material-icons-outlined shrink-0 text-xl text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary-on-dark"
          aria-hidden
        >
          chevron_right
        </span>
      </Link>
    </li>
  );
}

export function JoinCommunitySection() {
  const { sectionLabel, title, subtitle, channels, ctaCard, avatars } =
    JOIN_COMMUNITY;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="join-community-heading"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="join-community-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted dark:text-gray-400 sm:text-base">
            {subtitle}
          </p>

          <ul className="mt-8 space-y-2.5">
            {channels.map((channel) => (
              <CommunityChannelCard key={channel.id} channel={channel} />
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-primary p-6 shadow-lg sm:p-8 lg:p-10">
          <Image
            src={ctaCard.backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="(max-width: 1024px) 100vw, 50vw"
            aria-hidden
          />
          <div className="relative z-10 flex h-full flex-col">
            <h3 className="font-anek-bangla text-2xl font-bold text-white sm:text-3xl">
              {ctaCard.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              {ctaCard.description}
            </p>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {avatars.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-primary sm:h-10 sm:w-10"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-primary sm:h-10 sm:w-10 sm:text-sm">
                {ctaCard.memberCountLabel}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Link
                href={ctaCard.button.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto sm:px-6 sm:py-4"
              >
                {ctaCard.button.label}
                <span className="material-icons-outlined text-xl" aria-hidden>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
