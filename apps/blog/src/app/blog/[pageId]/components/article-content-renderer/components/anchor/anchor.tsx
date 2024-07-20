import { Text, type TextProps } from '@sxungchxn/dev-ui'
import * as styles from './anchor.css'
import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'

export interface AnchorProps extends Omit<TextProps<'a'>, 'color' | 'ref' | 'as'> {}

const targetBlankAnchorSelector = 'h2#목차 + ul, h1, h2, h3'

export const Anchor = ({ className, ...props }: AnchorProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null)
  const [isTargetBlank, setIsTargetBlank] = useState(false)

  useEffect(() => {
    if (anchorRef.current) {
      const isTargetBlankAnchor = anchorRef.current.closest(targetBlankAnchorSelector) === null
      setIsTargetBlank(isTargetBlankAnchor)
    }
  }, [])

  return (
    <Text
      {...props}
      className={clsx(className, styles.anchor)}
      as="a"
      variant="title3"
      color="textSecondary"
      ref={anchorRef}
      {...(isTargetBlank && { target: '_blank' })}
    />
  )
}
