/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  // Limit worker concurrency to avoid Windows sandbox mkdir file-locking collisions
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dmplaylogin5.com',
          },
        ],
        destination: 'https://dmplaylogin5.com/:path*',
        permanent: true, // 301 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
