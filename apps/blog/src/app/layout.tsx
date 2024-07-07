import '@sxungchxn/dev-ui/styles'
import '@/styles/global.css'
import type { CSSProperties, ReactNode } from 'react'
import { Kalam } from 'next/font/google'
import { Box, vars } from '@sxungchxn/dev-ui'
import { Providers } from '@/providers'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { CommonLayout } from '@/components/common-layout/common-layout'
import { Analytics } from '@vercel/analytics/react'

const kalam = Kalam({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  variable: '--fonts-secondary',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  /**
   * https://github.com/vanilla-extract-css/vanilla-extract/discussions/1019
   * override sxungchxn/dev-ui vars' fontfamily with next/font
   * serialization is necessary for preventing server component warning.
   */
  const inlinedKalamFontFamily = JSON.parse(
    JSON.stringify(
      assignInlineVars({
        [vars.fonts.secondary]: kalam.style.fontFamily,
      }),
    ),
  ) as CSSProperties

  return (
    <html lang="ko-KR" suppressHydrationWarning>
      <Box as="body" backgroundColor="primary" style={inlinedKalamFontFamily}>
        <Providers>
          <CommonLayout>{children}</CommonLayout>
          <Analytics />
        </Providers>
      </Box>
    </html>
  )
}
