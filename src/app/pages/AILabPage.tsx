import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import { DiagnosticCard } from "../components/DiagnosticCard";

export function AILabPage() {
  const [selectedDate, setSelectedDate] = useState<string>("all");
  const [selectedDisease, setSelectedDisease] = useState<string>("all");

  // Mock diagnostic data
  const diagnostics = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
      confidence: 95,
      status: "Leaf Scorch Detected",
      statusType: "warning" as const,
      date: "2026-03-12",
      timestamp: "14:32",
      diseaseType: "scorch"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400",
      confidence: 98,
      status: "Healthy",
      statusType: "healthy" as const,
      date: "2026-03-12",
      timestamp: "12:15",
      diseaseType: "none"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400",
      confidence: 87,
      status: "Powdery Mildew",
      statusType: "warning" as const,
      date: "2026-03-11",
      timestamp: "16:45",
      diseaseType: "mildew"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400",
      confidence: 92,
      status: "Healthy",
      statusType: "healthy" as const,
      date: "2026-03-11",
      timestamp: "10:22",
      diseaseType: "none"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=400",
      confidence: 89,
      status: "Nutrient Deficiency",
      statusType: "warning" as const,
      date: "2026-03-10",
      timestamp: "15:30",
      diseaseType: "deficiency"
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1588191266216-7c3cc6d336d0?w=400",
      confidence: 96,
      status: "Healthy",
      statusType: "healthy" as const,
      date: "2026-03-10",
      timestamp: "09:18",
      diseaseType: "none"
    }
  ];

  // Filter diagnostics
  const filteredDiagnostics = diagnostics.filter(item => {
    const dateMatch = selectedDate === "all" || item.date === selectedDate;
    const diseaseMatch = selectedDisease === "all" || item.diseaseType === selectedDisease;
    return dateMatch && diseaseMatch;
  });

  return (
    <div className="flex-1 p-6 w-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-primary mb-2">AI Lab</h1>
        <p className="text-secondary">Diagnostic history and analysis results</p>
      </div>

      {/* Horizontal Top Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-surface border border-border rounded-2xl shadow-sm gap-4">
        {/* Left: Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Date Filter */}
          <div>
            <label className="text-sm text-secondary mb-1 block">Date</label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-background border border-border text-primary rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-secondary w-full md:w-48 text-sm"
            >
              <option value="all">All Dates</option>
              <option value="2026-03-12">Today (Mar 12)</option>
              <option value="2026-03-11">Yesterday (Mar 11)</option>
              <option value="2026-03-10">Mar 10</option>
            </select>
          </div>

          {/* Disease Type Filter */}
          <div>
            <label className="text-sm text-secondary mb-1 block">Disease Type</label>
            <select
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="bg-background border border-border text-primary rounded-lg px-3 py-2 focus:ring-2 focus:ring-accent-secondary w-full md:w-48 text-sm"
            >
              <option value="all">All Types</option>
              <option value="none">Healthy</option>
              <option value="scorch">Leaf Scorch</option>
              <option value="mildew">Powdery Mildew</option>
              <option value="deficiency">Nutrient Deficiency</option>
            </select>
          </div>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-secondary font-medium">
          <div>Total Scans: <span className="text-primary">{diagnostics.length}</span></div>
          <div>Showing: <span className="text-primary">{filteredDiagnostics.length}</span></div>
        </div>
      </div>

      {/* Full Width Masonry Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDiagnostics.map((diagnostic) => (
            <DiagnosticCard
              key={diagnostic.id}
              imageUrl={diagnostic.imageUrl}
              confidence={diagnostic.confidence}
              status={diagnostic.status}
              statusType={diagnostic.statusType}
              date={diagnostic.date}
              timestamp={diagnostic.timestamp}
            />
          ))}
        </div>

        {filteredDiagnostics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary">No results found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
