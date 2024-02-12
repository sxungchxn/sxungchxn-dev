import type { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/argTypes'
import { Grid } from './grid'
import { GridElements, GridProps } from './grid.types'
import { Flex } from '@/components'

const meta: Meta<typeof Grid> = {
  title: 'components/Grid',
  tags: ['autodocs'],
  component: Grid,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story<C extends GridElements = 'div'> = StoryObj<GridProps<C>>

const Template = <C extends GridElements = 'div'>(args: GridProps<C>) => {
  return <Grid {...args}></Grid>
}

export const Default: Story<'main'> = {
  render: Template,
  args: {
    as: 'main',
    columns: 3,
    rowGap: '8px',
    columnGap: '4px',
    children: (
      <>
        {Array.from({ length: 6 })
          .fill(0)
          .map((_, idx) => (
            <Flex
              padding="4px"
              key={idx}
              backgroundColor="secondary"
              color="textPrimary"
            >{`item${idx + 1}`}</Flex>
          ))}
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Grid columns={3} rowGap="8px" colGap="4px">
    {...}
</Grid>
`,
      },
    },
  },
}
