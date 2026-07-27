import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async rewrites() {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "https://cms-mukund.vercel.app";
    return [
      {
        source: "/api/enquiries/:path*",
        destination: `${cmsUrl}/api/enquiries/:path*`,
      },
    ];
  },
};

export default nextConfig;

