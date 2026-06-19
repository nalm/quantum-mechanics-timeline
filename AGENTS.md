# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Project: 양자역학 125년 인터랙티브 타임라인

- **Source content:** `../양자역학.md` (1900~2025 양자역학사, 8개 분야)
- **Stack:** Next.js 16 + React 19 + TypeScript (App Router)
- **Data-driven:** all content lives in `data/branches.ts`. Edit content there, not in components.
- **Design system:** `app/globals.css` — 양자/우주 다크 테마. 8개 분야 lane 색은 CSS 변수.
- **Sibling reference:** `../semiconductor-ai-timeline` (동일 패턴의 검증된 첫 프로젝트).
