import { Flex, Text } from '@sxungchxn/dev-ui'

export default function Home() {
  return (
    <Flex
      as="main"
      direction="column"
      marginX="auto"
      maxWidth="900px"
      marginTop="48px"
      height="2000px"
    >
      <Text as="h2" variant="display3" color="textPrimary">
        주요 게시글
      </Text>
    </Flex>
  )
}
