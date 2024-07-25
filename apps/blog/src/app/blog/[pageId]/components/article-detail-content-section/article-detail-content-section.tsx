import { fetchArticlePageContent } from '@/api/fetcher'
import { ArticleContentRenderer } from '@/components/article-content-renderer/article-content-renderer'

export interface ArticleDetailContentSectionProps {
  pageId: string
}

export const ArticleDetailContentSection = async ({ pageId }: ArticleDetailContentSectionProps) => {
  const { parent } = await fetchArticlePageContent(pageId)

  return <ArticleContentRenderer content={parent as string} withMarginTop />
}
