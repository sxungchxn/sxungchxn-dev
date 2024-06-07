'use client'

import {
  Box,
  Carousel,
  type CarouselRootProps,
  Flex,
  Icon,
  ProgressiveHoverCircle,
  Text,
  useCarousel,
} from '@sxungchxn/dev-ui'
import type { FeaturedArticle, FeaturedArticleWithBlur } from '@/api/types'
import Image from 'next/image'
import * as styles from './featured-article-list-view.css'
import { getDistanceFromToday, getYearMonthDay } from '@/utils/date'
import { IconArrowRight } from '@sxungchxn/dev-icons'
import { useState } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'

export interface FeaturedArticleListViewProps {
  featuredArticleList: FeaturedArticleWithBlur[]
}

export const FeaturedArticleListView = ({ featuredArticleList }: FeaturedArticleListViewProps) => {
  const [isHover, setIsHover] = useState(false)
  const { selectedIndex, ...carouselApi } = useCarousel()
  const selectedFeaturedArticle = featuredArticleList[selectedIndex] as FeaturedArticle
  const { id, title, description, createdAt, pageId } = selectedFeaturedArticle

  return (
    <Link href={`/blog/${pageId}`}>
      <Box
        className={styles.wrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Flex direction="column" justifyContent="space-between">
          <Flex direction="column" className={styles.textField}>
            <Text
              asChild
              variant="heading3"
              color="textPrimary"
              multiLineEllipsis={2}
              className={styles.title}
            >
              <m.h2
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {title}
              </m.h2>
            </Text>
            <Text asChild variant="body3" as="span" color="textSecondary">
              <m.span
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {getYearMonthDay(createdAt)}&nbsp;&nbsp;{getDistanceFromToday(createdAt)}
              </m.span>
            </Text>
            <Text
              asChild
              variant="body2"
              color="textSecondary"
              multiLineEllipsis={3}
              className={styles.description}
            >
              <m.span
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {description}
              </m.span>
            </Text>
          </Flex>
          <Flex alignItems="center" gap="12px" marginLeft="auto">
            <Text as="span" variant="title2" color="textPrimary">
              자세히 보기
            </Text>
            <ProgressiveHoverCircle
              size={36}
              isHover={isHover}
              fillColor="textPrimary"
              duration={1}
            >
              <Icon
                className={styles.linkArrow}
                source={IconArrowRight}
                size={24}
                color="textPrimary"
              />
            </ProgressiveHoverCircle>
          </Flex>
        </Flex>
        <FeaturedArticleListCarousel featuredArticleList={featuredArticleList} {...carouselApi} />
      </Box>
    </Link>
  )
}

interface FeaturedArticleListCarouselProps extends CarouselRootProps {
  featuredArticleList: FeaturedArticleWithBlur[]
}

const FeaturedArticleListCarousel = ({
  featuredArticleList,
  ...carouselApi
}: FeaturedArticleListCarouselProps) => {
  return (
    <Carousel {...carouselApi}>
      <Carousel.SlideViewPort borderRadius="8px">
        {featuredArticleList.map(({ id, title, thumbnailUrl, blurDataUrl }) => (
          <Carousel.Slide key={id} className={styles.slide}>
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className={styles.image}
              sizes="(min-width 1024px) 500px, 100vw"
              placeholder="blur"
              priority
              blurDataURL={blurDataUrl}
            />
          </Carousel.Slide>
        ))}
      </Carousel.SlideViewPort>
      <Carousel.Pagination size="sm" className={styles.pagination} />
      <Flex
        width="100%"
        justifyContent="space-between"
        paddingX="16px"
        className={styles.controller}
      >
        <Carousel.PrevButton
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
        />
        <Carousel.NextButton
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
          }}
        />
      </Flex>
    </Carousel>
  )
}
