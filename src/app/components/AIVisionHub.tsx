import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AIVisionHubProps {
  confidence: number;
  sensorData: {
    tds: number;
    waterTemp: number;
    airTemp: number;
    humidity: number;
  };
}

export function AIVisionHub({ confidence, sensorData }: AIVisionHubProps) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (confidence / 100) * circumference;

  return (
    <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
      <h3 className="text-[#2D5A27] mb-4">Latest Leaf Scan</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leaf Image */}
        <div className="relative aspect-[4/3] bg-gray-100 rounded-[12px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=450&fit=crop"
            alt="Strawberry leaf scan"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-[#72BF44] text-white px-3 py-1 rounded-full text-sm">
            Healthy
          </div>
        </div>

        {/* AI Analysis */}
        <div className="flex flex-col justify-between">
          {/* Confidence Score */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <svg className="w-28 h-28 transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="45"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="45"
                  stroke="#72BF44"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-[#2D5A27]">{confidence}%</span>
              </div>
            </div>

            <div>
              <div className="text-gray-600 text-sm mb-1">AI Confidence</div>
              <div className="text-[#2D5A27]">High Accuracy</div>
            </div>
          </div>

          {/* Sensor Context */}
          <div className="mt-6">
            <div className="text-gray-600 text-sm mb-3">Sensor Context</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F9FBF9] rounded-lg p-3">
                <div className="text-xs text-gray-500">TDS</div>
                <div className="text-[#2D5A27]">{sensorData.tds} ppm</div>
              </div>
              <div className="bg-[#F9FBF9] rounded-lg p-3">
                <div className="text-xs text-gray-500">Water</div>
                <div className="text-[#2D5A27]">{sensorData.waterTemp}°C</div>
              </div>
              <div className="bg-[#F9FBF9] rounded-lg p-3">
                <div className="text-xs text-gray-500">Air</div>
                <div className="text-[#2D5A27]">{sensorData.airTemp}°C</div>
              </div>
              <div className="bg-[#F9FBF9] rounded-lg p-3">
                <div className="text-xs text-gray-500">Humidity</div>
                <div className="text-[#2D5A27]">{sensorData.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
