import { Text, type TextProps } from '@sxungchxn/dev-ui'
import * as styles from './paragraph.css'

export interface ParagraphProps extends Omit<TextProps<'p'>, 'as' | 'color' | 'ref'> {}

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <Text {...props} as="p" variant="body2" color="textPrimary" className={styles.paragraph}>
      {children}
    </Text>
  )
}
