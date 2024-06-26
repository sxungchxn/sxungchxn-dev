import { type Meta, type StoryObj } from '@storybook/react'
import { Box } from './box'
import { layoutArgTypes } from '@/stories/argTypes'

const meta: Meta<typeof Box> = {
  title: 'components/atoms/Box',
  component: Box,
  argTypes: { ...layoutArgTypes },
}

export default meta

type Story = StoryObj<typeof Box>

export const Default: Story = {
  render: args => <Box {...args} />,
  args: {
    children: 'Box - Create Whatever you need',
    as: 'button',
    color: 'textPrimary',
    backgroundColor: 'secondary',
    padding: '20px',
    borderRadius: '4px',
  },
}

export const SlotExample: Story = {
  render: args => (
    <Box {...args}>
      <button>child element</button>
    </Box>
  ),
  args: {
    asChild: true,
    children: <button>child element</button>,
    backgroundColor: 'secondary',
    color: 'textPrimary',
    padding: '20px',
    borderRadius: '4px',
  },
}
