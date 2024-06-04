'use client'

import { Text, type TextProps, type TextElements } from '@sxungchxn/dev-ui'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export type NavTextProps<C extends TextElements = 'div'> = TextProps<C> & {
  pathname: string
}

export const NavText = <C extends TextElements = 'div'>({
  variant = 'nav3',
  children,
  pathname,
  ...props
}: NavTextProps<C>) => {
  const currentPathName = usePathname()
  const isUnderlined = currentPathName.includes(pathname)
  return (
    <Link href={pathname}>
      <Text {...props} variant={variant} underline={isUnderlined}>
        {children}
      </Text>
    </Link>
  )
}
