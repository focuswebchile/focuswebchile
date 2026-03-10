# SEO Redirect Policy

## Objetivo

Documentar la politica de redirects permanentes del proyecto `focusweb.cl` para mantener un criterio tecnico claro en futuros cambios SEO y de infraestructura.

## Estado actual del proyecto

El proyecto usa dos mecanismos de redireccion permanente:

1. `next.config.ts`
2. `middleware.ts`

Ambos se mantienen activos y cumplen funciones distintas.

## 1. Redirects definidos en `next.config.ts`

Los redirects configurados con `permanent: true` en Next.js responden con:

- `308 Permanent Redirect`

En este proyecto se usan para casos como:

- normalizacion de trailing slash
- redireccion de host `www.focusweb.cl` hacia `https://focusweb.cl`

Esto corresponde al comportamiento normal de Next.js y no se considera un error.

## 2. Redirects definidos en `middleware.ts`

Los redirects implementados manualmente con:

```ts
NextResponse.redirect(url, 301)
```

responden con:

- `301 Moved Permanently`

En este proyecto se usan para redirects legacy puntuales, por ejemplo articulos antiguos movidos a nuevas rutas dentro de `/blog`.

## Politica del proyecto

La decision tecnica del proyecto es:

- mantener el comportamiento actual
- aceptar el uso mixto de `301` y `308`
- no refactorizar redirects existentes solo para unificar status code

## Justificacion tecnica

La justificacion es la siguiente:

- Next.js usa `308` como redirect permanente por diseño cuando se trabaja con `permanent: true`
- los redirects legacy personalizados requieren control explicito y hoy usan `301`
- ambos codigos indican movimiento permanente
- no existe impacto SEO negativo por mantener ambos en este proyecto

## Criterio SEO

Para SEO, el proyecto considera equivalentes en la practica:

- `301 Moved Permanently`
- `308 Permanent Redirect`

Google interpreta ambos como señales de redireccion permanente y puede transferir señales de indexacion y ranking en ambos casos.

Referencia:

- Google Search Central: `301 redirects`
  - https://developers.google.com/search/docs/crawling-indexing/301-redirects

## Regla operativa para futuros desarrollos

Usar esta regla:

- si el redirect se define en `next.config.ts`, aceptar `308`
- si el redirect se implementa manualmente en `middleware.ts`, se puede usar `301` cuando se requiera control explicito

No abrir tickets solo para reemplazar `308` por `301` o viceversa si:

- el destino final es correcto
- el redirect es permanente
- no hay cadenas innecesarias
- no hay loops

## Qué no se debe hacer sin necesidad real

- no cambiar `next.config.ts` solo para forzar `301`
- no migrar redirects legacy de `middleware.ts` solo para igualar `308`
- no tratar la mezcla `301` + `308` como incidencia SEO por si sola

## Qué sí debe seguir auditandose

- que no existan redirect chains evitables
- que no existan loops
- que los enlaces internos apunten a URLs finales y no a URLs que redirigen
- que sitemap y canonicals usen siempre la version final de las URLs

## Archivos relacionados

- [next.config.ts](/Users/felipeibar/Desktop/FocusWeb/focusweb-chile/next.config.ts)
- [middleware.ts](/Users/felipeibar/Desktop/FocusWeb/focusweb-chile/middleware.ts)
