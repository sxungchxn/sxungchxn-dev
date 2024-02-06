import type { Meta, StoryObj } from '@storybook/react'
import { Flex, type FlexProps } from './flex'
import { Text } from '@/components/text'
import { layoutArgTypes } from '@/stories/argTypes'

const meta: Meta<typeof Flex> = {
  title: 'components/Flex',
  tags: ['autodocs'],
  component: Flex,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<FlexProps>

const Template = (args: FlexProps) => {
  return <Flex {...args}></Flex>
}

export const Default: Story = {
  render: Template,
  args: {
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
