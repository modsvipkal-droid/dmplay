/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  // Limit worker concurrency to avoid Windows sandbox mkdir file-locking collisions
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
