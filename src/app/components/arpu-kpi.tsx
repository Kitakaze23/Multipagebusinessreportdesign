import { LineChart, Line, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface ARPUKPIProps {
  value: number;
  delta: number;
  deltaLabel?: string;
  trendData: { value: number }[];
  variant?: "positive" | "negative" | "neutral";
}

export function ARPUKPI({
  value,
  delta,
  deltaLabel = "к прошлому месяцу",
  trendData,
  variant = "neutral",
}: ARPUKPIProps) {
  const getVariantColor = () => {
    switch (variant) {
      case "positive":
        return "text-[var(--color-success)]";
      case "negative":
        return "text-[var(--color-danger)]";
      default:
        return "text-[var(--text-secondary)]";
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "positive":
        return <TrendingUp className="w-4 h-4" />;
      case "negative":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "8px" }}>
        Средний доход на клиента (ARPU)
      </div>

      <div style={{ fontSize: "var(--text-kpi)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
        ${value.toLocaleString()}
      </div>

      <div className={`flex items-center gap-1 mb-4 ${getVariantColor()}`} style={{ fontSize: "var(--text-small)" }}>
        {getIcon()}
        <span>
          {delta > 0 ? "+" : ""}
          {delta}%
        </span>
        <span className="text-[var(--text-secondary)]">{deltaLabel}</span>
      </div>

      {/* Sparkline */}
      <div className="h-12 border-t border-[var(--divider)] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={variant === "positive" ? "var(--color-success)" : variant === "negative" ? "var(--color-danger)" : "var(--color-accent-blue)"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
