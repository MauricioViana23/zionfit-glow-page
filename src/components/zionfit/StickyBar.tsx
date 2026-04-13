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

  const scrollToBuy = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zion-border shadow-lg z-50 px-4 py-3 flex items-center justify-between gap-3">
      <div>
        <div className="text-sm font-bold text-zion-dark">ZionFit · {bundle.label}</div>
        <div className="text-sm font-extrabold text-zion-primary">R$ {bundle.price.toFixed(2).replace(".", ",")}</div>
      </div>
      <button
        onClick={scrollToBuy}
        className="bg-zion-primary text-white font-bold text-sm py-3 px-6 rounded-[50px] min-h-[44px] shrink-0"
      >
        COMPRAR
      </button>
    </div>
  );
}
