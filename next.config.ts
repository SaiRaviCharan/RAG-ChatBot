import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Move serverComponentsExternalPackages to the correct location
  serverExternalPackages: ['pdf-parse'],
  
  // Use the new turbopack configuration
  turbopack: {
    resolveAlias: {
      // Optimize imports to reduce bundle size
      'react-dom/server': 'react-dom/server.browser'
    }
  },
  
  experimental: {
    // Server actions configuration moved to experimental for Next.js 15
    serverActions: {
      bodySizeLimit: '10mb' // Increase limit for PDF uploads
    },
    // Enable optimized loading
    optimizeCss: true,
    // Enable turbo mode for faster builds
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    }
  },
  
  // Optimize webpack for better performance
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    // Enable tree shaking
    config.optimization.usedExports = true;
    // Enable compression
    config.optimization.minimize = true;
    return config;
  },
  
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    remotePatterns: [],
    unoptimized: false,
    formats: ['image/webp', 'image/avif']
  },
  
  // Enable static optimization
  trailingSlash: false,
  
  // Enable gzip compression
  poweredByHeader: false,
  
  // Optimize page loading
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  }
}

export default nextConfig
