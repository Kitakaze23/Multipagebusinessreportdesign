// Mock data for the business report

export const reportData = {
  businessName: "Retail Analytics Corp",
  reportPeriod: "January 2026",
  
  // Executive KPIs
  executiveKPIs: [
    { title: "Total Revenue", value: "$1.2M", delta: 12.5, deltaLabel: "vs last month", variant: "positive" as const },
    { title: "Avg Check Size", value: "$45.20", delta: -2.3, deltaLabel: "vs last month", variant: "negative" as const },
    { title: "Total Customers", value: "26,540", delta: 8.7, deltaLabel: "vs last month", variant: "positive" as const },
    { title: "Customer Satisfaction", value: "4.6/5.0", delta: 3.2, deltaLabel: "vs last month", variant: "positive" as const },
  ],
  
  // Key Insights
  insights: [
    { text: "Revenue growth accelerated by 12.5% driven by strong performance in Downtown and Westside locations", variant: "growth" as const },
    { text: "Average check size decreased by 2.3% due to increased promotional activity and shift to lower-margin products", variant: "risk" as const },
    { text: "Customer acquisition cost improved by 18% through optimized digital marketing campaigns", variant: "growth" as const },
    { text: "Eastside location showing declining foot traffic (-15%) despite strong conversion rates", variant: "risk" as const },
    { text: "Weekend revenue now accounts for 42% of total, up from 38% last quarter", variant: "neutral" as const },
  ],
  
  // Revenue trend data (12 months)
  revenueTrend: [
    { month: "Feb '25", value: 950000 },
    { month: "Mar '25", value: 980000 },
    { month: "Apr '25", value: 1020000 },
    { month: "May '25", value: 1050000 },
    { month: "Jun '25", value: 1080000 },
    { month: "Jul '25", value: 1100000 },
    { month: "Aug '25", value: 1090000 },
    { month: "Sep '25", value: 1120000 },
    { month: "Oct '25", value: 1050000 },
    { month: "Nov '25", value: 1070000 },
    { month: "Dec '25", value: 1150000 },
    { month: "Jan '26", value: 1200000 },
  ],
  
  // Customer data
  customerData: [
    { month: "Feb '25", new: 1200, returning: 3200 },
    { month: "Mar '25", new: 1350, returning: 3400 },
    { month: "Apr '25", new: 1400, returning: 3600 },
    { month: "May '25", new: 1500, returning: 3800 },
    { month: "Jun '25", new: 1450, returning: 3900 },
    { month: "Jul '25", new: 1600, returning: 4100 },
    { month: "Aug '25", new: 1550, returning: 4200 },
    { month: "Sep '25", new: 1700, returning: 4400 },
    { month: "Oct '25", new: 1650, returning: 4300 },
    { month: "Nov '25", new: 1750, returning: 4500 },
    { month: "Dec '25", new: 1900, returning: 4800 },
    { month: "Jan '26", new: 2100, returning: 5200 },
  ],
  
  // Reviews data
  reviewsKPI: {
    title: "New Reviews",
    value: "384",
    delta: 15.2,
    deltaLabel: "vs last month",
    variant: "positive" as const,
  },
  
  // Locations data
  locations: [
    { location: "Downtown", revenue: "$325K", momChange: 18.5, avgCheck: "$52.30", clients: 6210, reviews: 92 },
    { location: "Westside", revenue: "$298K", momChange: 15.2, avgCheck: "$48.90", clients: 6090, reviews: 88 },
    { location: "Northside", revenue: "$215K", momChange: 8.1, avgCheck: "$43.50", clients: 4940, reviews: 61 },
    { location: "Eastside", revenue: "$185K", momChange: -5.3, avgCheck: "$41.20", clients: 4490, reviews: 54 },
    { location: "Central Mall", revenue: "$177K", momChange: 12.7, avgCheck: "$38.70", clients: 4570, reviews: 89 },
  ],
  
  // Location cards
  leaderLocation: {
    name: "Downtown Store",
    variant: "leader" as const,
    kpis: [
      { label: "Revenue", value: "$325K" },
      { label: "Growth", value: "+18.5%" },
      { label: "Customers", value: "6,210" },
      { label: "Avg Check", value: "$52.30" },
    ],
    chartData: [
      { value: 280000 },
      { value: 290000 },
      { value: 285000 },
      { value: 295000 },
      { value: 305000 },
      { value: 310000 },
      { value: 320000 },
      { value: 325000 },
    ],
    insight: "Strongest performer with consistent growth. High customer satisfaction (4.8/5) and premium product mix driving results.",
  },
  
  riskLocation: {
    name: "Eastside Store",
    variant: "risk" as const,
    kpis: [
      { label: "Revenue", value: "$185K" },
      { label: "Growth", value: "-5.3%" },
      { label: "Customers", value: "4,490" },
      { label: "Avg Check", value: "$41.20" },
    ],
    chartData: [
      { value: 210000 },
      { value: 205000 },
      { value: 200000 },
      { value: 195000 },
      { value: 192000 },
      { value: 188000 },
      { value: 186000 },
      { value: 185000 },
    ],
    insight: "Declining traffic despite good conversion rates. Needs increased local marketing and product assortment review.",
  },
  
  // Rankings
  topByRevenue: [
    { rank: 1, name: "Downtown", value: "$325K", change: "+18.5%" },
    { rank: 2, name: "Westside", value: "$298K", change: "+15.2%" },
    { rank: 3, name: "Northside", value: "$215K", change: "+8.1%" },
  ],
  
  topByAvgCheck: [
    { rank: 1, name: "Downtown", value: "$52.30", change: "+5.2%" },
    { rank: 2, name: "Westside", value: "$48.90", change: "+3.1%" },
    { rank: 3, name: "Northside", value: "$43.50", change: "+1.8%" },
  ],
  
  // Scatter plot data for location clustering
  clusterData: [
    { name: "Downtown", clients: 6210, avgCheck: 52.3, size: 325 },
    { name: "Westside", clients: 6090, avgCheck: 48.9, size: 298 },
    { name: "Northside", clients: 4940, avgCheck: 43.5, size: 215 },
    { name: "Eastside", clients: 4490, avgCheck: 41.2, size: 185 },
    { name: "Central Mall", clients: 4570, avgCheck: 38.7, size: 177 },
  ],
  
  // Key conclusions
  conclusions: [
    "Revenue growth of 12.5% exceeds quarterly target of 10%",
    "Downtown and Westside locations driving 52% of total revenue",
    "Customer retention rate improved to 71% from 68% last quarter",
    "Digital channel now contributes 28% of new customer acquisition",
  ],
  
  // Recommendations
  recommendations: [
    "Increase marketing budget for Eastside location by 25%",
    "Roll out Downtown's premium product strategy to Westside",
    "Implement loyalty program improvements tested in pilot locations",
    "Expand weekend staffing at high-traffic locations",
  ],
  
  // Next month focus
  nextMonthFocus: [
    "Launch Valentine's Day promotional campaign",
    "Complete inventory optimization for Q1",
    "Begin renovations at Central Mall location",
    "Pilot new customer feedback system at 2 locations",
  ],
};
