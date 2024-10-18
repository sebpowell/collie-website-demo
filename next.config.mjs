import "./src/env.mjs";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    minimumCacheTTL: 300,
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ctfassets.net",
      },
    ],
  },

  async headers() {
    return [
      {
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, immutable",
          },
        ],
        source:
          "/:path(.+\\.(?:ico|png|svg|jpg|jpeg|avif|gif|webp|json|js|css|ttf|ttc|otf|woff|woff2)$)",
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {});
