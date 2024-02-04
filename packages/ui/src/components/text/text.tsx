import { type ElementType, forwardRef, type ReactElement } from 'react'
import type {
  AtomicProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  SpaceProps,
} from '@/types'
import { Box } from '@/components/box'
import * as styles from './text.css'

interface TextAtomsProps extends SpaceProps {
  /** css text-align property */
  textAlign?: AtomicProps['textAlign']
  /** Text 컴포넌트 색상 */
  color?: AtomicProps['color']
  /** css font-size property */
  fontSize?: AtomicProps['fontSize']
  /** css font-weight property */
  fontWeight?: AtomicProps['fontWeight']
  /** css line-height property */
  lineHeight?: AtomicProps['lineHeight']
  /** css letter-spacing property */
  letterSpacing?: AtomicProps['letterSpacing']
  /** css white-space property */
  whiteSpace?: AtomicProps['whiteSpace']
  /** css word-break property */
  wordBreak?: AtomicProps['wordBreak']
  /** css word-wrap property */
  wordWrap?: AtomicProps['wordWrap']
  /** text 컴포넌트 variant */
  variant?: styles.Variant
  /** text 컴포넌트 fontFace(primary = Pretendard, secondary = Kalma) */
  fontFace?: styles.FontFace
  /** overflow 발생시 말줄임표 적용 여부 */
  ellipsis?: styles.Ellipsis
  /** 밑줄 표시 여부 */
  underline?: styles.Underline
}

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'div' | 'span' | 'p' | 'label'

export type TextProps<C extends TextElement = 'div'> = PolymorphicComponentPropWithRef<
  C,
  TextAtomsProps
>

export type TextComponent = <C extends TextElement = 'div'>(
  props: TextProps<C>,
) => ReactElement<TextProps<C>>

/** Text 컴포넌트 */
export const Text = forwardRef(
  <C extends TextElement = 'div'>(
    { as, children, variant, fontFace = 'primary', ellipsis, underline, ...rest }: TextProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        as={as ?? ('div' as ElementType)}
        ref={ref}
        className={styles.fontStyle({
          variant,
          fontFace,
          ellipsis,
          underline,
        })}
        {...rest}
      >
        {children}
      </Box>
    )
  },
) as TextComponent