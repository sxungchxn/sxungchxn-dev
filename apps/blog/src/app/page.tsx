import { Box, Text } from '@sxungchxn/dev-ui'
import { fetchFeaturedArticleList } from '@/api/fetcher'

// FeaturedArticleSection --> RSC
// AllAritlceSection --> RSC

export default async function Home() {
  const featuredArticleList = await fetchFeaturedArticleList()

  console.log(featuredArticleList)

  return (
    <Box maxWidth="980px" height="2000px" marginX="auto">
      <Text as="h2" variant="display3" color="textPrimary">
        주요 게시글
      </Text>
    </Box>
  )
}
