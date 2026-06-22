import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brandscast.com",
      },
    ],
  },
  async redirects() {
    return [
      // Audiocourses renamed to Tracks
      {
        source: "/audiocourses",
        destination: "/tracks/",
        permanent: true,
      },
      {
        source: "/audiocourses/",
        destination: "/tracks/",
        permanent: true,
      },
      // Industries pages that moved under /industries/
      {
        source: "/tech-companies",
        destination: "/industries/tech-companies/",
        permanent: true,
      },
      {
        source: "/tech-companies/",
        destination: "/industries/tech-companies/",
        permanent: true,
      },
      {
        source: "/agencies",
        destination: "/industries/agencies/",
        permanent: true,
      },
      {
        source: "/agencies/",
        destination: "/industries/agencies/",
        permanent: true,
      },
      {
        source: "/education-and-universities",
        destination: "/industries/education-and-universities/",
        permanent: true,
      },
      // Resources pages that moved under /resources/
      {
        source: "/how-to-launch-a-private-podcast",
        destination: "/resources/how-to-launch-a-private-podcast/",
        permanent: true,
      },
      {
        source: "/how-to-launch-a-private-podcast/",
        destination: "/resources/how-to-launch-a-private-podcast/",
        permanent: true,
      },
      {
        source: "/async-communication-guide",
        destination: "/resources/async-communication-guide/",
        permanent: true,
      },
      // Consolidated /for-* landings (cannibalising "private podcast for X")
      // → 301 to the closest page that already ranks, to free crawl budget
      ...[
        ["/for-distributed-teams", "/podcasting-for-remote-teams/"],
        ["/for-field-workers", "/podcasting-for-remote-teams/"],
        ["/for-internal-comms", "/internal-communication/"],
        ["/for-hr-teams", "/employee-onboarding/"],
        ["/for-people-and-culture", "/company-culture/"],
      ].flatMap(([from, to]) => [
        { source: from, destination: to, permanent: true },
        { source: `${from}/`, destination: to, permanent: true },
      ]),
      // Cookies page moved to legal
      {
        source: "/cookies",
        destination: "/legal/",
        permanent: true,
      },
      // Blog and old WordPress URLs — permanent 301 to home (tells Google they're gone)
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/month",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
