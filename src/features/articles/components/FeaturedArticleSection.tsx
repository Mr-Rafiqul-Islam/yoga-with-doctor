import Image from "next/image";
import Link from "next/link";
import type { FeaturedArticle } from "@/features/articles/data/dummyArticles";

type FeaturedArticleSectionProps = {
  article: FeaturedArticle;
};

/**
 * Editor's Choice featured article: image + badge, category, read time, title, description, author, CTA.
 */
export function FeaturedArticleSection({ article }: FeaturedArticleSectionProps) {
  const {
    imageSrc,
    imageAlt,
    category,
    readTime,
    title,
    description,
    author,
    href,
  } = article;

  return (
    <section className="mb-16" aria-label="Editor's choice article">
      <div className="group relative flex h-auto flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-elevation-md md:h-[450px] md:flex-row">
        <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-full md:w-3/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground backdrop-blur-sm dark:bg-black/80 dark:text-white">
            Editor&apos;s Choice
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center p-8 md:w-2/5 md:p-12">
          <div className="mb-4 flex items-center gap-3 text-body-md text-muted">
            <span className="font-medium text-primary">{category}</span>
            <span aria-hidden>•</span>
            <span>{readTime}</span>
          </div>
          <h2 className="mb-6 font-display text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mb-8 line-clamp-3 text-body-lg leading-relaxed text-muted">
            {description}
          </p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={author.avatarSrc}
                alt=""
                width={40}
                height={40}
                className="rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <p className="text-body-md font-semibold text-foreground">
                  {author.name}
                </p>
                <p className="text-caption text-muted">{author.title}</p>
              </div>
            </div>
            <Link
              href={href}
              className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Read Article
              <span className="material-icons-outlined text-lg" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
