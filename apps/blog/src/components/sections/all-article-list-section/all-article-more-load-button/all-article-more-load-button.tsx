'use client'

import { Chip, Flex, Icon, Text } from '@sxungchxn/dev-ui'
import { IconPlus } from '@sxungchxn/dev-icons'
import { loadMoreArticle, store } from '@/store/article-filter.store'
import { useSnapshot } from 'valtio'

export interface AllArticleMoreLoadButtonProps {
  maxArticleLength: number
}

export const AllArticleMoreLoadButton = ({ maxArticleLength }: AllArticleMoreLoadButtonProps) => {
  const { articleSliceLength } = useSnapshot(store)

  const isLoadable = articleSliceLength < maxArticleLength

  const handleClickLoadMoreArticle = () => {
    loadMoreArticle()
  }

  return isLoadable ? (
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
        <Text variant="title3" color="textSecondary">
          게시글 더 보기
        </Text>
      </Chip>
    </Flex>
  ) : null
}
