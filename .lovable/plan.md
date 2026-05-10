## Mudanças

### 1. `HeroSection.tsx` — atualizar `BUNDLES`

Substituir os 3 itens do array por:

- **1 pote** — "Experimente"
  - preço: R$ 167,00 (de R$ 199,00)
  - 30 doses · 3x de R$ 55,67 sem juros
  - badge: "EXPERIMENTE"
  - extras: "Frete calculado"
  - url: `https://www.zionfit.com.br/produtos/zion-fit-shot-matinal-1-pote-1mrki/`

- **2 potes** — "Ritual Completo" (mais popular)
  - preço: R$ 319,00 (de R$ 399,00)
  - 60 doses · 6x de R$ 53,17 sem juros
  - badge: "⭐ MAIS ESCOLHIDO"
  - extras: "Guia digital grátis · Frete grátis"
  - url: `https://www.zionfit.com.br/produtos/zion-fit-combo2-2-potes-1ayi7/`

- **3 potes** — "Movimento" (melhor valor)
  - preço: R$ 429,00 (de R$ 549,00)
  - 90 doses · 6x de R$ 71,50 sem juros
  - badge: "MELHOR VALOR"
  - extras: "Guia digital grátis · Morning Club VIP"
  - url: `https://www.zionfit.com.br/produtos/zion-fit-combo-3-3-potes-qk0kx/`

Adicionar campos `url`, `installments` (texto pronto, ex.: "3x de R$ 55,67 sem juros") e `extras: string[]` ao tipo `Bundle`. Substituir o cálculo atual de parcela (12x) pelo texto fixo de `installments` de cada bundle.

### 2. Bloco do bundle — mostrar bullets de extras

Abaixo do preço de cada bundle, renderizar a lista `extras` com checkmarks (✓) — pequenos, na cor `text-zion-success`.

### 3. CTAs — abrir o link do bundle selecionado

Atualmente `scrollToBuy()` rola para `#buy-box`. Trocar o comportamento dos botões "QUERO MEU ZIONFIT →" (Hero principal) e do `StickyBar` (mobile) para abrir `bundle.url` em nova aba (`window.open(bundle.url, "_blank", "noopener")`).

A função `scrollToBuy` continua sendo usada pelos CTAs de outras seções (`FinalCTA`, `ProblemSection`, etc.) que rolam até o buy-box — não mexer nelas.

### 4. `StickyBar.tsx` — usar a URL do bundle

Trocar `scrollToBuy` por `window.open(bundle.url, "_blank", "noopener")` usando o `bundle` já derivado de `BUNDLES`.

### Detalhes técnicos

- `BUNDLES` continua exportado de `HeroSection.tsx`; `StickyBar` já importa de lá, então a nova prop `url` fica disponível automaticamente.
- Remover a variável `installment` calculada e a linha "ou 12x de R$ X" — passa a usar `bundle.installments`.
- Manter `pricePerDose` (R$/dose) como está, recalculando: 1p R$5,57, 2p R$5,32, 3p R$4,77.
