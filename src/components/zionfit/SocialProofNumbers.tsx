const STATS = [
  { num: "80%", text: "tomam todo dia" },
  { num: "87%", text: "se sentiram menos inchadas nos primeiros 7 dias" },
  { num: "70%", text: "se sentem mais dispostas durante o dia" },
];

const SAFETY = [
  { icon: "🌿", title: "100% Natural", desc: "Ingredientes de origem natural" },
  { icon: "💓", title: "Sem acelerar coração", desc: "Energia limpa e gradual" },
  { icon: "🚫", title: "Sem glúten/lactose", desc: "Seguro para intolerantes" },
  { icon: "⏱️", title: "5 segundos para preparar", desc: "Praticidade real" },
];

export function SocialProofNumbers() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[580px] px-4 py-14 sm:py-20 text-center">
        <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">RESULTADOS REAIS</span>
        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-zion-dark mb-8 leading-tight">
          Prática, gostosa e com resultado. As clientes provam.
        </h2>

        <div className="space-y-3 mb-8">
          {STATS.map((s) => (
            <div key={s.num} className="flex items-center gap-4 bg-zion-bg-alt rounded-[14px] p-4 text-left">
              <span className="text-3xl font-extrabold text-zion-primary shrink-0 w-16">{s.num}</span>
              <span className="text-sm text-zion-dark">{s.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-zion-border pt-8 mb-6">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-muted uppercase mb-4 block">POR QUE É SEGURO TOMAR TODO DIA</span>
          <div className="grid grid-cols-2 gap-3">
            {SAFETY.map((s) => (
              <div key={s.title} className="border border-zion-border rounded-[14px] p-3 text-left">
                <span className="text-lg mb-1 block">{s.icon}</span>
                <div className="text-sm font-bold text-zion-dark">{s.title}</div>
                <div className="text-xs text-zion-muted">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-zion-muted leading-relaxed">
          *Resultados baseados em pesquisa interna com 847 clientes ativas. Resultados individuais podem variar.
        </p>
      </div>
    </section>
  );
}
