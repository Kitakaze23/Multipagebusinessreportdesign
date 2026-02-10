interface ReviewsComparisonBlockProps {
  withReviews: {
    count: number;
    avgCheck: number;
    frequency: number;
    revenuePerClient: number;
  };
  withoutReviews: {
    count: number;
    avgCheck: number;
    frequency: number;
    revenuePerClient: number;
  };
}

export function ReviewsComparisonBlock({ withReviews, withoutReviews }: ReviewsComparisonBlockProps) {
  const metrics = [
    { label: "Средний чек", withKey: "avgCheck", format: (v: number) => `$${v.toFixed(2)}` },
    { label: "Частота покупок/год", withKey: "frequency", format: (v: number) => v.toFixed(1) },
    { label: "Доход на клиента", withKey: "revenuePerClient", format: (v: number) => `$${v.toLocaleString()}` },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-6">Сравнение клиентов с отзывами и без</h3>

      <div className="grid grid-cols-3 gap-4">
        {/* Headers */}
        <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
          Метрика
        </div>
        <div className="text-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
          С отзывами ({withReviews.count.toLocaleString()})
        </div>
        <div className="text-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
          Без отзывов ({withoutReviews.count.toLocaleString()})
        </div>

        {/* Divider */}
        <div className="col-span-3 h-px bg-[var(--divider)]" />

        {/* Metrics */}
        {metrics.map((metric, index) => (
          <div key={index} className="contents">
            <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>
              {metric.label}
            </div>
            <div
              className="text-center p-2 bg-green-50 rounded"
              style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}
            >
              {metric.format(withReviews[metric.withKey as keyof typeof withReviews] as number)}
            </div>
            <div
              className="text-center p-2 bg-[var(--bg-light)] rounded"
              style={{ fontSize: "var(--text-base)", color: "var(--text-secondary)" }}
            >
              {metric.format(withoutReviews[metric.withKey as keyof typeof withoutReviews] as number)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "16px", lineHeight: 1.5 }}>
        Клиенты, оставившие отзывы, показывают на 23% более высокую лояльность и частоту покупок
      </div>
    </div>
  );
}
