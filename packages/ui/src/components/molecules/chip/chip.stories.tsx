import { Chip } from './chip'
import type { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/argTypes'
import { Icon } from '@/components/atoms/icon'
import { IconX } from '@seungchan-dev/icons'

const meta: Meta<typeof Chip> = {
  title: 'components/molecules/Chip',
  tags: ['autodocs'],
  component: Chip,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Chip {...args} />,
  args: {
    children: 'sxungchxn',
  },
}

export const Bordered: Story = {
  render: args => <Chip {...args} />,
  args: {
    variant: 'bordered',
    children: 'sxungchxn',
  },
}

export const PostFix: Story = {
  render: args => <Chip {...args} />,
  args: {
    variant: 'filled',
    children: 'Storybook',
    postfix: <Icon source={IconX} size={12} />,
  },
}
