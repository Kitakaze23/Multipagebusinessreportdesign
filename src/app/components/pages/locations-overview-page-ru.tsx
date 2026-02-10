import { TableHeader, TableRow } from "../table-row";
import { reportDataRU } from "@/app/data/report-data-ru";

export function LocationsOverviewPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Обзор точек</h2>

      {/* Locations Table */}
      <div className="bg-white rounded-lg border border-[var(--divider)] p-6">
        <h3 className="mb-6">Показатели по точкам</h3>
        <TableHeader />
        {reportDataRU.locations.map((location, index) => (
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
          <strong>Примечание:</strong> Точки Центр и Западный показывают исключительный рост, в то время как Восточный требует внимания. Показатели ТЦ Центральный улучшаются после объявления о ремонте.
        </p>
      </div>
    </div>
  );
}
