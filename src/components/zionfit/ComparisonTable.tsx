import { Check, Minus, Sparkles, Zap, Heart, Flame } from "lucide-react";
import imgPote from "@/assets/zionfit-hero-pote-rosa.png";

const FEATURES = [
  "Resultado em 7 dias",
  "Pronto em 30 segundos",
  "Fórmula funcional",
  "Vitaminas incluídas",
  "Sem açúcar",
  "Energia sem crash",
  "ANVISA",
  "Garantia 30 dias",
];

const COLUMNS = [
  {
    name: "Shots Caseiros",
    sub: "Improviso diário",
    values: [false, false, false, false, true, false, false, false],
    highlight: false,
  },
  {
    name: "ZionFit",
    sub: "Ritual matinal completo",
    values: [true, true, true, true, true, true, true, true],
    highlight: true,
  },
  {
    name: "Suplementos em Pó",
    sub: "Foco em treino",
    values: [false, false, false, true, true, false, false, false],
    highlight: false,
  },
];

const MINI_BENEFITS = [
  { icon: Sparkles, title: "Menos inchaço", desc: "Diurético natural age em dias" },
  { icon: Zap, title: "Energia estável", desc: "Sem pico. Sem queda às 15h" },
  { icon: Heart, title: "Menos fome", desc: "Controla a vontade de beliscar" },
  { icon: Flame, title: "Termogênico natural", desc: "Metabolismo ativo o dia todo" },
];

export function ComparisonTable() {
  return (
    <section className="bg-zion-bg-alt relative overflow-hidden">
      {/* Subtle blush gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-primary/[0.04] via-transparent to-zion-accent/[0.05] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zion-primary uppercase mb-3 block">
            COMPARATIVO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zion-dark leading-[1.1] mb-4">
            O shot que substitui<br />o improviso.
          </h2>
          <p className="text-base text-zion-muted leading-relaxed">
            Enquanto outros focam praticidade ou sabor, ZionFit entrega ritual, performance e consistência.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 items-stretch mb-16 sm:mb-20">
          {COLUMNS.map((col, idx) => {
            const isHero = col.highlight;
            return (
              <div
                key={col.name}
                className={`relative rounded-[24px] transition-all duration-300 flex flex-col ${
                  isHero
                    ? "bg-white border-2 border-zion-primary/30 shadow-[0_20px_60px_-15px_rgba(201,68,117,0.25)] md:scale-[1.04] md:-my-2 z-10 order-first md:order-none"
                    : "bg-white/70 border border-zion-border/70 shadow-sm md:opacity-90 hover:opacity-100 hover:shadow-md"
                }`}
              >
                {isHero && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-zion-primary to-zion-primary-dark text-white text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md">
                      ⭐ Mais Escolhido
                    </span>
                  </div>
                )}

                {/* Card header */}
                <div className={`p-6 pb-5 text-center ${isHero ? "pt-8" : ""}`}>
                  {isHero ? (
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-zion-primary/10 to-zion-accent/10 flex items-center justify-center overflow-hidden">
                      <img src={imgPote} alt="ZionFit" className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-zion-bg-alt flex items-center justify-center">
                      <span className="text-zion-muted text-lg">{idx === 0 ? "🥤" : "💊"}</span>
                    </div>
                  )}
                  <h3 className={`font-display font-extrabold leading-tight ${isHero ? "text-2xl text-zion-dark" : "text-lg text-zion-dark/80"}`}>
                    {col.name}
                  </h3>
                  <p className={`text-xs mt-1 ${isHero ? "text-zion-primary font-semibold" : "text-zion-muted"}`}>
                    {col.sub}
                  </p>
                </div>

                <div className={`h-px mx-6 ${isHero ? "bg-zion-primary/15" : "bg-zion-border/60"}`} />

                {/* Feature list */}
                <ul className="p-6 pt-5 space-y-3.5 flex-1">
                  {FEATURES.map((f, i) => {
                    const has = col.values[i];
                    return (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            has
                              ? isHero
                                ? "bg-zion-primary text-white"
                                : "bg-zion-success/15 text-zion-success"
                              : "bg-zion-bg-alt text-zion-muted/50"
                          }`}
                        >
                          {has ? <Check size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={2.5} />}
                        </span>
                        <span
                          className={`text-sm leading-snug ${
                            has
                              ? isHero
                                ? "text-zion-dark font-medium"
                                : "text-zion-dark/75"
                              : "text-zion-muted/60 line-through decoration-1"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mini benefit cards */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-zion-primary uppercase mb-2 block">
            POR QUE FUNCIONA
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight">
            Quatro sinais que você vai sentir
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {MINI_BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group bg-white rounded-[18px] border border-zion-border/70 p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-zion-primary/12 to-zion-accent/15 text-zion-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h4 className="font-display text-base sm:text-lg font-bold text-zion-dark leading-tight mb-1.5">
                  {b.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-zion-muted leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
