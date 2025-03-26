/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: [
    "@radix-ui",
    "swiper"
],
};

module.exports = nextConfig;
