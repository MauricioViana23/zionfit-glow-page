import { useEffect, useRef, useState } from "react";
import step1Asset from "@/assets/zionfit-howto-step1-coloque.png.asset.json";
import step2Asset from "@/assets/zionfit-howto-step2-misture.png.asset.json";
import step3Asset from "@/assets/zionfit-howto-step3-pronto.png.asset.json";

const STEPS = [
  {
    num: 1,
    title: "Coloque",
    desc: "1 colher em 200ml de água gelada ou com gás.",
    src: step1Asset.url,
    alt: "Uma colher despejando o pó rosa ZionFit em um copo com água",
  },
  {
    num: 2,
    title: "Misture",
    desc: "Misture por alguns segundos até dissolver.",
    src: step2Asset.url,
    alt: "Uma colher dourada misturando a bebida rosa dentro do copo",
  },
  {
    num: 3,
    title: "Tome em jejum",
    desc: "Antes da primeira refeição do dia.",
    src: step3Asset.url,
    alt: "A bebida rosa pronta em um copo de vidro transparente",
  },
];

export function HowToUse() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-32 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(208,106,139,0.16) 0%, rgba(208,106,139,0) 72%)" }}
      />

      <div ref={ref} className="mx-auto max-w-[1280px] px-6 py-[72px]">
        <div className="mx-auto mb-12 max-w-[480px] text-center lg:mb-16">
          <span
            className="mb-4 block text-[12px] font-semibold uppercase"
            style={{ letterSpacing: "0.25em", color: "#D06A8B" }}
          >
            COMO TOMAR
          </span>

          <h2
            className="font-display"
            style={{
              color: "#241A20",
              fontWeight: 700,
              fontSize: "clamp(3.375rem, 7vw, 4.5rem)",
              lineHeight: 0.96,
              marginBottom: 18,
            }}
          >
            Simples assim.
          </h2>

          <p
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: "#444",
              margin: 0,
            }}
          >
            3 passos. <span style={{ color: "#D06A8B" }}>30 segundos.</span> Todo dia.
          </p>
        </div>

        <div className="mx-auto grid max-w-[480px] gap-6 lg:max-w-none lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <article
              key={step.num}
              className="group overflow-hidden bg-white lg:hover:-translate-y-1"
              style={{
                borderRadius: 28,
                boxShadow: "0 14px 40px -22px rgba(36,26,32,0.18), 0 3px 10px -6px rgba(36,26,32,0.08)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 700ms ease-out ${index * 120}ms, transform 700ms ease-out ${index * 120}ms, box-shadow 280ms ease-out`,
              }}
              onMouseEnter={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 56px -26px rgba(36,26,32,0.22), 0 10px 18px -10px rgba(36,26,32,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(24px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 40px -22px rgba(36,26,32,0.18), 0 3px 10px -6px rgba(36,26,32,0.08)";
                }
              }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={step.src} alt={step.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>

                <div
                  className="absolute left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-xl font-semibold text-white"
                  style={{
                    bottom: -28,
                    background: "#D06A8B",
                    boxShadow: "0 10px 24px -10px rgba(208,106,139,0.65)",
                  }}
                >
                  {step.num}
                </div>
              </div>

              <div className="px-6 pb-8 pt-11 text-center">
                <h3
                  className="font-display"
                  style={{
                    color: "#241A20",
                    fontWeight: 700,
                    fontSize: "clamp(2.625rem, 6vw, 3rem)",
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: 22,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
