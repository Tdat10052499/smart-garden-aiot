import { AlertCircle, ThermometerSun, Droplet } from "lucide-react";

interface Alert {
  id: string;
  severity: "error" | "warning";
  title: string;
  description: string;
  time: string;
  icon: "disease" | "temperature" | "water";
}

const alerts: Alert[] = [
  {
    id: "1",
    severity: "error",
    title: "Possible Leaf Spot Detected",
    description: "AI detected irregular patterns on Plant #A-23",
    time: "5 min ago",
    icon: "disease"
  },
  {
    id: "2",
    severity: "warning",
    title: "Water Temperature High",
    description: "Reservoir temp at 26.8°C (target: 18-24°C)",
    time: "12 min ago",
    icon: "temperature"
  },
  {
    id: "3",
    severity: "warning",
    title: "TDS Level Fluctuation",
    description: "TDS dropped to 850 ppm (optimal: 1000-1200)",
    time: "28 min ago",
    icon: "water"
  }
];

export function SmartAlerts() {
  return (
    <div className="bg-card rounded-[12px] p-6 shadow-sm border border-border">
      <h3 className="text-primary mb-4">Recent Issues</h3>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}\n            className={`flex gap-4 p-4 rounded-[12px] border-l-4 ${\n              alert.severity === "error"\n                ? "bg-destructive/10 border-destructive/30"\n                : "bg-amber-500/10 border-amber-500/30"\n            }`}\n          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 \${alert.severity === "error" ? "bg-destructive/20 text-destructive" : "bg-amber-500/20 text-amber-400"}`}\n            >
              {alert.icon === "disease" && <AlertCircle size={20} />}
              {alert.icon === "temperature" && <ThermometerSun size={20} />}
              {alert.icon === "water" && <Droplet size={20} />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-primary">{alert.title}</h4>
                <span className="text-xs text-secondary whitespace-nowrap">{alert.time}</span>
              </div>
<p className="text-sm text-secondary">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
