# Frontend folder structure

Scalable structure for the Yoga With Doctor Next.js app. All paths are under `src/` unless noted.

```
src/
├── app/              # Routes, layouts, and route-level UI
├── components/       # Shared UI components
├── features/         # Feature modules
├── services/         # API / backend integration
├── hooks/            # Custom React hooks
├── stores/           # Global UI state (Zustand)
├── lib/              # Utilities, constants, config
└── types/            # Shared TypeScript types
```

---

## Responsibility of each folder

| Folder | Responsibility |
|--------|----------------|
| **app/** | Next.js App Router: routes, `layout.tsx`, `page.tsx`, loading/error boundaries, and route segments. Keep route files thin; delegate to `components/` and `features/`. |
| **components/** | Reusable UI: buttons, cards, inputs, headers, footers, design-system primitives. Shared across the app; no feature-specific business logic. Prefer composition and props over context. |
| **features/** | Feature modules (e.g. `auth/`, `courses/`, `booking/`). Each can have its own components, hooks, and types. Encapsulates one slice of the product; imported by `app/` or other features. |
| **services/** | API layer: HTTP client, request/response types, and all backend calls. Components and stores call services, not `fetch`/axios directly. Keeps API contracts and env (base URL, headers) in one place. |
| **hooks/** | Custom React hooks (e.g. `useMediaQuery`, `useDebounce`, `useAuth`). Shared across components and features. Keep hooks focused and testable. |
| **stores/** | Global UI state (Zustand): theme, sidebar, modals, etc. Client-only state that many components need. Server state stays in TanStack Query (and can live next to `services/` or in features). |
| **lib/** | Utilities, constants, and config: `cn()`, formatters, env helpers, TanStack Query client setup. No components and no direct API calls. |
| **types/** | Shared TypeScript types and interfaces: API DTOs, domain models, shared prop types. Used by services, components, and features. Feature-specific types can live inside `features/<name>/`. |

---

## Conventions

- **Imports:** Prefer `@/components/...`, `@/services/...`, etc. (alias from `tsconfig`).
- **app/:** Prefer Server Components; use `"use client"` only when needed (interactivity, hooks, browser APIs).
- **features/:** Name folders by feature (e.g. `features/booking/`). Optionally use `features/<name>/components/`, `features/<name>/hooks/` inside the feature.
- **services/:** One module per domain or resource (e.g. `courses.ts`, `auth.ts`); each exports typed functions that perform HTTP calls.
- **stores/:** One store per concern (e.g. `themeStore.ts`, `uiStore.ts`); access from Client Components only.
