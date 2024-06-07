import { Flex, Text, Chip } from '@sxungchxn/dev-ui'
import type { ArticlePageHeaderDataWithBlur } from '@/api/types'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'
import * as styles from './article-detail-header-section.css'

export interface ArticleDetailHeaderSectionProps {
  articleDetailHeaderData: ArticlePageHeaderDataWithBlur
}

export const ArticleDetailHeaderSection = ({
  articleDetailHeaderData,
}: ArticleDetailHeaderSectionProps) => {
  const { title, description, createdAt, tagList } = articleDetailHeaderData
  return (
    <Flex as="section" direction="column" width="100%" marginTop="40px" className={styles.section}>
      <Text as="h1" variant="display3" color="textPrimary" marginBottom="36px">
        {title}
      </Text>
      <Text as="span" variant="body1" color="textSecondary" marginBottom="36px">
        {getYearMonthDay(createdAt)}&nbsp;&nbsp;{getDistanceFromToday(createdAt)}
      </Text>
      <Flex as="ul" gap="16px" flexWrap="wrap" width="100%">
        {tagList.map(({ id, name }) => (
          <Chip key={id} as="li" color="secondary">
            <Text variant="body1">{name}</Text>
          </Chip>
        ))}
      </Flex>
    </Flex>
  )
}
