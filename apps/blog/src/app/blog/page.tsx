import { Box } from '@sxungchxn/dev-ui'
import type { Metadata } from 'next'
import { FeaturedArticleListSection } from '@/app/blog/components'
import { AllArticleListSection } from '@/app/blog/components'

export const metadata: Metadata = {
  title: 'sxungchxn.dev blog',
  description: '임팩트 있는 프론트엔드 개발 경험을 공유하고자 합니다.',
  creator: 'sxungchxn',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: `sxungchxn.dev blog`,
    description: '임팩트 있는 프론트엔드 개발 경험을 공유하고자 합니다.',
    url: 'https://sxungchxn.dev/blog',
    siteName: 'sxungchxn.dev',
    images: [
      {
        url: 'https://res.cloudinary.com/dbgkriwoo/image/upload/v1720351804/open-graph_nrufgl.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    google: 'LuFkph6en1gnzQDkrEzZRK_3H8WNfgaLXJQGQ7M1A_Q',
  },
}

export default function Blog() {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1600px" marginX="auto">
      <FeaturedArticleListSection />
      <AllArticleListSection />
    </Box>
  )
}
