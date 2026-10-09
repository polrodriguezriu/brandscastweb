# Brandscast web — instruccions compartides

Aquest fitxer és la font d'instruccions per a qualsevol agent o model que treballi
en aquest repositori. Si el checkout forma part del workspace Brandscast, llegeix
també `../../AGENTS.md` per al context de producte, copy i release. Les
instruccions del workspace tenen prioritat si una dada d'aquí queda desfasada.

## Producte i copy

- Brandscast és una eina de comunicació interna basada en àudio privat; el
  podcast és un dels formats, no la categoria del producte.
- Presenta sempre les dues vies de creació: pujar una gravació pròpia o generar
  àudio des de text amb IA opcional.
- L'àudio complementa email, chat i reunions. No afirmis que l'email intern no
  es llegeix ni facis servir xifres sense font per sostenir aquesta idea.
- No anunciïs importació RSS ni Spotify com a app compatible amb feeds privats.
- Growth i Pro són autoservei; Enterprise pot tenir contacte comercial.

## Treball al repositori

- Fes cada feature o fix en un worktree separat creat des d'`origin/main`
  actualitzat. No editis el checkout principal de `main`.
- Comprova format, build i els checks pertinents abans de publicar.
- La web es desplega amb la integració Git de Vercel després del merge a `main`.
  Verifica el preview, els checks i el deploy de producció; no saltis checks
  fallits amb un deploy manual.
- Tria eines i habilitats segons la tasca i l'entorn disponible. Cap pas depèn
  d'una ordre de xat, d'un plugin o d'un model concret.
