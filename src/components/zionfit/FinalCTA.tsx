export function FinalCTA() {
  const scrollToBuy = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-zion-dark to-zion-dark-2">
      <div className="mx-auto max-w-[560px] px-4 py-16 sm:py-24 text-center">
        <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-3 block">COMECE AGORA</span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
          Acorde diferente amanhã mesmo.
        </h2>
        <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
          Cada dia que você espera é um dia a mais de inchaço, cansaço e metabolismo travado. Comece seu ritual de 30 segundos e sinta a diferença.
        </p>
        <button
          onClick={scrollToBuy}
          className="bg-zion-primary hover:bg-zion-primary-dark text-white font-bold text-base py-4 px-10 rounded-[50px] shadow-lg shadow-zion-primary/30 transition-all active:scale-[0.98] min-h-[52px] max-w-[340px] w-full"
        >
          QUERO MEU ZIONFIT →
        </button>
        <p className="text-xs text-white/40 mt-4">
          🛡️ Garantia de 15 dias. Sem resultado, devolvemos 100%.
        </p>
      </div>
    </section>
  );
}
