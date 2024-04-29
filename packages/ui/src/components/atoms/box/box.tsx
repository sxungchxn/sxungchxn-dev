import { createElement, type ElementType, forwardRef, ReactElement } from 'react'
import { BoxProps } from './box.types'
import { useBoxProps } from './hooks/use-box-props'
import { PolymorphicRef } from '@/types'

export type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactElement<BoxProps<C>>

export const Box = forwardRef(
  <C extends ElementType = 'div'>(props: BoxProps<C>, ref: PolymorphicRef<C>) => {
    const { as, ...otherBoxProps } = useBoxProps(props)

    return createElement(as ?? 'div', { ref, ...otherBoxProps })
  },
) as BoxComponent
