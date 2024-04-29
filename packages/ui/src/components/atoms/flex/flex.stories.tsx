import type { Meta, StoryObj } from '@storybook/react'
import { Flex, type FlexElements, type FlexProps } from './flex'
import { Text } from '@/components/atoms/text'
import { layoutArgTypes } from '@/stories/argTypes'
import { useRef } from 'react'

const meta: Meta<typeof Flex> = {
  title: 'components/atoms/Flex',
  tags: ['autodocs'],
  component: Flex,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story<C extends FlexElements = 'div'> = StoryObj<FlexProps<C>>

const Template = <C extends FlexElements = 'div'>(args: FlexProps<C>) => {
  const ref = useRef<HTMLDivElement>(null)

  return <Flex {...args} as="div" ref={ref} />
}

export const Default: Story<'header'> = {
  render: Template,
  args: {
    as: 'header',
    gap: '8px',
    color: 'purple500',
    backgroundColor: 'purple100',
    children: (
      <>
        <Text variant={'nav2'}>item1</Text>
        <Text variant={'nav2'}>item2</Text>
        <Text variant={'nav2'}>item3</Text>
        <Text variant={'nav2'}>item4</Text>
        <Text variant={'nav2'}>item5</Text>
        <Text variant={'nav2'}>item6</Text>
      </>
    ),
  },
}

export const FlexColumn: Story = {
  render: Template,
  args: {
    gap: '8px',
    direction: 'column',
    color: 'purple500',
    backgroundColor: 'purple100',
    children: (
      <>
        <Text variant={'nav2'}>item1</Text>
        <Text variant={'nav2'}>item2</Text>
        <Text variant={'nav2'}>item3</Text>
        <Text variant={'nav2'}>item4</Text>
        <Text variant={'nav2'}>item5</Text>
        <Text variant={'nav2'}>item6</Text>
      </>
    ),
  },
}
