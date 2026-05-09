import imgScoop from "@/assets/zionfit-scoop.png";
import imgMisturando from "@/assets/zionfit-misturando.png";
import imgBebendo from "@/assets/zionfit-bebendo.png";

const STEPS = [
  { num: 1, title: "Coloque", desc: "1 colher em 200ml de água gelada ou com gás", src: imgScoop },
  { num: 2, title: "Misture", desc: "Agite por 10 segundos até dissolver completamente", src: imgMisturando },
  { num: 3, title: "Tome em jejum", desc: "Antes de qualquer refeição", src: imgBebendo },
];

export function HowToUse() {
  const scrollToBuy = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[hsl(10,20%,96%)]">
      <div className="mx-auto max-w-[480px] px-4 py-14 sm:py-20 text-center">
        <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">COMO TOMAR</span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark mb-2 leading-tight">
          Simples assim.
        </h2>
        <p className="text-sm text-zion-muted mb-8">3 passos. 30 segundos. Todo dia.</p>

        <div className="space-y-6 mb-8">
          {STEPS.map((s) => (
            <div key={s.num}>
              <div className="aspect-[4/3] rounded-[14px] overflow-hidden mb-3 border border-zion-border bg-zion-bg-alt">
                <img src={s.src} alt={`Passo ${s.num} — ${s.title}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zion-primary text-white text-sm font-bold">{s.num}</div>
                <div>
                  <div className="text-sm font-bold text-zion-dark">{s.title}</div>
                  <div className="text-sm text-zion-muted">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToBuy}
          className="bg-zion-primary hover:bg-zion-primary-dark text-white font-bold text-sm py-3.5 px-8 rounded-[50px] shadow-lg shadow-zion-primary/30 transition-all active:scale-[0.98] min-h-[48px]"
        >
          Quero começar meu ritual →
        </button>
      </div>
    </section>
  );
}
