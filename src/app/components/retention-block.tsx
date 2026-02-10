interface RetentionBlockProps {
  retention30: number;
  retention60: number;
  retention90: number;
  caption?: string;
}

export function RetentionBlock({
  retention30,
  retention60,
  retention90,
  caption = "Доля клиентов, совершивших повторную покупку в указанный период",
}: RetentionBlockProps) {
  const retentionData = [
    { label: "30 дней", value: retention30, color: "var(--color-success)" },
    { label: "60 дней", value: retention60, color: "var(--color-accent-blue)" },
    { label: "90 дней", value: retention90, color: "var(--color-warning)" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">Удержание клиентов</h3>

      <div className="space-y-4">
        {retentionData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                {item.value}%
              </div>
            </div>
            <div className="w-full h-2 bg-[var(--bg-light)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${item.value}%`, backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "16px", lineHeight: 1.5 }}>
        {caption}
      </div>
    </div>
  );
}
