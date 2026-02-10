import { MapPin, Users } from "lucide-react";

interface GeographyBlockProps {
  avgDistance: number;
  localPercent: number;
  nonLocalPercent: number;
  topAreas: {
    name: string;
    customers: number;
    percent: number;
  }[];
}

export function GeographyBlock({ avgDistance, localPercent, nonLocalPercent, topAreas }: GeographyBlockProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-[var(--color-accent-blue)]" />
        География клиентов
      </h3>

      {/* Map Placeholder */}
      <div className="mb-6 h-48 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-2 text-[var(--text-secondary)]" />
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
            Схематическая карта распределения
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-[var(--bg-light)] rounded-lg">
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
            Среднее расстояние
          </div>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--text-primary)" }}>
            {avgDistance} км
          </div>
        </div>

        <div className="p-4 bg-[var(--bg-light)] rounded-lg">
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
            Локальные клиенты
          </div>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--text-primary)" }}>
            {localPercent}%
          </div>
        </div>

        <div className="p-4 bg-[var(--bg-light)] rounded-lg">
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "4px" }}>
            Нелокальные клиенты
          </div>
          <div style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--text-primary)" }}>
            {nonLocalPercent}%
          </div>
        </div>
      </div>

      {/* Top Areas */}
      <div>
        <div className="flex items-center gap-2 mb-3" style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)" }}>
          <Users className="w-5 h-5" />
          Топ районов
        </div>
        <div className="space-y-2">
          {topAreas.map((area, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-[var(--bg-light)] rounded">
              <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>{area.name}</div>
              <div className="flex items-center gap-3">
                <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                  {area.customers.toLocaleString()}
                </div>
                <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
                  {area.percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "12px", lineHeight: 1.5 }}>
        Локальные клиенты — проживающие в радиусе 5 км от точки продаж
      </div>
    </div>
  );
}
