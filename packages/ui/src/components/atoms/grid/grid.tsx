import { Box } from '@/components/atoms/box'
import { GridElements, GridProps } from '@/components/atoms/grid/grid.types'
import { useGridProps } from '@/components/atoms/grid/hooks/use-grid-props'
import { forwardRef } from 'react'
import { PolymorphicRef } from '@/types'

export const Grid = forwardRef(
  <C extends GridElements = 'div'>(props: GridProps<C>, ref: PolymorphicRef<C>) => {
    const { children, ...otherGridProps } = useGridProps<C>(props)

    return (
      <Box {...otherGridProps} ref={ref}>
        {children}
      </Box>
    )
  },
)
