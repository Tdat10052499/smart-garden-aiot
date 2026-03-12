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
    <div className="bg-white/80 backdrop-blur-md rounded-[12px] p-6 shadow-sm border border-white/20">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="text-[#2D5A27]" size={24} />
        <h2 className="text-[#2D5A27]">Nutrient Dosage Calculator</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Current TDS (ppm)</label>
          <input
            type="number"
            value={currentTds}
            onChange={(e) => setCurrentTds(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
            placeholder="e.g., 800"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-2 block">Target TDS (ppm)</label>
          <input
            type="number"
            value={targetTds}
            onChange={(e) => setTargetTds(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
            placeholder="e.g., 1200"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-2 block">Reservoir Size (L)</label>
          <input
            type="number"
            value={reservoirSize}
            onChange={(e) => setReservoirSize(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-[12px] bg-white"
            placeholder="e.g., 10"
          />
        </div>
      </div>

      <button
        onClick={calculateDosage}
        className="w-full bg-[#2D5A27] hover:bg-[#234520] text-white py-3 px-6 rounded-[12px] transition-all mb-4"
      >
        Calculate Required Solution
      </button>

      {result && (
        <div className={`p-4 rounded-[12px] ${result.waterChange ? "bg-amber-50 border border-amber-200" : "bg-green-50 border border-green-200"}`}>
          {result.waterChange ? (
            <div>
              <p className="text-amber-900 mb-2">
                <strong>⚠️ Large TDS Adjustment Needed</strong>
              </p>
              <p className="text-sm text-amber-800">
                The difference is significant. We recommend performing a complete water change instead of adjusting the current solution.
              </p>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <Droplets className="text-[#2D5A27] flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-[#2D5A27] mb-2">
                  <strong>Add to Reservoir:</strong>
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Part A Nutrients: <strong>{result.partA}ml</strong></li>
                  <li>• Part B Nutrients: <strong>{result.partB}ml</strong></li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
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
