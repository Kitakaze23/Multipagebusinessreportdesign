import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface PurchaseFrequencyChartProps {
  data: {
    category: string;
    count: number;
    percent: number;
  }[];
}

export function PurchaseFrequencyChart({ data }: PurchaseFrequencyChartProps) {
  const colors = ["var(--color-accent-blue)", "var(--color-success)", "var(--color-warning)"];

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">Частота покупок</h3>

      <div style={{ height: "280px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis dataKey="category" style={{ fontSize: "var(--text-small)" }} />
            <YAxis style={{ fontSize: "var(--text-small)" }} />
            <Tooltip
              contentStyle={{ fontSize: "var(--text-small)" }}
              formatter={(value: number, name: string) => {
                const item = data.find((d) => d.count === value);
                return [`${value.toLocaleString()} (${item?.percent}%)`, "Клиентов"];
              }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "16px" }}>
        Распределение клиентов по количеству покупок за последние 90 дней
      </div>
    </div>
  );
}
