"use client";

import { useEffect, useRef, useState, type ElementRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import type { VideoCardProps } from "./VideoCard";
import type { FreeVideoDetails } from "../data/freeVideoDetailsData";
import { useLazyGetVideoPlaybackTokenQuery } from "@/slices/videos";
import { formatDuration } from "@/features/home/VideoCard";
import { ClassReviewSection } from "@/features/reviews/components/ClassReviewSection";
import { useAppDispatch, useAppSelector } from "@/stores";
import { useAddEnrollmentByItemIdMutation } from "@/slices/enrollment";
import { classApi } from "@/slices/classes";

const TAB_IDS = ["overview", "equipment", "reviews"] as const;

export interface FreeVideoDetailsContentProps {
  video: VideoCardProps;
  details: FreeVideoDetails;
}

export function FreeVideoDetailsContent({
  video,
  details,
}: FreeVideoDetailsContentProps) {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [addEnrollmentByItemId] = useAddEnrollmentByItemIdMutation();
  const enrollRequestRef = useRef(false);

  const [activeTab, setActiveTab] =
    useState<(typeof TAB_IDS)[number]>("overview");
  // const [followed, setFollowed] = useState(false);
  const [playbackId, setPlaybackId] = useState<string | undefined>(undefined);
  const [playbackToken, setPlaybackToken] = useState<string | null>(null);
  // const [_playbackPolicy, setPlaybackPolicy] = useState<string | undefined>(
  //   undefined,
  // );
  const [getPlaybackToken] = useLazyGetVideoPlaybackTokenQuery();

  useEffect(() => {
    // Fetch playback token if video exists and has muxPlaybackId
    if (video.id && video.muxPlaybackId && video.status === "READY") {
      getPlaybackToken(video.id)
        .unwrap()
        .then((result) => {
          if (result.success && result.data) {
            setPlaybackId(result.data.playbackId);
            setPlaybackToken(result.data.playbackToken || null);
            // setPlaybackPolicy(result.data.playbackPolicy || undefined);
          }
        })
        .catch((error) => {
          console.error("Error fetching playback token:", error);
          // Fallback to using muxPlaybackId directly
          setPlaybackId(video.muxPlaybackId);
          setPlaybackToken(null);
        });
    } else if (video.muxPlaybackId) {
      // Fallback: use muxPlaybackId directly if video is not ready or token fetch fails
      setPlaybackId(video.muxPlaybackId);
      setPlaybackToken(null);
    }
  }, [video.id, video.muxPlaybackId, video.status, getPlaybackToken]);

  useEffect(() => {
    enrollRequestRef.current = false;
  }, [details.slug]);

  const playerRef = useRef<ElementRef<typeof MuxPlayer>>(null);
  const [videoDuration, setVideoDuration] = useState<string | number | null>(
    null,
  );
  const handleLoadedMetadata = () => {
    const d = playerRef.current?.duration;
    if (d) setVideoDuration(formatDuration(d));
  };

  const handlePlay = () => {
    if (!isAuthenticated || details.isEnrolled || enrollRequestRef.current) {
      return;
    }
    enrollRequestRef.current = true;
    addEnrollmentByItemId({ itemId: String(details.id) })
      .unwrap()
      .then(() => {
        dispatch(
          classApi.util.invalidateTags([{ type: "Class", id: details.slug }]),
        );
      })
      .catch(() => {
        enrollRequestRef.current = false;
      });
  };

  const doctorsNote = {
    name: details.author.name,
    title: details.author.title,
    avatarUrl: details.author.avatarSrc,
    quote:
      details.author.quotes ??
      "Gentle movement and mindful breathing can support recovery and daily function. Listen to your body and modify as needed.",
    tags: details.author.tags ?? ["#Wellness", "#MindBody"],
  };

  return (
    <div className="space-y-8">
      {/* Video player */}
      <div
        id="play"
        className="relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl aspect-video md:aspect-[21/9] group cursor-pointer"
      >
        {playbackId ? (
          <MuxPlayer
            ref={playerRef}
            className="h-full w-full"
            playbackId={playbackId}
            poster={video.thumbnailUrl ?? undefined}
            streamType="on-demand"
            {...(playbackToken ? { tokens: { playback: playbackToken } } : {})}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={handlePlay}
            autoPlay={false}
            playsInline
            style={{
              aspectRatio: "auto",
              height: "100%",
              width: "100%",
              "--controls-backdrop-color": "transparent",
              "--media-object-fit": "cover",
              "--media-object-position": "center",
            }}
          />
        ) : video.thumbnailUrl ? (
          <Image
            src={video.thumbnailUrl}
            alt=""
            fill
            className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-8 lg:col-span-2">
          {/* Title + meta + rating */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {video.title ?? "Video"}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
                <span className="flex items-center gap-1">
                  <span className="material-icons-outlined text-base">
                    schedule
                  </span>
                  {videoDuration}
                </span>
                {video.level ? (
                  <>
                    <span
                      className="h-1 w-1 rounded-full bg-gray-400"
                      aria-hidden
                    />
                    <span className="flex items-center gap-1">
                      <span className="material-icons-outlined text-base">
                        signal_cellular_alt
                      </span>
                      {video.level}
                    </span>
                  </>
                ) : null}
                <span
                  className="h-1 w-1 rounded-full bg-gray-400"
                  aria-hidden
                />
                <span className="font-semibold text-primary">
                  {video.isFree ? "Free" : "Premium"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                <span className="material-icons-outlined text-amber-500 text-sm">
                  star
                </span>{" "}
                {details.avgRating != null
                  ? details.avgRating.toFixed(1)
                  : "0.0"}
              </div>
              <span className="text-xs text-muted">
                {details.ratingCount ?? 0} Ratings
              </span>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 shadow-sm dark:border-gray-700">
            <div className="flex items-center gap-4">
              {video.authorAvatarUrl ? (
                <Image
                  src={video.authorAvatarUrl}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
                />
              ) : (
                <div className="h-14 w-14 shrink-0 rounded-full bg-muted/50" />
              )}
              <div>
                <h3 className="font-bold text-foreground">
                  {video.authorName ?? "Instructor"}
                </h3>
                <p className="text-sm text-muted">
                  {details.author.title ?? "Wellness Instructor"}
                </p>
              </div>
            </div>
            <Link
              href="https://drshahalam.com/"
              target="_blank"
              type="button"
              // onClick={() => setFollowed((v) => !v)}
              className="rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              {/* {followed ? "Following" : "Follow"} */}
              View Profile
            </Link>
          </div>

          {/* Tabs */}
          <nav
            aria-label="Tabs"
            className="-mb-px border-b border-border dark:border-gray-700"
          >
            <div className="flex space-x-8">
              {TAB_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize ${
                    activeTab === id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted hover:border-gray-300 hover:text-foreground"
                  }`}
                >
                  {id}
                </button>
              ))}
            </div>
          </nav>

          {/* Tab content: Overview (Medical Benefits) */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Medical Benefits
              </h2>
              <p className="leading-relaxed text-muted">
                {details.shortDescription}
              </p>
              <article
                className="prose prose-sm prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: details.description }}
              />
            </div>
          )}
          {activeTab === "equipment" && (
            <p className="text-muted">
              No special equipment required. A mat and comfortable clothing are
              recommended.
            </p>
          )}
          {activeTab === "reviews" && (
            <ClassReviewSection
              slug={details.slug}
            />
          )}

          {/* CTA */}
          <Link
            href="#play"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 px-6 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl"
          >
            <span className="material-icons-outlined">play_arrow</span>
            Start Practice Now
          </Link>
          {/* commenting for future implementation */}

          {/* Next in Series
          {details.nextInSeries.length > 0 && (
            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Next in Series
                </h2>
                <Link
                  href="/videos/free"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  See All
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {nextInSeries.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/videos/free/${item.slug}`}
                    className="group"
                  >
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-muted/60">
                      <Image
                        src={item.thumbnailUrl}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 280px"
                      />
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                        {item.duration}
                      </div>
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="material-icons-outlined text-4xl text-white drop-shadow-lg">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted">{item.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          )} */}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Doctor's Note */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/10">
            <div className="mb-4 flex items-start gap-4">
              <Image
                src={doctorsNote.avatarUrl}
                alt={doctorsNote.name}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
              />
              <div>
                <h3 className="font-bold text-foreground">
                  Doctor&apos;s Note
                </h3>
                <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  {doctorsNote.name}, {doctorsNote.title}
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm italic text-foreground/90">
              {doctorsNote.quote}
            </p>
            <div className="flex flex-wrap gap-2">
              {doctorsNote.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Premium Commenting out for future implement*/}
          {/* <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:border-gray-700">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Related Premium Flows
            </h3>
            <div className="space-y-6">
              {details.relatedPremium && details.relatedPremium.length > 0 && details.relatedPremium.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="material-icons-outlined text-xl text-white">
                        lock
                      </span>
                    </div>
                    <div className="absolute left-1 top-1 rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-black">
                      PREMIUM
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted">{item.author}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                      <span className="flex items-center gap-0.5">
                        <span className="material-icons-outlined text-[10px]">
                          schedule
                        </span>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/videos/premium"
              className="mt-6 flex w-full items-center justify-center rounded-lg border border-primary py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Unlock Premium Access
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
