import { GridElements, GridProps } from '@/components/grid/grid.types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as styles from '@/components/grid/grid.css'
import { gridTemplateColumnsVar } from '@/components/grid/grid.css'
import { BoxProps } from '@/components'
import { clsx } from 'clsx'

export const useGridProps = <C extends GridElements>({
  style,
  columns,
  gridTemplateColumns,
  className,
  ...otherGridProps
}: GridProps<C>) => {
  const gridTemplatecolumnsValue = columns ? `repeat(${columns}, 1fr)` : gridTemplateColumns

  return {
    ...otherGridProps,
    display: 'grid',
    style: {
      ...style,
      ...assignInlineVars({
        [gridTemplateColumnsVar]: gridTemplatecolumnsValue,
      }),
    },
    className: clsx(className, styles.wrapper),
  } as BoxProps<C>
}
