/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'daklj4c4w9af1.cloudfront.net',
      port: '',
      pathname: '/**'
    }]
  },
};

export default nextConfig;
