import { clsx } from 'clsx'
import { ElementType } from 'react'
import { BoxProps } from '@/components/box/box.types'
import { sprinkles } from '@/styles/sprinkles.css'
import { AtomicProps, InlineStyleProps, inlineStylePropsSet } from '@/types'
import * as resetStyles from '@/styles/reset.css'

export const useBoxProps = <C extends ElementType = 'div'>(props: BoxProps<C>) => {
  const { as: boxElementType, className, ...otherProps } = props
  const atomicProps: Record<string, unknown> = {}
  const inlineStyleProps: Record<string, unknown> = {}
  const restProps: Record<string, unknown> = {}

  for (const key in otherProps) {
    if (sprinkles.properties.has(key as keyof AtomicProps)) {
      atomicProps[key] = otherProps[key as keyof typeof otherProps]
    } else if (inlineStylePropsSet.has(key as keyof InlineStyleProps)) {
      inlineStyleProps[key] = otherProps[key as keyof typeof otherProps]
    } else {
      restProps[key] = otherProps[key as keyof typeof otherProps]
    }
  }

  return {
    as: boxElementType ?? 'div',
    className: clsx(
      resetStyles.base,
      resetStyles.element[boxElementType as resetStyles.Element],
      sprinkles(atomicProps),
      className,
    ),
    style: inlineStyleProps,
    ...restProps,
  } as const
}
