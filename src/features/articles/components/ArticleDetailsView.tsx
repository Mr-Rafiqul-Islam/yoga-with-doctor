"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  ArticleDetails,
  ArticleCardItem,
} from "@/features/articles/data/dummyArticles";

type ArticleDetailsViewProps = {
  article: ArticleDetails;
  relatedArticles: ArticleCardItem[];
};

export function ArticleDetailsView({
  article,
  relatedArticles,
}: ArticleDetailsViewProps) {
  const {
    heroImage,
    category,
    readTime,
    title,
    author,
    leadParagraph,
    tableOfContents,
    sections,
    numberedList,
    tags,
  } = article;

  return (
    <main className="relative z-20 mx-auto mb-20 w-full max-w-7xl flex-grow px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlay card: category, read time, title, author */}
      <div className="-mt-24 max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-elevation-md md:p-12 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              {category}
            </span>
            <span className="text-muted" aria-hidden>
              •
            </span>
            <span className="flex items-center gap-1 text-body-md font-medium text-muted">
              <span className="material-icons-outlined text-sm" aria-hidden>
                schedule
              </span>
              {readTime}
            </span>
          </div>
          <h1 className="mb-8 font-display text-2xl font-bold leading-tight text-foreground md:text-4xl lg:text-6xl dark:text-white">
            {title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 border-t border-border pt-8 md:flex-row">
            <div className="flex items-center gap-4 text-left">
              <Image
                src={author.avatarSrc}
                alt=""
                width={56}
                height={56}
                className="rounded-full object-cover ring-4 ring-gray-100 dark:ring-gray-800"
              />
              <div>
                <p className="text-body-lg font-bold text-foreground dark:text-white">
                  {author.name}
                </p>
                <p className="text-caption uppercase tracking-wide text-muted">
                  {author.title}
                </p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-border md:block" />
            <p className="max-w-xs text-center text-body-md text-muted md:text-left">
              {author.bioSnippet}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column: sidebar + article body */}
      <div className="relative mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="font-display text-h2 font-bold text-foreground dark:text-white mb-4">
                Table of Contents
              </h3>
              <ul className="ml-1 space-y-3 border-l-2 border-border text-body-md">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`block border-l-2 pl-4 -ml-0.5 transition-colors ${
                        index === 0
                          ? "border-primary font-medium text-primary"
                          : "border-transparent text-muted hover:border-gray-300 hover:text-foreground dark:hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-h2 font-bold text-foreground dark:text-white mb-4">
                Share
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-200"
                  aria-label="Share"
                >
                  <span className="material-icons-outlined text-sm">share</span>
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-200"
                  aria-label="Bookmark"
                >
                  <span className="material-icons-outlined text-sm">
                    bookmark
                  </span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <article className="prose prose-lg max-w-none lg:col-span-8 lg:col-start-4 dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h2:text-foreground prose-p:text-muted prose-p:leading-relaxed prose-strong:text-primary">
          <p className="lead mb-8 text-body-lg leading-relaxed text-muted">
            {leadParagraph}
          </p>

          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-display text-h1 font-bold text-foreground dark:text-white my-2">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-muted">
                  {para}
                </p>
              ))}
              {section.medicalInsight && (
                <div className="my-10 rounded-r-xl border-l-4 border-primary bg-sage-light p-6 dark:bg-emerald-900/10">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-icons-outlined text-3xl text-primary"
                      aria-hidden
                    >
                      medical_services
                    </span>
                    <div>
                      <h4 className="mb-2 mt-0 text-caption font-bold uppercase tracking-wider text-primary">
                        {section.medicalInsight.title}
                      </h4>
                      <p className="m-0 text-body-lg leading-relaxed text-foreground dark:text-gray-300">
                        {section.medicalInsight.body}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {section.figure && (
                <figure className="my-8">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-elevation-md">
                    <Image
                      src={section.figure.imageSrc}
                      alt={section.figure.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-caption italic text-muted">
                    {section.figure.caption}
                  </figcaption>
                </figure>
              )}
              {section.quote && (
                <blockquote className="relative my-8 border-l-0 py-8 pl-0">
                  <span
                    className="absolute left-0 top-0 font-display text-6xl text-primary opacity-20"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="px-8 text-center font-display text-2xl font-medium italic leading-tight text-foreground md:text-3xl dark:text-white">
                    {section.quote.text}
                  </p>
                  <cite className="mt-4 block text-center text-caption font-bold not-italic text-muted">
                    {section.quote.cite}
                  </cite>
                </blockquote>
              )}
            </section>
          ))}

          {numberedList && numberedList.length > 0 && (
            <ul className="mt-8 list-none space-y-4 pl-0">
              {numberedList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-muted">
                    <strong className="text-foreground dark:text-white">
                      {item.title}:
                    </strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-body-md font-medium text-muted transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Author bio */}
      <section className="mx-auto mt-20 max-w-4xl mb-16">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-surface p-8 shadow-elevation-sm sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <Image
              src={author.avatarSrc}
              alt=""
              width={128}
              height={128}
              className="rounded-full object-cover ring-4 ring-emerald-50 dark:ring-emerald-900/30"
            />
            <div className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-primary p-1 text-white dark:border-gray-800">
              <span className="material-icons-outlined text-sm">check</span>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground dark:text-white mb-2">
              {author.name}
            </h3>
            <p className="text-body-md font-medium uppercase tracking-wide text-primary mb-4">
              Medical Doctor & Yoga Therapist
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              {author.fullBio}
            </p>
            <Link
              href={author.profileLink}
              className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary-dark group"
            >
              View Full Profile
              <span className="material-icons-outlined ml-1 text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="border-t border-border pt-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-foreground dark:text-white">
            Related Articles
          </h2>
          <Link
            href="/articles"
            className="hidden items-center font-medium text-muted transition-colors hover:text-primary sm:inline-flex"
          >
            View all
            <span className="material-icons-outlined ml-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {relatedArticles.map((related) => (
            <Link
              key={related.slug}
              href={related.href}
              className="group block"
            >
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={related.imageSrc}
                  alt={related.imageAlt}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${
                    related.badge === "PREMIUM"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                      : "bg-white/90 text-foreground backdrop-blur-sm dark:bg-black/70 dark:text-white"
                  }`}
                >
                  {related.badge === "PREMIUM" && (
                    <span className="material-icons-outlined mr-1 text-[10px]">
                      lock
                    </span>
                  )}
                  {related.category}
                </span>
              </div>
              <h3 className="mb-2 font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary dark:text-white">
                {related.title}
              </h3>
              <p className="line-clamp-2 text-body-md text-muted">
                {related.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
