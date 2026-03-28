"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/stores";
import { useLogoutMutation } from "@/slices/auth";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/dashboard/profile", label: "Profile", icon: "person" },
] as const;

const LIBRARY_SUB_ITEMS = [
  { href: "/dashboard/library/saved-articles", label: "Saved Articles" },
  { href: "/dashboard/library/downloads", label: "Downloads" },
] as const;

// const BOTTOM_NAV_ITEMS = [
//   // { href: "/dashboard/certificates", label: "Certificates", icon: "verified" },
//   // {
//   //   href: "/dashboard/subscription",
//   //   label: "Subscription",
//   //   icon: "credit_card",
//   // },
// ] as const;

const LIBRARY_HREFS = LIBRARY_SUB_ITEMS.map((i) => i.href);

function NavLink({
  href,
  label,
  icon,
  isActive,
}: {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-body-md transition-colors ${
        isActive
          ? "bg-emerald-50 text-primary dark:bg-emerald-900/20 dark:text-primary"
          : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="material-icons-outlined text-[22px]" aria-hidden>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}

function SidebarContent({
  onNavigate,
  libraryExpanded,
  setLibraryExpanded,
}: {
  onNavigate?: () => void;
  libraryExpanded: boolean;
  setLibraryExpanded: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const isLibraryActive = pathname?.startsWith("/dashboard/library") ?? false;

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <nav
        className="flex flex-1 flex-col gap-0.5 overflow-y-auto pt-2"
        aria-label="Dashboard navigation"
      >
        <ul className="flex flex-col gap-0.5" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            </li>
          ))}

          <li>
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                onClick={() => setLibraryExpanded(!libraryExpanded)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-body-md transition-colors ${
                  isLibraryActive
                    ? "bg-emerald-50 text-primary dark:bg-emerald-900/20 dark:text-primary"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
                }`}
                aria-expanded={libraryExpanded}
                aria-controls="library-submenu"
                id="library-button"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="material-icons-outlined text-[22px]"
                    aria-hidden
                  >
                    library_books
                  </span>
                  <span>Library</span>
                </span>
                <span
                  className={`material-icons-outlined text-[22px] transition-transform ${
                    libraryExpanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  expand_more
                </span>
              </button>
              <ul
                id="library-submenu"
                role="list"
                className={`overflow-hidden pl-4 pr-2 transition-[height] duration-200 ease-in-out ${
                  libraryExpanded ? "visible" : "invisible h-0"
                }`}
                aria-hidden={!libraryExpanded}
              >
                {LIBRARY_SUB_ITEMS.map((sub) => {
                  const isSubActive = pathname === sub.href;
                  return (
                    <li key={sub.href} className="pt-0.5">
                      <Link
                        href={sub.href}
                        onClick={onNavigate}
                        className={`block rounded-lg py-2 pl-4 pr-2 text-body-md transition-colors ${
                          isSubActive
                            ? "border-l-2 border-primary pl-[14px] text-primary dark:text-primary"
                            : "border-l-2 border-transparent text-foreground hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                        }`}
                        aria-current={isSubActive ? "page" : undefined}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* {BOTTOM_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            </li>
          ))} */}
        </ul>
      </nav>

      <div className="mt-auto shrink-0 flex items-center gap-3 border-t border-border pt-4 dark:border-gray-700">
        {isAuthenticated && user ? (
          <>
            <div className="h-10 w-10 shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              {user.profilePicture ? (
                <Image
                  src={user.profilePicture}
                  alt="Profile picture"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span
                  className="text-xl font-semibold text-foreground"
                  aria-hidden
                >
                  {user.name?.charAt(0).toUpperCase() ?? "U"}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-body-md font-semibold text-foreground dark:text-white">
                {user.name || user.phone}
              </p>
              <p className="truncate text-caption text-muted">
                {user.email || user.phone}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                logout()
                  .unwrap()
                  .then(() => window.location.assign("/auth/login"));
              }}
              className="shrink-0 rounded-lg p-2 text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800 dark:hover:text-gray-200 disabled:opacity-70"
              aria-label="Log out"
              disabled={isLoggingOut}
            >
              <span className="material-icons-outlined text-[22px]">
                {isLoggingOut ? "hourglass_empty" : "logout"}
              </span>
            </button>
          </>
        ) : (
          <>
            <div className="h-10 w-10 shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <span className="material-icons-outlined text-xl text-muted">
                person
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-body-md font-semibold text-foreground dark:text-white">
                Guest
              </p>
              <p className="truncate text-caption text-muted">
                <Link
                  href="/auth/login"
                  className="text-primary hover:underline"
                >
                  Login to see your profile
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [libraryExpanded, setLibraryExpanded] = useState(() =>
    LIBRARY_HREFS.some((h) => pathname?.startsWith(h)),
  );
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    setLibraryExpanded(
      (prev) => prev || LIBRARY_HREFS.some((h) => pathname?.startsWith(h)),
    );
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("overflow-hidden");
    };
  }, [drawerOpen, closeDrawer]);

  useEffect(() => {
    if (!drawerOpen) return;
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen]);

  return (
    <div className="flex h-full flex-col">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setDrawerOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
        aria-label="Open dashboard menu"
        aria-expanded={drawerOpen}
        aria-controls="dashboard-drawer"
      >
        <span className="material-icons-outlined text-[24px]">menu</span>
      </button>

      <div
        id="dashboard-drawer"
        ref={drawerRef}
        className="flex h-full w-full flex-col md:block"
      >
        <div className="hidden h-full flex-col overflow-hidden md:flex">
          <SidebarContent
            libraryExpanded={libraryExpanded}
            setLibraryExpanded={setLibraryExpanded}
          />
        </div>
      </div>

      {/* Mobile/tablet drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-200 md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />
      <div
        className={`fixed left-0 top-20 z-[70] flex h-[calc(100vh-80px)] w-[250px] max-w-[85vw] flex-col rounded-b-radius-sm border-r border-sky-200 dark:border-gray-700 bg-surface p-5 shadow-elevation-md transition-transform duration-200 ease-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Dashboard navigation"
      >
        <div className="flex flex-1 flex-col overflow-y-auto">
          <SidebarContent
            onNavigate={closeDrawer}
            libraryExpanded={libraryExpanded}
            setLibraryExpanded={setLibraryExpanded}
          />
        </div>
      </div>
    </div>
  );
}
