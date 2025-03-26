/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: [
    "@radix-ui/react-dialog",
    "@radix-ui/react-accordion",
    "@radix-ui/react-toast",
  ],
};

module.exports = nextConfig;
