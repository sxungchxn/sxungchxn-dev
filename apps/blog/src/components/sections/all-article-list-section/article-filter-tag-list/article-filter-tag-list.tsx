// RSC
import { fetchArticleTagList } from '@/api/fetcher'
import { Flex } from '@sxungchxn/dev-ui'
import { ArticleFilterTag } from '@/components/sections/all-article-list-section/article-filter-tag-list/article-filter-tag'

export const ArticleFilterTagList = async () => {
  const articleTagList = await fetchArticleTagList()

  return (
    <Flex as="ul" gap="16px" flexWrap="wrap">
      {articleTagList.map(tag => (
        <ArticleFilterTag key={tag.id} tag={tag} />
      ))}
    </Flex>
  )
}
