import { ExternalLinksList } from "../external-links-list";
import { FileText, Calendar, Target } from "lucide-react";
import { reportDataRU } from "@/app/data/report-data-ru";

export function IndustryRegulationPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Отрасль и регулирование</h2>

      {/* Legislation Updates */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-6 h-6 text-[var(--color-accent-blue)]" />
          <h3>Обновления законодательства</h3>
        </div>
        <ExternalLinksList links={reportDataRU.industryLinks.legislation} title="" />

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-[var(--color-accent-blue)]">
          <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
            Влияние на бизнес:
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              Потребуется обновление политики возвратов и обучение персонала новым требованиям
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              Инвестиции в систему маркировки для новых категорий товаров (ориентировочно ₽2.5M)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              Налоговые льготы могут сократить расходы на ₽3.2M в год при соответствии критериям МСП
            </li>
          </ul>
        </div>
      </div>

      {/* Industry Events */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-[var(--color-success)]" />
          <h3>Отраслевые мероприятия</h3>
        </div>
        <ExternalLinksList links={reportDataRU.industryLinks.events} title="" />
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-[var(--color-warning)]" />
          <h3>Рекомендации на следующий месяц</h3>
        </div>
        <div className="bg-orange-50 border-2 border-[var(--color-warning)] rounded-lg p-6">
          <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
            Почему это важно:
          </div>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.8, marginBottom: "16px" }}>
            Изменения в законодательстве напрямую влияют на операционные процессы и требуют заблаговременной подготовки. Участие в отраслевых мероприятиях позволяет быть в курсе трендов и обмениваться опытом с коллегами.
          </p>

          <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
            Что отслеживать:
          </div>
          <ul className="list-disc pl-6 space-y-2">
            {reportDataRU.industryLinks.recommendations.map((rec, index) => (
              <li key={index} style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)]">
        <p style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <strong>Примечание:</strong> Данный раздел обновляется ежемесячно. Для получения актуальной информации о регуляторных изменениях рекомендуется подписаться на рассылки профильных ведомств.
        </p>
      </div>
    </div>
  );
}
