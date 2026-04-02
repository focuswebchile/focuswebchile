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
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
