import { TrendingUp, AlertTriangle, Info } from "lucide-react";

interface InsightBlockProps {
  text: string;
  variant?: "growth" | "risk" | "neutral";
}

export function InsightBlock({ text, variant = "neutral" }: InsightBlockProps) {
  const getIcon = () => {
    switch (variant) {
      case "growth":
        return <TrendingUp className="w-5 h-5 text-[var(--color-success)]" />;
      case "risk":
        return <AlertTriangle className="w-5 h-5 text-[var(--color-warning)]" />;
      default:
        return <Info className="w-5 h-5 text-[var(--color-accent-blue)]" />;
    }
  };

  return (
    <div className="flex gap-3 items-start p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
      <div className="mt-0.5 flex-shrink-0">{getIcon()}</div>
      <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
        {text}
      </div>
    </div>
  );
}
