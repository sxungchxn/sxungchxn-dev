import { createElement, type ElementType, forwardRef, ReactElement } from 'react'
import { BoxProps } from './box.types'
import { useBoxProps } from './hooks/use-box-props'

export type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactElement<BoxProps<C>>
export const Box = forwardRef(<C extends ElementType = 'div'>(props: BoxProps<C>) => {
  const { as, ref, ...otherBoxProps } = useBoxProps(props)

  return createElement(as ?? 'div', { ref, ...otherBoxProps })
}) as BoxComponent
