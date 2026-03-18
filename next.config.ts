import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brandscast.com',
      },
    ],
  },
};

export default nextConfig;
