interface MigrationDiagramProps {
  flows: {
    from: string;
    to: string;
    count: number;
  }[];
}

export function MigrationDiagram({ flows }: MigrationDiagramProps) {
  const maxCount = Math.max(...flows.map((f) => f.count));

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-6">Миграция клиентов между точками</h3>

      <div className="space-y-3">
        {flows.map((flow, index) => {
          const width = (flow.count / maxCount) * 100;
          return (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-1">
                <div style={{ fontSize: "var(--text-small)", color: "var(--text-primary)" }}>
                  {flow.from} → {flow.to}
                </div>
                <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
                  {flow.count} клиентов
                </div>
              </div>
              <div className="relative h-8 bg-[var(--bg-light)] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all"
                  style={{
                    width: `${width}%`,
                    background: `linear-gradient(to right, var(--color-accent-blue), var(--color-success))`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div style={{ fontSize: "var(--text-caption)", fontWeight: 600, color: "var(--text-primary)", mixBlendMode: "difference" }}>
                    {((flow.count / flows.reduce((acc, f) => acc + f.count, 0)) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "16px", lineHeight: 1.5 }}>
        Показывает клиентов, изменивших основную точку покупок за последние 6 месяцев
      </div>
    </div>
  );
}
