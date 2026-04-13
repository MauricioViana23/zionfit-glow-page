const RESULTS = [
  { week: "Dias 1–7", items: ["Inchaço reduz", "Leveza", "Digestão"], pct: "89%" },
  { week: "Semanas 2–3", items: ["Metabolismo ativo", "Energia estável", "Menos vontade de doce"], pct: "93%" },
  { week: "Semana 4", items: ["Resultado se mantém", "Hábito consolidado", "Corpo equilibrado"], pct: "96%" },
  { week: "Semana 8+", items: ["Transformação completa", "Máxima leveza", "Ritual automático"], pct: "97%" },
];

export function ResultsTimeline() {
  return (
    <section className="bg-zion-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">LINHA DO TEMPO</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight">
            O que esperar semana a semana
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESULTS.map((r) => (
            <div key={r.week} className="bg-zion-dark-2 rounded-[14px] p-5 text-white">
              <div className="text-xs font-bold text-zion-primary uppercase tracking-wider mb-3">{r.week}</div>
              <ul className="space-y-2 mb-4">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-zion-success text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-extrabold text-zion-success">{r.pct}</div>
              <div className="text-[10px] text-white/50 mt-0.5">aprovação das clientes</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
