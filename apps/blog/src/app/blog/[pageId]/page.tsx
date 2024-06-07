import { fetchAllArticleList, fetchArticlePageHeaderData } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'
import { ArticleDetailHeaderSection } from '@/app/blog/[pageId]/components/article-detail-header-section/article-detail-header-section'

export async function generateStaticParams() {
  const articleList = await fetchAllArticleList()

  return articleList.map(({ pageId }) => ({
    pageId,
  }))
}

export default async function ArticleDetailPage({
  params: { pageId },
}: {
  params: { pageId: string }
}) {
  const articleDetailHeaderData = await fetchArticlePageHeaderData(pageId)

  return (
    <Box maxWidth="980px" width="100%" minHeight="1200px" marginX="auto">
      <ArticleDetailHeaderSection articleDetailHeaderData={articleDetailHeaderData} />
    </Box>
  )
}
