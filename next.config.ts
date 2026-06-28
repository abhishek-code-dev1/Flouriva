import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
