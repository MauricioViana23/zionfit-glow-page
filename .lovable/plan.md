# Camada de rastreamento portátil (Pixel + Analytics)

## Situação atual (verificada)

Não existe nenhum pixel ou script de analytics neste projeto. Busca em `src/`, `public/`, `vite.config.ts` e `wrangler.jsonc` não encontrou `fbq`, `gtag`, `dataLayer`, GTM, TikTok, Clarity nem tag de verificação de domínio. O `__root.tsx` carrega apenas meta tags de SEO/OG e o Google Fonts.

Portanto não há ID de pixel existente para extrair. O plano abaixo cria essa camada do zero, num único arquivo isolado, para que você possa copiar e colar em qualquer outro projeto.

## O que será construído

### 1. Arquivo único de configuração e rastreamento

`src/lib/tracking.ts` — todo o código de rastreamento em um só lugar, sem dependência de nada específico desta landing. É esse arquivo que você copia para o outro projeto.

Contém no topo um bloco de IDs, deixado vazio até você preencher:

```ts
export const TRACKING = {
  metaPixelId: "",   // ex: "1234567890123"
  ga4Id: "",         // ex: "G-XXXXXXXXXX"
  gtmId: "",         // ex: "GTM-XXXXXXX"
  tiktokPixelId: "", // ex: "CXXXXXXXXXXXXXXXX"
};
```

Cada plataforma só é carregada se o ID correspondente estiver preenchido — com os campos vazios nada é injetado e a página continua igual.

### 2. Funções de evento neutras

Uma API única que dispara para todas as plataformas ativas ao mesmo tempo:

- `trackPageView()`
- `trackViewContent(bundle)`
- `trackSelectBundle(bundle)` — quando a pessoa troca 1/2/3 potes
- `trackInitiateCheckout(bundle)` — clique em "QUERO MEU ZIONFIT" e na sticky bar, com valor, moeda BRL e nome do produto

Assim, no outro projeto você só troca os IDs e chama as mesmas funções.

### 3. Ligação com a página atual

- Inicialização do rastreamento no `__root.tsx` (client-side, após hidratação).
- `trackInitiateCheckout` nos CTAs de checkout do `HeroSection.tsx`, `StickyBar.tsx` e `FinalCTA.tsx`, enviando o bundle e o preço selecionados.
- `trackSelectBundle` na troca de bundle.

### 4. Guia de importação

`docs/TRACKING.md` — instruções curtas: copiar `src/lib/tracking.ts`, preencher os IDs, chamar `initTracking()` na raiz e os eventos nos botões.

## Detalhes técnicos

- Scripts injetados dinamicamente no `document.head` no browser, com guarda contra dupla inicialização (importante em SPA com hidratação SSR).
- Nada roda em SSR/prerender — tudo protegido por `typeof window !== "undefined"` dentro de `useEffect`.
- IDs de pixel são públicos por natureza, então ficam no código, não em secrets.
- Sem alteração de layout, textos, imagens ou preços.

## Pendência

Os IDs (Meta Pixel, GA4, GTM, TikTok) ficam vazios até você me passar. A estrutura funciona e é portátil desde já; basta preencher.

## Arquivos

- `src/lib/tracking.ts` (novo)
- `docs/TRACKING.md` (novo)
- `src/routes/__root.tsx` (init)
- `src/components/zionfit/HeroSection.tsx`, `StickyBar.tsx`, `FinalCTA.tsx` (eventos nos CTAs)
