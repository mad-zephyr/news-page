/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    deviceSizes: [375, 750, 1200],
  },
  images: {
    imageSizes: [100, 300, 343, 730],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
