"use client";

import { useEffect, useState } from "react";
import type { Branch } from "@/data/branches";
import { Toolbar } from "./Toolbar";
import { Timeline } from "./Timeline";

/**
 * 클라이언트 루트 — 검색(query)과 현재 활성 분야(active) 상태를 보유.
 * Toolbar(네비+검색)와 Timeline(본문)이 이 상태를 공유한다.
 * 활성 분야는 IntersectionObserver로 스크롤에 따라 추적.
 */
export function Explorer({ branches }: { branches: Branch[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(branches[0]?.id ?? "");

  useEffect(() => {
    const sections = branches
      .map((b) => document.getElementById(`branch-${b.id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id.replace(/^branch-/, ""));
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [branches]);

  return (
    <>
      <Toolbar
        branches={branches}
        active={active}
        query={query}
        onQuery={setQuery}
      />
      <Timeline branches={branches} query={query} />
    </>
  );
}
