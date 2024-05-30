import { proxy, useSnapshot } from 'valtio'
import type { ArticleTag } from '@/api/types'

export const store = proxy<{
  filterTagList: ArticleTag[]
}>({
  filterTagList: [],
})

export const addFilterTag = (tag: ArticleTag) => {
  store.filterTagList.push(tag)
}

export const removeFilterTag = (tag: ArticleTag) => {
  store.filterTagList = [...store.filterTagList].filter(({ id }) => id !== tag.id)
}

export const useArticleFilterStore = () => useSnapshot(store)
