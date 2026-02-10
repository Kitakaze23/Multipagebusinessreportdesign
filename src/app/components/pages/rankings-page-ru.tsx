import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Label } from "recharts";
import { ChartContainer } from "../chart-container";
import { TrendingUp } from "lucide-react";
import { reportDataRU } from "@/app/data/report-data-ru";

export function RankingsPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Рейтинги и кластеры</h2>

      {/* Top Performers */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Top by Revenue */}
        <div className="bg-white rounded-lg border border-[var(--divider)] p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[var(--color-success)]" />
            Топ-3 по выручке
          </h3>
          <div className="flex flex-col gap-3">
            {reportDataRU.topByRevenue.map((item) => (
              <div
                key={item.rank}
                className="flex items-center justify-between p-3 bg-[var(--bg-light)] rounded border border-[var(--divider)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center"
                    style={{ fontSize: "var(--text-base)", fontWeight: 600 }}
                  >
                    {item.rank}
                  </div>
                  <div style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)" }}>
                    {item.name}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "var(--text-small)", color: "var(--color-success)", fontWeight: 500 }}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top by Avg Check */}
        <div className="bg-white rounded-lg border border-[var(--divider)] p-6">
          <h3 className="mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[var(--color-success)]" />
            Топ-3 по среднему чеку
          </h3>
          <div className="flex flex-col gap-3">
            {reportDataRU.topByAvgCheck.map((item) => (
              <div
                key={item.rank}
                className="flex items-center justify-between p-3 bg-[var(--bg-light)] rounded border border-[var(--divider)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center"
                    style={{ fontSize: "var(--text-base)", fontWeight: 600 }}
                  >
                    {item.rank}
                  </div>
                  <div style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)" }}>
                    {item.name}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "var(--text-small)", color: "var(--color-success)", fontWeight: 500 }}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cluster Analysis */}
      <ChartContainer
        title="Кластеризация точек: Клиенты vs Средний чек"
        caption="Размер пузырька представляет выручку. Выявляет сегменты высокой ценности (верхний правый) и возможности роста (нижний левый)."
        height={320}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis
              type="number"
              dataKey="clients"
              name="Клиенты"
              style={{ fontSize: "var(--text-caption)" }}
            >
              <Label value="Количество клиентов" position="insideBottom" offset={-5} style={{ fontSize: 12 }} />
            </XAxis>
            <YAxis
              type="number"
              dataKey="avgCheck"
              name="Средний чек"
              style={{ fontSize: "var(--text-caption)" }}
            >
              <Label value="Средний чек (₽)" angle={-90} position="insideLeft" style={{ fontSize: 12 }} />
            </YAxis>
            <ZAxis type="number" dataKey="size" range={[100, 1000]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{ fontSize: "var(--text-small)" }}
              formatter={(value: number, name: string) => {
                if (name === "avgCheck") return [`₽${value.toFixed(2)}`, "Средний чек"];
                if (name === "clients") return [value.toLocaleString(), "Клиенты"];
                return [value, name];
              }}
            />
            <Scatter data={reportDataRU.clusterData} fill="var(--color-accent-blue)" />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
