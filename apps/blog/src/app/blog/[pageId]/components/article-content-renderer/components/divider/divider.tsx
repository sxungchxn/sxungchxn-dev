import { Box, type BoxProps } from '@sxungchxn/dev-ui'
import { clsx } from 'clsx'
import * as styles from './divider.css'

export interface DividerProps extends Omit<BoxProps<'hr'>, 'as' | 'color' | 'ref'> {}

export const Divider = ({ className, ...props }: DividerProps) => {
  return <Box {...props} as="hr" className={clsx(className, styles.divider)} />
}
