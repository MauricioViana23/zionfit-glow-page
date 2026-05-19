import { useEffect, useState } from "react";
import { BUNDLES } from "./HeroSection";

interface StickyBarProps {
  selectedBundle: number;
}

export function StickyBar({ selectedBundle }: StickyBarProps) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bundle = BUNDLES.find(b => b.id === selectedBundle) || BUNDLES[1];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!isMobile || !visible) return null;

  const goToCheckout = () => {
    window.open(bundle.url, "_blank", "noopener");
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <div
        className="flex items-center justify-between gap-3 pl-5 pr-2 py-2"
        style={{
          borderRadius: "999px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.9)",
          boxShadow:
            "0 20px 50px -10px rgba(42,23,32,0.25), 0 4px 16px -4px rgba(233,106,146,0.2)",
        }}
      >
        <div className="min-w-0">
          <div className="text-[10px] font-medium tracking-[0.2em] uppercase truncate" style={{ color: "#B07A8A" }}>
            {bundle.label}
          </div>
          <div className="text-base font-bold leading-tight" style={{ color: "#2A1720" }}>
            R$ {bundle.price.toFixed(2).replace(".", ",")}
          </div>
        </div>
        <button
          onClick={goToCheckout}
          className="shrink-0 font-semibold text-sm tracking-wide py-3.5 px-6 transition-all active:scale-95"
          style={{
            borderRadius: "999px",
            background: "linear-gradient(135deg, #E96A92 0%, #D54E7A 100%)",
            color: "#fff",
            boxShadow: "0 8px 20px -4px rgba(233,106,146,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
            minHeight: "44px",
          }}
        >
          Quero o meu →
        </button>
      </div>
    </div>
  );
}
