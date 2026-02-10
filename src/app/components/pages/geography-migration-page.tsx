import { GeographyBlock } from "../geography-block";
import { MigrationDiagram } from "../migration-diagram";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function GeographyMigrationPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">География и перемещения клиентов</h2>

      {/* Geography Block */}
      <div className="mb-8">
        <GeographyBlock
          avgDistance={reportDataRU.geography.avgDistance}
          localPercent={reportDataRU.geography.localPercent}
          nonLocalPercent={reportDataRU.geography.nonLocalPercent}
          topAreas={reportDataRU.geography.topAreas}
        />
      </div>

      {/* Migration Diagram */}
      <div className="mb-8">
        <MigrationDiagram flows={reportDataRU.migration.flows} />
      </div>

      {/* Insights */}
      <div className="flex flex-col gap-3">
        <InsightBlock
          text="68% клиентов живут в радиусе 5 км от точки покупки — локальный маркетинг критически важен"
          variant="neutral"
        />
        <InsightBlock
          text="Наибольшая миграция между точками Центр и Западный (434 клиента) — схожий ассортимент и удобство"
          variant="growth"
        />
        <InsightBlock
          text="134 клиента переместились из Восточного в ТЦ Центральный — возможный индикатор проблем в Восточном"
          variant="risk"
        />
        <InsightBlock
          text="Центральный район обеспечивает 33.6% клиентов — ключевой регион для маркетинговых инвестиций"
          variant="neutral"
        />
      </div>
    </div>
  );
}
