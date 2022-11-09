/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'http://www.cdn.nextdocker.com:8077' : '',
}

module.exports = nextConfig
