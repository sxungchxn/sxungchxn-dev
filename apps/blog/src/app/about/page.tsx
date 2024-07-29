import { Flex } from '@sxungchxn/dev-ui'
import { fetchArticlePageContent } from '@/api/fetcher'
import { ArticleContentRenderer } from '@/components/article-content-renderer/article-content-renderer'

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
