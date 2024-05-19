import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitch, type ThemeSwitchProps } from './theme-switch'
import { Flex } from '@/components/atoms/flex'
import { layoutArgTypes } from '@/stories/argTypes'
import { useState } from 'react'

export default {
  title: 'components/molecules/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    ...layoutArgTypes,
  },
} satisfies Meta

type Story = StoryObj<ThemeSwitchProps>

const ThemeSwitchTemplate = (props: Omit<ThemeSwitchProps, 'onToggleTheme' | 'mode'>) => {
  const [mode, setMode] = useState<'dark' | 'light'>('light')

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <Flex gap="10px" alignItems="center">
      <ThemeSwitch {...props} mode={mode} onToggleTheme={toggleTheme} />
      {mode}
    </Flex>
  )
}

export const Default: Story = {
  render: ThemeSwitchTemplate,
}
