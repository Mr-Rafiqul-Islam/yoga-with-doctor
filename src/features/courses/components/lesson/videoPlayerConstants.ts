/** Flush batched watch time to the API at least this often while playing. */
export const LESSON_VIDEO_WATCH_FLUSH_INTERVAL_SEC = 12;

/** Ignore residual deltas smaller than this when flushing on pause/end. */
export const LESSON_VIDEO_MIN_FLUSH_SEC = 0.5;

/** Treat large backward jumps as seeks (do not count as watch delta). */
export const LESSON_VIDEO_SEEK_JUMP_TOLERANCE_SEC = 0.25;

/** Reposition overlay on this interval while visible. */
export const LESSON_VIDEO_WATERMARK_MOVE_MS = 10_000;

export const LESSON_VIDEO_WATERMARK_MIN_PCT = 10;
export const LESSON_VIDEO_WATERMARK_SPAN_PCT = 70;
