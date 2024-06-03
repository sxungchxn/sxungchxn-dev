import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import withPlaiceholder from '@plaiceholder/next'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sxungchxn/dev-ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
}

export default withPlaiceholder(withVanillaExtract(nextConfig))
