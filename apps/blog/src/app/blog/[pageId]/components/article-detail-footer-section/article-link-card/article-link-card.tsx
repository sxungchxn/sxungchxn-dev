'use client'

import { Flex, Icon, ProgressiveHoverCircle, Text } from '@sxungchxn/dev-ui'
import type { ArticleLinkerData } from '@/api/types'
import * as styles from './article-link-card.css'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import { IconArrowLeft, IconArrowRight } from '@sxungchxn/dev-icons'

export interface ArticleLinkCardProps {
  type: 'prev' | 'next'
  articleLinkerData: ArticleLinkerData
}

export const ArticleLinkCard = ({ type, articleLinkerData }: ArticleLinkCardProps) => {
  const [isHover, , setHoverTrue, setHoverFalse] = useBooleanState(false)
  const { title, pageId } = articleLinkerData

  return (
    <Link href={`/blog/${pageId}`}>
      <Flex
        width="100%"
        alignItems="center"
        backgroundColor="secondary"
        borderRadius="4px"
        gap="16px"
        padding="16px"
        className={clsx(styles.cardBase, styles.card({ type }))}
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
      >
        <ProgressiveHoverCircle size={36} isHover={isHover} fillColor="textPrimary" duration={1}>
          <Icon
            className={styles.linkArrow({ type })}
            source={type === 'prev' ? IconArrowLeft : IconArrowRight}
            size={24}
            color="textPrimary"
          />
        </ProgressiveHoverCircle>
        <Flex direction="column" gap="4px" overflow="hidden">
          <Text
            variant="title4"
            color="textSecondary"
            textAlign={type === 'prev' ? 'left' : 'right'}
          >
            {type === 'prev' ? '이전' : '다음'}&nbsp;게시글
          </Text>
          <Text
            variant="title2"
            color="textPrimary"
            ellipsis
            textAlign={type === 'prev' ? 'left' : 'right'}
            className={styles.linkTitle}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}
