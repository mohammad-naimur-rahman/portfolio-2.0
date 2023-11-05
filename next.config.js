/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'www.google.com' },
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: 'asset/resource',
    })

    return config
  },
}

module.exports = nextConfig
