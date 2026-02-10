import { LineChart, Line, ResponsiveContainer } from "recharts";

interface LocationCardProps {
  name: string;
  variant?: "leader" | "risk" | "default";
  kpis: {
    label: string;
    value: string;
  }[];
  chartData: { value: number }[];
  insight: string;
}

export function LocationCard({ name, variant = "default", kpis, chartData, insight }: LocationCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "leader":
        return "border-[var(--color-success)] bg-green-50";
      case "risk":
        return "border-[var(--color-danger)] bg-red-50";
      default:
        return "border-[var(--divider)] bg-white";
    }
  };

  const getVariantLabel = () => {
    switch (variant) {
      case "leader":
        return (
          <div className="inline-block px-2 py-1 rounded text-[var(--color-success)] bg-green-100" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
            LEADER
          </div>
        );
      case "risk":
        return (
          <div className="inline-block px-2 py-1 rounded text-[var(--color-danger)] bg-red-100" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
            AT RISK
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${getVariantStyles()}`}>
      <div className="flex items-center justify-between mb-4">
        <h3>{name}</h3>
        {getVariantLabel()}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {kpis.map((kpi, index) => (
          <div key={index}>
            <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
              {kpi.label}
            </div>
            <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      <div className="h-16 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={variant === "leader" ? "var(--color-success)" : variant === "risk" ? "var(--color-danger)" : "var(--color-accent-blue)"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-3 bg-white rounded border border-[var(--divider)]" style={{ fontSize: "var(--text-small)", color: "var(--text-primary)" }}>
        {insight}
      </div>
    </div>
  );
}
