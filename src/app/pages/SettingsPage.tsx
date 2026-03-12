import { Settings, Bell, Database, Wifi, Camera, Palette } from "lucide-react";
import { ThemeSelector } from "../components/ThemeSelector";
import { useTheme } from "../contexts/ThemeContext";

export function SettingsPage() {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-primary mb-2 flex items-center gap-2">
          <Settings size={32} />
          System Settings
        </h1>
        <p className="text-muted-foreground">Configure your hydroponic system preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Theme Selector */}
        <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="text-primary" size={24} />
            <h2 className="text-primary">Theme</h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">Current theme: <span className="font-medium capitalize">{theme.replace('-', ' ')}</span></p>
            <ThemeSelector />
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-primary" size={24} />
            <h2 className="text-primary">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Alert on High TDS</p>
                <p className="text-xs text-muted-foreground">Notify when TDS exceeds 1400 ppm</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Disease Detection Alerts</p>
                <p className="text-xs text-muted-foreground">Get instant notifications for plant health issues</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-border" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Daily Summary</p>
                <p className="text-xs text-muted-foreground">Receive a daily summary of system status</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-border" />
            </div>
          </div>
        </div>

        {/* ESP32-S3 Camera Settings */}
        <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-primary" size={24} />
            <h2 className="text-primary">ESP32-S3 Camera</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Camera Stream URL</label>
              <input
                type="text"
                defaultValue="http://192.168.1.100:81/stream"
                className="w-full p-3 border border-border rounded-[12px] bg-background"
                placeholder="e.g., http://192.168.1.100:81/stream"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Auto-Scan Interval (minutes)</label>
              <select className="w-full p-3 border border-border rounded-[12px] bg-background">
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="0">Disabled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sensor Thresholds */}
        <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="text-primary" size={24} />
            <h2 className="text-primary">Sensor Thresholds</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Min TDS (ppm)</label>
                <input
                  type="number"
                  defaultValue="800"
                  className="w-full p-3 border border-border rounded-[12px] bg-background"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Max TDS (ppm)</label>
                <input
                  type="number"
                  defaultValue="1400"
                  className="w-full p-3 border border-border rounded-[12px] bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Min Water Temp (°C)</label>
                <input
                  type="number"
                  defaultValue="18"
                  className="w-full p-3 border border-border rounded-[12px] bg-background"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Max Water Temp (°C)</label>
                <input
                  type="number"
                  defaultValue="24"
                  className="w-full p-3 border border-border rounded-[12px] bg-background"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Supabase Connection */}
        <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-primary" size={24} />
            <h2 className="text-primary">Database Connection</h2>
          </div>

          <div className="p-4 bg-muted rounded-[12px] border border-muted">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>💡 Supabase Integration Available</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Connect to Supabase to enable real-time data persistence, historical tracking, and remote access to your hydroponic system data.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-[12px] text-sm transition-all">
              Connect Supabase from Make Settings
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button className="bg-muted hover:bg-muted-foreground/10 text-muted-foreground py-3 px-6 rounded-[12px] transition-all">
            Cancel
          </button>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-[12px] transition-all">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

