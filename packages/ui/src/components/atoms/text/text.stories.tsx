import { Box } from '@/components/atoms/box'
import { Text, type TextProps } from '@/components/atoms/text'
import type { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/argTypes'
import { TextElements } from '@/components/atoms/text/text'
import { useRef } from 'react'

const meta: Meta<typeof Text> = {
  title: 'components/atoms/Text',
  tags: ['autodocs'],
  component: Text,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story<C extends TextElements> = StoryObj<TextProps<C>>

const Template = (args: TextProps<'h1'>) => {
  const ref = useRef<HTMLHeadingElement>(null)
  return <Text {...args} as="h1" ref={ref} />
}

export const Default: Story<'h1'> = {
  render: Template,
  args: {
    children: 'Text',
    as: 'h1',
    variant: 'display4',
  },
  argTypes: {},
}

const TextListTemplate = ({ props }: { props: TextProps[] }) => {
  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {props.map((prop, idx) => (
        <Text key={idx} {...prop} />
      ))}
    </Box>
  )
}

type TextListStory = StoryObj<typeof TextListTemplate>

export const FontVariant: TextListStory = {
  render: TextListTemplate,
  args: {
    props: [
      { variant: 'display1', children: 'display1' },
      { variant: 'display2', children: 'display2' },
      { variant: 'display3', children: 'display3' },
      { variant: 'display4', children: 'display4' },
      { variant: 'heading1', children: 'heading1' },
      { variant: 'heading2', children: 'heading2' },
      { variant: 'heading3', children: 'heading3' },
      { variant: 'heading4', children: 'heading4' },
      { variant: 'title1', children: 'title1' },
      { variant: 'title2', children: 'title2' },
      { variant: 'title3', children: 'title3' },
      { variant: 'title4', children: 'title4' },
      { variant: 'body1', children: 'body1' },
      { variant: 'body2', children: 'body2' },
      { variant: 'body3', children: 'body3' },
      { variant: 'body4', children: 'body4' },
      { variant: 'body5', children: 'body5' },
      { variant: 'logo', children: 'logo' },
      { variant: 'nav1', children: 'nav1' },
      { variant: 'nav2', children: 'nav2' },
      { variant: 'nav3', children: 'nav3' },
    ],
  },
}

export const FontColor = {
  render: TextListTemplate,
  args: {
    props: [
      { color: 'white', children: 'white' },
      { color: 'black', children: 'black' },
      { color: 'purple100', children: 'purple100' },
      { color: 'purple200', children: 'purple200' },
      { color: 'purple300', children: 'purple300' },
      { color: 'purple400', children: 'purple400' },
      { color: 'purple500', children: 'purple500' },
      { color: 'purple600', children: 'purple600' },
      { color: 'purple700', children: 'purple700' },
      { color: 'primary', children: 'primary' },
      { color: 'secondary', children: 'secondary' },
      { color: 'textPrimary', children: 'textPrimary' },
      { color: 'textSecondary', children: 'textSecondary' },
    ],
  },
}
