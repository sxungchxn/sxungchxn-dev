import type { AllArticleWithBlur } from '@/api/types'
import { useArticleFilterStore } from '@/store/article-filter.store'

export const useFilteredArticleList = (allArticleList: AllArticleWithBlur[]) => {
  const { filterTagList, articleSliceLength } = useArticleFilterStore()
  const filterTagIdSet = new Set(filterTagList.map(({ id }) => id))

  const filteredArticleList =
    filterTagIdSet.size > 0
      ? allArticleList.filter(({ tagList }) => tagList.some(tag => filterTagIdSet.has(tag.id)))
      : allArticleList

  const isMoreArticleLoadable = filteredArticleList.length > articleSliceLength

  const slicedArticleList = filteredArticleList.slice(0, articleSliceLength)

  return {
    filteredArticleList: slicedArticleList,
    isMoreArticleLoadable,
  }
}
