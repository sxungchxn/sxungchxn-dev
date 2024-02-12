import { Box } from '@/components/box'
import {
  AtomicProps,
  ContainerElements,
  LayoutProps,
  PolymorphicComponentProp,
  PolymorphicRef,
} from '@/types'
import { ElementType, forwardRef } from 'react'

export type FlexElements = ContainerElements

export interface FlexStyleProps extends LayoutProps {
  /** css gap property */
  gap?: AtomicProps['gap']
  /** css flex-direction property */
  direction?: AtomicProps['flexDirection']
  /** css align-items property */
  alignItems?: AtomicProps['alignItems']
  /** css justify-content property */
  justifyContent?: AtomicProps['justifyContent']
  /** css flex property */
  flex?: AtomicProps['flex']
  /** css flex-basis property */
  flexBasis?: AtomicProps['flexBasis']
  /** css flex-wrap property */
  flexWrap?: AtomicProps['flexWrap']
  /** css flex-grow property */
  flexGrow?: AtomicProps['flexGrow']
  /** css flex-shrink property */
  flexShrink?: AtomicProps['flexShrink']
  /** css background-color property */
  backgroundColor?: AtomicProps['backgroundColor']
  /** css color property */
  color?: AtomicProps['color']
  /** css border-radius property */
  borderRadius?: AtomicProps['borderRadius']
}

export type FlexProps<C extends FlexElements = 'div'> = PolymorphicComponentProp<C, FlexStyleProps>

/** display flex 속성을 기본으로 가지는 레이아웃 컴포넌트 */
export const Flex = forwardRef(
  <C extends FlexElements>(
    { children, as, direction, ...rest }: FlexProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        as={(as ?? 'div') as ElementType}
        display="flex"
        flexDirection={direction}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  },
)
