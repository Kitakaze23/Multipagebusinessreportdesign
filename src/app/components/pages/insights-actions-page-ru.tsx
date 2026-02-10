import { CheckCircle, Target, TrendingUp } from "lucide-react";
import { reportDataRU } from "@/app/data/report-data-ru";

export function InsightsActionsPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Инсайты и действия</h2>

      {/* Key Conclusions */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
          Ключевые выводы
        </h3>
        <div className="bg-green-50 border-2 border-[var(--color-success)] rounded-lg p-6">
          <ul className="list-disc pl-6 space-y-2">
            {reportDataRU.conclusions.map((conclusion, index) => (
              <li key={index} style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
                {conclusion}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-[var(--color-accent-blue)]" />
          Рекомендации
        </h3>
        <div className="bg-blue-50 border-2 border-[var(--color-accent-blue)] rounded-lg p-6">
          <ul className="list-disc pl-6 space-y-2">
            {reportDataRU.recommendations.map((recommendation, index) => (
              <li key={index} style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Month Focus */}
      <div>
        <h3 className="mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[var(--color-warning)]" />
          Фокус на следующий месяц
        </h3>
        <div className="bg-orange-50 border-2 border-[var(--color-warning)] rounded-lg p-6">
          <ul className="list-disc pl-6 space-y-2">
            {reportDataRU.nextMonthFocus.map((item, index) => (
              <li key={index} style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
