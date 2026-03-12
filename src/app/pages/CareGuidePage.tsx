import { useState } from "react";
import { PersonalizedAdviceBanner } from "../components/PersonalizedAdviceBanner";
import { CareStepCard } from "../components/CareStepCard";
import { DosageCalculator } from "../components/DosageCalculator";
import { PlantDoctorChat } from "../components/PlantDoctorChat";
import { Droplet, Sun, Thermometer, Beaker, Sprout, AlertCircle, BookOpen, Bot } from "lucide-react";

export function CareGuidePage() {
  const [activeTab, setActiveTab] = useState<"guide" | "doctor">("guide");

  const latestScan = {
    issue: "Nitrogen Deficiency Detected",
    recommendation: "Your plant needs more Nitrogen. Increase nutrient solution concentration."
  };

  const careSteps = [
    {
      id: 1,
      title: "Preparing Base Nutrient Solution",
      icon: Beaker,
      steps: [
        "Fill reservoir with clean water (10L for standard setup)",
        "Add Part A nutrients: 20ml per 10L of water",
        "Mix thoroughly for 2 minutes",
        "Add Part B nutrients: 20ml per 10L of water",
        "Mix again for 2 minutes",
        "Check TDS level (target: 800-1200 ppm for vegetative growth)"
      ],
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400"
    },
    {
      id: 2,
      title: "Adjusting pH Levels",
      icon: Droplet,
      steps: [
        "Test pH using digital meter or test strips",
        "Target pH range: 5.5 - 6.5 for strawberries",
        "If pH is too high (>6.5), add pH Down solution drop by drop",
        "If pH is too low (<5.5), add pH Up solution drop by drop",
        "Wait 15 minutes and retest",
        "Repeat until desired pH is achieved"
      ],
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400"
    },
    {
      id: 3,
      title: "Managing Light Cycles",
      icon: Sun,
      steps: [
        "Vegetative stage: 16-18 hours of light per day",
        "Flowering stage: 12-14 hours of light per day",
        "Use LED grow lights positioned 12-18 inches above plants",
        "Monitor light intensity: 400-600 μmol/m²/s for strawberries",
        "Ensure complete darkness during off hours"
      ],
      imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400"
    },
    {
      id: 4,
      title: "Temperature & Humidity Control",
      icon: Thermometer,
      steps: [
        "Optimal air temperature: 18-24°C (65-75°F)",
        "Water temperature: 18-22°C (65-72°F)",
        "Humidity: 50-70% for vegetative growth",
        "Humidity: 40-50% during flowering to prevent mold",
        "Use fans for air circulation",
        "Monitor daily and adjust climate control as needed"
      ],
      imageUrl: "https://images.unsplash.com/photo-1592833159057-37f4ab95903d?w=400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[#2D5A27] mb-2">Strawberry Care Guide</h1>
        <p className="text-gray-600">Expert guidance tailored to your growing conditions</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("guide")}
          className={`flex items-center gap-2 px-6 py-3 rounded-t-[12px] transition-all ${
            activeTab === "guide"
              ? "bg-white text-[#2D5A27] border-b-2 border-[#2D5A27]"
              : "bg-transparent text-gray-600 hover:text-[#2D5A27]"
          }`}
        >
          <BookOpen size={20} />
          <span>Care Guide</span>
        </button>
        <button
          onClick={() => setActiveTab("doctor")}
          className={`flex items-center gap-2 px-6 py-3 rounded-t-[12px] transition-all ${
            activeTab === "doctor"
              ? "bg-white text-[#2D5A27] border-b-2 border-[#2D5A27]"
              : "bg-transparent text-gray-600 hover:text-[#2D5A27]"
          }`}
        >
          <Bot size={20} />
          <span>Plant Doctor</span>
          <span className="bg-[#72BF44] text-white text-xs px-2 py-0.5 rounded-full">AI</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "guide" ? (
        <div>
          {/* Personalized Advice Banner */}
          <PersonalizedAdviceBanner
            issue={latestScan.issue}
            recommendation={latestScan.recommendation}
          />

          {/* Dosage Calculator */}
          <div className="mb-8">
            <DosageCalculator />
          </div>

          {/* Care Step Cards */}
          <div className="space-y-6">
            <h2 className="text-[#2D5A27] flex items-center gap-2">
              <Sprout size={24} />
              Complete Growing Guide
            </h2>
            {careSteps.map((step) => (
              <CareStepCard
                key={step.id}
                title={step.title}
                icon={step.icon}
                steps={step.steps}
                imageUrl={step.imageUrl}
              />
            ))}
          </div>

          {/* Quick Tips */}
          <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-[12px]">
            <div className="flex gap-3">
              <AlertCircle className="text-amber-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-amber-900 mb-2">Quick Tips</h3>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Always test water quality before mixing nutrients</li>
                  <li>• Change nutrient solution every 2 weeks</li>
                  <li>• Clean reservoir and lines monthly to prevent algae buildup</li>
                  <li>• Monitor plants daily for early signs of stress or disease</li>
                  <li>• Keep detailed logs of TDS, pH, and growth observations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-280px)]">
          <PlantDoctorChat />
        </div>
      )}
    </div>
  );
}
