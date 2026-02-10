import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface LTVOverviewProps {
  averageLTV: number;
  locationData: {
    location: string;
    ltv: number;
  }[];
}

export function LTVOverview({ averageLTV, locationData }: LTVOverviewProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-6">Пожизненная ценность клиента (LTV)</h3>

      {/* Average LTV */}
      <div className="mb-6 p-4 bg-[var(--bg-light)] rounded-lg">
        <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
          Средний LTV по сети
        </div>
        <div style={{ fontSize: "var(--text-kpi)", fontWeight: 600, color: "var(--text-primary)" }}>
          ${averageLTV.toLocaleString()}
        </div>
      </div>

      {/* LTV by Location */}
      <div style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)", marginBottom: "12px" }}>
        LTV по точкам
      </div>

      <div style={{ height: "240px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={locationData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" />
            <XAxis type="number" style={{ fontSize: "var(--text-caption)" }} tickFormatter={(value) => `$${value}`} />
            <YAxis dataKey="location" type="category" style={{ fontSize: "var(--text-small)" }} width={100} />
            <Tooltip
              contentStyle={{ fontSize: "var(--text-small)" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "LTV"]}
            />
            <Bar dataKey="ltv" fill="var(--color-accent-blue)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
        LTV рассчитывается как средний доход на клиента × средняя продолжительность жизни клиента
      </div>
    </div>
  );
}
