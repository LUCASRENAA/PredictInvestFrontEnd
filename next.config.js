/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config) => {
      // Enable polling based on env variable being set
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      }
      return config
    },
  }
