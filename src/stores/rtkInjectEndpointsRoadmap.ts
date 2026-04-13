/**
 * RTK Query injectEndpoints roadmap (run `npm run analyze` for webpack HTML reports,
 * or `npm run analyze:turbo` for Turbopack’s experimental analyzer).
 *
 * Goal: one (or few) `createApi` instances plus `injectEndpoints` per feature file,
 * so the store registers a single reducer and middleware pair instead of many
 * separate APIs — smaller middleware stack and a clearer code-splitting story.
 *
 * Blockers today:
 * - Slices use different `baseQuery` chains. Example: notifications wraps
 *   `createReauthBaseQuery` to set `x-user-id` from Redux state.
 * - Merging requires either one `baseQuery` that composes those behaviors
 *   (e.g. via `meta` or shared `prepareHeaders`), or several split API roots
 *   (less benefit).
 *
 * Suggested phases:
 * 1. Unify on a shared `baseQuery` that covers auth refresh and optional headers.
 * 2. Add an empty split API (e.g. reducerPath `ywdApi`) with the full `tagTypes` union.
 * 3. Migrate one slice at a time from `createApi` to `injectEndpoints` on that API.
 * 4. Update `authLogoutListener` in `store.ts` to reset the merged API (or per-slice
 *    utilities if you keep multiple roots).
 *
 * See Redux Toolkit docs: Code Splitting / `injectEndpoints`.
 */
export {};
