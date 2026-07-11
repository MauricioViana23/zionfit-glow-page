## Objetivo
Transformar a galeria de miniaturas do hero (atualmente 6 thumbs em grade 3×2) em **uma única linha horizontal** com scroll lateral tipo carrossel.

## Alteração

**Arquivo:** `src/components/zionfit/HeroSection.tsx`

No bloco da galeria (o `<div className="grid grid-cols-3 gap-2">` que renderiza os thumbs):

- Trocar `grid grid-cols-3` por um container flex com scroll horizontal:
  - `flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4`
  - `-mx-4 px-4` faz o carrossel sangrar até as bordas da tela no mobile (padrão de app), mantendo o padding interno.
- Cada `<button>` thumb:
  - remover `aspect-square` que depende do grid e adicionar largura fixa: `w-20 h-20 shrink-0 snap-start` (mobile). No desktop pode subir para `sm:w-24 sm:h-24`.
- O usuário arrasta/desliza para o lado para ver os 6 thumbs: Produto, Acorde leve, Voltei a me sentir leve, 7 ingredientes, Apenas o essencial, Seu ritual diário.

## Escopo
Apenas o layout da faixa de thumbs do hero. Nenhuma outra seção, nenhum novo componente, nenhuma lógica de estado nova (o `activeImage` continua controlando qual imagem grande aparece acima quando o thumb é clicado).
