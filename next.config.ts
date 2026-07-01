import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/precios",
        destination: "/servicios/desarrollo-web",
        permanent: true,
      },
      {
        source: "/precios/",
        destination: "/servicios/desarrollo-web",
        permanent: true,
      },
      {
        source: "/contacto/",
        destination: "/contacto",
        permanent: true,
      },
      {
        source: "/faq/",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.focusweb.cl" }],
        destination: "https://focusweb.cl/:path*",
        permanent: true,
      },
      // Subfase 1B: consolidar las tres páginas duplicadas en la nueva URL canónica
      {
        source: "/blog/crear-pagina-web-desde-cero",
        destination: "/crear-pagina-web-chile",
        permanent: true,
      },
      {
        source: "/blog/como-crear-una-pagina-web-en-chile",
        destination: "/crear-pagina-web-chile",
        permanent: true,
      },
      {
        source: "/crear-pagina-web-desde-cero",
        destination: "/crear-pagina-web-chile",
        permanent: true,
      },
      {
        source: "/5-pasos-antes-de-lanzar-un-sitio-web",
        destination: "/blog/5-pasos-antes-de-lanzar-un-sitio-web",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
