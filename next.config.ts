import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brandscast.com',
      },
    ],
  },
  async redirects() {
    return [
      // Industries pages that moved under /industries/
      {
        source: '/tech-companies',
        destination: '/industries/tech-companies/',
        permanent: true,
      },
      {
        source: '/tech-companies/',
        destination: '/industries/tech-companies/',
        permanent: true,
      },
      {
        source: '/agencies',
        destination: '/industries/agencies/',
        permanent: true,
      },
      {
        source: '/agencies/',
        destination: '/industries/agencies/',
        permanent: true,
      },
      {
        source: '/education-and-universities',
        destination: '/industries/education-and-universities/',
        permanent: true,
      },
      // Resources pages that moved under /resources/
      {
        source: '/how-to-launch-a-private-podcast',
        destination: '/resources/how-to-launch-a-private-podcast/',
        permanent: true,
      },
      {
        source: '/how-to-launch-a-private-podcast/',
        destination: '/resources/how-to-launch-a-private-podcast/',
        permanent: true,
      },
      {
        source: '/async-communication-guide',
        destination: '/resources/async-communication-guide/',
        permanent: true,
      },
      // Cookies page moved to legal
      {
        source: '/cookies',
        destination: '/legal/',
        permanent: true,
      },
      // Blog and old WordPress URLs redirect to home
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/month',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
