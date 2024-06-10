'use client'

import { m } from 'framer-motion'
import { useBooleanState } from '@/hooks/utils/use-boolean-state'
import { MobileMenuToggleButton } from '@/components/mobile-menu/mobile-menu-toggle-button'
import * as styles from './mobile-menu.css'
import { Flex } from '@sxungchxn/dev-ui'
import { ThemeToggleSwitch } from '@/components'
import { useCallback, useEffect } from 'react'
import { NavText } from '@/components/nav-text/nav-text'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at calc(100% - 40px) 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at calc(100% - 40px) 0px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const MobileMenu = () => {
  const [isOpen, , setOpenTrue, setOpenFalse] = useBooleanState(false)

  const openMenu = useCallback(() => {
    document.body.style.overflowY = 'hidden'
    setOpenTrue()
  }, [setOpenTrue])

  const closeMenu = useCallback(() => {
    document.body.style.overflowY = 'auto'
    setOpenFalse()
  }, [setOpenFalse])

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  useEffect(() => {
    const handleCloseMenu = () => {
      if (isOpen) {
        closeMenu()
      }
    }
    window.addEventListener('resize', handleCloseMenu)
    window.addEventListener('scroll', handleCloseMenu)
    return () => {
      window.removeEventListener('resize', handleCloseMenu)
      window.removeEventListener('scroll', handleCloseMenu)
    }
  }, [isOpen, closeMenu])

  return (
    <m.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={styles.menuNav}
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
      custom={typeof window === 'undefined' ? 1000 : window?.innerHeight}
    >
      <MobileMenuToggleButton onToggle={toggleMenu} />
      <m.div className={styles.background} variants={sidebar}>
        <Flex direction="column" width="100%" className={styles.menuContent}>
          <NavText as="h2" pathname="/blog" variant="logo" color="textPrimary">
            Blog
          </NavText>
          <NavText pathname="/about" variant="logo" color="textPrimary">
            About
          </NavText>
          <ThemeToggleSwitch />
        </Flex>
      </m.div>
    </m.nav>
  )
}
