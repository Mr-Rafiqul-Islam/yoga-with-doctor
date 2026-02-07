import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = {
  title: string;
  description: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatarSrc: string;
  price: string;
  badge?: string;
  badgeVariant?: "green" | "blue" | "purple";
  rating?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

const BADGE_STYLES = {
  green: "bg-primary text-white",
  blue: "bg-blue-500 text-white",
  purple: "bg-purple-500 text-white",
} as const;

export function CourseCard({
  title,
  description,
  instructorName,
  instructorTitle,
  instructorAvatarSrc,
  price,
  badge,
  badgeVariant = "green",
  rating,
  imageSrc,
  imageAlt,
  href = "/courses",
}: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-radius-lg bg-surface shadow-elevation-sm transition-all hover:shadow-elevation-md sm:flex-row">
      <div className="relative h-48 flex-shrink-0 sm:w-2/5 sm:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 40vw"
        />
        {badge && (
          <span
            className={`absolute left-3 top-3 rounded px-2 py-1 text-caption font-bold shadow-sm ${BADGE_STYLES[badgeVariant]}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 sm:w-3/5">
        <div>
          <div className="mb-2 flex items-start justify-between gap-2">
            {rating && (
              <span className="flex items-center text-body-md font-bold text-yellow-500">
                ★ {rating}
              </span>
            )}
          </div>
          <h3 className="mb-2 font-serif text-h1 font-bold text-foreground">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-body-md text-muted">
            {description}
          </p>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={instructorAvatarSrc}
              alt=""
              width={32}
              height={32}
              className="rounded-radius-full border border-border object-cover"
            />
            <div className="text-body-md">
              <p className="font-medium text-foreground">{instructorName}</p>
              <p className="text-caption text-muted">{instructorTitle}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-h2 font-bold text-foreground">{price}</span>
            <Link
              href={href}
              className="rounded-radius-sm bg-primary px-4 py-2 text-button font-semibold text-white transition-colors hover:bg-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
