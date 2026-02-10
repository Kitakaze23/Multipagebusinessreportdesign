import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { KPICard } from "../kpi-card";
import { reportData } from "@/app/data/report-data";

export function ReviewsPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Reviews & Reputation</h2>

      {/* Reviews KPI */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard
          title={reportData.reviewsKPI.title}
          value={reportData.reviewsKPI.value}
          delta={reportData.reviewsKPI.delta}
          deltaLabel={reportData.reviewsKPI.deltaLabel}
          variant={reportData.reviewsKPI.variant}
        />
        <KPICard title="Avg Rating" value="4.6/5.0" delta={3.2} deltaLabel="vs last month" variant="positive" />
        <KPICard title="Response Rate" value="94%" delta={2.1} deltaLabel="vs last month" variant="positive" />
      </div>

      {/* Scatter Plot: Reviews vs Revenue */}
      <ChartContainer
        title="Reviews vs Revenue by Location"
        caption="Bubble size represents revenue volume. Positive correlation between review volume and revenue performance."
        height={320}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis
              type="number"
              dataKey="reviews"
              name="Reviews"
              style={{ fontSize: "var(--text-caption)" }}
              label={{ value: "Number of Reviews", position: "insideBottom", offset: -5, fontSize: 12 }}
            />
            <YAxis
              type="number"
              dataKey="clients"
              name="Customers"
              style={{ fontSize: "var(--text-caption)" }}
              label={{ value: "Customer Count", angle: -90, position: "insideLeft", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{ fontSize: "var(--text-small)" }}
              formatter={(value: number, name: string) => [value.toLocaleString(), name === "reviews" ? "Reviews" : "Customers"]}
            />
            <Scatter data={reportData.locations} fill="var(--color-accent-blue)">
              {reportData.locations.map((entry, index) => (
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
          text="Review volume increased 15.2% driven by automated post-purchase email campaigns"
          variant="growth"
        />
        <InsightBlock
          text="Downtown location maintains highest rating (4.8) with strong service feedback"
          variant="neutral"
        />
        <InsightBlock
          text="Response rate to negative reviews improved to 98%, up from 91% last quarter"
          variant="growth"
        />
      </div>
    </div>
  );
}
