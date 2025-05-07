/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn4.singleinterface.com',
        }
      ],
    },
  };
  
  module.exports = nextConfig;
  