/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // experimental: {
  //   webpackBuildWorker: true,
  // },
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'www.google.com' },
      { hostname: 'cdn-images-1.medium.com' },
    ],
  },
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.lottie$/,
  //     type: 'asset/resource',
  //   })

  //   return config
  // },
}

module.exports = nextConfig
