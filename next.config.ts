import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
