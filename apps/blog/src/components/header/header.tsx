import { Flex } from '@sxungchxn/dev-ui'
import { Logo } from '@/components/logo/logo'
import { ThemeToggleSwitch } from '@/components'
import * as styles from './header.css'
import { MobileMenu } from '@/components/mobile-menu/mobile-menu'
import { NavText } from '@/components/nav-text/nav-text'

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
          <NavText as="span" variant="nav3" pathname="/blog" color="textPrimary">
            Blog
          </NavText>
          <NavText as="span" variant="nav3" pathname="/about" color="textPrimary">
            About
          </NavText>
        </Flex>
        <MobileMenu />
      </Flex>
    </Flex>
  )
}
