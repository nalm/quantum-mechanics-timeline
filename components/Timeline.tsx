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

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".ms"));
    if (!targets.length) return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    targets.forEach((t) => io.observe(t));

    // 안전망: 마운트 시점에 이미 뷰포트 안에 있는 카드는 즉시 노출한다.
    // IntersectionObserver의 첫 비동기 콜백이 (React dev 이중 마운트나
    // 웹폰트 지연 로드로 인한 레이아웃 시프트 등으로) 특정 카드를 놓치면
    // 그 카드는 opacity:0 으로 영구히 숨겨지는데, 이 sweep이 이를 방지한다.
    const sweep = () => {
      const vh = window.innerHeight;
      for (const t of targets) {
        if (t.classList.contains("is-visible")) continue;
        const r = t.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          reveal(t);
          io.unobserve(t);
        }
      }
    };
    const raf = requestAnimationFrame(sweep);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
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
