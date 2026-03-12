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
    <div className="bg-card rounded-[12px] p-6 shadow-sm border border-border">
      <h3 className="text-primary mb-4">Latest Leaf Scan</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leaf Image */}
        <div className="relative aspect-[4/3] bg-muted rounded-[12px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=450&fit=crop"
            alt="Strawberry leaf scan"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
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
                  stroke="border"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="45"
                  stroke="accent"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-primary">{confidence}%</span>
              </div>
            </div>

            <div>
              <div className="text-muted-foreground text-sm mb-1">AI Confidence</div>
              <div className="text-primary">High Accuracy</div>
            </div>
          </div>

          {/* Sensor Context */}
          <div className="mt-6">
            <div className="text-muted-foreground text-sm mb-3">Sensor Context</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted rounded-lg p-3">
                <div className="text-xs text-muted-foreground">TDS</div>
                <div className="text-primary">{sensorData.tds} ppm</div>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="text-xs text-muted-foreground">Water</div>
                <div className="text-primary">{sensorData.waterTemp}°C</div>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="text-xs text-muted-foreground">Air</div>
                <div className="text-primary">{sensorData.airTemp}°C</div>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="text-xs text-muted-foreground">Humidity</div>
                <div className="text-primary">{sensorData.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
