## Mudanças na galeria do Hero

Trocar as 6 miniaturas pequenas da galeria do `HeroSection.tsx` pelas 4 imagens enviadas agora.

### Imagens a copiar para `src/assets/`
1. `user-uploads://401d1878-fdcf-487f-893f-f97384beba52.png` → `zionfit-hero-bege-bebendo.png` (mulher de top bege bebendo da garrafa rosa)
2. `user-uploads://Captura_de_Tela_2026-04-06_às_00.02.25_-_cópia.png` → `zionfit-hero-acorde-leve.png` (criativo "Acorde leve, sem inchaço")
3. `user-uploads://Captura_de_Tela_2026-04-06_às_00.12.21_-_cópia.png` → `zionfit-hero-3-fases.png` (criativo "3 fases que reprogramam")
4. `user-uploads://Captura_de_Tela_2026-05-09_às_20.59.45.png` → `zionfit-hero-trio.png` (trio de mulheres)

### Edição em `src/components/zionfit/HeroSection.tsx`
- Remover os 6 imports atuais (`imgProduto`, `imgAguaGelada`, `imgBarrigaTreino`, `imgGarrafaTenis`, `imgEspelho`, `imgBebendo`).
- Adicionar os 4 novos imports.
- Reduzir o array `GALLERY_IMAGES` para 4 itens, na ordem acima.
- Ajustar o grid de miniaturas de `grid-cols-6` para `grid-cols-4`.

Nenhuma outra seção é alterada.
