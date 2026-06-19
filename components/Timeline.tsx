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

    const targets = root.querySelectorAll<HTMLElement>(".ms");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
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
