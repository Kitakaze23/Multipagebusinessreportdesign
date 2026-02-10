import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { KPICard } from "../kpi-card";
import { reportDataRU } from "@/app/data/report-data-ru";

export function ReviewsPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Отзывы и репутация</h2>

      {/* Reviews KPI */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard
          title={reportDataRU.reviewsKPI.title}
          value={reportDataRU.reviewsKPI.value}
          delta={reportDataRU.reviewsKPI.delta}
          deltaLabel={reportDataRU.reviewsKPI.deltaLabel}
          variant={reportDataRU.reviewsKPI.variant}
        />
        <KPICard title="Средний рейтинг" value="4.6/5.0" delta={3.2} deltaLabel="к прошлому месяцу" variant="positive" />
        <KPICard title="Процент ответов" value="94%" delta={2.1} deltaLabel="к прошлому месяцу" variant="positive" />
      </div>

      {/* Scatter Plot: Reviews vs Revenue */}
      <ChartContainer
        title="Отзывы и выручка по точкам"
        caption="Размер пузырька представляет объем выручки. Положительная корреляция между количеством отзывов и показателями выручки."
        height={320}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis
              type="number"
              dataKey="reviews"
              name="Отзывы"
              style={{ fontSize: "var(--text-caption)" }}
              label={{ value: "Количество отзывов", position: "insideBottom", offset: -5, fontSize: 12 }}
            />
            <YAxis
              type="number"
              dataKey="clients"
              name="Клиенты"
              style={{ fontSize: "var(--text-caption)" }}
              label={{ value: "Количество клиентов", angle: -90, position: "insideLeft", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{ fontSize: "var(--text-small)" }}
              formatter={(value: number, name: string) => [value.toLocaleString(), name === "reviews" ? "Отзывы" : "Клиенты"]}
            />
            <Scatter data={reportDataRU.locations} fill="var(--color-accent-blue)">
              {reportDataRU.locations.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.momChange > 0 ? "var(--color-success)" : "var(--color-warning)"} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Key Insights */}
      <div className="flex flex-col gap-3">
        <InsightBlock
          text="Количество отзывов выросло на 15.2% за счет автоматизированных email-кампаний после покупки"
          variant="growth"
        />
        <InsightBlock
          text="Точка Центр сохраняет наивысший рейтинг (4.8) с сильной обратной связью по сервису"
          variant="neutral"
        />
        <InsightBlock
          text="Процент ответов на негативные отзывы вырос до 98% с 91% в прошлом квартале"
          variant="growth"
        />
      </div>
    </div>
  );
}
