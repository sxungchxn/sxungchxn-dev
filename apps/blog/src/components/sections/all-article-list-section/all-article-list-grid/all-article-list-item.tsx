import { Box, Chip, Flex, Text } from '@sxungchxn/dev-ui'
import type { AllArticleWithBlur } from '@/api/types'
import Image from 'next/image'
import * as styles from './all-article-list-grid.css'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'

export interface AllArticleListItemProps {
  article: AllArticleWithBlur
}

export const AllArticleListItem = ({ article }: AllArticleListItemProps) => {
  const { title, tagList, createdAt, thumbnailUrl, blurDataUrl } = article
  return (
    <Flex as="li" direction="column" cursor="pointer" className={styles.listItem}>
      <Box position="relative" className={styles.thumbnailWrapper} marginBottom="20px">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 476px, 100vw"
          className={styles.thumbnail}
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </Box>
      <Flex direction="column" gap="16px">
        <Text as="h3" color="textPrimary" variant="heading3" ellipsis>
          {title}
        </Text>
        <Text as="span" variant="body3" color="textSecondary">
          {getYearMonthDay(createdAt)}&nbsp;&nbsp;{getDistanceFromToday(createdAt)}
        </Text>
        <Flex gap="8px">
          {tagList.map(tag => (
            <Chip key={tag.id} color="secondary">
              <Text variant="body2" color="textPrimary">
                {tag.name}
              </Text>
            </Chip>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
