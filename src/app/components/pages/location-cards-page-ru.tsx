import { LocationCard } from "../location-card";
import { reportDataRU } from "@/app/data/report-data-ru";

export function LocationCardsPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Фокус на точки</h2>

      {/* Leader Location */}
      <div className="mb-8">
        <LocationCard
          name={reportDataRU.leaderLocation.name}
          variant={reportDataRU.leaderLocation.variant}
          kpis={reportDataRU.leaderLocation.kpis}
          chartData={reportDataRU.leaderLocation.chartData}
          insight={reportDataRU.leaderLocation.insight}
        />
      </div>

      {/* At Risk Location */}
      <LocationCard
        name={reportDataRU.riskLocation.name}
        variant={reportDataRU.riskLocation.variant}
        kpis={reportDataRU.riskLocation.kpis}
        chartData={reportDataRU.riskLocation.chartData}
        insight={reportDataRU.riskLocation.insight}
      />

      <div className="mt-8 p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
        <p style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
          <strong>Стратегические действия:</strong> Тиражировать факторы успеха точки Центр по всей сети. Внедрить целевой план вмешательства для точки Восточный, включая локальные партнерства, увеличение маркетингового бюджета и обучение персонала.
        </p>
      </div>
    </div>
  );
}
