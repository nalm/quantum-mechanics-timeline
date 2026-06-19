import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "양자역학 125년 타임라인 — 인물, 개념, 그리고 연쇄",
  description:
    "1900년 플랑크의 에너지 양자화부터 2025년 거시적 양자 터널링의 공학화까지. 양자역학 125년사를 8개 분야의 인터랙티브 타임라인로 정리 — 인물·개념의 심층 설명과 검색.",
  keywords: [
    "양자역학",
    "물리학 역사",
    "플랑크",
    "아인슈타인",
    "보어",
    "하이젠베르크",
    "슈뢰딩거",
    "불확정성 원리",
    "양자 얽힘",
    "표준 모형",
    "QED",
    "양자 컴퓨팅",
    "힉스 보손",
    "타임라인",
  ],
  authors: [{ name: "nalm" }],
  openGraph: {
    title: "양자역학 125년 타임라인",
    description:
      "8개 분야로 따라가는 양자역학 125년 — 인물·개념의 심층 설명과 실시간 검색.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={mono.variable}>
      <body>
        {/* Pretendard (한국어 본문) — CDN 로드, 실패 시 시스템 한글 폰트로 폴백 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          precedence="default"
        />
        {children}
      </body>
    </html>
  );
}
