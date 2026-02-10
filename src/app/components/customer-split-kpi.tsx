import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CustomerSplitKPIProps {
  newCustomers: number;
  returningCustomers: number;
  newPercent: number;
  returningPercent: number;
  delta: number;
  deltaLabel?: string;
  variant?: "positive" | "negative" | "neutral";
}

export function CustomerSplitKPI({
  newCustomers,
  returningCustomers,
  newPercent,
  returningPercent,
  delta,
  deltaLabel = "к прошлому месяцу",
  variant = "neutral",
}: CustomerSplitKPIProps) {
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
      <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "16px" }}>
        Структура клиентской базы
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* New Customers */}
        <div>
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
            Новые клиенты
          </div>
          <div style={{ fontSize: "var(--text-kpi)", fontWeight: 600, color: "var(--text-primary)" }}>
            {newCustomers.toLocaleString()}
          </div>
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginTop: "4px" }}>
            {newPercent}% от общего числа
          </div>
        </div>

        {/* Returning Customers */}
        <div>
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
            Вернувшиеся клиенты
          </div>
          <div style={{ fontSize: "var(--text-kpi)", fontWeight: 600, color: "var(--text-primary)" }}>
            {returningCustomers.toLocaleString()}
          </div>
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginTop: "4px" }}>
            {returningPercent}% от общего числа
          </div>
        </div>
      </div>

      {/* Delta */}
      <div className={`flex items-center gap-1 mt-4 pt-4 border-t border-[var(--divider)] ${getVariantColor()}`} style={{ fontSize: "var(--text-small)" }}>
        {getIcon()}
        <span>
          {delta > 0 ? "+" : ""}
          {delta}%
        </span>
        <span className="text-[var(--text-secondary)]">{deltaLabel}</span>
      </div>
    </div>
  );
}
