import { Icon } from './icon'
import type { Meta, StoryObj } from '@storybook/react'
import { IconSun } from '@seungchan-dev/icons'

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  render: args => <Icon {...args} />,
  args: {
    source: IconSun,
  },
}
