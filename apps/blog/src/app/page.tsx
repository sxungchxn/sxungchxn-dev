import { Box } from '@sxungchxn/dev-ui'
import { FeaturedArticleListSection } from '@/components/featured-article-list-section/featured-article-list-section'

// FeaturedArticleSection --> RSC
// AllAritlceSection --> RSC

export default function Home() {
  return (
    <Box maxWidth="980px" width="100%" height="2000px" marginX="auto">
      <FeaturedArticleListSection />
    </Box>
  )
}
