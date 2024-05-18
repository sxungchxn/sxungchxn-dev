import '@sxungchxn/dev-ui/styles'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box, ThemeProvider } from '@sxungchxn/dev-ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sxungchxn',
  description: 'dev blog built by sxungchxn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Box as="body" backgroundColor="primary" height="100vh">
        <ThemeProvider>{children}</ThemeProvider>
      </Box>
    </html>
  )
}
