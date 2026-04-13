export function TopBar() {
  return (
    <div className="bg-zion-dark text-white overflow-hidden">
      <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-2.5 text-xs sm:text-sm font-medium tracking-wide">
        <span className="inline-block px-6">
          🚚 <span className="text-zion-accent">Frete Grátis</span> acima de R$200
          &nbsp;·&nbsp;
          Garantia de <span className="text-zion-accent">15 dias</span>
          &nbsp;·&nbsp;
          +2.000 mulheres já usam
          &nbsp;·&nbsp;
          Compre 3, <span className="text-zion-accent">menor preço por dose</span>
        </span>
        <span className="inline-block px-6">
          🚚 <span className="text-zion-accent">Frete Grátis</span> acima de R$200
          &nbsp;·&nbsp;
          Garantia de <span className="text-zion-accent">15 dias</span>
          &nbsp;·&nbsp;
          +2.000 mulheres já usam
          &nbsp;·&nbsp;
          Compre 3, <span className="text-zion-accent">menor preço por dose</span>
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
