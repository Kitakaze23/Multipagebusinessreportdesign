import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartContainer } from "../chart-container";
import { InsightBlock } from "../insight-block";
import { KPICard } from "../kpi-card";
import { reportData } from "@/app/data/report-data";

export function CustomersPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Customer Analytics</h2>

      {/* Customer KPIs */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <KPICard title="New Customers" value="2,100" delta={10.5} deltaLabel="vs last month" variant="positive" />
        <KPICard title="Returning Customers" value="5,200" delta={8.3} deltaLabel="vs last month" variant="positive" />
        <KPICard title="Retention Rate" value="71.2%" delta={3.1} deltaLabel="vs last month" variant="positive" />
      </div>

      {/* New vs Returning Customers */}
      <ChartContainer title="New vs Returning Customers (12 Months)" caption="Monthly breakdown showing healthy balance of acquisition and retention" height={320}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={reportData.customerData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="month" style={{ fontSize: "var(--text-caption)" }} />
            <YAxis style={{ fontSize: "var(--text-caption)" }} />
            <Tooltip contentStyle={{ fontSize: "var(--text-small)" }} />
            <Legend wrapperStyle={{ fontSize: "var(--text-small)" }} />
            <Bar dataKey="new" fill="var(--color-accent-blue)" name="New Customers" />
            <Bar dataKey="returning" fill="var(--color-success)" name="Returning Customers" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="h-8" />

      {/* Insight */}
      <InsightBlock
        text="Customer retention improved significantly to 71%, exceeding the industry benchmark of 65%. Loyalty program enhancements and personalized marketing campaigns are delivering strong results."
        variant="growth"
      />
    </div>
  );
}
