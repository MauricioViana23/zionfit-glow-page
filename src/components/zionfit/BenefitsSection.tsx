import imgInchaco from "@/assets/zionfit-benefit-espelho.png";
import imgEnergia from "@/assets/zionfit-benefit-cozinha.png";
import imgMetabolismo from "@/assets/zionfit-benefit-pote.jpg";

const BENEFITS = [
  {
    image: { src: imgInchaco, label: "Menos inchaço" },
    title: "Menos inchaço, mais leveza — em dias",
    imageLeft: true,
  },
  {
    image: { src: imgEnergia, label: "Energia estável" },
    title: "Energia estável. Sem pico. Sem queda.",
    imageLeft: false,
  },
  {
    image: { src: imgMetabolismo, label: "Metabolismo" },
    title: "Metabolismo que funciona como deveria",
    imageLeft: true,
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zion-primary uppercase mb-3 block">
            BENEFÍCIOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zion-dark leading-[1.1]">
            ​
          </h2>
        </div>

        <div className="space-y-14 sm:space-y-20">
          {BENEFITS.map((b, i) => (
            <div key={i} className={`lg:flex lg:gap-12 lg:items-center ${!b.imageLeft ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <div className="aspect-[4/3] rounded-[14px] overflow-hidden border border-zion-border bg-zion-bg-alt">
                  <img src={b.image.src} alt={b.image.label} className="w-full h-full object-top object-contain" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="font-bold tracking-[0.15em] text-zion-primary uppercase mb-2 block text-xl">{b.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
