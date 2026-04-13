const TESTIMONIALS = [
  {
    tag: "Já tentei de tudo antes",
    quote: "Eu já tinha desistido de suplementos. Achava que nada funcionava pra mim. Mas o ZionFit me surpreendeu — em uma semana meu inchaço reduziu visivelmente. Hoje faz parte da minha rotina como escovar os dentes.",
    name: "Fernanda M.",
    detail: "34 anos · SP · 3 meses usando",
  },
  {
    tag: "Achei caro no começo",
    quote: "Quando vi o preço, hesitei. Mas fiz as contas: R$ 4 por dia por algo que me faz sentir leve, sem inchaço e com energia? Gasto mais com café. Hoje compro o kit de 3 sem pensar.",
    name: "Camila R.",
    detail: "41 anos · RJ · 5 meses usando",
  },
  {
    tag: "Minha rotina é caótica",
    quote: "Sou mãe de dois, trabalho fora, faço tudo correndo. O ZionFit cabe na minha rotina porque leva 30 segundos. Misturo na água e pronto. Sinto diferença real na disposição.",
    name: "Ana Paula S.",
    detail: "38 anos · BH · 2 meses usando",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">DEPOIMENTOS</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight">
            Quem usa, recomenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="border border-zion-border rounded-[14px] p-5 bg-white">
              <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-zion-primary/10 text-zion-primary mb-3">{t.tag}</span>
              <div className="flex text-zion-accent text-sm mb-3">★★★★★</div>
              <p className="text-sm text-zion-dark italic leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-zion-bg-alt flex items-center justify-center text-lg">👩</div>
                <div>
                  <div className="text-sm font-bold text-zion-dark">{t.name}</div>
                  <div className="text-[11px] text-zion-muted">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
