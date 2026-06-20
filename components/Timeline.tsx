import type { Branch } from "@/data/branches";
import { BranchSection } from "./BranchSection";

/**
 * 분야들을 나열한다.
 * 카드 진입 페이드인은 순수 CSS 스크롤 애니메이션(animation-timeline: view())으로
 * 처리한다 — JS 노출 로직에 의존하지 않으므로 카드가 숨겨진 채로 남는 일이 없다.
 * (미지원 브라우저에서는 애니메이션 없이 항상 표시 = graceful degradation.)
 */
export function Timeline({
  branches,
  query,
}: {
  branches: Branch[];
  query: string;
}) {
  return (
    <div className="timeline">
      <div className="shell">
        {branches.map((b) => (
          <BranchSection key={b.id} branch={b} query={query} />
        ))}
      </div>
    </div>
  );
}
