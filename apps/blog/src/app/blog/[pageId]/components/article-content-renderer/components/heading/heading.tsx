import { Text, type TextProps } from '@sxungchxn/dev-ui'
import { clsx } from 'clsx'
import * as styles from './heading.css'

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4'

export const HeadingVariants: Record<HeadingElement, TextProps['variant']> = {
  h1: 'display4',
  h2: 'heading1',
  h3: 'heading2',
  h4: 'heading3',
}

export type HeadingProps<C extends HeadingElement> = Omit<TextProps<C>, 'variant' | 'color' | 'ref'>

export const Heading = <C extends HeadingElement = 'h1'>({
  as = 'h1',
  className,
  ...props
}: HeadingProps<C>) => {
  return (
    <Text
      {...props}
      className={clsx(className, styles.heading({ variant: as }))}
      as={as}
      variant={HeadingVariants[as]}
      color="textPrimary"
    />
  )
}
