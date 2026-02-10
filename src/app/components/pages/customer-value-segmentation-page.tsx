import { LTVOverview } from "../ltv-overview";
import { RFMMatrix } from "../rfm-matrix";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function CustomerValueSegmentationPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Ценность и сегментация клиентов</h2>

      {/* LTV Overview */}
      <div className="mb-8">
        <LTVOverview averageLTV={reportDataRU.ltvData.averageLTV} locationData={reportDataRU.ltvData.locationData} />
      </div>

      {/* RFM Matrix */}
      <div className="mb-8">
        <RFMMatrix data={reportDataRU.rfmData} />
      </div>

      {/* Key Insights */}
      <div className="flex flex-col gap-3">
        <InsightBlock
          text="Средний LTV составляет ₽28,450, при этом клиенты точки Центр показывают на 24% выше среднего"
          variant="growth"
        />
        <InsightBlock
          text="Сегмент 'Чемпионы' (10.7% клиентов) обеспечивает 23.9% от общей выручки"
          variant="neutral"
        />
        <InsightBlock
          text="19.7% клиентов находятся в сегментах 'Требуют внимания' и 'В зоне риска' — приоритет для реактивации"
          variant="risk"
        />
        <InsightBlock
          text="Необходимо разработать программу для перевода сегмента 'Потенциальные' в 'Лояльные'"
          variant="neutral"
        />
      </div>
    </div>
  );
}
