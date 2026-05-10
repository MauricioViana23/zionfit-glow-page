import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZionFit — Shot Matinal Diário | Menos inchaço, mais energia" },
      { name: "description", content: "Acorde sem inchaço e com energia limpa em 30 segundos por dia. Shot matinal sabor Pink Lemonade com ingredientes naturais. Por VIVA SKIN NUTRITION." },
      { name: "author", content: "VIVA SKIN NUTRITION" },
      { property: "og:title", content: "ZionFit — Shot Matinal Diário | Menos inchaço, mais energia" },
      { property: "og:description", content: "Acorde sem inchaço e com energia limpa em 30 segundos por dia. Shot matinal sabor Pink Lemonade com ingredientes naturais. Por VIVA SKIN NUTRITION." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZionFit — Shot Matinal Diário | Menos inchaço, mais energia" },
      { name: "twitter:description", content: "Acorde sem inchaço e com energia limpa em 30 segundos por dia. Shot matinal sabor Pink Lemonade com ingredientes naturais. Por VIVA SKIN NUTRITION." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/08462072-7154-4ea3-80da-94f59c827a75/id-preview-acbdf434--030de652-5cbe-4299-8305-5683f8c4fb12.lovable.app-1778372438116.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/08462072-7154-4ea3-80da-94f59c827a75/id-preview-acbdf434--030de652-5cbe-4299-8305-5683f8c4fb12.lovable.app-1778372438116.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
