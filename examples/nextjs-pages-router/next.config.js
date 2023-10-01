/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true
  },
  compiler: {
    emotion: true
  }
};

module.exports = nextConfig;
