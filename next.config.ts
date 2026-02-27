import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output bundles only what's needed to run the server.
  // This is used by the Dockerfile to create a minimal production image.
  output: "standalone",
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compress responses
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Power efficient defaults
  poweredByHeader: false,
  
  // Strict mode for better SEO and performance
  reactStrictMode: true,
  
  // Optimize for production
  swcMinify: true,
};

export default nextConfig;
