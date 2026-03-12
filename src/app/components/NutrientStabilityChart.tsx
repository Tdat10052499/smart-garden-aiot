import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function NutrientStabilityChart() {
  // Mock data - in production, this would come from Supabase
  const data = [
    { id: 1, time: "00:00", tds: 980, ph: 6.2, temp: 21.5 },
    { id: 2, time: "04:00", tds: 1020, ph: 6.1, temp: 21.8 },
    { id: 3, time: "08:00", tds: 1050, ph: 6.0, temp: 22.0 },
    { id: 4, time: "12:00", tds: 1100, ph: 5.9, temp: 22.3 },
    { id: 5, time: "16:00", tds: 1120, ph: 5.8, temp: 22.4 },
    { id: 6, time: "20:00", tds: 1140, ph: 5.9, temp: 22.2 },
    { id: 7, time: "Now", tds: 1150, ph: 6.0, temp: 22.4 }
  ];

  return (
    <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-primary mb-2">Nutrient Stability - 24 Hour Trend</h2>
        <p className="text-sm text-muted-foreground">TDS levels tracked over the last day</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTds" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="time"
              stroke="hsl(var(--text-secondary))"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="hsl(var(--text-secondary))"
              style={{ fontSize: "12px" }}
              label={{ value: "TDS (ppm)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                padding: "12px"
              }}
            />
            <Area
              key="area-tds"
              type="monotone"
              dataKey="tds"
              stroke="hsl(var(--accent-secondary))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTds)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-muted rounded-[12px] border border-muted">
        <p className="text-sm text-muted-foreground">
          <strong>Stability Analysis:</strong> TDS levels are gradually increasing within optimal range.
          Current trend suggests stable nutrient uptake. Consider checking in 6-8 hours.
        </p>
      </div>
    </div>
  );
}
