// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// //   reactCompiler: true,
// // };

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. THE PRODUCTION FIX (Allow 10MB Uploads)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // 2. THE ASSET PIPELINE
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      // You likely need this for your Supabase posters too, if not already there:
      {
        protocol: "https",
        hostname: "thmmztqjrhuzvuoyknae.supabase.co", // Replace with YOUR actual Supabase project URL
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com", // <--- ADD THIS (The Safety Net)
      },
      {
        protocol: "https",
        hostname: "drive.google.com", // <--- ADD THIS (For Sanity-hosted images)
      }
    ],
  },
};

export default nextConfig;