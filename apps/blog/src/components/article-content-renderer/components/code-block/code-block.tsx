import type { BoxProps } from '@sxungchxn/dev-ui'
import * as styles from './code-block.css'
import { clsx } from 'clsx'

export interface CodeBlockProps extends Omit<BoxProps<'code'>, 'color' | 'ref'> {}

export const CodeBlock = ({ children, className, ...props }: CodeBlockProps) => {
  return (
    <code {...props} className={clsx(styles.code, className)}>
      {children}
    </code>
  )
}
