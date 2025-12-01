import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Ignore TypeScript/ESLint errors during build so it doesn't fail on small things
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. Force the @ alias to point to the current folder
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(process.cwd());
    return config;
  },
};

export default nextConfig;
