/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // エラーを無視してビルド
  },
  eslint: {
    ignoreDuringBuilds: true, // エラーを無視してビルド
  },
}
module.exports = nextConfig
