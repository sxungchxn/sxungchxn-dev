import { Flex, Text } from '@sxungchxn/dev-ui'
import { Logo } from '@/components/logo/logo'
import { ThemeToggleSwitch } from '@/components'
import * as styles from './header.css'

export interface HeaderProps {
  isBordered: boolean
}

export const Header = ({ isBordered }: HeaderProps) => {
  return (
    <Flex
      as="header"
      backgroundColor="primary"
      paddingX="40px"
      paddingY="32px"
      className={styles.header({ isBordered })}
    >
      <Flex
        maxWidth="1200px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        marginX="auto"
      >
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
