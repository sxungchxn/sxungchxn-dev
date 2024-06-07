import { Box, Chip, Flex, Text } from '@sxungchxn/dev-ui'
import type { AllArticleWithBlur } from '@/api/types'
import * as styles from './all-article-list-grid.css'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'
import Link from 'next/link'
import { BlurImage } from '@/components/blur-image/blur-image'

export interface AllArticleListItemProps {
  article: AllArticleWithBlur
}

export const AllArticleListItem = ({ article }: AllArticleListItemProps) => {
  const { title, tagList, createdAt, thumbnailUrl, blurDataUrl, pageId } = article
  return (
    <Flex as="li" className={styles.listItem}>
      <Flex asChild direction="column" width="100%">
        <Link href={`/blog/${pageId}`}>
          <Box position="relative" className={styles.thumbnailWrapper} marginBottom="20px">
            <BlurImage
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(min-width: 1024px) 476px, 100vw"
              className={styles.thumbnail}
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
        </Link>
      </Flex>
    </Flex>
  )
}
