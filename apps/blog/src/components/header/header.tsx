import { Flex, Text } from '@sxungchxn/dev-ui'
import { Logo } from '@/components/logo/logo'
import { ThemeToggleSwitch } from '@/components'

export const Header = () => {
  return (
    <Flex as="header" backgroundColor="primary" paddingX="40px" paddingY="32px">
      <Flex minWidth="1280px" justifyContent="space-between" alignItems="center" marginX="auto">
        <Logo />
        <Flex as="nav" gap="24px" alignItems="center">
          <ThemeToggleSwitch />
          <Text as="span" variant="nav3">
            Blog
          </Text>
          <Text as="span" variant="nav3">
            About
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
