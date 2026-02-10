import { ExternalLink } from "lucide-react";

interface ExternalLinksListProps {
  links: {
    title: string;
    description: string;
    date: string;
    source: string;
    url?: string;
  }[];
  title: string;
}

export function ExternalLinksList({ links, title }: ExternalLinksListProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">{title}</h3>

      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="p-4 bg-[var(--bg-light)] rounded-lg border border-[var(--divider)] hover:border-[var(--color-accent-blue)] transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <ExternalLink className="w-4 h-4 text-[var(--color-accent-blue)]" />
                  <div style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-primary)" }}>
                    {link.title}
                  </div>
                </div>
                <div style={{ fontSize: "var(--text-small)", color: "var(--text-secondary)", marginBottom: "8px", lineHeight: 1.5 }}>
                  {link.description}
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                    {link.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
                  <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }}>
                    {link.source}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
