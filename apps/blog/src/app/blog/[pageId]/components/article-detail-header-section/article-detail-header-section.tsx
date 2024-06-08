import { Flex, Text, Chip, Box } from '@sxungchxn/dev-ui'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'
import * as styles from './article-detail-header-section.css'
import { BlurImage } from '@/components/blur-image/blur-image'
import { fetchArticlePageHeaderData } from '@/api/fetcher'

export interface ArticleDetailHeaderSectionProps {
  pageId: string
}

export const ArticleDetailHeaderSection = async ({ pageId }: ArticleDetailHeaderSectionProps) => {
  const { title, createdAt, tagList, thumbnailUrl, blurDataUrl } =
    await fetchArticlePageHeaderData(pageId)
  return (
    <Flex as="section" direction="column" width="100%" marginTop="40px" className={styles.section}>
      <Text as="h1" variant="display3" color="textPrimary" marginBottom="24px">
        {title}
      </Text>
      <Text as="span" variant="body1" color="textSecondary" marginBottom="24px">
        {getYearMonthDay(createdAt)}&nbsp;&nbsp;{getDistanceFromToday(createdAt)}
      </Text>
      <Flex as="ul" gap="16px" flexWrap="wrap" width="100%" marginBottom="48px">
        {tagList.map(({ id, name }) => (
          <Chip key={id} as="li" color="secondary">
            <Text variant="body1">{name}</Text>
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
        />
      </Box>
    </Flex>
  )
}
