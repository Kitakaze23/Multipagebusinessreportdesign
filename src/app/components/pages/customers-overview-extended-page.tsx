import { CustomerSplitKPI } from "../customer-split-kpi";
import { ARPUKPI } from "../arpu-kpi";
import { PurchaseFrequencyChart } from "../purchase-frequency-chart";
import { RetentionBlock } from "../retention-block";
import { InsightBlock } from "../insight-block";
import { reportDataRU } from "@/app/data/report-data-ru";

export function CustomersOverviewExtendedPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Расширенная аналитика клиентов</h2>

      {/* Customer Split and ARPU */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <CustomerSplitKPI
          newCustomers={reportDataRU.customerSplit.newCustomers}
          returningCustomers={reportDataRU.customerSplit.returningCustomers}
          newPercent={reportDataRU.customerSplit.newPercent}
          returningPercent={reportDataRU.customerSplit.returningPercent}
          delta={reportDataRU.customerSplit.delta}
          variant={reportDataRU.customerSplit.variant}
        />

        <ARPUKPI
          value={reportDataRU.arpu.value}
          delta={reportDataRU.arpu.delta}
          trendData={reportDataRU.arpu.trendData}
          variant={reportDataRU.arpu.variant}
        />
      </div>

      {/* Purchase Frequency and Retention */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <PurchaseFrequencyChart data={reportDataRU.purchaseFrequency} />

        <RetentionBlock
          retention30={reportDataRU.retention.retention30}
          retention60={reportDataRU.retention.retention60}
          retention90={reportDataRU.retention.retention90}
        />
      </div>

      {/* Insights */}
      <div className="flex flex-col gap-3">
        <InsightBlock
          text="Доля вернувшихся клиентов выросла до 71.2%, что на 3.5% выше прошлого месяца"
          variant="growth"
        />
        <InsightBlock
          text="ARPU вырос на 4.2% благодаря увеличению среднего чека и частоты покупок у лояльных клиентов"
          variant="growth"
        />
        <InsightBlock
          text="23.9% клиентов совершают 4 и более покупок, обеспечивая 48% от общей выручки"
          variant="neutral"
        />
      </div>
    </div>
  );
}
