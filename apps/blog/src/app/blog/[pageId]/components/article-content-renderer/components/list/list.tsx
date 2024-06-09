import { Box, type BoxProps } from '@sxungchxn/dev-ui'
import { clsx } from 'clsx'
import * as styles from './list.css'

export type ListElement = 'ol' | 'ul'

export type ListProps<C extends ListElement = 'ul'> = Omit<BoxProps<C>, 'color' | 'ref'>

export const List = <C extends ListElement = 'ul'>({ as, className, ...props }: ListProps<C>) => {
  return (
    <Box
      {...props}
      as={as}
      className={clsx(
        className,
        styles.list({
          variant: as,
        }),
      )}
    />
  )
}
