## 1. Trocar as 3 fotos em "Transformações de verdade"

Substituir os arquivos existentes em `src/assets/` pelas imagens enviadas (mesmos nomes — sem mudar imports):

- `zionfit-cliente-mariana.png` ← `user-uploads://image-10.png` (selfie no espelho — "21 dias / menos inchaço")
- `zionfit-cliente-patricia.png` ← `user-uploads://image-11.png` (academia bebendo shot rosa — "30 dias / energia")
- `zionfit-cliente-gabriela.png` ← `user-uploads://ChatGPT_Image_18_de_mai._de_2026_21_50_20.png` (parque com amiga — "45 dias")

Confirma essa ordem? Se quiser outra correspondência, me avise.

## 2. Simplificar a seção Benefícios (`BenefitsSection.tsx`)

Logo abaixo do accordion "Cansaço que não passa…", a seção atual mostra 3 blocos imagem + headline + texto longo + pills.

Mudanças:
- Adicionar **cabeçalho da seção** no topo: eyebrow "BENEFÍCIOS" + título curto (ex.: "Benefícios que você sente").
- Em cada um dos 3 blocos: **manter apenas a imagem e o headline**. Remover:
  - o parágrafo descritivo (Hibisco/Gengibre, Chá Verde, Canela/Cromo)
  - as pills coloridas dos ingredientes
- Manter o layout zig-zag (imagem alternando esquerda/direita) e a estética editorial atual.

## Arquivos afetados

- `src/assets/zionfit-cliente-mariana.png` (sobrescrever)
- `src/assets/zionfit-cliente-patricia.png` (sobrescrever)
- `src/assets/zionfit-cliente-gabriela.png` (sobrescrever)
- `src/components/zionfit/BenefitsSection.tsx` (editar: header + remover texto/pills)

Nenhuma outra seção é tocada.