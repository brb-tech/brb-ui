/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@brb-ui/core",
    "@brb-ui/system",
    "@brb-ui/button",
    "@brb-ui/icon",
    "@brb-ui/icons",
    "@brb-ui/hooks",
    "@brb-ui/animations",
    "@brb-ui/transition",
    "@brb-ui/utils"
  ],
  compiler: {
    emotion: true
  }
};

module.exports = nextConfig;
