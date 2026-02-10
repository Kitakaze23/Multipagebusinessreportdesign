import { KPICard } from "../kpi-card";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function CoverPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      {/* Header */}
      <div className="mb-12">
        <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "8px" }}>
          {reportDataRU.reportPeriod}
        </div>
        <h1 className="mb-2">Ежемесячный бизнес-отчет</h1>
        <div style={{ fontSize: "var(--text-h3)", color: "var(--text-secondary)" }}>
          {reportDataRU.businessName}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--divider)] mb-12" />

      {/* Executive Summary Title */}
      <h2 className="mb-6">Краткое резюме</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        {reportDataRU.executiveKPIs.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            delta={kpi.delta}
            deltaLabel={kpi.deltaLabel}
            variant={kpi.variant}
          />
        ))}
      </div>

      {/* Key Insights */}
      <h3 className="mb-4">Ключевые инсайты</h3>
      <div className="flex flex-col gap-3">
        {reportDataRU.insights.map((insight, index) => (
          <InsightBlock key={index} text={insight.text} variant={insight.variant} />
        ))}
      </div>
    </div>
  );
}
