import { Flex } from '@sxungchxn/dev-ui'
import { fetchArticlePageContent } from '@/api/fetcher'
import { ArticleContentRenderer } from '@/components/article-content-renderer/article-content-renderer'
import type { Metadata } from 'next'

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

const ABOUT_PAGE_ID = '257d916b-d24f-477e-8c2c-8c9f06423982'

export default async function About() {
  const { parent } = await fetchArticlePageContent(ABOUT_PAGE_ID)

  return (
    <Flex width="100%" minHeight="800px" alignItems="center" direction="column">
      <Flex maxWidth="980px" marginBottom="64px">
        <ArticleContentRenderer content={parent as string} withMarginTop={false} />
      </Flex>
      {/*<InProgress width={200} height={200} />*/}
      {/*<Text variant="title1">아직 완성되지 못했어요.</Text>*/}
      {/*<BackNavigateButton />*/}
    </Flex>
  )
}
