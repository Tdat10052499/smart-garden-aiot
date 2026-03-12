import { Line, LineChart, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardWithSparklineProps {
  label: string;
  value: number;
  unit: string;
  trend: number[];
  change: string;
}

export function MetricCardWithSparkline({ label, value, unit, trend, change }: MetricCardWithSparklineProps) {
  const isPositive = change.startsWith("+");
  const chartData = trend.map((val, idx) => ({
    value: val,
    index: idx,
    id: `${label}-${idx}`
  }));

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-5 shadow-sm border border-white/20">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-[#2D5A27] text-2xl">{value}</span>
            <span className="text-gray-500 text-sm">{unit}</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
          isPositive ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
        }`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </div>
      </div>

      {/* Sparkline Chart */}
      <div className="h-12 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              key={`line-${label}`}
              type="monotone"
              dataKey="value"
              stroke="#72BF44"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-gray-500 mt-2">Last 1 hour</p>
    </div>
  );
}
