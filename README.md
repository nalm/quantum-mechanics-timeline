# 양자역학 125년 타임라인 ⚛️

1900년 플랑크의 에너지 양자화부터 2025년 노벨물리학상(거시적 양자 터널링)까지,
양자역학 125년사를 8개 분야의 인터랙티브 타임라인로 정리한 페이지.

- 분야별 색상 lane 타임라인 (고전 양자론 → 양자 정보·공학)
- sticky 분야 네비게이션 (스크롤 활성 추적)
- 스크롤 진입 연출
- 마일스톤 카드 클릭 → 인물·개념 심층 설명 펼침
- 분야 필터 + 실시간 검색

## 스택

Next.js 16 (App Router) · React 19 · TypeScript · 순수 CSS

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 콘텐츠 수정

모든 콘텐츠는 `data/branches.ts`에 있다. 컴포넌트가 아니라 이 파일을 편집한다.
커밋 후 GitHub에 푸시하면 Vercel가 자동으로 배포한다.

## 배포

- **GitHub:** https://github.com/nalm/quantum-mechanics-timeline
- **Vercel:** Git 연동 — `main` 브랜치 푸시 시 자동 배포
