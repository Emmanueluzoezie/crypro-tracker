/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // webpack: (config) => {
  //   config.experiments = { topLevelAwait: true };
  //   return config;
  // },
  webpack5: true,
  images: {
    domains: ['assets.coingecko.com'],
  },
};
