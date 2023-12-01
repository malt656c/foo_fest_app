/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },
      { 
        protocol:"https",
        hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
