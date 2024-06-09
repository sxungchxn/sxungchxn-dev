import { fetchArticlePageFooterData } from '@/api/fetcher'

export interface ArticleDetailFooterSectionProps {
  pageId: string
}

export const ArticleDetailFooterSection = async ({ pageId }: ArticleDetailFooterSectionProps) => {
  const articleFooter = await fetchArticlePageFooterData(pageId)
  console.log(articleFooter)
  return <>footer</>
}
