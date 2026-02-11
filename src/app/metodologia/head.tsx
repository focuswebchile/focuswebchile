const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Focus Web",
      url: "https://focusweb.cl",
      description:
        "Consultora especializada en auditoría y optimización web con foco en impacto real de negocio.",
      sameAs: [],
    },
    {
      "@type": "WebPage",
      "@id": "https://focusweb.cl/metodologia",
      url: "https://focusweb.cl/metodologia",
      name: "Diagnóstico inicial web",
      description:
        "Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://focusweb.cl",
      },
      about: {
        "@type": "Thing",
        name: "Audit Studio",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://focusweb.cl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Metodología",
          item: "https://focusweb.cl/metodologia",
        },
      ],
    },
  ],
}

export default function Head() {
  return (
    <>
      <title>Diagnóstico inicial web | Focus Web</title>
      <meta
        name="description"
        content="Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero."
      />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Focus Web" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:title" content="Diagnóstico inicial web | Focus Web" />
      <meta
        property="og:description"
        content="Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero."
      />
      <meta property="og:url" content="https://focusweb.cl/metodologia" />
      <meta property="og:image" content="https://focusweb.cl/open-graph-metodologia.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Diagnóstico inicial web de Focus Web con enfoque en impacto real"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Diagnóstico inicial web | Focus Web" />
      <meta
        name="twitter:description"
        content="Conoce cómo funciona nuestro diagnóstico inicial web: revisión clara para detectar qué está frenando tu sitio y qué conviene priorizar primero."
      />
      <meta name="twitter:image" content="https://focusweb.cl/open-graph-metodologia.webp" />
      <meta
        name="twitter:image:alt"
        content="Diagnóstico inicial web de Focus Web con enfoque en impacto real"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
