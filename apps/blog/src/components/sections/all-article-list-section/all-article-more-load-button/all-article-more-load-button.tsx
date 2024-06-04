'use client'

import { Chip, Flex, Icon, Text } from '@sxungchxn/dev-ui'
import { IconPlus } from '@sxungchxn/dev-icons'
import { loadMoreArticle } from '@/store/article-filter.store'
import type { AllArticle } from '@/api/types'
import { useFilteredArticleList } from '@/hooks/service/use-filtered-article-list'

export interface AllArticleMoreLoadButtonProps {
  allArticleList: AllArticle[]
}

export const AllArticleMoreLoadButton = ({ allArticleList }: AllArticleMoreLoadButtonProps) => {
  const { isMoreArticleLoadable } = useFilteredArticleList(allArticleList)

  const handleClickLoadMoreArticle = () => {
    loadMoreArticle()
  }

  return isMoreArticleLoadable ? (
    <Flex marginX="auto">
      <Chip
        as="button"
        size="md"
        variant="bordered"
        color="secondary"
        postfix={<Icon source={IconPlus} size={20} />}
        gap="8px"
        marginTop="64px"
        onClick={handleClickLoadMoreArticle}
      >
        <Text variant="title2" color="textSecondary">
          게시글 더 보기
        </Text>
      </Chip>
    </Flex>
  ) : null
}
