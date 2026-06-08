const TESTIMONIALS = [
  {
    tag: "\"Já é minha rotina matinal\"",
    quote: "Eu já tinha desistido de suplementos. Achava que nada funcionava pra mim. Mas o ZionFit me surpreendeu — em uma semana meu inchaço reduziu visivelmente. Hoje é minha rotina matinal!",
    name: "Fernanda M.",
    detail: "34 anos · SP · ",
  },
  {
    tag: "\"O sabor é muito gostoso\"",
    quote: "Eu sempre compro suplementos cheia de vontade e depois paro de tomar porque enjoo do gosto. Com o ZionFit foi totalmente diferente. O azedinho de limão com frutas vermelhas é muito gostoso.",
    name: "Camila R.",
    detail: "41 anos · RJ ·",
  },
  {
    tag: "\"Reduziu minha retenção\"",
    quote: "ZionFit é só misturar na água e pronto. Além de me me ajudar na retenção, percebi que aquela vontade de ficar beliscando toda hora de manhã diminuiu bastante.\"",
    name: "Ana Paula S.",
    detail: "38 anos · Recife",
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
                <div className="h-9 w-9 rounded-full bg-zion-bg-alt flex items-center justify-center text-lg">{"\n"}</div>
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
