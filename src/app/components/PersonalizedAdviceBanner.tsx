import { Lightbulb, Sparkles } from "lucide-react";

interface PersonalizedAdviceBannerProps {
  issue: string;
  recommendation: string;
}

export function PersonalizedAdviceBanner({ issue, recommendation }: PersonalizedAdviceBannerProps) {
  return (
    <div className="mb-8 bg-gradient-to-r from-[#2D5A27] to-[#72BF44] rounded-[12px] p-6 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={24} />
          <h2>Personalized Advice</h2>
        </div>

        <div className="flex items-start gap-3">
          <Lightbulb className="flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="mb-2 text-white/90">{issue}</p>
            <p className="text-lg">{recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
