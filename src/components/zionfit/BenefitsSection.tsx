import imgInchaco from "@/assets/zionfit-benefit-espelho.png";
import imgEnergia from "@/assets/zionfit-benefit-cozinha.png";
import imgMetabolismo from "@/assets/zionfit-benefit-pote.jpg";

const BENEFITS = [
  {
    image: imgInchaco,
    eyebrow: "Capítulo 01 — Leveza",
    title: "Menos inchaço,\nmais leveza.",
    ingredients: ["Hibisco", "Gengibre"],
    imageLeft: true,
  },
  {
    image: imgEnergia,
    eyebrow: "Capítulo 02 — Energia",
    title: "Energia estável.\nSem pico. Sem queda.",
    ingredients: ["Chá Verde", "Guaraná"],
    imageLeft: false,
  },
  {
    image: imgMetabolismo,
    eyebrow: "Capítulo 03 — Metabolismo",
    title: "Metabolismo que\nfunciona como deveria.",
    ingredients: ["Canela", "Cromo"],
    imageLeft: true,
  },
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F6F2EE" }}>
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #E96A92 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #F5C9D6 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-20 sm:mb-28">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase mb-5 block" style={{ color: "#E96A92" }}>
            — Benefícios
          </span>
          <h2 className="font-display text-[40px] leading-[1.05] sm:text-6xl tracking-tight" style={{ color: "#2A1720" }}>
            Um ritual diário.<br />
            <em className="italic font-light" style={{ color: "#7C4A5C" }}>Três transformações reais.</em>
          </h2>
        </div>

        <div className="space-y-28 sm:space-y-40">
          {BENEFITS.map((b, i) => (
            <article
              key={i}
              className={`lg:flex lg:gap-20 lg:items-center ${!b.imageLeft ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="lg:w-[55%] mb-10 lg:mb-0">
                <div className="relative">
                  <div
                    className="aspect-[4/5] overflow-hidden"
                    style={{
                      borderRadius: "28px",
                      boxShadow: "0 30px 80px -20px rgba(42,23,32,0.25), 0 10px 30px -10px rgba(233,106,146,0.15)",
                    }}
                  >
                    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                    {/* Grain overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
                      }}
                    />
                  </div>
                  {/* Chapter number floating */}
                  <div
                    className={`absolute -top-6 ${b.imageLeft ? "-left-3" : "-right-3"} font-display text-[120px] leading-none italic font-light opacity-20 select-none`}
                    style={{ color: "#E96A92" }}
                  >
                    0{i + 1}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:w-[45%] lg:pl-4">
                <span className="text-[11px] font-medium tracking-[0.25em] uppercase mb-6 block" style={{ color: "#B07A8A" }}>
                  {b.eyebrow}
                </span>
                <h3
                  className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-8 whitespace-pre-line"
                  style={{ color: "#2A1720" }}
                >
                  {b.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {b.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[11px] font-medium tracking-wider uppercase px-3.5 py-1.5"
                      style={{
                        color: "#7C4A5C",
                        border: "1px solid rgba(233,106,146,0.25)",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.5)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
