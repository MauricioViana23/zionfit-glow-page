import { useState } from "react";
import imgPoteRosa from "@/assets/zionfit-hero-pote-rosa.png";
import imgRitual from "@/assets/zionfit-hero-ritual.png";
import imgAcorde from "@/assets/zionfit-hero-acorde.png";
import imgElevador from "@/assets/zionfit-hero-elevador.png";
import imgPraia from "@/assets/zionfit-hero-praia.png";
import imgControle from "@/assets/zionfit-hero-controle.png";

const GALLERY_IMAGES = [
  { id: 0, label: "Produto", src: imgPoteRosa },
  { id: 1, label: "Ritual matinal", src: imgRitual },
  { id: 2, label: "Acorde leve", src: imgAcorde },
  { id: 3, label: "Voltei a me sentir leve", src: imgElevador },
  { id: 4, label: "Energia o dia todo", src: imgPraia },
  { id: 5, label: "Você no controle", src: imgControle },
];

interface Bundle {
  id: number;
  label: string;
  title: string;
  qty: string;
  doses: string;
  price: number;
  originalPrice: number;
  badge: string;
  badgeColor: string;
  pricePerDose: string;
  installments: string;
  extras: string[];
  url: string;
}

const BUNDLES: Bundle[] = [
  {
    id: 1,
    label: "1 pote",
    title: "Experimente",
    qty: "1",
    doses: "30 doses",
    price: 167.00,
    originalPrice: 199.00,
    badge: "EXPERIMENTE",
    badgeColor: "bg-zion-primary/10 text-zion-primary",
    pricePerDose: "R$ 5,57/dose",
    installments: "3x de R$ 55,67 sem juros",
    extras: ["Frete calculado"],
    url: "https://www.zionfit.com.br/produtos/zion-fit-shot-matinal-1-pote-1mrki/",
  },
  {
    id: 2,
    label: "2 potes",
    title: "Ritual Completo",
    qty: "2",
    doses: "60 doses",
    price: 319.00,
    originalPrice: 399.00,
    badge: "⭐ MAIS ESCOLHIDO",
    badgeColor: "bg-zion-primary text-white",
    pricePerDose: "R$ 5,32/dose",
    installments: "6x de R$ 53,17 sem juros",
    extras: ["Guia digital grátis", "Frete grátis"],
    url: "https://www.zionfit.com.br/produtos/zion-fit-combo2-2-potes-1ayi7/",
  },
  {
    id: 3,
    label: "3 potes",
    title: "Movimento",
    qty: "3",
    doses: "90 doses",
    price: 429.00,
    originalPrice: 549.00,
    badge: "MELHOR VALOR",
    badgeColor: "bg-zion-success text-white",
    pricePerDose: "R$ 4,77/dose",
    installments: "6x de R$ 71,50 sem juros",
    extras: ["Guia digital grátis", "Morning Club VIP"],
    url: "https://www.zionfit.com.br/produtos/zion-fit-combo-3-3-potes-qk0kx/",
  },
];

interface HeroSectionProps {
  selectedBundle: number;
  onBundleChange: (id: number) => void;
}

