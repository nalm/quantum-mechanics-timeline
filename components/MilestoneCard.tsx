"use client";

import { useMemo, useState } from "react";
import type { Milestone } from "@/data/branches";

/**
 * 마일스톤 카드 — 연도/인물/기여/의의 + 클릭 시 심층 설명(detail) 펼침.
 * 검색 쿼리와 비교해 매칭 여부에 따라 is-hit/is-dim 상태 적용.
 * lane 색(--lane)은 부모 .branch 에서 상속.
 */
export function MilestoneCard({
  milestone,
  query,
}: {
  milestone: Milestone;
  query: string;
}) {
  const [open, setOpen] = useState(false);

  const q = query.trim().toLowerCase();
  const isMatch = useMemo(() => {
    if (!q) return true;
    const hay =
      `${milestone.person} ${milestone.contribution} ${milestone.significance} ${milestone.detail}`.toLowerCase();
    return hay.includes(q);
  }, [q, milestone]);

  const dim = q !== "" && !isMatch;
  const hit = q !== "" && isMatch;

  const cls = [
    "ms",
    open ? "is-open" : "",
    dim ? "is-dim" : "",
    hit ? "is-hit" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const toggle = () => setOpen((o) => !o);

  return (
    <div className={cls} id={`ms-${milestone.id}`}>
      <div
        className="ms-card"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`ms-${milestone.id}-detail`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className="ms-head">
          <span className="ms-year">{milestone.year}</span>
          <span className="ms-person">{milestone.person}</span>
        </div>
        <p className="ms-contribution">{milestone.contribution}</p>
        <p className="ms-significance">
          <span className="arrow">➔</span>
          <span>{milestone.significance}</span>
        </p>

        <div className="ms-detail" id={`ms-${milestone.id}-detail`}>
          <div className="ms-detail-inner">
            <div className="ms-detail-body">{milestone.detail}</div>
          </div>
        </div>

        <button
          className="ms-toggle"
          type="button"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <span className="chev">▶</span> {open ? "접기" : "더 보기"}
        </button>
      </div>
    </div>
  );
}
