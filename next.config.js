/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ دمج إعدادات الصور هنا
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
        unoptimized: true 
  },

  // ✅ دمج إعدادات Webpack هنا
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig
