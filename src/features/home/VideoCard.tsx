import Image from "next/image";
import Link from "next/link";

export type VideoCardProps = {
  title: string;
  duration: string;
  level: string;
  instructor: string;
  thumbnail: string;
  imageAlt: string;
  href?: string;
};

export function VideoCard({
  title,
  duration,
  level,
  instructor,
  thumbnail,
  imageAlt,
  href = "#",
}: VideoCardProps) {
  const content = (
    <>
      <div className="relative h-48">
        <Image
          src={thumbnail}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40"
          aria-hidden
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-radius-full bg-white/90 pl-1 text-primary transition-transform group-hover:scale-110">
            <span className="text-2xl" aria-hidden>▶</span>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-caption text-white">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 font-sans text-h2 font-semibold text-foreground">
          {title}
        </h3>
        <div className="flex items-center justify-between text-body-md text-muted">
          <span>{level}</span>
          <span>{instructor}</span>
        </div>
      </div>
    </>
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-radius-md bg-surface shadow-elevation-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-md">
      {href ? (
        <Link
          href={href}
          className="flex flex-col focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-radius-md"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
