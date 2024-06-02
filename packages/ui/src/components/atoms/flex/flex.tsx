import { Box } from '@/components/atoms/box'
import type {
  AtomicProps,
  ContainerElements,
  LayoutProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/types'
import { forwardRef } from 'react'

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
  /** css position property */
  position?: AtomicProps['position']
  /** css z-index property */
  zIndex?: AtomicProps['zIndex']
  /** css cursor property */
  cursor?: AtomicProps['cursor']
}

export type FlexProps<C extends FlexElements = 'div'> = PolymorphicComponentPropWithRef<
  C,
  FlexStyleProps
>

/** display flex 속성을 기본으로 가지는 레이아웃 컴포넌트 */
export const Flex = forwardRef(
  <C extends FlexElements>(
    { children, direction, ...rest }: FlexProps<C>,
    ref: PolymorphicRef<C>,
  ) => (
    <Box display="flex" flexDirection={direction} ref={ref} {...rest}>
      {children}
    </Box>
  ),
)
