## Mudanças

### 1. Seção "O que tem dentro" — emojis → imagens reais

Copiar as 4 imagens de ingredientes para `src/assets/`:
- `user-uploads://Captura_de_Tela_2026-05-09_às_16.05.41.png` → `src/assets/zionfit-ing-hibisco.png`
- `user-uploads://Captura_de_Tela_2026-05-09_às_16.10.13.png` → `src/assets/zionfit-ing-gengibre.png`
- `user-uploads://Captura_de_Tela_2026-05-09_às_16.07.50.png` → `src/assets/zionfit-ing-canela.png`
- `user-uploads://image-5.png` → `src/assets/zionfit-ing-chaverde.png`

Editar `src/components/zionfit/IngredientsSection.tsx`:
- Remover o campo `emoji` e substituir por `image` em cada ingrediente.
- Trocar o `<span>` do emoji por uma miniatura quadrada (~72×72) com `rounded-xl`, `object-cover`, borda suave — formato card horizontal, mesma estrutura atual.

### 2. Nova seção "Resultados reais" (provas sociais com fotos)

Copiar as 3 fotos de clientes:
- `user-uploads://image-6.png` → `src/assets/zionfit-cliente-mariana.png` (elevador)
- `user-uploads://image-7.png` → `src/assets/zionfit-cliente-patricia.png` (cozinha)
- `user-uploads://image-8.png` → `src/assets/zionfit-cliente-gabriela.png` (rua)

Criar `src/components/zionfit/RealResultsSection.tsx`:
- Eyebrow: "RESULTADOS REAIS"
- H2: "Transformações de verdade."
- Subhead: "Fotos enviadas por nossas clientes. Sem filtro. Sem edição."
- Grid de 3 cards (1 col mobile, 3 cols desktop), cada card com:
  - Foto da cliente (aspect 4/5, `object-cover`)
  - Badge de tempo ("21 dias", "30 dias", "45 dias") sobreposta
  - 5 estrelas
  - Citação em itálico
  - Nome + idade

Conteúdo:
1. Mariana S., 29 anos — 21 dias — "Em 21 dias, minha barriga desinchou sem mudar a alimentação."
2. Patrícia R., 35 anos — 30 dias — "Energia o dia todo, sem aquela queda das 15h. Tomo religiosamente."
3. Gabriela M., 42 anos — 45 dias — "Minha pele mudou. Minha disposição mudou. Eu mudei."

### 3. Inserir a nova seção em `src/routes/index.tsx`

Adicionar `<RealResultsSection />` logo após `<IngredientsSection />` e antes de `<SocialProofNumbers />`.

### Padrões respeitados
- Tokens `zion-*` existentes, fontes `font-display`/`font-body`.
- Min-height 44px em qualquer elemento interativo (CRO).
- Sem alterações em Hero ou outras seções.
