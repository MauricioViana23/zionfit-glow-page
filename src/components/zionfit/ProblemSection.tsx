import { useState } from "react";

const PROBLEMS = [
  { icon: "💧", title: "Inchaço e retenção que não passam", body: "Você acorda inchada, fica inchada depois do almoço e nem sempre entende por quê. A retenção de líquidos é um dos sinais mais comuns de inflamação silenciosa — e o ZionFit age diretamente nesse mecanismo." },
  { icon: "🔥", title: "Metabolismo lento — engorda fácil, emagrece difícil", body: "Depois dos 30, o metabolismo desacelera naturalmente. Você come menos, se exercita mais e ainda assim o corpo parece resistir. O ZionFit contém ativos termogênicos que reativam sua queima calórica de forma natural." },
  { icon: "🍫", title: "Fome constante e vontade de doce", body: "Oscilações de glicose geram aquela fome incontrolável, especialmente por doces no meio da tarde. Ingredientes como Canela e Cromo ajudam a estabilizar seu açúcar no sangue." },
  { icon: "⚡", title: "Cansaço que não passa nem dormindo", body: "Você dorme 8 horas e acorda cansada. Isso acontece porque seu corpo está em estado de inflamação crônica de baixo grau. O ZionFit ajuda a restaurar sua energia de forma sustentada, sem estimulantes agressivos." },
];

export function ProblemSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[hsl(36,38%,97%)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:flex lg:gap-12 lg:items-center lg:px-8">
        {/* Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="aspect-[4/3] rounded-[14px] overflow-hidden bg-[hsl(200,30%,85%)] flex items-center justify-center border border-zion-border">
            <span className="font-display text-xl text-zion-dark/30">Água Gelada</span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">ENTENDA SE É O SEU CASO</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark mb-3 leading-tight">
            Por que o seu corpo trava com o tempo
          </h2>
          <p className="text-sm text-zion-muted leading-relaxed mb-6">
            Depois dos 28 anos, seu metabolismo muda. Processos que antes funcionavam automaticamente começam a falhar silenciosamente.
          </p>

          <div className="space-y-2">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="border border-zion-border rounded-[14px] overflow-hidden bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center gap-3 p-4 text-left min-h-[52px]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zion-bg-alt text-lg">{p.icon}</span>
                  <span className="flex-1 text-sm font-bold text-zion-dark">{p.title}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zion-primary text-white text-sm font-bold transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4 pl-[4.25rem] text-sm text-zion-muted leading-relaxed">
                    {p.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
