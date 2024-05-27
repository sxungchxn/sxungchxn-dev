import { Flex, Text } from '@sxungchxn/dev-ui'
import { Logo } from '@/components/logo/logo'
import { ThemeToggleSwitch } from '@/components'
import * as styles from './header.css'
import { MobileMenu } from '@/components/mobile-menu/mobile-menu'

export interface HeaderProps {
  isBordered: boolean
}

export const Header = ({ isBordered }: HeaderProps) => {
  return (
    <Flex as="header" backgroundColor="primary" className={styles.header({ isBordered })}>
      <Flex
        maxWidth="1200px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        marginX="auto"
      >
        <Logo />
        <Flex as="nav" gap="24px" alignItems="center" className={styles.pcNavBar}>
          <ThemeToggleSwitch />
          <Text as="span" variant="nav3">
            Blog
          </Text>
          <Text as="span" variant="nav3">
            About
          </Text>
        </Flex>
        <MobileMenu />
      </Flex>
    </Flex>
  )
}
