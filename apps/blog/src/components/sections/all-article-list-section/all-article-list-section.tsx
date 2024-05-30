import { Flex, Text } from '@sxungchxn/dev-ui'
import * as styles from './all-article-list-section.css'
import { ArticleFilterTagList } from '@/components/sections/all-article-list-section/article-filter-tag-list/article-filter-tag-list'

export const AllArticleListSection = () => {
  return (
    <Flex as="section" direction="column" width="100%" className={styles.section}>
      <Text as="h2" variant="display4" marginBottom="32px">
        모든 게시글
      </Text>
      <ArticleFilterTagList />
    </Flex>
  )
}
