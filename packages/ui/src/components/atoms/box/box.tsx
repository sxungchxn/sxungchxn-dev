import { createElement, type ElementType, forwardRef, type ReactElement } from 'react'
import { type BoxProps } from './box.types'
import { useBoxProps } from './hooks/use-box-props'
import { type PolymorphicRef } from '@/types/polymorphic'

export type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactElement<BoxProps<C>>

export const Box = forwardRef(
  <C extends ElementType = 'div'>(props: BoxProps<C>, ref: PolymorphicRef<C>) => {
    const { as, ...otherBoxProps } = useBoxProps(props)

    return createElement(as ?? 'div', { ref, ...otherBoxProps })
  },
) as BoxComponent
