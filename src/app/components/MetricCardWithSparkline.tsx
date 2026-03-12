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
    <div className="bg-card border-border rounded-[12px] p-5 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-primary text-2xl">{value}</span>
            <span className="text-muted-foreground text-sm">{unit}</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
          isPositive ? "bg-success data-[state=open]:bg-success text-success-foreground" : "bg-accent data-[state=open]:bg-accent text-accent-foreground"
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
              stroke="accent"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-muted-foreground mt-2">Last 1 hour</p>
    </div>
  );
}
