import type { Meta, StoryObj } from '@storybook/react'
import { ProgressiveHoverCircle } from './progressive-hover-circle'
import { layoutArgTypes } from '@/stories/argTypes'
import { Flex, Icon } from '@/components'
import { IconArrowLeft } from '@sxungchxn/dev-icons'
import { type ComponentProps, useState } from 'react'

const meta: Meta<typeof ProgressiveHoverCircle> = {
  title: 'components/molecules/ProgressiveHoverCircle',
  tags: ['autodocs'],
  component: ProgressiveHoverCircle,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof ProgressiveHoverCircle>

const Template = (props: ComponentProps<typeof ProgressiveHoverCircle>) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Flex
      padding="24px"
      backgroundColor="purple100"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ProgressiveHoverCircle {...props} isHover={isHover} />
    </Flex>
  )
}

export const Default: Story = {
  args: {
    width: '36px',
    height: '36px',
    children: <Icon source={IconArrowLeft} size={24} />,
    fillColor: 'purple500',
  },
  render: Template,
}
