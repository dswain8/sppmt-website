import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/programs", destination: "/activities", permanent: true },
      { source: "/healthcare", destination: "/activities/healthcare", permanent: true },
      { source: "/education", destination: "/activities/education", permanent: true },
      { source: "/agriculture", destination: "/activities/livelihood", permanent: true },
      { source: "/employment", destination: "/activities/livelihood", permanent: true },
      { source: "/civic-sense", destination: "/activities/cleanliness", permanent: true },
      { source: "/infrastructure", destination: "/activities", permanent: true },
      { source: "/community", destination: "/activities/cleanliness", permanent: true },
      { source: "/activities/environment", destination: "/activities/cleanliness", permanent: true },
      { source: "/activities/community", destination: "/activities/cleanliness", permanent: true },
      { source: "/activities/education-kit-distribution", destination: "/activities/education", permanent: true },
      { source: "/join", destination: "/contact#volunteer", permanent: true },
      { source: "/volunteer", destination: "/contact#volunteer", permanent: true },
      { source: "/scholarship", destination: "/activities/education", permanent: false },
      { source: "/donate/receipt-guide", destination: "/donate", permanent: true },
    ];
  },
};

export default nextConfig;
