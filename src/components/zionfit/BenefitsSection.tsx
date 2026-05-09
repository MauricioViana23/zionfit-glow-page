import imgInchaco from "@/assets/zionfit-benefit-espelho.png";
import imgEnergia from "@/assets/zionfit-benefit-cozinha.png";
import imgMetabolismo from "@/assets/zionfit-benefit-pote.jpg";

const BENEFITS = [
  {
    image: { src: imgInchaco, label: "Menos inchaço" },
    title: "Menos inchaço, mais leveza — em dias",
    text: "O Hibisco atua como diurético natural, ajudando a eliminar o excesso de líquidos. Combinado com o Gengibre anti-inflamatório, o resultado aparece rápido.",
    pills: [
      { label: "Hibisco", color: "bg-zion-primary/10 text-zion-primary" },
      { label: "Gengibre", color: "bg-zion-accent/15 text-zion-dark" },
    ],
    imageLeft: true,
  },
  {
    image: { src: imgEnergia, label: "Energia estável" },
    title: "Energia estável. Sem pico. Sem queda.",
    text: "O Chá Verde libera cafeína de forma gradual, sem causar picos de energia ou ansiedade. Você se sente focada e disposta durante todo o dia.",
    pills: [{ label: "Chá Verde", color: "bg-zion-success/10 text-zion-success" }],
    imageLeft: false,
  },
  {
    image: { src: imgMetabolismo, label: "Metabolismo" },
    title: "Metabolismo que funciona como deveria",
    text: "A Canela regula a glicose no sangue, controlando aquela fome desproporcional. O Cromo potencializa esse efeito, ativando seu metabolismo de forma natural.",
    pills: [
      { label: "Canela", color: "bg-zion-accent/15 text-zion-dark" },
      { label: "Cromo", color: "bg-zion-primary/10 text-zion-primary" },
    ],
    imageLeft: true,
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8 space-y-14 sm:space-y-20">
        {BENEFITS.map((b, i) => (
          <div key={i} className={`lg:flex lg:gap-12 lg:items-center ${!b.imageLeft ? "lg:flex-row-reverse" : ""}`}>
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="aspect-[4/3] rounded-[14px] overflow-hidden border border-zion-border bg-zion-bg-alt">
                <img src={b.image.src} alt={b.image.label} className="w-full h-full object-top object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-zion-dark mb-3 leading-tight">{b.title}</h3>
              <p className="text-sm text-zion-muted leading-relaxed mb-4">{b.text}</p>
              <div className="flex flex-wrap gap-2">
                {b.pills.map((p) => (
                  <span key={p.label} className={`text-xs font-bold px-3 py-1.5 rounded-full ${p.color}`}>{p.label}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
