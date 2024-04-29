import { Icon } from './icon'
import type { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/argTypes'
import { IconMoon } from '@seungchan-dev/icons'

const meta = {
  title: 'components/atoms/Icon',
  component: Icon,
  argTypes: {
    ...layoutArgTypes,
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  render: args => <Icon {...args} />,
  args: {
    source: IconMoon,
  },
}
