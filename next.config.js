/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tranquil-groovy-fossa.glitch.me",
      },
      { 
        protocol:"https",
        hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
