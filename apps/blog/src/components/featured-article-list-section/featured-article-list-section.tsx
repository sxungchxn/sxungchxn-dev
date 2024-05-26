import { fetchFeaturedArticleList } from '@/api/fetcher'
import { FeaturedArticleListView } from '@/components/featured-article-list-section/featured-article-list-view'
import { Flex, Text } from '@sxungchxn/dev-ui'
import * as styles from './featured-article-list-section.css'

export const FeaturedArticleListSection = () => {
  return (
    <Flex as="section" width="100%" direction="column" className={styles.section}>
      <Text as="h1" variant="display3" color="textPrimary" marginBottom="48px">
        주요 게시글
      </Text>
      <FeaturedArticleListContent />
    </Flex>
  )
}

const FeaturedArticleListContent = async () => {
  const featuredArticleList = await fetchFeaturedArticleList()

  return <FeaturedArticleListView featuredArticleList={featuredArticleList} />
}
