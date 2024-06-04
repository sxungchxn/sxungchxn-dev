import { fetchAllArticleList } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'

export async function generateStaticParams() {
  const articleList = await fetchAllArticleList()

  return articleList.map(({ pageId }) => ({
    pageId,
  }))
}

export default function ArticleDetailPage({ params: { pageId } }: { params: { pageId: string } }) {
  return <Box height="1200px">{pageId}</Box>
}
