import { useState, lazy, Suspense } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

// Lazy load all page components
const CoverPageRU = lazy(() => import("./components/pages/cover-page-ru").then(m => ({ default: m.CoverPageRU })));
const BusinessDynamicsPageRU = lazy(() => import("./components/pages/business-dynamics-page-ru").then(m => ({ default: m.BusinessDynamicsPageRU })));
const CustomersPageRU = lazy(() => import("./components/pages/customers-page-ru").then(m => ({ default: m.CustomersPageRU })));
const CustomersOverviewExtendedPage = lazy(() => import("./components/pages/customers-overview-extended-page").then(m => ({ default: m.CustomersOverviewExtendedPage })));
const CustomerValueSegmentationPage = lazy(() => import("./components/pages/customer-value-segmentation-page").then(m => ({ default: m.CustomerValueSegmentationPage })));
const CustomerRetentionCohortsPage = lazy(() => import("./components/pages/customer-retention-cohorts-page").then(m => ({ default: m.CustomerRetentionCohortsPage })));
const GeographyMigrationPage = lazy(() => import("./components/pages/geography-migration-page").then(m => ({ default: m.GeographyMigrationPage })));
const ReviewsPageRU = lazy(() => import("./components/pages/reviews-page-ru").then(m => ({ default: m.ReviewsPageRU })));
const LocationsOverviewPageRU = lazy(() => import("./components/pages/locations-overview-page-ru").then(m => ({ default: m.LocationsOverviewPageRU })));
const LocationCardsPageRU = lazy(() => import("./components/pages/location-cards-page-ru").then(m => ({ default: m.LocationCardsPageRU })));
const RankingsPageRU = lazy(() => import("./components/pages/rankings-page-ru").then(m => ({ default: m.RankingsPageRU })));
const InsightsActionsPageRU = lazy(() => import("./components/pages/insights-actions-page-ru").then(m => ({ default: m.InsightsActionsPageRU })));
const IndustryRegulationPage = lazy(() => import("./components/pages/industry-regulation-page").then(m => ({ default: m.IndustryRegulationPage })));
const AppendixPageRU = lazy(() => import("./components/pages/appendix-page-ru").then(m => ({ default: m.AppendixPageRU })));

const pages = [
  { id: 0, name: "Обложка и резюме", Component: CoverPageRU },
  { id: 1, name: "Динамика бизнеса", Component: BusinessDynamicsPageRU },
  { id: 2, name: "Клиенты: Обзор", Component: CustomersPageRU },
  { id: 3, name: "Клиенты: Расширенная аналитика", Component: CustomersOverviewExtendedPage },
  { id: 4, name: "Клиенты: Ценность и сегментация", Component: CustomerValueSegmentationPage },
  { id: 5, name: "Клиенты: Удержание и когорты", Component: CustomerRetentionCohortsPage },
  { id: 6, name: "Клиенты: География и перемещения", Component: GeographyMigrationPage },
  { id: 7, name: "Отзывы и репутация", Component: ReviewsPageRU },
  { id: 8, name: "Обзор точек", Component: LocationsOverviewPageRU },
  { id: 9, name: "Фокус на точки", Component: LocationCardsPageRU },
  { id: 10, name: "Рейтинги и кластеры", Component: RankingsPageRU },
  { id: 11, name: "Инсайты и действия", Component: InsightsActionsPageRU },
  { id: 12, name: "Отрасль и регулирование", Component: IndustryRegulationPage },
  { id: 13, name: "Приложение", Component: AppendixPageRU },
];

// Loading component
function PageLoader() {
  return (
    <div className="w-full min-h-screen bg-white p-12 flex items-center justify-center">
      <div style={{ fontSize: "18px", color: "#666" }}>Загрузка...</div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPageComponent = pages[currentPage].Component;

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex flex-col">
      {/* Navigation Header */}
      <div className="bg-white border-b border-[var(--divider)] sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[var(--color-accent-blue)]" />
            <div>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                Бизнес-отчет
              </div>
              <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
                Январь 2026
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className="p-2 rounded hover:bg-[var(--bg-light)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center min-w-[300px]">
              <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)" }}>
                Страница {currentPage + 1} из {pages.length}
              </div>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)" }}>
                {pages[currentPage].name}
              </div>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === pages.length - 1}
              className="p-2 rounded hover:bg-[var(--bg-light)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Page Selector Dropdown */}
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="px-4 py-2 rounded border border-[var(--divider)] bg-white cursor-pointer"
            style={{ fontSize: "var(--text-small)", color: "var(--text-primary)" }}
          >
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                {page.id + 1}. {page.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-[1400px] mx-auto">
          <Suspense fallback={<PageLoader />}>
            <CurrentPageComponent />
          </Suspense>
        </div>
      </div>

      {/* Page Indicators */}
      <div className="bg-white border-t border-[var(--divider)] py-3">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-center gap-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPage
                  ? "bg-[var(--color-accent-blue)] w-8"
                  : "bg-[var(--divider)] hover:bg-[var(--text-secondary)]"
              }`}
              title={`Перейти к ${page.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
