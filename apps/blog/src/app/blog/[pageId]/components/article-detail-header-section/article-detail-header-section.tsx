import { Flex, Text, Chip, Box } from '@sxungchxn/dev-ui'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'
import * as styles from './article-detail-header-section.css'
import { BlurImage } from '@/components/blur-image/blur-image'
import { fetchArticlePageHeaderData } from '@/api/fetcher'
import { unstable_cache } from 'next/cache'
import { ARTICLE_HEADER } from '@/constants/cache-key'

export interface ArticleDetailHeaderSectionProps {
  pageId: string
}

export const ArticleDetailHeaderSection = async ({ pageId }: ArticleDetailHeaderSectionProps) => {
  const cacheKey = ARTICLE_HEADER(pageId)
  const { title, createdAt, tagList, thumbnailUrl, blurDataUrl } = await unstable_cache(
    () => fetchArticlePageHeaderData(pageId),
    [cacheKey],
    {
      tags: [cacheKey],
    },
  )()
  return (
    <Flex as="section" direction="column" width="100%" className={styles.section}>
      <Text as="h1" variant="display4" color="textPrimary" marginBottom="24px">
        {title}
      </Text>
      <Text as="span" variant="body2" color="textSecondary" marginBottom="24px">
        {getYearMonthDay(createdAt)}&nbsp;&nbsp;{getDistanceFromToday(createdAt)}
      </Text>
      <Flex as="ul" gap="16px" flexWrap="wrap" width="100%" marginBottom="48px">
        {tagList.map(({ id, name }) => (
          <Chip key={id} as="li" color="secondary">
            <Text variant="body2">{name}</Text>
          </Chip>
        ))}
      </Flex>
      <Box className={styles.thumbnailWrapper}>
        <BlurImage
          blurDataURL={blurDataUrl}
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 980px, 100vw"
          priority
        />
      </Box>
    </Flex>
  )
}
