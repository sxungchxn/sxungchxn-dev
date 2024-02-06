import { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitch, ThemeSwitchProps } from './theme-switch'
import { Flex } from '@/components/flex'
import { useTheme } from '@/hooks'
import { layoutArgTypes } from '@/stories/argTypes'

export default {
  title: 'components/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    ...layoutArgTypes,
  },
} satisfies Meta

type Story = StoryObj<typeof ThemeSwitch>

const ThemeSwitchTemplate = (props: ThemeSwitchProps) => {
  const { mode } = useTheme()

  return (
    <Flex gap="10px" alignItems="center">
      <ThemeSwitch {...props} />
      {mode}
    </Flex>
  )
}

export const Default: Story = {
  render: ThemeSwitchTemplate,
}
