import { LocationCard } from "../location-card";
import { reportData } from "@/app/data/report-data";

export function LocationCardsPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Location Spotlight</h2>

      {/* Leader Location */}
      <div className="mb-8">
        <LocationCard
          name={reportData.leaderLocation.name}
          variant={reportData.leaderLocation.variant}
          kpis={reportData.leaderLocation.kpis}
          chartData={reportData.leaderLocation.chartData}
          insight={reportData.leaderLocation.insight}
        />
      </div>

      {/* At Risk Location */}
      <LocationCard
        name={reportData.riskLocation.name}
        variant={reportData.riskLocation.variant}
        kpis={reportData.riskLocation.kpis}
        chartData={reportData.riskLocation.chartData}
        insight={reportData.riskLocation.insight}
      />

      <div className="mt-8 p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
          <strong>Strategic Actions:</strong> Replicate Downtown's success factors across network. Implement targeted intervention plan for Eastside including local partnerships, increased marketing spend, and staff training initiatives.
        </p>
      </div>
    </div>
  );
}
