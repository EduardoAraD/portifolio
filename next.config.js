/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains:['github.com'],
  },
}

module.exports = nextConfig
