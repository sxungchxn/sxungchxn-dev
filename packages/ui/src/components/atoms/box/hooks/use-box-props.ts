import { clsx } from 'clsx'
import type { ElementType } from 'react'
import type { BoxProps } from '@/components/atoms/box/box.types'
import { sprinkles } from '@/styles/sprinkles.css'
import { type AtomicProps, type InlineStyleProps, inlineStylePropsSet } from '@/types'
import * as resetStyles from '@/styles/reset.css'

export const useBoxProps = <C extends ElementType = 'div'>(props: BoxProps<C>) => {
  const { as: boxElementType, asChild, className, style, ...otherProps } = props
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
    ...restProps,
    as: boxElementType ?? 'div',
    asChild,
    className: clsx(
      resetStyles.base,
      resetStyles.element[boxElementType as resetStyles.Element],
      sprinkles(atomicProps),
      className,
    ),
    style: { ...style, ...inlineStyleProps },
  } as const
}
