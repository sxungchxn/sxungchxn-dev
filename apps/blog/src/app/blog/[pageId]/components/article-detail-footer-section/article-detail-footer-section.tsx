import { fetchArticlePageFooterData } from '@/api/fetcher'
import { Box } from '@sxungchxn/dev-ui'
import * as styles from './article-detail-footer-section.css'
import { ArticleLinkCard } from '@/app/blog/[pageId]/components/article-detail-footer-section/article-link-card/article-link-card'

export interface ArticleDetailFooterSectionProps {
  pageId: string
}

export const ArticleDetailFooterSection = async ({ pageId }: ArticleDetailFooterSectionProps) => {
  const { prevArticle, nextArticle } = await fetchArticlePageFooterData(pageId)

  return (
    <Box as="section" className={styles.wrapper}>
      {prevArticle ? <ArticleLinkCard type="prev" articleLinkerData={prevArticle} /> : <div />}
      {nextArticle ? <ArticleLinkCard type="next" articleLinkerData={nextArticle} /> : <div />}
    </Box>
  )
}
