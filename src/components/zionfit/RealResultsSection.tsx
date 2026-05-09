import imgMariana from "@/assets/zionfit-cliente-mariana.png";
import imgPatricia from "@/assets/zionfit-cliente-patricia.png";
import imgGabriela from "@/assets/zionfit-cliente-gabriela.png";

const RESULTS = [
  {
    image: imgMariana,
    time: "21 dias",
    quote: "Em 21 dias, minha barriga desinchou sem mudar a alimentação.",
    name: "Mariana S.",
    age: "29 anos",
  },
  {
    image: imgPatricia,
    time: "30 dias",
    quote: "Energia o dia todo, sem aquela queda das 15h. Tomo religiosamente.",
    name: "Patrícia R.",
    age: "35 anos",
  },
  {
    image: imgGabriela,
    time: "45 dias",
    quote: "Minha pele mudou. Minha disposição mudou. Eu mudei.",
    name: "Gabriela M.",
    age: "42 anos",
  },
];

export function RealResultsSection() {
  return (
    <section className="bg-zion-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">RESULTADOS REAIS</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight mb-3">
            Transformações de verdade.
          </h2>
          <p className="text-sm text-zion-muted">
            Fotos enviadas por nossas clientes. Sem filtro. Sem edição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RESULTS.map((r) => (
            <div key={r.name} className="bg-white rounded-[18px] overflow-hidden border border-zion-border shadow-sm flex flex-col">
              <div className="relative aspect-[4/5] bg-zion-bg-alt overflow-hidden">
                <img src={r.image} alt={`${r.name} - resultado em ${r.time}`} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-zion-primary text-white rounded-full px-3 py-1.5 text-xs font-bold shadow-md">
                  {r.time}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex text-zion-accent text-sm mb-2">★★★★★</div>
                <p className="text-sm text-zion-dark italic leading-relaxed mb-4 flex-1">
                  "{r.quote}"
                </p>
                <div>
                  <div className="text-sm font-bold text-zion-dark">{r.name}</div>
                  <div className="text-xs text-zion-muted">{r.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
