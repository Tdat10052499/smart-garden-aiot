import { motion } from "motion/react";

interface MetricCardProps {
  label: string;
  value: string | number;
  unit: string;
  isLive?: boolean;
}

export function MetricCard({ label, value, unit, isLive }: MetricCardProps) {
  return (
    <div className="bg-card rounded-[12px] p-6 shadow-sm border border-border">
      <div className="flex items-start justify-between mb-3">
        <span className="text-muted-foreground">{label}</span>
        {isLive && (
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-accent text-sm">Live</span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl text-primary">{value}</span>
        <span className="text-muted-foreground">{unit}</span>
      </div>
    </div>
  );
}
