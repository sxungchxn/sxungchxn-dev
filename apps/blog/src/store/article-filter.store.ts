import { proxy, useSnapshot } from 'valtio'
import type { ArticleTag } from '@/api/types'

export const store = proxy<{
  filterTagList: ArticleTag[]
  articleSliceLength: number
}>({
  filterTagList: [],
  articleSliceLength: 4,
})

export const addFilterTag = (tag: ArticleTag) => {
  store.filterTagList.push(tag)
  store.articleSliceLength = 4
}

export const removeFilterTag = (tag: ArticleTag) => {
  store.filterTagList = [...store.filterTagList].filter(({ id }) => id !== tag.id)
  store.articleSliceLength = 4
}

export const loadMoreArticle = () => {
  store.articleSliceLength += 4
}

export const useArticleFilterStore = () => useSnapshot(store)
