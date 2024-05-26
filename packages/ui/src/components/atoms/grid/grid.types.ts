import type {
  AtomicProps,
  ContainerElements,
  LayoutProps,
  PolymorphicComponentPropWithRef,
} from '@/types'

export type GridElements = ContainerElements

export interface GridStyleProps extends LayoutProps {
  /** css gap property (rowGap + colGap) */
  gap?: AtomicProps['gap']
  /** css row-gap property */
  rowGap?: AtomicProps['rowGap']
  /** css column-gap property */
  columnGap?: AtomicProps['columnGap']
  /** css grid-template-columns property */
  gridTemplateColumns?: string
  /** same as repeat(n, 1fr) */
  columns?: number
  /** css background-color property */
  backgroundColor?: AtomicProps['backgroundColor']
  /** css color property */
  color?: AtomicProps['color']
  /** css border-radius property */
  borderRadius?: AtomicProps['borderRadius']
  cursor?: AtomicProps['cursor']
}

export type GridProps<C extends GridElements = 'div'> = PolymorphicComponentPropWithRef<
  C,
  GridStyleProps
>
