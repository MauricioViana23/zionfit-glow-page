import cardIngredientes from "@/assets/zionfit-card-ingredientes.png.asset.json";
import cardEssencial from "@/assets/zionfit-card-essencial.png.asset.json";
import cardRitual from "@/assets/zionfit-card-ritual.png.asset.json";

const CARDS = [
  { src: cardIngredientes.url, alt: "7 ingredientes. Uma única missão." },
  { src: cardEssencial.url, alt: "Apenas o essencial." },
  { src: cardRitual.url, alt: "Seu ritual diário." },
];

export function LifestyleCards() {
  return (
    <section className="bg-zion-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {CARDS.map((c) => (
            <div
              key={c.alt}
              className="overflow-hidden rounded-[18px] border border-zion-border bg-white shadow-sm"
            >
              <img
                src={c.src}
                alt={c.alt}
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
