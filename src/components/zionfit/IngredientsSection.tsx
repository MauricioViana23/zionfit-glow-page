import imgHibisco from "@/assets/zionfit-ing-hibisco.png";
import imgGengibre from "@/assets/zionfit-ing-gengibre.png";
import imgCanela from "@/assets/zionfit-ing-canela.png";
import imgChaVerde from "@/assets/zionfit-ing-chaverde.png";

const INGREDIENTS = [
  {
    image: imgHibisco,
    name: "Hibisco",
    tag: "Diurético Natural",
    tagColor: "bg-zion-primary/10 text-zion-primary",
    desc: "Flor utilizada há séculos na medicina natural. Ajuda a eliminar o excesso de líquidos, reduz o inchaço e combate a inflamação silenciosa.",
    benefits: ["Anti-inchaço", "Antioxidante", "Diurético"],
  },
  {
    image: imgGengibre,
    name: "Gengibre",
    tag: "Termogênico",
    tagColor: "bg-zion-accent/15 text-zion-dark",
    desc: "Raiz potente que eleva a temperatura corporal e acelera o metabolismo. Efeito anti-inflamatório comprovado em dezenas de estudos.",
    benefits: ["Termogênico", "Anti-inflamatório", "Digestivo"],
  },
  {
    image: imgCanela,
    name: "Canela",
    tag: "Regulador Metabólico",
    tagColor: "bg-zion-accent/15 text-zion-dark",
    desc: "Regula os níveis de açúcar no sangue, reduzindo picos de insulina que causam fome excessiva e acúmulo de gordura abdominal.",
    benefits: ["Regula glicose", "Saciedade", "Anti-gordura"],
  },
  {
    image: imgChaVerde,
    name: "Chá Verde + Guaraná",
    tag: "Energia Sustentada",
    tagColor: "bg-zion-success/10 text-zion-success",
    desc: "A dupla perfeita para energia limpa e duradoura. Libera cafeína de forma gradual, sem picos de ansiedade ou crashes no meio do dia.",
    benefits: ["Energia limpa", "Foco mental", "Sem crash"],
  },
];

const BADGES = ["GLUTEN FREE", "LACTOSE FREE", "SUGAR FREE", "ANVISA"];

export function IngredientsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[560px] px-4 py-14 sm:py-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block">INGREDIENTES</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-zion-dark leading-tight">
            O que tem dentro do ZionFit
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="flex gap-4 p-4 rounded-[14px] border border-zion-border bg-white">
              <div className="h-20 w-20 shrink-0 rounded-xl overflow-hidden border border-zion-border bg-zion-bg-alt">
                <img src={ing.image} alt={ing.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-base font-bold text-zion-dark">{ing.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ing.tagColor}`}>{ing.tag}</span>
                </div>
                <p className="text-sm text-zion-muted leading-relaxed mb-2.5">{ing.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ing.benefits.map((b) => (
                    <span key={b} className="text-[11px] font-medium px-2 py-1 rounded-full bg-white border border-zion-border text-zion-dark">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {BADGES.map((b) => (
            <span key={b} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-zion-dark text-white tracking-wider">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
