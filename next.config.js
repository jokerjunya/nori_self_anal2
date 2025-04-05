/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  // Netlify用に静的エクスポートを有効化
  output: 'export',
  // 画像最適化を無効化（静的エクスポート用）
  images: {
    unoptimized: true,
  },
  // ビルド時にトレイリングスラッシュを削除
  trailingSlash: false,
}

module.exports = nextConfig 