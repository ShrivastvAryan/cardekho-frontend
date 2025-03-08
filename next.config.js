/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn4.singleinterface.com',
        },
        {
          protocol:'https',
          hostname:'images.moneycontrol.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  