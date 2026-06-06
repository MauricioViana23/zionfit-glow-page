import imgHibisco from "@/assets/zionfit-ing-hibisco.png";
import imgGengibre from "@/assets/zionfit-ing-gengibre.png";
import imgCanela from "@/assets/zionfit-ing-canela.png";
import imgChaVerde from "@/assets/zionfit-ing-chaverde.png";

const INGREDIENTS = [
  {
    image: imgHibisco,
    name: "Hibisco",
    tag: "Flor diurética",
    feeling: "leveza que você sente",
    desc: "Cultivado em altitude. Ajuda o corpo a soltar o excesso de líquidos com delicadeza, devolvendo a leveza que se perde no dia a dia.",
  },
  {
    image: imgGengibre,
    name: "Gengibre",
    tag: "Raiz termogênica",
    feeling: "calor interno",
    desc: "A raiz que acende seu metabolismo de dentro pra fora. Calor suave, digestão tranquila, um acordar interno.",
  },
  {
    image: imgCanela,
    name: "Canela",
    tag: "Equilíbrio doce",
    feeling: "fome sob controle",
    desc: "Regula o açúcar no sangue com gentileza. Aquela fome desproporcional perde a força. Saciedade real, sem esforço.",
  },
  {
    image: imgChaVerde,
    name: "Chá Verde",
    tag: "Energia limpa",
    feeling: "foco sem ansiedade",
    desc: "Cafeína liberada devagar, como deveria ser. Sem picos. Sem queda. Só uma presença firme durante o dia inteiro.",
  },
];

export function IngredientsSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F6F2EE" }}>
      <div className="pointer-events-none absolute top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #F5C9D6 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-20 sm:mb-28">
          <h2 className="font-display text-[40px] leading-[1.05] sm:text-6xl tracking-tight" style={{ color: "#2A1720" }}>
            O que tem dentro <em className="italic font-light" style={{ color: "#7C4A5C" }}>do ZionFit.</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-20 sm:space-y-28">
          {INGREDIENTS.map((ing, i) => (
            <article
              key={ing.name}
              className={`sm:flex sm:items-center sm:gap-16 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="sm:w-1/2 mb-8 sm:mb-0">
                <div className="relative">
                  <div
                    className="aspect-square overflow-hidden relative"
                    style={{
                      borderRadius: "36px",
                      background: "linear-gradient(140deg, #FBEEEE 0%, #F0E4DC 100%)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.8), 0 30px 70px -25px rgba(42,23,32,0.25), 0 8px 24px -8px rgba(233,106,146,0.12)",
                    }}
                  >
                    <img
                      src={ing.image}
                      alt={ing.name}
                      className="w-full h-full object-contain p-8"
                    />
                    {/* Number */}
                    <span
                      className="absolute bottom-4 right-6 font-display text-[80px] leading-none italic font-light opacity-15 select-none"
                      style={{ color: "#2A1720" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="sm:w-1/2">
                <h3 className="font-display text-4xl sm:text-5xl tracking-tight mb-3 leading-none" style={{ color: "#2A1720" }}>
                  {ing.name}
                </h3>
                <p className="font-display italic text-xl sm:text-2xl font-light mb-6" style={{ color: "#E96A92" }}>
                  {ing.feeling}.
                </p>
                <p className="text-[15px] sm:text-base leading-relaxed max-w-md" style={{ color: "#6B5862" }}>
                  {ing.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
