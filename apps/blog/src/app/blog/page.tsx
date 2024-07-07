import { Box } from '@sxungchxn/dev-ui'
import { FeaturedArticleListSection } from '@/app/blog/components'
import { AllArticleListSection } from '@/app/blog/components'

export default function Blog() {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1600px" marginX="auto">
      <FeaturedArticleListSection />
      <AllArticleListSection />
    </Box>
  )
}
