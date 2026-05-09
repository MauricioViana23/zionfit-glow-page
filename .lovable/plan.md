Remover a seção "Linha do Tempo" (ResultsTimeline) da página inicial.

## Mudanças
- `src/routes/index.tsx`: remover o import de `ResultsTimeline` e a tag `<ResultsTimeline />`.
- `src/components/zionfit/ResultsTimeline.tsx`: deletar o arquivo (não é usado em outro lugar).