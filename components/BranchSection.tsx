import type { CSSProperties } from "react";
import type { Branch } from "@/data/branches";
import { MilestoneCard } from "./MilestoneCard";

/** 한 분야의 lane 색 헤더 + 도입 + 마일스톤 spine. --lane 을 inline으로 주입해 자식이 상속. */
export function BranchSection({
  branch,
  query,
}: {
  branch: Branch;
  query: string;
}) {
  return (
    <section
      className="branch"
      id={`branch-${branch.id}`}
      style={{ "--lane": `var(--lane-${branch.lane})` } as CSSProperties}
    >
      <div className="branch-head">
        <span className="branch-emoji">{branch.emoji}</span>
        <h2 className="branch-title">
          {branch.titleKo}
          <span className="branch-title-en">{branch.titleEn}</span>
        </h2>
        <span className="branch-period">{branch.period}</span>
      </div>
      <p className="branch-intro">{branch.intro}</p>

      {branch.entries.map((m) => (
        <MilestoneCard key={m.id} milestone={m} query={query} />
      ))}
    </section>
  );
}
