const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: Boolean(process.env.NEXT_BUNDLE_ANALYZE_ENABLED),
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.js', 'api.ts'],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
