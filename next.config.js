/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: "/brno.python.pizza",
};
module.exports = nextConfig;
