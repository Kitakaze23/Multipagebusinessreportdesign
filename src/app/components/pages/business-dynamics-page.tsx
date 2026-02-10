import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { reportData } from "@/app/data/report-data";

export function BusinessDynamicsPage() {
  // Waterfall data showing revenue drivers
  const waterfallData = [
    { name: "Product Sales", value: 850000 },
    { name: "Services", value: 180000 },
    { name: "Accessories", value: 120000 },
    { name: "Other", value: 50000 },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Business Dynamics</h2>

      {/* Revenue Trend Chart */}
      <ChartContainer title="Revenue Trend (12 Months)" caption="Monthly revenue performance showing consistent growth trajectory">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={reportData.revenueTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="month" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis
              style={{ fontSize: "var(--text-caption)" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
              contentStyle={{ fontSize: "var(--text-small)" }}
            />
            <Line type="monotone" dataKey="value" stroke="var(--color-accent-blue)" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Revenue Drivers */}
      <ChartContainer title="Revenue Drivers (January 2026)" caption="Breakdown of revenue sources by category" height={280}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={waterfallData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="name" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis
              style={{ fontSize: "var(--text-caption)" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`}
              contentStyle={{ fontSize: "var(--text-small)" }}
            />
            <Bar dataKey="value" fill="var(--color-accent-blue)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Insight */}
      <InsightBlock
        text="Strong revenue acceleration in January driven by post-holiday promotions and new product launches. Product sales remain the primary driver at 71% of total revenue."
        variant="growth"
      />
    </div>
  );
}
