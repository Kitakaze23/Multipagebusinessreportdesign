import React from "react";

interface ChartContainerProps {
  title: string;
  caption?: string;
  children: React.ReactNode;
  height?: number;
}

export function ChartContainer({ title, caption, children, height = 300 }: ChartContainerProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[var(--divider)]">
      <h3 className="mb-4">{title}</h3>
      <div style={{ height: `${height}px`, width: "100%" }} className="mb-2">
        {children}
      </div>
      {caption && (
        <div style={{ fontSize: "var(--text-caption)", color: "var(--text-secondary)" }} className="mt-3">
          {caption}
        </div>
      )}
    </div>
  );
}
