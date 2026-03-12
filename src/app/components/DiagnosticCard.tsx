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
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-md rounded-[12px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all dark:bg-slate-800/60 dark:backdrop-blur-md dark:border-slate-700/50 dark:shadow-slate-900/20 dark:hover:shadow-slate-800/50">
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
              ? "bg-emerald-400/20 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
              : "bg-amber-400/20 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400"
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
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Confidence Score</p>
            <div className="flex items-center gap-2">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={isHealthy ? "#72BF44" : "#F59E0B"}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${confidence * 1.76} 176`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#2D5A27] dark:text-slate-50 font-semibold">{confidence}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{date}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>
      </div>
      {/* Button Footer */}
      <div className="mt-auto px-4 pb-4">
        <button className="w-full bg-[#2D5A27] hover:bg-[#234520] dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white py-2 px-4 rounded-[12px] transition-all flex items-center justify-center gap-2 text-sm">
          <Eye size={16} />
          View Analysis
        </button>
      </div>
    </div>
  );
}
