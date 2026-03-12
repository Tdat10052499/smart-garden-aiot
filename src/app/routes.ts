import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AILabPage } from "./pages/AILabPage";
import { CareGuidePage } from "./pages/CareGuidePage";
import { SettingsPage } from "./pages/SettingsPage";

// Router configuration for hydroponic dashboard
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "ai-lab", Component: AILabPage },
      { path: "care-guide", Component: CareGuidePage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
