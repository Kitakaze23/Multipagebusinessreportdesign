interface TableRowProps {
  location: string;
  revenue: string;
  momChange: number;
  avgCheck: string;
  clients: number;
  reviews: number;
}

export function TableRow({ location, revenue, momChange, avgCheck, clients, reviews }: TableRowProps) {
  const getMomColor = () => {
    if (momChange > 0) return "text-[var(--color-success)]";
    if (momChange < 0) return "text-[var(--color-danger)]";
    return "text-[var(--text-secondary)]";
  };

  return (
    <div className="grid grid-cols-6 gap-4 py-4 border-b border-[var(--divider)] items-center">
      <div style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--text-primary)" }}>
        {location}
      </div>
      <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>{revenue}</div>
      <div className={getMomColor()} style={{ fontSize: "var(--text-base)", fontWeight: 500 }}>
        {momChange > 0 ? "+" : ""}
        {momChange}%
      </div>
      <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>{avgCheck}</div>
      <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>{clients.toLocaleString()}</div>
      <div style={{ fontSize: "var(--text-base)", color: "var(--text-primary)" }}>{reviews.toLocaleString()}</div>
    </div>
  );
}

export function TableHeader() {
  return (
    <div className="grid grid-cols-6 gap-4 py-3 border-b-2 border-[var(--text-primary)]">
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        Location
      </div>
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        Revenue
      </div>
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        MoM Change
      </div>
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        Avg Check
      </div>
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        Clients
      </div>
      <div style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--text-primary)" }}>
        Reviews
      </div>
    </div>
  );
}
