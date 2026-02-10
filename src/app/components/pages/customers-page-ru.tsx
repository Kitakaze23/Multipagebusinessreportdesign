import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { KPICard } from "../kpi-card";
import { reportDataRU } from "@/app/data/report-data-ru";

export function CustomersPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Аналитика клиентов</h2>

      {/* Customer KPIs */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard title="Новые клиенты" value="2,100" delta={10.5} deltaLabel="к прошлому месяцу" variant="positive" />
        <KPICard title="Вернувшиеся клиенты" value="5,200" delta={8.3} deltaLabel="к прошлому месяцу" variant="positive" />
        <KPICard title="Уровень удержания" value="71.2%" delta={3.1} deltaLabel="к прошлому месяцу" variant="positive" />
      </div>

      {/* New vs Returning Customers */}
      <ChartContainer title="Новые и вернувшиеся клиенты (12 месяцев)" caption="Ежемесячная разбивка показывает здоровый баланс привлечения и удержания" height={320}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={reportDataRU.customerData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="month" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis style={{ fontSize: "var(--text-caption)" }} />
            <Tooltip contentStyle={{ fontSize: "var(--text-small)" }} />
            <Legend wrapperStyle={{ fontSize: "var(--text-small)" }} />
            <Bar dataKey="new" fill="var(--color-accent-blue)" name="Новые клиенты" />
            <Bar dataKey="returning" fill="var(--color-success)" name="Вернувшиеся клиенты" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Insight */}
      <InsightBlock
        text="Удержание клиентов значительно улучшилось до 71%, превышая отраслевой бенчмарк в 65%. Улучшения программы лояльности и персонализированные маркетинговые кампании дают сильные результаты."
        variant="growth"
      />
    </div>
  );
}
