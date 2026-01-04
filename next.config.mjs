/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // If deploying to username.github.io (root domain), remove these two lines
  // If deploying to username.github.io/repo-name, uncomment and set to '/repo-name'
  basePath: '/eszter-with-sz-portfolio',
  assetPrefix: '/eszter-with-sz-portfolio',
}

export default nextConfig
