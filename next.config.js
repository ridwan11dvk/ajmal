/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.hokben.co.id', 'hokben-images.s3.ap-southeast-3.amazonaws.com']
  },
}

module.exports = nextConfig
