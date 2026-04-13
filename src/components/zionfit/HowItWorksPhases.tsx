const PHASES = [
  { num: 1, time: "Dias 1–7", title: "Ativação Anti-inflamatória", desc: "Hibisco e Gengibre começam a drenar o excesso de líquidos e reduzir a inflamação. Você já percebe menos inchaço e mais leveza." },
  { num: 2, time: "Semanas 2–3", title: "Aceleração Metabólica", desc: "Chá Verde, Canela e Cromo reativam seu metabolismo. Energia estável durante o dia. Menos fome fora de hora." },
  { num: 3, time: "Semana 4+", title: "Equilíbrio Sustentado", desc: "Corpo funcionando em harmonia. Metabolismo ativo, inchaço controlado, energia constante. O resultado se consolida." },
];

export function HowItWorksPhases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20 text-center lg:px-8">
        <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">COMO FUNCIONA</span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark mb-10 leading-tight">
          3 fases que transformam seu corpo
        </h2>

        <div className="relative lg:flex lg:gap-6 space-y-6 lg:space-y-0">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-zion-border" />

          {PHASES.map((p) => (
            <div key={p.num} className="relative flex-1 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zion-primary text-white font-extrabold text-xl shadow-lg shadow-zion-primary/20 relative z-10">
                {p.num}
              </div>
              <span className="text-xs font-bold text-zion-primary uppercase tracking-wide">{p.time}</span>
              <h3 className="font-display text-lg font-extrabold text-zion-dark mt-1 mb-2">{p.title}</h3>
              <p className="text-sm text-zion-muted leading-relaxed max-w-xs mx-auto">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
