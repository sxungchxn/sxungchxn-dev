import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitch, type ThemeSwitchProps } from './theme-switch'
import { Flex } from '@/components/atoms/flex'
import { useTheme } from '@/hooks'
import { layoutArgTypes } from '@/stories/argTypes'

export default {
  title: 'components/molecules/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    ...layoutArgTypes,
  },
} satisfies Meta

type Story = StoryObj<ThemeSwitchProps>

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
