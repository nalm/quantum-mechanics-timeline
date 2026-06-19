import { Legend } from "./Legend";

/** 히어로 — 타이틀 + 도입 + 분야 범례 */
export function Header() {
  return (
    <header className="hero">
      <div className="shell">
        <div className="hero-eyebrow">Quantum Mechanics · 1900–2025</div>
        <h1 className="hero-title">
          양자역학 <span className="accent">125년</span>의
          <br />
          연쇄와 도약
        </h1>
        <p className="hero-sub">A 125-Year Chain of Quantum Mechanics</p>
        <p className="hero-lead">
          플랑크의 에너지 양자화에서 거시적 양자 터널링의 공학화까지. 8개 분야의 인물·개념·사건이
          어떻게 다음 발견을 불렀는지를 한 흐름으로 따라가는 타임라인. 카드를 누르면 인물과 개념의{" "}
          <strong>심층 설명</strong>이 펼쳐집니다.
        </p>
        <div className="hero-rule" />
        <Legend />
      </div>
    </header>
  );
}
