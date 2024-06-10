'use client'

import Giscus from '@giscus/react'
import { Box } from '@sxungchxn/dev-ui'
import * as styles from './article-comment-section.css'
import { useTheme } from 'next-themes'

export const ArticleCommentSection = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Box as="section" className={styles.wrapper}>
      <Giscus
        repo="sxungchxn/sxungchxn-dev"
        repoId="R_kgDOLJExUg"
        category="Comments"
        categoryId="DIC_kwDOLJExUs4Cf9pv"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === 'dark' ? 'transparent_dark' : 'light'}
        lang="ko"
        loading="lazy"
      />
    </Box>
  )
}
