// Расширенные данные для бизнес-отчета

export const reportDataRU = {
  businessName: "Ритейл Аналитика",
  reportPeriod: "Январь 2026",
  
  // Исполнительные KPI
  executiveKPIs: [
    { title: "Общая выручка", value: "₽89.4M", delta: 12.5, deltaLabel: "к прошлому месяцу", variant: "positive" as const },
    { title: "Средний чек", value: "₽3,365", delta: -2.3, deltaLabel: "к прошлому месяцу", variant: "negative" as const },
    { title: "Всего клиентов", value: "26,540", delta: 8.7, deltaLabel: "к прошлому месяцу", variant: "positive" as const },
    { title: "Удовлетворенность", value: "4.6/5.0", delta: 3.2, deltaLabel: "к прошлому месяцу", variant: "positive" as const },
  ],
  
  // Ключевые инсайты
  insights: [
    { text: "Рост выручки ускорился до 12.5% благодаря сильным показателям точек в Центре и Западном районе", variant: "growth" as const },
    { text: "Средний чек снизился на 2.3% из-за увеличения промо-активности и смещения к товарам с меньшей маржой", variant: "risk" as const },
    { text: "Стоимость привлечения клиента снизилась на 18% за счет оптимизированных цифровых кампаний", variant: "growth" as const },
    { text: "Точка в Восточном районе показывает снижение трафика (-15%) при сохранении высокой конверсии", variant: "risk" as const },
    { text: "Выручка выходных дней теперь составляет 42% от общей, рост с 38% в прошлом квартале", variant: "neutral" as const },
  ],
  
  // Тренд выручки (12 месяцев)
  revenueTrend: [
    { month: "Фев '25", value: 70750000 },
    { month: "Мар '25", value: 73010000 },
    { month: "Апр '25", value: 75990000 },
    { month: "Май '25", value: 78225000 },
    { month: "Июн '25", value: 80460000 },
    { month: "Июл '25", value: 81950000 },
    { month: "Авг '25", value: 81205000 },
    { month: "Сен '25", value: 83440000 },
    { month: "Окт '25", value: 78225000 },
    { month: "Ноя '25", value: 79715000 },
    { month: "Дек '25", value: 85675000 },
    { month: "Янв '26", value: 89400000 },
  ],
  
  // Данные о клиентах
  customerData: [
    { month: "Фев '25", new: 1200, returning: 3200 },
    { month: "Мар '25", new: 1350, returning: 3400 },
    { month: "Апр '25", new: 1400, returning: 3600 },
    { month: "Май '25", new: 1500, returning: 3800 },
    { month: "Июн '25", new: 1450, returning: 3900 },
    { month: "Июл '25", new: 1600, returning: 4100 },
    { month: "Авг '25", new: 1550, returning: 4200 },
    { month: "Сен '25", new: 1700, returning: 4400 },
    { month: "Окт '25", new: 1650, returning: 4300 },
    { month: "Ноя '25", new: 1750, returning: 4500 },
    { month: "Дек '25", new: 1900, returning: 4800 },
    { month: "Янв '26", new: 2100, returning: 5200 },
  ],
  
  // KPI отзывов
  reviewsKPI: {
    title: "Новых отзывов",
    value: "384",
    delta: 15.2,
    deltaLabel: "к прошлому месяцу",
    variant: "positive" as const,
  },
  
  // Данные по точкам
  locations: [
    { location: "Центр", revenue: "₽24.2M", momChange: 18.5, avgCheck: "₽3,896", clients: 6210, reviews: 92 },
    { location: "Западный", revenue: "₽22.2M", momChange: 15.2, avgCheck: "₽3,641", clients: 6090, reviews: 88 },
    { location: "Северный", revenue: "₽16.0M", momChange: 8.1, avgCheck: "₽3,241", clients: 4940, reviews: 61 },
    { location: "Восточный", revenue: "₽13.8M", momChange: -5.3, avgCheck: "₽3,069", clients: 4490, reviews: 54 },
    { location: "ТЦ Центральный", revenue: "₽13.2M", momChange: 12.7, avgCheck: "₽2,883", clients: 4570, reviews: 89 },
  ],
  
  // Карточки локаций
  leaderLocation: {
    name: "Центр",
    variant: "leader" as const,
    kpis: [
      { label: "Выручка", value: "₽24.2M" },
      { label: "Рост", value: "+18.5%" },
      { label: "Клиенты", value: "6,210" },
      { label: "Средний чек", value: "₽3,896" },
    ],
    chartData: [
      { value: 20860000 },
      { value: 21605000 },
      { value: 21233000 },
      { value: 21977000 },
      { value: 22723000 },
      { value: 23095000 },
      { value: 23840000 },
      { value: 24200000 },
    ],
    insight: "Лучший исполнитель с устойчивым ростом. Высокая удовлетворенность клиентов (4.8/5) и премиальный продуктовый микс обеспечивают результаты.",
  },
  
  riskLocation: {
    name: "Восточный",
    variant: "risk" as const,
    kpis: [
      { label: "Выручка", value: "₽13.8M" },
      { label: "Рост", value: "-5.3%" },
      { label: "Клиенты", value: "4,490" },
      { label: "Средний чек", value: "₽3,069" },
    ],
    chartData: [
      { value: 15645000 },
      { value: 15273000 },
      { value: 14900000 },
      { value: 14528000 },
      { value: 14304000 },
      { value: 14008000 },
      { value: 13860000 },
      { value: 13800000 },
    ],
    insight: "Снижающийся трафик при хорошей конверсии. Требуется усиление локального маркетинга и пересмотр ассортимента.",
  },
  
  // Рейтинги
  topByRevenue: [
    { rank: 1, name: "Центр", value: "₽24.2M", change: "+18.5%" },
    { rank: 2, name: "Западный", value: "₽22.2M", change: "+15.2%" },
    { rank: 3, name: "Северный", value: "₽16.0M", change: "+8.1%" },
  ],
  
  topByAvgCheck: [
    { rank: 1, name: "Центр", value: "₽3,896", change: "+5.2%" },
    { rank: 2, name: "Западный", value: "₽3,641", change: "+3.1%" },
    { rank: 3, name: "Северный", value: "₽3,241", change: "+1.8%" },
  ],
  
  // Данные для кластерного анализа
  clusterData: [
    { name: "Центр", clients: 6210, avgCheck: 3896, size: 24200 },
    { name: "Западный", clients: 6090, avgCheck: 3641, size: 22200 },
    { name: "Северный", clients: 4940, avgCheck: 3241, size: 16000 },
    { name: "Восточный", clients: 4490, avgCheck: 3069, size: 13800 },
    { name: "ТЦ Центральный", clients: 4570, avgCheck: 2883, size: 13200 },
  ],
  
  // Выводы
  conclusions: [
    "Рост выручки 12.5% превышает квартальную цель в 10%",
    "Точки Центр и Западный обеспечивают 52% общей выручки",
    "Уровень удержания клиентов вырос до 71% с 68% в прошлом квартале",
    "Цифровой канал теперь обеспечивает 28% новых клиентов",
  ],
  
  // Рекомендации
  recommendations: [
    "Увеличить маркетинговый бюджет для точки Восточный на 25%",
    "Внедрить премиальную стратегию Центра в точке Западный",
    "Реализовать улучшения программы лояльности, протестированные в пилотных точках",
    "Расширить штат в выходные дни в высокотрафиковых точках",
  ],
  
  // Фокус на следующий месяц
  nextMonthFocus: [
    "Запуск промо-кампании ко Дню всех влюбленных",
    "Завершение оптимизации складских запасов на Q1",
    "Начало ремонта в точке ТЦ Центральный",
    "Пилотирование новой системы обратной связи в 2 точках",
  ],
  
  // === НОВЫЕ ДАННЫЕ ДЛЯ РАСШИРЕННОЙ АНАЛИТИКИ ===
  
  // Структура клиентской базы
  customerSplit: {
    newCustomers: 2100,
    returningCustomers: 5200,
    newPercent: 28.8,
    returningPercent: 71.2,
    delta: 3.5,
    variant: "positive" as const,
  },
  
  // Удержание
  retention: {
    retention30: 68,
    retention60: 52,
    retention90: 43,
  },
  
  // Частота покупок
  purchaseFrequency: [
    { category: "1 покупка", count: 8950, percent: 33.7 },
    { category: "2-3 покупки", count: 11240, percent: 42.4 },
    { category: "4+ покупки", count: 6350, percent: 23.9 },
  ],
  
  // ARPU
  arpu: {
    value: 3368,
    delta: 4.2,
    trendData: [
      { value: 3100 },
      { value: 3150 },
      { value: 3180 },
      { value: 3220 },
      { value: 3260 },
      { value: 3290 },
      { value: 3340 },
      { value: 3368 },
    ],
    variant: "positive" as const,
  },
  
  // Сравнение клиентов с отзывами
  reviewsComparison: {
    withReviews: {
      count: 4820,
      avgCheck: 4125,
      frequency: 6.8,
      revenuePerClient: 28050,
    },
    withoutReviews: {
      count: 21720,
      avgCheck: 3165,
      frequency: 5.5,
      revenuePerClient: 17408,
    },
  },
  
  // RFM-сегментация
  rfmData: [
    { segment: "Чемпионы", count: 2840, revenue: 21320000, position: { row: 0, col: 2 } },
    { segment: "Лояльные", count: 4120, revenue: 18540000, position: { row: 0, col: 1 } },
    { segment: "Потенциальные", count: 3650, revenue: 14890000, position: { row: 1, col: 2 } },
    { segment: "Новички", count: 2100, revenue: 7070000, position: { row: 0, col: 0 } },
    { segment: "Требуют внимания", count: 5230, revenue: 12650000, position: { row: 1, col: 1 } },
    { segment: "Засыпающие", count: 3890, revenue: 8240000, position: { row: 2, col: 1 } },
    { segment: "В зоне риска", count: 2670, revenue: 4820000, position: { row: 2, col: 2 } },
    { segment: "Не вернутся", count: 1450, revenue: 1650000, position: { row: 2, col: 0 } },
    { segment: "Ушедшие", count: 590, revenue: 220000, position: { row: 1, col: 0 } },
  ],
  
  // LTV
  ltvData: {
    averageLTV: 28450,
    locationData: [
      { location: "Центр", ltv: 35200 },
      { location: "Западный", ltv: 32100 },
      { location: "Северный", ltv: 27800 },
      { location: "ТЦ Центральный", ltv: 24900 },
      { location: "Восточный", ltv: 22300 },
    ],
  },
  
  // Когортный анализ
  cohortData: [
    { cohort: "Авг '25", months: [100, 72, 58, 47, 38, 32] },
    { cohort: "Сен '25", months: [100, 68, 54, 44, 35, 0] },
    { cohort: "Окт '25", months: [100, 71, 56, 45, 0, 0] },
    { cohort: "Ноя '25", months: [100, 69, 55, 0, 0, 0] },
    { cohort: "Дек '25", months: [100, 74, 0, 0, 0, 0] },
    { cohort: "Янв '26", months: [100, 0, 0, 0, 0, 0] },
  ],
  
  // География
  geography: {
    avgDistance: 4.8,
    localPercent: 68,
    nonLocalPercent: 32,
    topAreas: [
      { name: "Центральный район", customers: 8920, percent: 33.6 },
      { name: "Западный район", customers: 7540, percent: 28.4 },
      { name: "Северный район", customers: 5180, percent: 19.5 },
      { name: "Восточный район", customers: 3210, percent: 12.1 },
      { name: "Южный район", customers: 1690, percent: 6.4 },
    ],
  },
  
  // Миграция клиентов
  migration: {
    flows: [
      { from: "Центр", to: "Западный", count: 245 },
      { from: "Западный", to: "Центр", count: 189 },
      { from: "Северный", to: "Центр", count: 156 },
      { from: "Восточный", to: "ТЦ Центральный", count: 134 },
      { from: "ТЦ Центральный", to: "Западный", count: 98 },
      { from: "Центр", to: "Северный", count: 87 },
    ],
  },
  
  // === ОТРАСЛЬ И РЕГУЛИРОВАНИЕ ===
  
  industryLinks: {
    legislation: [
      {
        title: "Изменения в законе о защите прав потребителей",
        description: "Новые требования к онлайн-возвратам и гарантийному обслуживанию. Вступает в силу с марта 2026.",
        date: "15 янв 2026",
        source: "Минпромторг РФ",
      },
      {
        title: "Расширение маркировки товаров системой «Честный ЗНАК»",
        description: "Обязательная маркировка распространяется на новые категории товаров.",
        date: "10 янв 2026",
        source: "ФНС России",
      },
      {
        title: "Налоговые льготы для МСП в ритейле",
        description: "Снижение НДС для малых предприятий розничной торговли до 10%.",
        date: "5 янв 2026",
        source: "Госдума РФ",
      },
    ],
    events: [
      {
        title: "Retail Summit 2026",
        description: "Крупнейшая конференция о трендах розничной торговли. Выступления экспертов, нетворкинг.",
        date: "15-17 фев 2026",
        source: "Москва, Экспоцентр",
      },
      {
        title: "E-commerce Expo",
        description: "Выставка технологий для онлайн-торговли и омниканальных решений.",
        date: "22-24 мар 2026",
        source: "Санкт-Петербург",
      },
      {
        title: "Вебинар: Аналитика клиентских данных",
        description: "Практические кейсы использования CRM и аналитики для повышения продаж.",
        date: "28 фев 2026",
        source: "Онлайн",
      },
    ],
    recommendations: [
      "Подготовиться к изменениям в законодательстве о защите прав потребителей к марту 2026",
      "Оценить влияние расширения маркировки на операционные процессы",
      "Изучить возможности применения налоговых льгот для оптимизации затрат",
      "Принять участие в Retail Summit для изучения лучших практик отрасли",
    ],
  },
};
