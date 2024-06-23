import { Box } from '@sxungchxn/dev-ui'
import { FeaturedArticleListSection } from '@/app/blog/components'
import { AllArticleListSection } from '@/app/blog/components'

// 30분마다 갱신
export const revalidate = 2400

export default function Blog() {
  return (
    <Box maxWidth="980px" width="100%" minHeight="1600px" marginX="auto">
      <FeaturedArticleListSection />
      <AllArticleListSection />
    </Box>
  )
}
