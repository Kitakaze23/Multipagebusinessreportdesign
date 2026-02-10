interface RFMMatrixProps {
  data: {
    segment: string;
    count: number;
    revenue: number;
    position: { row: number; col: number };
  }[];
}

export function RFMMatrix({ data }: RFMMatrixProps) {
  const segments = [
    { name: "Чемпионы", row: 0, col: 2, color: "#16A34A" },
    { name: "Лояльные", row: 0, col: 1, color: "#22C55E" },
    { name: "Потенциальные", row: 1, col: 2, color: "#2563EB" },
    { name: "Новички", row: 0, col: 0, color: "#3B82F6" },
    { name: "Требуют внимания", row: 1, col: 1, color: "#F59E0B" },
    { name: "Засыпающие", row: 2, col: 1, color: "#F97316" },
    { name: "В зоне риска", row: 2, col: 2, color: "#DC2626" },
    { name: "Не вернутся", row: 2, col: 0, color: "#991B1B" },
    { name: "Ушедшие", row: 1, col: 0, color: "#7F1D1D" },
  ];

  const getSegmentData = (row: number, col: number) => {
    const segment = segments.find((s) => s.row === row && s.col === col);
    const segmentData = data.find((d) => d.position.row === row && d.position.col === col);
    return { segment, data: segmentData };
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">RFM-сегментация клиентов</h3>

      <div className="mb-4">
        <div className="grid grid-cols-4 gap-2">
          {/* Header */}
          <div />
          <div className="text-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
            Низкая частота
          </div>
          <div className="text-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
            Средняя частота
          </div>
          <div className="text-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
            Высокая частота
          </div>

          {/* Rows */}
          {[0, 1, 2].map((row) => (
            <div key={row} className="contents">
              <div className="flex items-center" style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-secondary)" }}>
                {row === 0 ? "Высокая\nценность" : row === 1 ? "Средняя\nценность" : "Низкая\nценность"}
              </div>
              {[0, 1, 2].map((col) => {
                const { segment, data: segmentData } = getSegmentData(row, col);
                return (
                  <div
                    key={`${row}-${col}`}
                    className="p-3 rounded border border-[var(--divider)] text-center"
                    style={{ backgroundColor: segment ? `${segment.color}15` : "var(--bg-light)" }}
                  >
                    <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                      {segment?.name || "—"}
                    </div>
                    {segmentData && (
                      <>
                        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                          {segmentData.count.toLocaleString()} клиентов
                        </div>
                        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                          ${(segmentData.revenue / 1000).toFixed(0)}K
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", lineHeight: 1.5 }}>
        RFM-анализ: Recency (давность), Frequency (частота), Monetary (денежная ценность)
      </div>
    </div>
  );
}
