/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude scripts directory from TypeScript checking during build
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

export default nextConfig;