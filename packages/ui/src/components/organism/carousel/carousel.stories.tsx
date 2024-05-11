import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselRoot, useCarousel } from '@/components/organism/carousel'
import { Flex } from '@/components/atoms/flex'
import { layoutArgTypes } from '@/stories/argTypes'

const meta: Meta<typeof CarouselRoot> = {
  title: 'components/organism/Carousel',
  tags: ['autodocs'],
  component: CarouselRoot,
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

const Template = () => {
  return (
    <Carousel>
      <Carousel.SlideViewPort>
        {[1, 2, 3].map(index => (
          <Carousel.Slide key={index}>
            <Flex
              height="190px"
              justifyContent="center"
              alignItems="center"
              backgroundColor="purple100"
              borderRadius="4px"
            >
              {index}
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel.SlideViewPort>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="purple200"
        paddingX="8px"
      >
        <Flex gap="4px">
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Flex>
        <Carousel.Pagination size="md" />
      </Flex>
    </Carousel>
  )
}

export const Default: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
    <Carousel>
      <Carousel.SlideViewPort>
        {[1, 2, 3].map(index => (
          <Carousel.Slide key={index}>
            <Flex
              height="190px"
              justifyContent="center"
              alignItems="center"
              backgroundColor="purple100"
              borderRadius="4px"
            >
              {index}
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel.SlideViewPort>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="purple200"
        paddingX="8px"
      >
        <Flex gap="4px">
          <Carousel.PrevButton />
          <Carousel.NextButton />
        </Flex>
        <Carousel.Pagination size="md" />
      </Flex>
    </Carousel>
`,
      },
    },
  },
}

const ControlledTemplate = () => {
  const { selectedIndex, ...carouselApi } = useCarousel()
  return (
    <>
      <div>{`carousel index : ${selectedIndex}`}</div>
      <Carousel {...carouselApi}>
        <Carousel.SlideViewPort>
          {[1, 2, 3].map(index => (
            <Carousel.Slide key={index}>
              <Flex
                height="190px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="purple100"
                borderRadius="4px"
              >
                {index}
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel.SlideViewPort>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="purple200"
          paddingX="8px"
        >
          <Flex gap="4px">
            <Carousel.PrevButton />
            <Carousel.NextButton />
          </Flex>
          <Carousel.Pagination size="md" />
        </Flex>
      </Carousel>
    </>
  )
}

export const Controlled: Story = {
  render: ControlledTemplate,
  parameters: {
    docs: {
      source: {
        code: `
const ControlledTemplate = () => {
  const { selectedIndex, ...carouselApi } = useCarousel()
  return (
    <>
      <div>{\`carousel index : {selectedIndex}\`}</div>
      <Carousel {...carouselApi}>
        <Carousel.SlideViewPort>
          {[1, 2, 3].map(index => (
            <Carousel.Slide key={index}>
              <Flex
                height="190px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="purple100"
                borderRadius="4px"
              >
                {index}
              </Flex>
            </Carousel.Slide>
          ))}
        </Carousel.SlideViewPort>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="purple200"
          paddingX="8px"
        >
          <Flex gap="4px">
            <Carousel.PrevButton />
            <Carousel.NextButton />
          </Flex>
          <Carousel.Pagination size="md" />
        </Flex>
      </Carousel>
    </>
  )
}
        `,
      },
    },
  },
}
