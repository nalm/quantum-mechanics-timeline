import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이 사이트는 100% 정적(정적 렌더링 + 클라이언트 인터랙션)이므로
  // 정적 export로 빌드 → out/ 산출물을 Vercel이 CDN으로 서브.
  output: "export",
};

export default nextConfig;
