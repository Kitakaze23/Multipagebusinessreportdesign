import { CohortChart } from "../cohort-chart";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function CustomerRetentionCohortsPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Удержание и когортный анализ</h2>

      {/* Cohort Chart */}
      <div className="mb-8">
        <CohortChart data={reportDataRU.cohortData} />
      </div>

      {/* Explanation */}
      <div className="mb-8 p-6 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
        <h3 className="mb-4">Как читать когортный анализ</h3>
        <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.8 }}>
          <p className="mb-3">
            <strong>Строки</strong> — когорты клиентов, сгруппированные по месяцу первой покупки.
          </p>
          <p className="mb-3">
            <strong>Столбцы</strong> — количество месяцев после первой покупки (0 = месяц первой покупки).
          </p>
          <p className="mb-3">
            <strong>Значения</strong> — процент клиентов из когорты, совершивших повторную покупку в данном месяце.
          </p>
          <p>
            <strong>Цвет</strong> — интенсивность показывает уровень удержания: зеленый (высокий), желтый (средний), красный (низкий).
          </p>
        </div>
      </div>

      {/* Insights */}
      <div className="flex flex-col gap-3">
        <InsightBlock
          text="Когорта декабря 2025 показывает наилучшее удержание (74% через месяц), вероятно, за счет новогодних акций"
          variant="growth"
        />
        <InsightBlock
          text="Типичное удержание через 3 месяца составляет 45-47%, что соответствует отраслевым нормам"
          variant="neutral"
        />
        <InsightBlock
          text="Заметное снижение удержания после 4 месяцев — возможность для программы реактивации"
          variant="risk"
        />
        <InsightBlock
          text="Когорты осени 2025 демонстрируют стабильность — эффект от улучшений программы лояльности"
          variant="growth"
        />
      </div>
    </div>
  );
}
