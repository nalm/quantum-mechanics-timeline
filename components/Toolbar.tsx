"use client";

import type { CSSProperties } from "react";
import type { Branch } from "@/data/branches";

/** sticky 툴바 — 8개 분야 pill(스크롤 활성 추적) + 검색 input */
export function Toolbar({
  branches,
  active,
  query,
  onQuery,
}: {
  branches: Branch[];
  active: string;
  query: string;
  onQuery: (v: string) => void;
}) {
  return (
    <nav className="toolbar">
      <div className="shell">
        <div className="toolbar-inner">
          <span className="toolbar-label">JUMP · 분야</span>
          <div className="pilltrack">
            {branches.map((b) => (
              <a
                key={b.id}
                href={`#branch-${b.id}`}
                className={`pill${active === b.id ? " active" : ""}`}
                style={{ "--pill": `var(--lane-${b.lane})` } as CSSProperties}
              >
                <span className="dot" />
                {b.emoji} {b.titleKo}
              </a>
            ))}
          </div>
          <div className="search-wrap">
            <input
              className="search-input"
              type="search"
              placeholder="인물 · 개념 검색"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              aria-label="마일스톤 검색"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
