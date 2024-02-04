import { createElement, type ElementType, forwardRef, ReactElement } from 'react'
import { PolymorphicRef } from '@/types'
import { BoxProps } from './box.types'
import { useBoxProps } from './hooks/use-box-props'

export type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactElement<BoxProps<C>>
export const Box = forwardRef(
  <C extends ElementType = 'div'>(props: BoxProps<C>, ref?: PolymorphicRef<C>) => {
    const { as, ...otherBoxProps } = useBoxProps(props)

    return createElement(as, { ref, ...otherBoxProps })
  },
) as BoxComponent
