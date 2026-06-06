## Objetivo
Atualizar a experiência mobile-first da landing page em dois pontos:
1. trocar apenas as fotos da seção premium de benefícios logo abaixo da hero;
2. reconstruir a seção “Como tomar” em um bloco editorial premium, usando a nova estrutura e as imagens anexas.

## O que vou implementar

### 1) Seção premium de benefícios
- Manter a seção atual `PremiumBenefitsSection` e sua estrutura premium.
- Substituir as 3 imagens pela ordem que você definiu para as mulheres:
  1. academia com shaker
  2. praia
  3. selfie com o pote
- Preservar textos, hierarchy e animação da seção, mudando apenas os visuais necessários para encaixar as novas fotos com acabamento premium.

### 2) Seção “Como tomar”
- Refazer a seção atual para seguir o layout editorial que você descreveu:
  - fundo transparente;
  - muito respiro;
  - container centralizado;
  - 3 cards empilhados no mobile;
  - grid de 3 colunas no desktop;
  - header com eyebrow, título grande e subtítulo com destaque em “30 segundos.”
- Cada card terá:
  - imagem no topo em 4:3;
  - badge circular rosa com número;
  - título centralizado;
  - descrição centralizada;
  - sombra suave e hover só no desktop.
- Usar as imagens anexas na ordem confirmada:
  1. copo com água / pó sendo colocado;
  2. mexendo com colher dourada;
  3. copo rosa pronto.
- Remover da seção tudo que foge do editorial pedido:
  - botão CTA;
  - visual de manual/suplemento;
  - qualquer elemento extra que hoje deixe a seção mais “template”.

## Resultado esperado
- A seção de benefícios premium fica mais aspiracional e alinhada ao novo ensaio fotográfico.
- A seção “Como tomar” passa a parecer um ritual de bem-estar de marca DTC premium, e não um bloco funcional genérico.
- A experiência continua forte no iPhone e elegante no desktop.

## Detalhes técnicos
- Vou atualizar `src/components/zionfit/PremiumBenefitsSection.tsx` para trocar as imagens da seção premium.
- Vou refatorar `src/components/zionfit/HowToUse.tsx` para a nova estrutura editorial.
- As imagens anexas serão integradas como assets do projeto para uso estável no app.
- Não vou alterar a outra seção de benefícios mais abaixo, conforme sua instrução.
- Não vou mexer na ordem geral da página além dessas duas áreas.