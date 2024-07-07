import { fetchArticlePageContent } from '@/api/fetcher'
import { ArticleContentRenderer } from '@/app/blog/[pageId]/components/article-content-renderer/article-content-renderer'
import { unstable_cache } from 'next/cache'

export interface ArticleDetailContentSectionProps {
  pageId: string
}

export const ArticleDetailContentSection = async ({ pageId }: ArticleDetailContentSectionProps) => {
  const cacheKey = `${pageId}_content`
  const { parent } = await unstable_cache(() => fetchArticlePageContent(pageId), [cacheKey], {
    tags: [cacheKey],
  })()

  return <ArticleContentRenderer content={parent as string} />
}
