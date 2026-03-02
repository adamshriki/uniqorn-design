import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/uniqorn-design",
  images: { unoptimized: true },
};

export default nextConfig;
