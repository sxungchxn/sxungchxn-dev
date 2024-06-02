'use client'

import type { AllArticle } from '@/api/types'
import { AllArticleListItem } from '@/components/sections/all-article-list-section/all-article-list-grid/all-article-list-item'
import { store, useArticleFilterStore } from '@/store/article-filter.store'
import { useSnapshot } from 'valtio'

export interface AllArticleListProps {
  allArticleList: AllArticle[]
}

export const AllArticleList = ({ allArticleList }: AllArticleListProps) => {
  const { filterTagList } = useArticleFilterStore()
  const filterTagIdSet = new Set(filterTagList.map(({ id }) => id))
  const filteredAllArticleList =
    filterTagIdSet.size > 0
      ? allArticleList.filter(({ tagList }) => tagList.some(tag => filterTagIdSet.has(tag.id)))
      : allArticleList

  const { articleSliceLength } = useSnapshot(store)

  return (
    <>
      {filteredAllArticleList.slice(0, articleSliceLength).map(allArticle => (
        <AllArticleListItem key={allArticle.id} article={allArticle} />
      ))}
    </>
  )
}
