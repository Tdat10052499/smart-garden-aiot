import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FlaskConical, BookOpen, Settings, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function RootLayout() {
  const location = useLocation();
  const { theme, setTheme, isDark } = useTheme();

  const navigationItems = [
    { id: "home", path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { id: "ai-lab", path: "/ai-lab", icon: FlaskConical, label: "AI Lab" },
    { id: "care-guide", path: "/care-guide", icon: BookOpen, label: "Care Guide" },
    { id: "settings", path: "/settings", icon: Settings, label: "Settings" }
  ];

  return (
    <div className="flex h-screen bg-background dark:bg-slate-950">
      {/* Vertical Sidebar */}
      <aside className="w-20 bg-[var(--sidebar)] flex flex-col items-center py-8 gap-8 text-[var(--sidebar-foreground)]">
        <div className="w-10 h-10 bg-[var(--sidebar-primary)] rounded-[12px] flex items-center justify-center text-[var(--sidebar-primary-foreground)]">
          <span>S</span>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`w-12 h-12 rounded-[12px] flex items-center justify-center transition-all dark:backdrop-blur-sm ${
                  isActive
                    ? "bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] dark:bg-emerald-600/30 dark:text-emerald-400"
                    : "hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] dark:hover:bg-slate-800/50"
                }`}
                title={item.label}
              >
                <Icon size={24} />
              </Link>
            );
          })}
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-12 h-12 rounded-[12px] flex items-center justify-center transition-all hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)]"
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
