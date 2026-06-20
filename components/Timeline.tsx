"use client";

import { useEffect, useRef } from "react";
import type { Branch } from "@/data/branches";
import { BranchSection } from "./BranchSection";

/** 분야들을 나열하고 각 마일스톤 카드가 뷰포트에 진입하면 is-visible 페이드인. */
export function Timeline({
  branches,
  query,
}: {
  branches: Branch[];
  query: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let remaining = Array.from(root.querySelectorAll<HTMLElement>(".ms"));
    if (!remaining.length) return;

    // 스크롤 기반 self-healing 노출.
    // 과거엔 IntersectionObserver의 비동기 콜백에만 의존했는데, 그 콜백이
    // 특정 카드(특히 분야 첫 카드)를 놓치면 해당 카드가 뷰포트 안에 들어와도
    // opacity:0 으로 영구히 숨겨졌다. 여기서는 마운트 직후와 매 스크롤마다
    // 뷰포트 안(±margin)에 있는 카드를 직접 노출하므로, 한 번 화면에 들어온
    // 카드는 절대 숨겨진 채로 남지 않는다.
    let ticking = false;

    const sweep = () => {
      ticking = false;
      const vh = window.innerHeight;
      const next: HTMLElement[] = [];
      for (const t of remaining) {
        const r = t.getBoundingClientRect();
        if (r.top < vh + 80 && r.bottom > -80) {
          t.classList.add("is-visible");
        } else {
          next.push(t);
        }
      }
      remaining = next;
      if (!remaining.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const raf = requestAnimationFrame(sweep);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="timeline" ref={rootRef}>
      <div className="shell">
        {branches.map((b) => (
          <BranchSection key={b.id} branch={b} query={query} />
        ))}
      </div>
    </div>
  );
}
