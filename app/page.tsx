import { branches } from "@/data/branches";
import { Header } from "@/components/Header";
import { Explorer } from "@/components/Explorer";

export default function Home() {
  return (
    <>
      <Header />
      <Explorer branches={branches} />

      <footer className="footer">
        <div className="shell">
          <div className="footer-inner">
            <span className="src">
              자료 기반: <code>양자역학.md</code> · 1900~2025 양자역학사 개요
            </span>
            <span>
              <a
                href="https://github.com/nalm/quantum-mechanics-timeline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </span>
            <span>Quantum 125 · nalm</span>
          </div>
        </div>
      </footer>
    </>
  );
}
