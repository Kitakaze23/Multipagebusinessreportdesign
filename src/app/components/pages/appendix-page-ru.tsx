import { FileText, Database, MapPin } from "lucide-react";
import { reportDataRU } from "@/app/data/report-data-ru";

export function AppendixPageRU() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Приложение</h2>

      {/* Methodology */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-[var(--color-accent-blue)]" />
          Методология
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.8 }}>
            <p className="mb-4">
              <strong>Сбор данных:</strong> Все метрики агрегируются из систем точек продаж, платформ управления взаимоотношениями с клиентами и агрегаторов отзывов третьих сторон. Данные собираются в реальном времени и сверяются ежедневно.
            </p>
            <p className="mb-4">
              <strong>Расчет выручки:</strong> Показатели выручки представляют валовые продажи до возвратов и скидок. Сравнения месяц к месяцу (MoM) используют календарные месяцы с сезонными корректировками при необходимости.
            </p>
            <p className="mb-4">
              <strong>Метрики клиентов:</strong> Новые клиенты определяются как совершившие первую покупку в отчетном периоде. Вернувшиеся клиенты совершили хотя бы одну покупку в последние 12 месяцев. Уровень удержания = (Вернувшиеся клиенты ÷ Всего активных клиентов) × 100.
            </p>
            <p>
              <strong>Статистическая значимость:</strong> Все процентные показатели роста и тренды оцениваются с использованием доверительного интервала 95%. Выбросы помечаются и проверяются вручную перед включением в финальные отчеты.
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-[var(--color-success)]" />
          Источники данных
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <ul className="list-disc pl-6 space-y-2">
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Система точек продаж:</strong> Shopify POS v2024.1 (Данные транзакций в реальном времени)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>CRM-платформа:</strong> Salesforce Service Cloud (Профили клиентов и история взаимодействий)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Агрегатор отзывов:</strong> Google Бизнес-профиль, Яндекс.Карты, Отзовик (Агрегация ежемесячно)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Аналитическая платформа:</strong> Яндекс.Метрика (Веб-трафик и цифровая атрибуция)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Хранилище данных:</strong> Snowflake (Центральный репозиторий и обработка данных)
            </li>
          </ul>
        </div>
      </div>

      {/* Locations List */}
      <div>
        <h3 className="mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-[var(--color-warning)]" />
          Справочник точек
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <div className="grid grid-cols-2 gap-6">
            {reportDataRU.locations.map((location, index) => (
              <div key={index} className="p-4 bg-white rounded border border-[var(--divider)]">
                <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                  {location.location}
                </div>
                <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  <div>Выручка: {location.revenue}</div>
                  <div>Клиенты: {location.clients.toLocaleString()}</div>
                  <div>Средний чек: {location.avgCheck}</div>
                  <div className={location.momChange > 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}>
                    MoM: {location.momChange > 0 ? "+" : ""}{location.momChange}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-[var(--divider)] text-center">
        <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
          Сформировано: {new Date().toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "4px" }}>
          © 2026 {reportDataRU.businessName}. Все права защищены.
        </div>
      </div>
    </div>
  );
}
