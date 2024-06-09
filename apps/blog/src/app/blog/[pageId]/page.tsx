import { fetchAllArticleList } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'
import { ArticleDetailHeaderSection } from '@/app/blog/[pageId]/components/article-detail-header-section/article-detail-header-section'
import { ArticleDetailContentSection } from '@/app/blog/[pageId]/components/article-detail-content-section/article-detail-content-section'
import { ArticleDetailFooterSection } from '@/app/blog/[pageId]/components/article-detail-footer-section/article-detail-footer-section'

export const revalidate = 3000

export async function generateStaticParams() {
  const articleList = await fetchAllArticleList()

  return articleList.map(({ pageId }) => ({
    pageId,
  }))
}

export default function ArticleDetailPage({ params: { pageId } }: { params: { pageId: string } }) {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1200px" marginX="auto">
      <ArticleDetailHeaderSection pageId={pageId} />
      <ArticleDetailContentSection pageId={pageId} />
      <ArticleDetailFooterSection pageId={pageId} />
    </Box>
  )
}
