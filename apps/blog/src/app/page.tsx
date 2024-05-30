import { Box } from '@sxungchxn/dev-ui'
import { FeaturedArticleListSection } from '@/components/sections/featured-article-list-section/featured-article-list-section'
import { AllArticleListSection } from '@/components/sections/all-article-list-section/all-article-list-section'

export default function Home() {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1600px" marginX="auto">
      <FeaturedArticleListSection />
      <AllArticleListSection />
    </Box>
  )
}
