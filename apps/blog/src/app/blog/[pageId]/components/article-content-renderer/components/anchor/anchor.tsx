import { Text, type TextProps } from '@sxungchxn/dev-ui'
import * as styles from './anchor.css'
import { clsx } from 'clsx'

export interface AnchorProps extends Omit<TextProps<'a'>, 'color' | 'ref' | 'as'> {}

export const Anchor = ({ className, ...props }: AnchorProps) => {
  return (
    <Text
      {...props}
      className={clsx(className, styles.anchor)}
      as="a"
      variant="title2"
      color="textSecondary"
    />
  )
}
