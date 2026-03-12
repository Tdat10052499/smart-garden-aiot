import { LucideIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CareStepCardProps {
  title: string;
  icon: LucideIcon;
  steps: string[];
  imageUrl: string;
}

export function CareStepCard({ title, icon: Icon, steps, imageUrl }: CareStepCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[12px] overflow-hidden shadow-sm border border-gray-200 dark:bg-slate-800/60 dark:backdrop-blur-md dark:border-slate-700/50 dark:shadow-slate-900/20">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#72BF44]/10 rounded-[12px] flex items-center justify-center">
            <Icon className="text-[#2D5A27] dark:text-slate-50" size={20} />
          </div>
          <h3 className="text-[#2D5A27] dark:text-slate-50">{title}</h3>
        </div>
<ChevronDown className={`text-gray-600 dark:text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-5 pt-0 border-t border-gray-100 dark:border-slate-800">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Steps */}
            <div>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 dark:bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-slate-300 text-sm pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Image */}
            <div className="rounded-[12px] overflow-hidden">
              <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
