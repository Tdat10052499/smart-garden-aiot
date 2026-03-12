import { useState } from "react";
import { Calculator, Droplets } from "lucide-react";

export function DosageCalculator() {
  const [currentTds, setCurrentTds] = useState<string>("800");
  const [targetTds, setTargetTds] = useState<string>("1200");
  const [reservoirSize, setReservoirSize] = useState<string>("10");
  const [result, setResult] = useState<{
    partA: number;
    partB: number;
    waterChange: boolean;
  } | null>(null);

  const calculateDosage = () => {
    const current = parseFloat(currentTds);
    const target = parseFloat(targetTds);
    const size = parseFloat(reservoirSize);

    if (isNaN(current) || isNaN(target) || isNaN(size)) {
      alert("Please enter valid numbers");
      return;
    }

    const tdsDifference = target - current;

    // Simple calculation: ~50 ppm increase per 1ml of nutrient per liter
    const nutrientNeeded = (tdsDifference * size) / 50;

    // If difference is too large, recommend water change
    const waterChange = Math.abs(tdsDifference) > 400;

    setResult({
      partA: Math.round(nutrientNeeded * 10) / 10,
      partB: Math.round(nutrientNeeded * 10) / 10,
      waterChange
    });
  };

  return (
    <div className="bg-card border-border rounded-[12px] p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-primary" size={24} />
        <h2 className="text-primary">Nutrient Dosage Calculator</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Current TDS (ppm)</label>
          <input
            type="number"
            value={currentTds}
            onChange={(e) => setCurrentTds(e.target.value)}
            className="w-full p-3 border border-border rounded-[12px] bg-background"
            placeholder="e.g., 800"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Target TDS (ppm)</label>
          <input
            type="number"
            value={targetTds}
            onChange={(e) => setTargetTds(e.target.value)}
            className="w-full p-3 border border-border rounded-[12px] bg-background"
            placeholder="e.g., 1200"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Reservoir Size (L)</label>
          <input
            type="number"
            value={reservoirSize}
            onChange={(e) => setReservoirSize(e.target.value)}
            className="w-full p-3 border border-border rounded-[12px] bg-background"
            placeholder="e.g., 10"
          />
        </div>
      </div>

      <button
        onClick={calculateDosage}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-[12px] transition-all mb-4"
      >
        Calculate Required Solution
      </button>

      {result && (
        <div className={`p-4 rounded-[12px] border ${result.waterChange ? "bg-destructive/5 border-destructive" : "bg-success/5 border-success"}`}>
          {result.waterChange ? (
            <div>
              <p className="text-destructive mb-2">
                <strong>⚠️ Large TDS Adjustment Needed</strong>
              </p>
              <p className="text-sm text-destructive-foreground">
                The difference is significant. We recommend performing a complete water change instead of adjusting the current solution.
              </p>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <Droplets className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-primary mb-2">
                  <strong>Add to Reservoir:</strong>
                </p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Part A Nutrients: <strong>{result.partA}ml</strong></li>
                  <li>• Part B Nutrients: <strong>{result.partB}ml</strong></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Mix thoroughly and wait 15 minutes before retesting TDS levels.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
