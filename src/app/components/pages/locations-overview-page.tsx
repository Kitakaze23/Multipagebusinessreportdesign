import { TableHeader, TableRow } from "../table-row";
import { reportData } from "@/app/data/report-data";

export function LocationsOverviewPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Locations Overview</h2>

      {/* Locations Table */}
      <div className="bg-white rounded-lg border border-[var(--divider)] p-6">
        <h3 className="mb-6">Performance by Location</h3>
        <TableHeader />
        {reportData.locations.map((location, index) => (
          <TableRow
            key={index}
            location={location.location}
            revenue={location.revenue}
            momChange={location.momChange}
            avgCheck={location.avgCheck}
            clients={location.clients}
            reviews={location.reviews}
          />
        ))}
      </div>

      <div className="mt-8 p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>
          <strong>Note:</strong> Downtown and Westside locations show exceptional growth, while Eastside requires attention. Central Mall performance improving post-renovation announcement.
        </p>
      </div>
    </div>
  );
}
