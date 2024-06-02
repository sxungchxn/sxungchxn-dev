'use client'

import type { AllArticle } from '@/api/types'
import { AllArticleListItem } from '@/components/sections/all-article-list-section/all-article-list-grid/all-article-list-item'
import { useFilteredArticleList } from '@/hooks/service/use-filtered-article-list'

export interface AllArticleListProps {
  allArticleList: AllArticle[]
}

export const AllArticleList = ({ allArticleList }: AllArticleListProps) => {
  const { filteredArticleList } = useFilteredArticleList(allArticleList)

  return (
    <>
      {filteredArticleList.map(article => (
        <AllArticleListItem key={article.id} article={article} />
      ))}
    </>
  )
}
