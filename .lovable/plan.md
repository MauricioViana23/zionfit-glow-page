## Alterações solicitadas

### 1. `src/components/zionfit/IngredientsSection.tsx`
- Remover o bloco de certificações no rodapé: "Sem Glúten / Sem Lactose / Sem Açúcar / Anvisa".
- Substituir o header da seção:
  - Eyebrow "— Os Ingredientes" e título "Quatro plantas. Uma fórmula sentida." → trocar por título único **"O que tem dentro do ZionFit"** (mantendo a tipografia Playfair Display, mesma hierarquia).
- Remover as tags flutuantes ("Flor diurética", "Raiz termogênica", "Equilíbrio doce", "Energia limpa") dos cards de cada ingrediente (o badge no canto superior esquerdo da imagem).

### 2. `src/components/zionfit/BenefitsSection.tsx` — REMOVER do site
Remover a renderização desta seção em `src/routes/index.tsx` (eyebrow "— Benefícios", título "Um ritual diário. Três transformações reais.", capítulos 01/02/03 com Hibisco/Gengibre, Chá Verde/Guaraná, Canela/Cromo).
- Apagar o import e o `<BenefitsSection />` de `src/routes/index.tsx`.
- Manter o arquivo do componente (não excluir), apenas desplugar.

### 3. `src/components/zionfit/SocialProofNumbers.tsx`
Corrigir concordância (plural):
- "80% toma todo dia" → **"80% tomam todo dia"**
- "87% sentiu menos inchaço nos primeiros 7 dias" → **"87% se sentiram menos inchadas nos primeiros 7 dias"**
- "70% se sente mais disposta durante o dia" → **"70% se sentem mais dispostas durante o dia"**

Remover o bloco inteiro "POR QUE É SEGURO TOMAR TODO DIA" com os 4 cards (100% Natural, Sem acelerar coração, Sem glúten/lactose, 5 segundos para preparar) e o disclaimer abaixo dele? → **Não** — o usuário pediu para remover a parte "POR QUE FUNCIONA / Quatro sinais que você vai sentir", que está em outro componente (ver item 4). Manter aqui apenas a correção dos números.

### 4. `src/components/zionfit/ComparisonTable.tsx` — REMOVER do site
A seção "COMPARATIVO / O shot que substitui o improviso" e o bloco "POR QUE FUNCIONA / Quatro sinais que você vai sentir" estão ambos dentro deste componente.
- Apagar o import e o `<ComparisonTable />` de `src/routes/index.tsx`.
- Manter o arquivo (não excluir).

### 5. `src/routes/index.tsx`
Atualizar a ordem final removendo `BenefitsSection` e `ComparisonTable`:
```
TopBar
HeroSection
PremiumBenefitsSection
HowToUse
IngredientsSection
RealResultsSection
SocialProofNumbers
TestimonialsSection
FAQSection
FinalCTA
Footer
StickyBar
```

### Escopo
Apenas edições de UI/conteúdo. Nenhuma mudança de lógica de negócio, rotas ou backend.
