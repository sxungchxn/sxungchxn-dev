import { fetchAllArticleList, fetchArticlePageHeaderData } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'
import { ArticleDetailHeaderSection } from '@/app/blog/[pageId]/components/article-detail-header-section/article-detail-header-section'
import { ArticleDetailContentSection } from '@/app/blog/[pageId]/components/article-detail-content-section/article-detail-content-section'
import { ArticleDetailFooterSection } from '@/app/blog/[pageId]/components/article-detail-footer-section/article-detail-footer-section'
import { ArticleCommentSection } from '@/app/blog/[pageId]/components/article-comment-section/article-comment-section'
import type { Metadata } from 'next'

type ArticleDetailPageProps = { params: { pageId: string } }

export async function generateStaticParams() {
  const articleList = await fetchAllArticleList()

  return articleList.map(({ pageId }) => ({
    pageId,
  }))
}

export async function generateMetadata({
  params: { pageId },
}: ArticleDetailPageProps): Promise<Metadata> {
  const {
    title: articleTitle,
    description,
    thumbnailUrl,
  } = await fetchArticlePageHeaderData(pageId)

  const title = `${articleTitle} | sxungchxn.dev blog`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [thumbnailUrl],
    },
    verification: {
      google: 'LuFkph6en1gnzQDkrEzZRK_3H8WNfgaLXJQGQ7M1A_Q',
    },
  }
}

export default function ArticleDetailPage({ params: { pageId } }: ArticleDetailPageProps) {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1200px" marginX="auto">
      <ArticleDetailHeaderSection pageId={pageId} />
      <ArticleDetailContentSection pageId={pageId} />
      <ArticleDetailFooterSection pageId={pageId} />
      <ArticleCommentSection />
    </Box>
  )
}
