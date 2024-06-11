import { InProgress } from '@/components/in-progress/in-progress'
import { Flex, Text } from '@sxungchxn/dev-ui'
import { BackNavigateButton } from '@/app/about/components/back-navigate-button'

export default function About() {
  return (
    <Flex
      width="100%"
      minHeight="800px"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <InProgress width={200} height={200} />
      <Text variant="title1">아직 완성되지 못했어요.</Text>
      <BackNavigateButton />
    </Flex>
  )
}
