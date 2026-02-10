import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  variant?: "positive" | "negative" | "neutral";
}

export function KPICard({ title, value, delta, deltaLabel, variant = "neutral" }: KPICardProps) {
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
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)] flex flex-col gap-2">
      <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>{title}</div>
      <div style={{ fontSize: "var(--text-kpi)", fontWeight: 600, color: "var(--text-primary)" }}>
        {value}
      </div>
      {delta !== undefined && (
        <div className={`flex items-center gap-1 ${getVariantColor()}`} style={{ fontSize: "var(--text-small)" }}>
          {getIcon()}
          <span>
            {delta > 0 ? "+" : ""}
            {delta}%
          </span>
          {deltaLabel && <span className="text-[var(--text-secondary)]">{deltaLabel}</span>}
        </div>
      )}
    </div>
  );
}
