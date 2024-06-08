import { forwardRef, type ReactElement } from 'react'
import type {
  AtomicProps,
  LayoutProps,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/types'
import { Box } from '@/components/atoms/box'
import * as styles from './text.css'
import { clsx } from 'clsx'
import { assignInlineVars } from '@vanilla-extract/dynamic'

interface TextAtomsProps extends LayoutProps {
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
  /** 텍스트를 몇 줄로 나누면서 말줄임을 적용할지의 값 */
  multiLineEllipsis?: number
}

export type TextElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'code'
  | 'div'
  | 'span'
  | 'p'
  | 'label'
  | 'a'
  | 'li'
  | 'blockquote'

export type TextProps<C extends TextElements = 'div'> = PolymorphicComponentPropWithRef<
  C,
  TextAtomsProps
>

export type TextComponent = <C extends TextElements = 'div'>(
  props: TextProps<C>,
) => ReactElement<TextProps<C>>

/** Text 컴포넌트 */
export const Text = forwardRef(
  <C extends TextElements = 'div'>(
    {
      children,
      variant,
      fontFace = 'primary',
      ellipsis,
      underline,
      className,
      style,
      multiLineEllipsis,
      ...rest
    }: TextProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        {...rest}
        ref={ref}
        style={{
          ...style,
          ...assignInlineVars({
            [styles.multiLineEllipsisLinesVar]: multiLineEllipsis
              ? String(multiLineEllipsis)
              : undefined,
          }),
        }}
        className={clsx(
          styles.fontStyle({
            variant,
            fontFace,
            ellipsis,
            underline,
            multiLineEllipsis: Boolean(multiLineEllipsis),
          }),
          className,
        )}
      >
        {children}
      </Box>
    )
  },
) as TextComponent
