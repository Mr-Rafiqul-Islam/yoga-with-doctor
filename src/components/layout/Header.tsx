"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useId, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

import {
  useAppSelector,
  useAppDispatch,
  toggleMobileMenu,
  closeMobileMenu,
  setTheme,
  type ThemeMode,
} from "@/stores";
import { getToken, useGetCurrentUserQuery, useLogoutMutation } from "@/slices/auth";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { HeaderNotifications } from "@/components/layout/HeaderNotifications";

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "https://biohealingbd.com/", label: "Shop", external: true },
  { href: "/videos", label: "Videos" },
  { href: "/articles", label: "Articles" },
] as const;

export function Header() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { status: nextAuthStatus, data: session } = useSession();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const theme = useAppSelector((state) => state.ui.theme);
  const { user, isAuthenticated, isLoading: authLoading } = useAppSelector((state) => state.auth);
  const hasToken = !!getToken();
  const nominalNextAuth =
    nextAuthStatus === "authenticated" && !!session?.user?.id;
  const sessionOk = nominalNextAuth || (hasToken && isAuthenticated);
  const { data: currentUserData, isLoading: isFetchingUser } = useGetCurrentUserQuery(undefined, {
    skip: !hasToken,
  });
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [profileOpen, setProfileOpen] = useState(false);
  const fromSession =
    session?.user?.id != null
      ? {
          name: session.user.name ?? "",
          phone: (session.user as { phone?: string }).phone ?? "",
          profilePicture: session.user.image ?? null,
        }
      : null;
  const displayUser = sessionOk
    ? (currentUserData?.data ?? user ?? fromSession)
    : null;
  const isRestoringSession =
    authLoading ||
    nextAuthStatus === "loading" ||
    (hasToken && isFetchingUser);

  const menuId = useId();
  const buttonId = useId();
  const profileMenuId = useId();

  const STORAGE_KEY = "ywd-theme";

  // Sync store from localStorage on mount (so store matches script-applied theme)
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      dispatch(setTheme(stored as ThemeMode));
    } else {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = dark ? "dark" : "light";
      dispatch(setTheme(initial));
      localStorage.setItem(STORAGE_KEY, initial);
    }
  }, [dispatch]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      const q = window.matchMedia("(prefers-color-scheme: dark)");
      root.classList.toggle("dark", q.matches);
    }
  }, [theme]);

  const isDark = theme === "dark";
  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    dispatch(setTheme(next));
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-surface shadow-elevation-sm"
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo — left */}
        <div className="flex flex-1 items-center md:min-w-0">
          <SiteLogo variant="header" priority />
        </div>

        {/* Desktop nav — centered */}
        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 md:flex"
        >
          <ul className="flex items-center gap-8">
            {mainNavItems.map((item) => {
              const { href, label } = item;
              const external = "external" in item && item.external;
              const isActive = !external && pathname === href;
              const linkClass = `rounded-radius-sm px-1 py-2 text-body-md font-medium transition-colors  ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`;
              return (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={linkClass}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: search + utility icons */}
        <div className="flex flex-1 items-center justify-end gap-4 md:min-w-0">
          {/* Search — visible on lg */}
          <div className="hidden w-64 items-center gap-2 rounded-radius-full bg-background px-4 py-2 lg:flex">
            <span className="material-icons-outlined shrink-0 text-lg text-muted" aria-hidden>
              search
            </span>
            <input
              type="search"
              placeholder="Search videos, courses..."
              className="w-full min-w-0 border-none bg-transparent text-body-md text-foreground placeholder:text-muted focus:outline-none focus:ring-0"
              aria-label="Search videos and courses"
            />
          </div>

          {sessionOk ? <HeaderNotifications sessionOk={sessionOk} /> : null}

          {/* Profile / Login */}
          {isRestoringSession ? (
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-radius-full border-2 border-border bg-muted/50 dark:bg-gray-700"
              aria-hidden
            >
              <span className="material-icons-outlined text-xl text-muted">person</span>
            </div>
          ) : sessionOk && displayUser ? (
            <div className="relative flex flex-shrink-0">
              <button
                type="button"
                id={profileMenuId}
                aria-expanded={profileOpen}
                aria-haspopup="true"
                onClick={() => setProfileOpen((o) => !o)}
                onBlur={() => setTimeout(() => setProfileOpen(false), 150)}
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-radius-full border-2 border-border bg-orange-100 text-muted transition-colors hover:border-primary hover:text-foreground focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                aria-label="Account menu"
              >
                {displayUser.profilePicture ? (
                  <Image
                    src={displayUser.profilePicture}
                    priority
                    alt=""
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-semibold text-foreground" aria-hidden>
                    {displayUser.name?.charAt(0).toUpperCase() ?? "?"}
                  </span>
                )}
              </button>
              {profileOpen && (
                <div
                  role="menu"
                  aria-labelledby={profileMenuId}
                  className="absolute right-0 top-full z-50 mt-2 min-w-[160px] rounded-radius-md border border-border bg-surface py-1 shadow-elevation-md dark:bg-[#1a2e26]"
                >
                  <p className="border-b border-border px-4 py-2 text-sm text-muted dark:border-gray-700">
                    {displayUser.name || displayUser.phone}
                  </p>
                  <Link
                    href="/dashboard"
                    className="block rounded-radius-sm px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setProfileOpen(false);
                      void (async () => {
                        try {
                          await logout().unwrap();
                        } catch {
                          /* still sign out locally */
                        }
                        await signOut({ callbackUrl: "/auth/login" });
                      })();
                    }}
                    disabled={isLoggingOut}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground hover:bg-secondary focus:outline-none focus:ring-inset focus:ring-2 focus:ring-primary disabled:opacity-70 dark:hover:bg-gray-700"
                  >
                    <span className="material-icons-outlined text-lg">logout</span>
                    {isLoggingOut ? "Signing out…" : "Logout"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-radius-full border-2 border-border bg-orange-100 text-muted transition-colors hover:border-primary hover:text-foreground focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              aria-label="Go to login page"
            >
              <span className="material-icons-outlined text-xl" aria-hidden>
                person
              </span>
            </Link>
          )}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-radius-sm p-2 text-muted transition-colors hover:text-foreground focus:outline-none "
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-icons-outlined text-xl" aria-hidden>
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            id={buttonId}
            aria-expanded={mobileMenuOpen}
            aria-controls={menuId}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-radius-sm text-foreground focus:outline-none  md:hidden"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
              aria-hidden
            />
            <span
              className={`h-0.5 w-6 bg-current transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
              aria-hidden
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id={menuId}
        role="navigation"
        aria-label="Main navigation"
        aria-hidden={!mobileMenuOpen}
        className={`border-t border-border bg-surface md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {mainNavItems.map((item) => {
            const { href, label } = item;
            const external = "external" in item && item.external;
            const isActive = !external && pathname === href;
            const linkClass = `block rounded-radius-sm px-4 py-3 text-body-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
              isActive
                ? "bg-secondary text-primary"
                : "text-foreground hover:bg-secondary/70"
            }`;
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    onClick={() => dispatch(closeMobileMenu())}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    onClick={() => dispatch(closeMobileMenu())}
                    className={linkClass}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