export function HeroSection({ selectedBundle, onBundleChange }: HeroSectionProps) {
  const [activeImage, setActiveImage] = useState(0);
  const bundle = BUNDLES.find(b => b.id === selectedBundle) || BUNDLES[1];
  const savings = bundle.originalPrice - bundle.price;

  const scrollToBuy = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToCheckout = () => {
    window.open(bundle.url, "_blank", "noopener");
  };

  return (
    <section id="hero" className="bg-zion-bg">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10 lg:flex lg:gap-10 lg:px-8">
        {/* Gallery */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative aspect-square rounded-[14px] border border-zion-border overflow-hidden mb-4 bg-zion-bg-alt">
            <img
              src={GALLERY_IMAGES[activeImage].src}
              alt={`ZionFit — ${GALLERY_IMAGES[activeImage].label}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-zion-dark shadow">
              ​
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {GALLERY_IMAGES.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(img.id)}
                aria-label={img.label}
                className={`aspect-square rounded-lg border-2 transition-all overflow-hidden bg-zion-bg-alt ${activeImage === img.id ? "border-zion-primary shadow-md" : "border-zion-border hover:border-zion-muted"}`}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy Box */}
        <div id="buy-box" className="lg:w-1/2 lg:sticky lg:top-6 lg:self-start">
          {/* Social proof pill */}
          <div className="inline-flex items-center gap-1.5 bg-zion-accent/15 text-zion-dark rounded-full px-3 py-1.5 text-xs font-bold mb-3">
            🔥 +1.800 compras no último mês
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-zion-accent text-sm">★★★★★</div>
            <span className="text-sm font-semibold text-zion-dark">4.9</span>
            <span className="text-xs text-zion-muted">· 2.147 avaliações verificadas</span>
          </div>

          {/* H1 */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold leading-tight text-zion-dark mb-3">
            Menos inchaço. Mais leveza para o seu dia.
          </h1>

          {/* Subheadline */}
          <p className="text-sm text-zion-muted leading-relaxed mb-5">
            Seu ritual diário de bem-estar. Não quebra o jejum. Baixo valor calórico.
          </p>

          {/* Checkmark bullets */}
          <ul className="space-y-2.5 mb-6">
            {[
              "Menos inchaço visível desde os primeiros dias",
              "Menos fome e vontade de beliscar ao longo do dia",
              "Efeito termogênico natural",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-zion-dark">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zion-success text-white text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Bundle selector */}
          <div className="space-y-2.5 mb-5">
            {BUNDLES.map((b) => (
              <button
                key={b.id}
                onClick={() => onBundleChange(b.id)}
                className={`w-full flex items-center justify-between rounded-[14px] border-2 p-3.5 text-left transition-all min-h-[52px] ${
                  selectedBundle === b.id
                    ? "border-zion-primary bg-zion-primary/5 shadow-sm"
                    : "border-zion-border hover:border-zion-muted bg-white"
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`mt-1 h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedBundle === b.id ? "border-zion-primary" : "border-zion-border"}`}>
                    {selectedBundle === b.id && <div className="h-2.5 w-2.5 rounded-full bg-zion-primary" />}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-zion-dark">{b.title} <span className="font-normal text-zion-muted">· {b.label}</span></div>
                    <div className="text-xs text-zion-muted mt-0.5">
                      <span className="line-through">R$ {b.originalPrice.toFixed(2).replace(".", ",")}</span>
                      <span className="ml-1.5 font-semibold text-zion-dark">R$ {b.price.toFixed(2).replace(".", ",")}</span>
                      <span className="ml-1.5 text-zion-muted">{b.pricePerDose}</span>
                    </div>
                    <ul className="mt-1.5 space-y-0.5">
                      {b.extras.map((ex, i) => (
                        <li key={i} className="text-[11px] text-zion-dark flex items-center gap-1">
                          <span className="text-zion-success">✓</span> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shrink-0 ${b.badgeColor}`}>
                  {b.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Price block */}
          <div className="mb-4">
            <div className="text-sm text-zion-muted">
              <span className="line-through">De R$ {bundle.originalPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="text-3xl font-extrabold text-zion-dark font-body">
              R$ {bundle.price.toFixed(2).replace(".", ",")}
            </div>
            <div className="text-sm text-zion-muted mt-0.5">
              ou {bundle.installments}
            </div>
            <div className="inline-flex items-center bg-zion-success/10 text-zion-success rounded-full px-2.5 py-1 text-xs font-bold mt-1.5">
              💰 Você economiza R$ {savings.toFixed(2).replace(".", ",")}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={goToCheckout}
            className="w-full bg-zion-primary hover:bg-zion-primary-dark text-white font-bold text-base py-4 rounded-[50px] shadow-lg shadow-zion-primary/30 transition-all active:scale-[0.98] min-h-[52px] mb-3"
          >
            QUERO MEU ZIONFIT →
          </button>

          <p className="text-center text-xs text-zion-muted mb-5">
            🔒 Compra segura · SSL · Dados criptografados
          </p>

          {/* Guarantee — premium */}
          <div className="relative overflow-hidden rounded-[18px] border border-zion-success/30 bg-gradient-to-br from-zion-success/10 via-white to-zion-success/5 p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zion-success to-zion-success/80 text-white shadow-lg shadow-zion-success/30 ring-4 ring-white">
                  <div className="text-center leading-none">
                    <div className="text-[10px] font-bold tracking-wider opacity-90">GARANTIA</div>
                    <div className="text-2xl font-extrabold mt-0.5">30</div>
                    <div className="text-[10px] font-bold tracking-wider opacity-90">DIAS</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-zion-success">🛡️</span>
                  <div className="text-sm font-extrabold text-zion-dark">Garantia incondicional</div>
                </div>
                <p className="text-xs text-zion-muted leading-relaxed">
                  Se você não sentir diferença nos primeiros <strong className="text-zion-dark">30 dias</strong>, devolvemos <strong className="text-zion-dark">100% do valor</strong>. Sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { BUNDLES };
