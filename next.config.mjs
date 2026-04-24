/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pillaar-landing-v2.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pillaar-landing-v2.html',
      },
    ];
  },
};
export default nextConfig;
