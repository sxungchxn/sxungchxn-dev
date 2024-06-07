'use client'

import type { AllArticleWithBlur } from '@/api/types'
import { AllArticleListItem } from '@/app/blog/components/all-article-list-section/all-article-list-grid/all-article-list-item'
import { useFilteredArticleList } from '@/app/blog/hooks'

export interface AllArticleListProps {
  allArticleList: AllArticleWithBlur[]
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
