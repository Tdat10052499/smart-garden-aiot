import { Outlet } from "react-router";
import { Sidebar } from "../components/ui/sidebar";

export function RootLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}

