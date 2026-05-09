## Mudanças

### 1. `BenefitsSection.tsx` — trocar as 3 fotos
Copiar as novas imagens enviadas para `src/assets/`:
- `user-uploads://image-9.png` → `src/assets/zionfit-benefit-espelho.png` (mulher de top marrom no espelho → "Menos inchaço")
- `user-uploads://501be421-95d8-4855-91c4-22c25cff8dd2.png` → `src/assets/zionfit-benefit-cozinha.png` (mulher de roupa bege na cozinha → "Energia estável")
- `user-uploads://f1e6e60f-ff30-47ca-ab33-d752eccfb87e_1.jpeg` → `src/assets/zionfit-benefit-pote.jpg` (mulher segurando o pote → "Metabolismo")

Atualizar os 3 imports no topo de `BenefitsSection.tsx` para apontar para os novos arquivos (substituindo `imgInchaco`, `imgEnergia`, `imgMetabolismo`).

### 2. `HowToUse.tsx` — remover o card de depoimento da Mariana L.
Apagar o bloco `{/* Testimonial card */}` (linhas 43–55) inteiro, incluindo o import `imgBeijo` (linha 4) que deixa de ser usado.
