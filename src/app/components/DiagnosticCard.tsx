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
    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all">
      {/* Image */}
      <div className="relative aspect-square">
        <ImageWithFallback
          src={imageUrl}
          alt={`Scan - ${status}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${
            isHealthy
              ? "bg-[#A7F3D0] text-[#065F46]"
              : "bg-[#FCD34D] text-[#92400E]"
          }`}>
            {isHealthy ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
            {status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Confidence Score - Radial Gauge */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Confidence Score</p>
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
                  <span className="text-[#2D5A27]">{confidence}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{date}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>

        {/* View Analysis Button */}
        <button className="w-full bg-[#2D5A27] hover:bg-[#234520] text-white py-2 px-4 rounded-[12px] transition-all flex items-center justify-center gap-2 text-sm">
          <Eye size={16} />
          View Analysis
        </button>
      </div>
    </div>
  );
}
