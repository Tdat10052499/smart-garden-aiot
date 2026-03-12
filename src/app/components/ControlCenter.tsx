import { useState } from "react";
import { Lightbulb, Camera } from "lucide-react";

export function ControlCenter() {
  const [ledEnabled, setLedEnabled] = useState(true);
  const [isCameraTriggering, setIsCameraTriggering] = useState(false);

  const handleCameraTrigger = () => {
    setIsCameraTriggering(true);
    setTimeout(() => setIsCameraTriggering(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* LED Control Card */}
      <div className="relative rounded-[12px] p-6 overflow-hidden backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg">
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#72BF44]/20 rounded-full flex items-center justify-center">
                <Lightbulb className="text-[#72BF44]" size={24} />
              </div>
              <div>
                <h4 className="text-[#2D5A27]">LED Growth Lights</h4>
                <p className="text-sm text-gray-600">Zone A-C Active</p>
              </div>
            </div>

            <button
              onClick={() => setLedEnabled(!ledEnabled)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                ledEnabled ? "bg-[#72BF44]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  ledEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-[#72BF44] rounded-full" />
            <span className="text-gray-600">
              {ledEnabled ? "Active - Full Spectrum" : "Standby"}
            </span>
          </div>
        </div>
      </div>

      {/* Camera Control Card */}
      <div className="relative rounded-[12px] p-6 overflow-hidden backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg">
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2D5A27]/20 rounded-full flex items-center justify-center">
                <Camera className="text-[#2D5A27]" size={24} />
              </div>
              <div>
                <h4 className="text-[#2D5A27]">Manual Camera</h4>
                <p className="text-sm text-gray-600">Trigger AI Scan</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleCameraTrigger}
            disabled={isCameraTriggering}
            className={`w-full py-3 rounded-lg transition-all ${
              isCameraTriggering
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#2D5A27] text-white hover:bg-[#234520]"
            }`}
          >
            {isCameraTriggering ? "Capturing..." : "Trigger Scan"}
          </button>
        </div>
      </div>
    </div>
  );
}
