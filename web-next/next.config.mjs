/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // use swc instead of terser for minification
  swcMinify: true,
  // We handle eslint ourselves, thank you very much
  eslint: {
    ignoreDuringBuilds: true,
  },

  publicRuntimeConfig: {
    SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  },
};

export default nextConfig;
