'use client'

import { Header } from '@/components/header/header'
import { Flex } from '@sxungchxn/dev-ui'
import * as styles from '@/styles/layout.css'
import { Footer } from '@/components/footer/footer'
import { type PropsWithChildren, useState } from 'react'
import { HeaderBorderIntersection } from '@/components/header-border-intersection/header-border-intersection'

export interface CommonLayoutProps extends PropsWithChildren {}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  const [isBordered, setIsBordered] = useState(false)

  return (
    <>
      <Header isBordered={isBordered} />
      <HeaderBorderIntersection onChangeIntersection={setIsBordered} />
      <Flex
        as="main"
        backgroundColor="primary"
        marginTop="48px"
        position="relative"
        zIndex="above"
        className={styles.container}
      >
        {children}
      </Flex>
      <Footer />
    </>
  )
}
