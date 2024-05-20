import { Flex, Icon, Text } from '@sxungchxn/dev-ui'
import { IconLogo } from '@sxungchxn/dev-icons'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Flex gap="8px" alignItems="center">
        <Icon source={IconLogo} size={48} />
        <Text as="h1" variant="logo" color="textPrimary">
          sxungchxn.dev
        </Text>
      </Flex>
    </Link>
  )
}
