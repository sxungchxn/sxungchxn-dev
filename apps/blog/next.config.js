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
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  redirects: () => {
    return [{ source: '/', destination: '/blog', permanent: true }]
  },
}

export default withPlaiceholder(withVanillaExtract(nextConfig))
