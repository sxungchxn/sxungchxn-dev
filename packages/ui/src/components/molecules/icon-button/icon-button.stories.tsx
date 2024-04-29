import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'
import { layoutArgTypes } from '@/stories/argTypes'
import { Icon } from '@/components'
import { IconMoon } from '@seungchan-dev/icons'

const meta: Meta<typeof IconButton> = {
  title: 'components/molecules/IconButton',
  tags: ['autodocs'],
  component: IconButton,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  render: args => <IconButton {...args} />,
  args: {
    children: <Icon source={IconMoon} size={24} />,
    color: 'purple400',
  },
  parameters: {
    docs: {
      source: {
        code: `
<IconButton color="purple400" variant="subtle">
    <Icon source={IconMoon} size={24} />
</IconButton>
        `,
      },
    },
  },
}
