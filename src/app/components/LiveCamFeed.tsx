import { useState } from "react";
import { Camera, Activity } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LiveCamFeed() {
  const [isScanning, setIsScanning] = useState(false);

  const handleQuickScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      alert("AI Scan Complete! Check the AI Lab for results.");
    }, 3000);
  };

  return (
    <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-primary flex items-center gap-2">
          <Camera size={20} />
          Live Feed - ESP32-S3 Cam
        </h2>
        <div className="flex items-center gap-2 text-destructive text-sm">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          LIVE
        </div>
      </div>

      {/* 16:9 Container */}
      <div className="relative aspect-video bg-muted rounded-[12px] overflow-hidden mb-4">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1557800634-7bf3c7305596?w=1200&h=675&fit=crop"
          alt="Live strawberry plant feed"
          className="w-full h-full object-cover"
        />

        {/* Scanning Overlay */}
        {isScanning && (
          <div className="absolute inset-0 bg-accent/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <Activity className="text-foreground w-12 h-12 mb-3 mx-auto animate-pulse" />
              <p className="text-foreground text-lg font-medium">Scanning...</p>
              <div className="w-48 h-1 bg-muted rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-foreground rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Scan Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(var(--accent-rgb), 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(var(--accent-rgb), 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Quick AI Scan Button */}
      <button
        onClick={handleQuickScan}
        disabled={isScanning}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py Ascendant py-3 px-6 rounded-[12px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isScanning ? "Scanning..." : "Quick AI Scan"}
      </button>
    </div>
  );
}
