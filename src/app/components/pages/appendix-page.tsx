import { FileText, Database, MapPin } from "lucide-react";
import { reportData } from "@/app/data/report-data";

export function AppendixPage() {
  return (
    <div className="w-full min-h-screen bg-white p-[120px] flex flex-col">
      <h2 className="mb-8">Appendix</h2>

      {/* Methodology */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-[var(--color-accent-blue)]" />
          Methodology
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.8 }}>
            <p className="mb-4">
              <strong>Data Collection:</strong> All metrics are aggregated from point-of-sale systems, customer relationship management platforms, and third-party review aggregators. Data is collected in real-time and reconciled daily.
            </p>
            <p className="mb-4">
              <strong>Revenue Calculation:</strong> Revenue figures represent gross sales before returns and discounts. Month-over-month (MoM) comparisons use calendar months with seasonal adjustments where applicable.
            </p>
            <p className="mb-4">
              <strong>Customer Metrics:</strong> New customers are defined as first-time purchasers within the reporting period. Returning customers have made at least one previous purchase in the last 12 months. Retention rate = (Returning Customers ÷ Total Active Customers) × 100.
            </p>
            <p>
              <strong>Statistical Significance:</strong> All growth percentages and trends are evaluated using a 95% confidence interval. Outliers are flagged and reviewed manually before inclusion in final reports.
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-10">
        <h3 className="mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-[var(--color-success)]" />
          Data Sources
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <ul className="list-disc pl-6 space-y-2">
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Point of Sale System:</strong> Shopify POS v2024.1 (Real-time transaction data)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>CRM Platform:</strong> Salesforce Service Cloud (Customer profiles and engagement history)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Review Aggregator:</strong> Google Business Profile, Yelp, Trustpilot (Aggregated monthly)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Analytics Platform:</strong> Google Analytics 4 (Web traffic and digital attribution)
            </li>
            <li style={{ fontSize: "var(--text-base)", color: "var(--text-primary)", lineHeight: 1.6 }}>
              <strong>Data Warehouse:</strong> Snowflake (Central data repository and processing)
            </li>
          </ul>
        </div>
      </div>

      {/* Locations List */}
      <div>
        <h3 className="mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-[var(--color-warning)]" />
          Locations Directory
        </h3>
        <div className="bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] p-6">
          <div className="grid grid-cols-2 gap-6">
            {reportData.locations.map((location, index) => (
              <div key={index} className="p-4 bg-white rounded border border-[var(--divider)]">
                <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                  {location.location}
                </div>
                <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  <div>Revenue: {location.revenue}</div>
                  <div>Customers: {location.clients.toLocaleString()}</div>
                  <div>Avg Check: {location.avgCheck}</div>
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
          Generated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)", marginTop: "4px" }}>
          © 2026 {reportData.businessName}. All rights reserved.
        </div>
      </div>
    </div>
  );
}
