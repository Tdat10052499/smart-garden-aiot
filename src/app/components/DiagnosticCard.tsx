import { CheckCircle, AlertTriangle, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DiagnosticCardProps {
  imageUrl: string;
  confidence: number;
  status: string;
  statusType: "healthy" | "warning";
  date: string;
  timestamp: string;
}

export function DiagnosticCard({ imageUrl, confidence, status, statusType, date, timestamp }: DiagnosticCardProps) {
  const isHealthy = statusType === "healthy";

  return (
    <div className="flex flex-col h-full bg-card border-border rounded-[12px] overflow-hidden shadow-sm hover:shadow-lg transition-all">
      {/* Image */}
      <div className="relative h-48 aspect-video overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={`Scan - ${status}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
            isHealthy
              ? "bg-accent/10 text-accent-foreground"
              : "bg-destructive/10 text-destructive-foreground"
          }`}>
            {isHealthy ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
            {status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 justify-between">
        {/* Confidence Score - Radial Gauge */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
            <div className="flex items-center gap-2">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="border"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={isHealthy ? "accent" : "destructive"}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${confidence * 1.76} 176`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary font-semibold">{confidence}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">{date}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
      </div>
      {/* Button Footer */}
      <div className="mt-auto px-4 pb-4">
        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-[12px] transition-all flex items-center justify-center gap-2 text-sm">
          <Eye size={16} />
          View Analysis
        </button>
      </div>
    </div>
  );
}
