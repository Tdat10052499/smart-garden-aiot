import { Settings, Bell, Database, Wifi, Camera } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#2D5A27] mb-2 flex items-center gap-2">
          <Settings size={32} />
          System Settings
        </h1>
        <p className="text-gray-600">Configure your hydroponic system preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-6 shadow-sm border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-[#2D5A27]" size={24} />
            <h2 className="text-[#2D5A27]">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Alert on High TDS</p>
                <p className="text-xs text-gray-500">Notify when TDS exceeds 1400 ppm</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Disease Detection Alerts</p>
                <p className="text-xs text-gray-500">Get instant notifications for plant health issues</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Daily Summary</p>
                <p className="text-xs text-gray-500">Receive a daily summary of system status</p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* ESP32-S3 Camera Settings */}
        <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-6 shadow-sm border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="text-[#2D5A27]" size={24} />
            <h2 className="text-[#2D5A27]">ESP32-S3 Camera</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Camera Stream URL</label>
              <input
                type="text"
                defaultValue="http://192.168.1.100:81/stream"
                className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
                placeholder="e.g., http://192.168.1.100:81/stream"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-2 block">Auto-Scan Interval (minutes)</label>
              <select className="w-full p-3 border border-gray-300 rounded-[12px] bg-white">
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
        <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-6 shadow-sm border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="text-[#2D5A27]" size={24} />
            <h2 className="text-[#2D5A27]">Sensor Thresholds</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Min TDS (ppm)</label>
                <input
                  type="number"
                  defaultValue="800"
                  className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Max TDS (ppm)</label>
                <input
                  type="number"
                  defaultValue="1400"
                  className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Min Water Temp (°C)</label>
                <input
                  type="number"
                  defaultValue="18"
                  className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Max Water Temp (°C)</label>
                <input
                  type="number"
                  defaultValue="24"
                  className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Supabase Connection */}
        <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-6 shadow-sm border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-[#2D5A27]" size={24} />
            <h2 className="text-[#2D5A27]">Database Connection</h2>
          </div>

          <div className="p-4 bg-blue-50 rounded-[12px] border border-blue-200">
            <p className="text-sm text-blue-900 mb-2">
              <strong>💡 Supabase Integration Available</strong>
            </p>
            <p className="text-sm text-blue-800 mb-3">
              Connect to Supabase to enable real-time data persistence, historical tracking, and remote access to your hydroponic system data.
            </p>
            <button className="bg-[#2D5A27] hover:bg-[#234520] text-white py-2 px-4 rounded-[12px] text-sm transition-all">
              Connect Supabase from Make Settings
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-[12px] transition-all">
            Cancel
          </button>
          <button className="bg-[#2D5A27] hover:bg-[#234520] text-white py-3 px-6 rounded-[12px] transition-all">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
