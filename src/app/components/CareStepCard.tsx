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
    <div className="bg-card border-border rounded-[12px] overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between bg-surface border-b border-border hover:bg-muted transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 rounded-[12px] flex items-center justify-center">
            <Icon className="text-primary" size={20} />
          </div>
          <h3 className="text-primary">{title}</h3>
        </div>
        <ChevronDown className={`text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-5 pt-0 border-t border-muted">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Steps */}
            <div>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground text-sm pt-0.5">{step}</span>
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
