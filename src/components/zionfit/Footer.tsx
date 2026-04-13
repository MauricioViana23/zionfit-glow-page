const LINKS = ["Atendimento", "Rastreamento", "Meus Pedidos", "Política de Privacidade", "Termos de Uso", "Quem Somos", "Trabalhe Conosco"];
const PAYMENTS = ["PIX", "Boleto", "Visa", "Mastercard", "American Express", "Elo", "Hipercard"];

export function Footer() {
  return (
    <footer className="bg-[hsl(228,30%,8%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Col 1 */}
          <div>
            <div className="text-2xl font-extrabold text-zion-primary font-display mb-2">ZionFit</div>
            <p className="text-sm text-white/50 leading-relaxed mb-3">
              Um suplemento criado para honrar seu corpo como templo do Espírito Santo.
            </p>
            <p className="text-xs text-white/30 leading-relaxed">
              VIVA SKIN NUTRITION<br />
              Av. Alameda Rio Negro, 585, Barueri, Alphaville<br />
              CNPJ: 52.315.069/0001-08
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <div className="text-sm font-bold mb-3">Links Úteis</div>
            <ul className="space-y-1.5">
              {LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="text-sm font-bold mb-3">Contato</div>
            <div className="space-y-1.5 text-sm text-white/50">
              <p>📩 contato@zionfit.com.br</p>
              <p>📞 (11) 5198-9780</p>
              <p>⏰ Seg-Sex 9h-18h</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {PAYMENTS.map((p) => (
              <span key={p} className="text-[10px] font-medium text-white/40 bg-white/5 rounded px-2 py-1">{p}</span>
            ))}
          </div>
          <p className="text-[10px] text-white/30 text-center leading-relaxed">
            © 2026 ZionFit - VIVA SKIN NUTRITION. Todos os direitos reservados.
          </p>
          <p className="text-[9px] text-white/20 text-center mt-1 leading-relaxed max-w-lg mx-auto">
            Suplemento alimentar. Não é medicamento. Não substitui uma alimentação equilibrada. Registro ANVISA em conformidade com a RDC 243/2018.
          </p>
        </div>
      </div>
    </footer>
  );
}
