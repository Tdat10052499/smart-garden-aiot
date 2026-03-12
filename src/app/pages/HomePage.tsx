import { useState } from "react";
import { LiveCamFeed } from "../components/LiveCamFeed";
import { MetricCardWithSparkline } from "../components/MetricCardWithSparkline";
import { NutrientStabilityChart } from "../components/NutrientStabilityChart";

export function HomePage() {
  // Mock real-time data with hourly trends
  const [metrics] = useState([
    {
      label: "TDS Level",
      value: 1150,
      unit: "ppm",
      trend: [980, 1020, 1050, 1100, 1120, 1140, 1150],
      change: "+5.2%"
    },
    {
      label: "PT100 Water Temp",
      value: 22.4,
      unit: "°C",
      trend: [22.1, 22.2, 22.3, 22.3, 22.4, 22.4, 22.4],
      change: "+1.4%"
    },
    {
      label: "Air Temperature",
      value: 24.8,
      unit: "°C",
      trend: [23.5, 23.8, 24.0, 24.2, 24.5, 24.7, 24.8],
      change: "+5.5%"
    },
    {
      label: "Humidity",
      value: 68,
      unit: "%",
      trend: [72, 71, 70, 69, 68, 68, 68],
      change: "-5.6%"
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#2D5A27] mb-2">Hydroponic Dashboard</h1>
        <p className="text-gray-600">Real-time monitoring and AI-powered plant health analysis</p>
      </div>

      {/* Live Cam Feed */}
      <div className="mb-8">
        <LiveCamFeed />
      </div>

      {/* Dynamic Metric Cards with Sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <MetricCardWithSparkline
            key={index}
            label={metric.label}
            value={metric.value}
            unit={metric.unit}
            trend={metric.trend}
            change={metric.change}
          />
        ))}
      </div>

      {/* Nutrient Stability Chart */}
      <div className="mb-8">
        <NutrientStabilityChart />
      </div>
    </div>
  );
}
