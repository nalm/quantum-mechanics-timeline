import type { CSSProperties } from "react";
import { branches } from "@/data/branches";

/** 8개 분야 lane 색 범례 */
export function Legend() {
  return (
    <div className="legend">
      {branches.map((b) => (
        <span className="legend-item" key={b.id}>
          <span
            className="legend-swatch"
            style={{ "--swatch": `var(--lane-${b.lane})` } as CSSProperties}
          />
          {b.emoji} {b.titleKo}
        </span>
      ))}
    </div>
  );
}
