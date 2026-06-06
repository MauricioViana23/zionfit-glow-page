import { useEffect, useRef, useState } from "react";
import { Leaf, Zap, Heart } from "lucide-react";
import imgLeveza from "@/assets/zionfit-hero-praia.png";
import imgDisposicao from "@/assets/zionfit-hero-ritual.png";
import imgBemEstar from "@/assets/zionfit-benefit-espelho.png";

const CARDS = [
  {
    image: imgLeveza,
    alt: "Mulher se sentindo leve ao ar livre com bebida wellness rosa",
    Icon: Leaf,
    title: "Mais leveza.",
    desc: "Sinta o corpo mais leve\ne a rotina mais leve também.",
  },
  {
    image: imgDisposicao,
    alt: "Mulher sorrindo após treino segurando a bebida",
    Icon: Zap,
    title: "Mais disposição.",
    desc: "Energia equilibrada\npara acompanhar o seu dia.",
  },
  {
    image: imgBemEstar,
    alt: "Mulher sorrindo em frente ao espelho com confiança",
    Icon: Heart,
    title: "Mais bem-estar.",
    desc: "Pequenos hábitos que ajudam\nvocê a se sentir bem consigo mesma.",
  },
];

export function PremiumBenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ background: "#F9F5F3" }}>
      <div
        ref={ref}
        className="mx-auto"
        style={{
          maxWidth: 420,
          paddingTop: 72,
          paddingBottom: 72,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color: "#D06A8B",
            fontSize: 12,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          — BENEFÍCIOS
        </div>

        {/* Title */}
        <h2
          className="font-display"
          style={{
            fontSize: 46,
            lineHeight: 0.95,
            fontWeight: 700,
            color: "#2A1E24",
            marginBottom: 48,
            letterSpacing: "-0.01em",
          }}
        >
          Um pequeno ritual.
          <br />
          <span
            style={{
              color: "#C07A93",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Uma grande diferença.
          </span>
        </h2>

        {/* Cards */}
        <div>
          {CARDS.map(({ image, alt, Icon, title, desc }, i) => (
            <article
              key={title}
              className="group"
              style={{
                background: "#fff",
                borderRadius: 24,
                overflow: "hidden",
                marginBottom: 28,
                boxShadow: "0 8px 28px -12px rgba(42,30,36,0.18), 0 2px 8px -4px rgba(42,30,36,0.08)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 700ms ease-out ${i * 120}ms, transform 700ms ease-out ${i * 120}ms, box-shadow 300ms ease-out`,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px -15px rgba(42,30,36,0.22), 0 6px 16px -6px rgba(42,30,36,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px -12px rgba(42,30,36,0.18), 0 2px 8px -4px rgba(42,30,36,0.08)";
                }
              }}
            >
              <div style={{ position: "relative" }}>
                <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                  <img
                    src={image}
                    alt={alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                {/* Floating icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: -28,
                    transform: "translateX(-50%)",
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    background: "#D06A8B",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px -6px rgba(208,106,139,0.55), 0 2px 6px rgba(42,30,36,0.15)",
                    zIndex: 2,
                  }}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
              </div>

              <div
                style={{
                  padding: "44px 24px 28px",
                  textAlign: "center",
                }}
              >
                <h3
                  className="font-display"
                  style={{
                    fontSize: 38,
                    fontWeight: 700,
                    color: "#2A1E24",
                    lineHeight: 1.05,
                    marginBottom: 14,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 20,
                    lineHeight: 1.5,
                    color: "#5B5558",
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
