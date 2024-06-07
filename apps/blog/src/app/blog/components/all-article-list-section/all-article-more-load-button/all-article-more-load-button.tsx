'use client'

import { Chip, Flex, Icon, Text } from '@sxungchxn/dev-ui'
import { IconPlus } from '@sxungchxn/dev-icons'
import { loadMoreArticle, resetFilterStore } from '@/store/article-filter.store'
import type { AllArticleWithBlur } from '@/api/types'
import { useFilteredArticleList } from '@/app/blog/hooks'
import { useEffect } from 'react'

export interface AllArticleMoreLoadButtonProps {
  allArticleList: AllArticleWithBlur[]
}

export const AllArticleMoreLoadButton = ({ allArticleList }: AllArticleMoreLoadButtonProps) => {
  const { isMoreArticleLoadable } = useFilteredArticleList(allArticleList)

  const handleClickLoadMoreArticle = () => {
    loadMoreArticle()
  }

  useEffect(() => {
    return resetFilterStore
  }, [])

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
