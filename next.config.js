/**
 * @type {import('next/dist/next-server/server/config-shared').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts'],
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

module.exports = nextConfig;
