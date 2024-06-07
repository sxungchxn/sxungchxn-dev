import { fetchAllArticleList, fetchPageMetaData } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'

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
  const articlePageHeaderData = await fetchPageMetaData(pageId)
  // console.log(articlePageHeaderData)
  return <Box minHeight="1200px">{pageId}</Box>
}
