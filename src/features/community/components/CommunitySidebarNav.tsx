/**
 * Placeholder: community sidebar navigation (News Feed, Saved Posts, My Groups, Settings).
 */
export function CommunitySidebarNav() {
  const items = [
    { label: "News Feed", icon: "feed", active: true },
    { label: "Saved Posts", icon: "bookmark", active: false },
    { label: "My Groups", icon: "group", active: false },
    { label: "Settings", icon: "settings", active: false },
  ] as const;

  return (
    <nav
      className="rounded-lg border border-border bg-surface p-2 shadow-sm"
      aria-label="Community navigation"
    >
      <ul className="space-y-1">
        {items.map(({ label, icon, active }) => (
          <li key={label}>
            <a
              href="#"
              className={`flex items-center px-4 py-3 text-body-md font-medium rounded-md transition-colors ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-muted/20"
              }`}
            >
              <span
                className="material-icons-outlined mr-3 text-lg"
                aria-hidden
              >
                {icon}
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
