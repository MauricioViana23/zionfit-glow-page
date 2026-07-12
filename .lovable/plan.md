## Objetivo
Atualizar a seção "Links Úteis" no rodapé para exibir apenas links externos relevantes, com os textos e URLs corretos.

## Alteração
**Arquivo:** `src/components/zionfit/Footer.tsx`

- Substituir o array `LINKS` por um array de objetos com `label` e `href`.
- Manter apenas:
  - **Política de Privacidade** → `https://www.zionfit.com.br/politica-de-privacidade`
  - **Sobre Nós** → `https://www.zionfit.com.br/sobre-nos`
- Remover: Atendimento, Rastreamento, Meus Pedidos, Termos de Uso, Quem Somos, Trabalhe Conosco.
- Atualizar o mapeamento no JSX para usar `href={l.href}` em vez de `#`.

## Escopo
Apenas o componente `Footer.tsx`. Nenhuma outra seção ou lógica será alterada.