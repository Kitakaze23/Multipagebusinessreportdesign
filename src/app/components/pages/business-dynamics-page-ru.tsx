import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function BusinessDynamicsPageRU() {
  // Waterfall data showing revenue drivers
  const waterfallData = [
    { name: "Товары", value: 63350000 },
    { name: "Услуги", value: 13410000 },
    { name: "Аксессуары", value: 8940000 },
    { name: "Прочее", value: 3725000 },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Динамика бизнеса</h2>

      {/* Revenue Trend Chart */}
      <ChartContainer title="Тренд выручки (12 месяцев)" caption="Ежемесячная выручка показывает стабильную траекторию роста">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={reportDataRU.revenueTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="month" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis
              style={{ fontSize: "var(--text-caption)" }}
              tickFormatter={(value) => `₽${(value / 1000000).toFixed(0)}M`}
            />
            <Tooltip
              formatter={(value: number) => `₽${(value / 1000000).toFixed(1)}M`}
              contentStyle={{ fontSize: "var(--text-small)" }}
            />
            <Line type="monotone" dataKey="value" stroke="var(--color-accent-blue)" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Revenue Drivers */}
      <ChartContainer title="Драйверы выручки (Январь 2026)" caption="Разбивка выручки по категориям источников" height={280}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={waterfallData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="name" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis
              style={{ fontSize: "var(--text-caption)" }}
              tickFormatter={(value) => `₽${(value / 1000000).toFixed(0)}M`}
            />
            <Tooltip
              formatter={(value: number) => `₽${(value / 1000000).toFixed(1)}M`}
              contentStyle={{ fontSize: "var(--text-small)" }}
            />
            <Bar dataKey="value" fill="var(--color-accent-blue)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Insight */}
      <InsightBlock
        text="Сильное ускорение выручки в январе за счет постпраздничных промо и запуска новых продуктов. Продажа товаров остается основным драйвером — 71% от общей выручки."
        variant="growth"
      />
    </div>
  );
}
