// [ ] global state
'use client'

import { Chip, Text } from '@sxungchxn/dev-ui'
import type { ArticleTag } from '@/api/types'
import * as styles from './article-filter-tag.css'
import { addFilterTag, removeFilterTag, useArticleFilterStore } from '@/store/article-filter.store'

export interface ArticleFilterTagProps {
  tag: ArticleTag
}

export const ArticleFilterTag = ({ tag }: ArticleFilterTagProps) => {
  // switch to global state
  // const [isSelected, toggle] = useBooleanState(false)
  const { filterTagList } = useArticleFilterStore()
  const isSelected = filterTagList.some(({ name }) => tag.name === name)

  const toggleFilter = () => {
    if (isSelected) {
      return removeFilterTag(tag)
    }
    return addFilterTag(tag)
  }

  return (
    <Chip
      as="li"
      className={styles.chip({ isSelected })}
      color="secondary"
      onClick={toggleFilter}
      gap="6px"
    >
      <Text variant="body2">{tag.name}</Text>
    </Chip>
  )
}
