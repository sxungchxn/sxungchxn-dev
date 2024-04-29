import { GridElements, GridProps } from '@/components/grid/grid.types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as styles from '@/components/grid/grid.css'
import { gridTemplateColumnsVar } from '@/components/grid/grid.css'
import { BoxProps } from '@/components'
import { clsx } from 'clsx'
import { getInlineProps } from '@/styles/utils'

export const useGridProps = <C extends GridElements>({
  style,
  columns,
  gridTemplateColumns,
  className,
  ...others
}: GridProps<C>) => {
  const gridTemplatecolumnsValue = columns ? `repeat(${columns}, 1fr)` : gridTemplateColumns
  const { inlineProps, ...otherGridProps } = getInlineProps(others)

  return {
    ...otherGridProps,
    display: 'grid',
    style: {
      ...style,
      ...inlineProps,
      ...assignInlineVars({
        [gridTemplateColumnsVar]: gridTemplatecolumnsValue,
      }),
    },
    className: clsx(className, styles.wrapper),
  } as BoxProps<C>
}
