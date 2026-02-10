interface CohortChartProps {
  data: {
    cohort: string;
    months: number[];
  }[];
}

export function CohortChart({ data }: CohortChartProps) {
  const getColor = (value: number) => {
    if (value >= 70) return "#16A34A";
    if (value >= 50) return "#22C55E";
    if (value >= 30) return "#F59E0B";
    if (value >= 10) return "#F97316";
    return "#DC2626";
  };

  const getOpacity = (value: number) => {
    return Math.max(0.2, value / 100);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">Когортный анализ удержания</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th
                className="text-left p-2 border border-[var(--divider)] bg-[var(--bg-light)]"
                style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                Когорта
              </th>
              {[0, 1, 2, 3, 4, 5].map((month) => (
                <th
                  key={month}
                  className="text-center p-2 border border-[var(--divider)] bg-[var(--bg-light)]"
                  style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}
                >
                  {month === 0 ? "Первая\nпокупка" : `Месяц ${month}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((cohort, index) => (
              <tr key={index}>
                <td
                  className="p-2 border border-[var(--divider)] bg-[var(--bg-light)]"
                  style={{ fontSize: "var(--text-small)", fontWeight: 500, color: "var(--text-primary)" }}
                >
                  {cohort.cohort}
                </td>
                {cohort.months.map((value, monthIndex) => (
                  <td
                    key={monthIndex}
                    className="p-2 border border-[var(--divider)] text-center"
                    style={{
                      backgroundColor: value > 0 ? getColor(value) : "transparent",
                      opacity: value > 0 ? getOpacity(value) : 1,
                      fontSize: "var(--text-small)",
                      fontWeight: 600,
                      color: value > 0 ? "#ffffff" : "var(--text-secondary)",
                    }}
                  >
                    {value > 0 ? `${value}%` : "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
          Цветовая шкала:
        </div>
        <div className="flex items-center gap-2">
          {[
            { label: "≥70%", color: "#16A34A" },
            { label: "≥50%", color: "#22C55E" },
            { label: "≥30%", color: "#F59E0B" },
            { label: "<30%", color: "#DC2626" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
              <span style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
        Показывает процент клиентов, совершивших повторную покупку спустя N месяцев после первой покупки
      </div>
    </div>
  );
}
