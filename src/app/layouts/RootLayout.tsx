import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FlaskConical, BookOpen, Settings } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  const navigationItems = [
    { id: "home", path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { id: "ai-lab", path: "/ai-lab", icon: FlaskConical, label: "AI Lab" },
    { id: "care-guide", path: "/care-guide", icon: BookOpen, label: "Care Guide" },
    { id: "settings", path: "/settings", icon: Settings, label: "Settings" }
  ];

  return (
    <div className="flex h-screen bg-[#F9FBF9]">
      {/* Vertical Sidebar */}
      <aside className="w-20 bg-[#2D5A27] flex flex-col items-center py-8 gap-8">
        <div className="w-10 h-10 bg-[#72BF44] rounded-[12px] flex items-center justify-center text-white">
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
                className={`w-12 h-12 rounded-[12px] flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-[#72BF44] text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                title={item.label}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
