"use client";

import Image from "next/image";
import Link from "next/link";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";
import { generateToc } from "@/lib/generateToc";
import { normalizeRichtextHtmlForDom } from "@/lib/normalizeApiHtml";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useEffect, useMemo, useState } from "react";
import { ArticleBookmarkButton } from "./ArticleBookmarkButton";
import { ArticleShareButton } from "./ArticleShareButton";

type ArticleDetailsViewProps = {
  article: ArticleDetails;
  relatedArticles: ArticleDetails[];
  /** API article id — used as stable key in per-user saved library (localStorage). */
  articleApiId: string;
};

export function ArticleDetailsView({
  article,
  relatedArticles,
  articleApiId,
}: ArticleDetailsViewProps) {
  const {
    image,
    imageAlt,
    category,
    title,
    author,
    tags = [],
    detailsContent,
    description,
  } = article;

  const normalizedHtml = useMemo(
    () => normalizeRichtextHtmlForDom(detailsContent),
    [detailsContent],
  );

  const [toc, setToc] = useState<{ id: string; text: string }[]>([]);
  const [content, setContent] = useState(normalizedHtml);
  const activeId = useScrollSpy(toc.map((item) => item.id));
  useEffect(() => {
    const { toc: nextToc, contentWithIds } = generateToc(normalizedHtml);
    setToc(nextToc);
    setContent(contentWithIds);
  }, [normalizedHtml]);

  return (
    <main className="relative z-20 mx-auto mb-20 w-full max-w-7xl flex-grow px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlay card: category, read time, title, author */}
      <div className="-mt-24 max-w-4xl mx-auto relative z-10">
        <div className="relative rounded-3xl border border-border bg-surface p-8 shadow-elevation-md md:p-12 text-center">
          <ArticleBookmarkButton
            variant="mobile"
            article={article}
            articleApiId={articleApiId}
          />
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
              {/* {readTime} */} 3 min
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
            {toc.length > 0 && (
              <div>
                <h3 className="font-display text-h2 font-bold text-foreground dark:text-white mb-4">
                  Table of Contents
                </h3>
                <ul className="ml-1 space-y-3 border-l-2 border-border text-body-md">
                  {toc.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                      <li key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          className={`block border-l-2 pl-4 -ml-0.5 transition-colors ${
                            isActive
                              ? "border-primary font-medium text-primary"
                              : "border-transparent text-muted hover:border-gray-300 hover:text-foreground dark:hover:text-gray-200"
                          }`}
                        >
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div>
              <h3 className="font-display text-h2 font-bold text-foreground dark:text-white mb-4">
                Share
              </h3>
              <div className="flex gap-2">
                <ArticleShareButton
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-200"
                />
                <ArticleBookmarkButton
                  variant="sidebar"
                  article={article}
                  articleApiId={articleApiId}
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-8 lg:col-start-4">
          <p className="lead mb-8 text-body-lg leading-relaxed text-muted">
            {description}
          </p>
          <article
            className="prose prose-lg max-w-none lg:col-span-8 lg:col-start-4 dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h2:text-foreground prose-p:text-muted prose-p:leading-relaxed prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: content }}
          />

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
        </div>
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
            <p className="mb-6 leading-relaxed text-muted">{author.fullBio}</p>
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
      {relatedArticles.length > 0 && (
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
              <span className="material-icons-outlined ml-1">
                arrow_forward
              </span>
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
                    src={related.image}
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
      )}

    </main>
  );
}
