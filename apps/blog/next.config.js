import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sxungchxn/dev-ui'],
}

export default withVanillaExtract(nextConfig)
