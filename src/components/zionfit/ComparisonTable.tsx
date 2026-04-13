const ROWS = [
  { feature: "Resultado em 7 dias", zion: true, caseiro: false, pronto: false, po: false },
  { feature: "Pronto em 30 segundos", zion: true, caseiro: false, pronto: true, po: false },
  { feature: "Sem açúcar", zion: true, caseiro: true, pronto: false, po: true },
  { feature: "Vitaminas incluídas", zion: true, caseiro: false, pronto: false, po: true },
  { feature: "Custo por dose", zion: "R$ 3,67", caseiro: "R$ 5+", pronto: "R$ 12+", po: "R$ 4+" },
  { feature: "Garantia", zion: "15 dias", caseiro: "—", pronto: "—", po: "Varia" },
  { feature: "ANVISA", zion: true, caseiro: "—", pronto: "Varia", po: "Varia" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-zion-success font-bold">✓</span>;
  if (value === false) return <span className="text-white/30">✗</span>;
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="bg-zion-dark-2">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">COMPARATIVO</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Como somos diferentes
          </h2>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[600px] text-sm text-white">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-3 text-white/50 font-medium w-[30%]"></th>
                <th className="py-3 px-3 text-center font-bold text-zion-primary bg-zion-primary/10 rounded-t-lg">ZionFit</th>
                <th className="py-3 px-3 text-center font-medium text-white/60">Shots Caseiros</th>
                <th className="py-3 px-3 text-center font-medium text-white/60">Shots Prontos</th>
                <th className="py-3 px-3 text-center font-medium text-white/60">Suplementos em Pó</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.feature} className="border-b border-white/5">
                  <td className="py-3 px-3 text-white/80 font-medium">{r.feature}</td>
                  <td className="py-3 px-3 text-center bg-zion-primary/5"><Cell value={r.zion} /></td>
                  <td className="py-3 px-3 text-center"><Cell value={r.caseiro} /></td>
                  <td className="py-3 px-3 text-center"><Cell value={r.pronto} /></td>
                  <td className="py-3 px-3 text-center"><Cell value={r.po} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
