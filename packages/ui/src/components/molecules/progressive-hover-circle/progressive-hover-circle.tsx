import { Box, type BoxProps } from '@/components/atoms/box'
import { m } from 'framer-motion'
import { vars } from '@/styles/vars.css'
import * as styles from './progresive-hover-circle.css'
import type { AtomicProps } from '@/types'
import { clsx } from 'clsx'
import { useMemo } from 'react'

export interface ProgressiveHoverCircleProps extends BoxProps {
  isHover?: boolean
  size?: number
  fillColor?: AtomicProps['color']
  duration?: number
}

export const ProgressiveHoverCircle = ({
  children,
  size = 36,
  fillColor = 'primary',
  isHover = false,
  className,
  duration = 0.5,
  ...props
}: ProgressiveHoverCircleProps) => {
  const hoverAnimateVariants = useMemo(
    () => ({
      unhover: {
        pathLength: 0,
        opacity: 0,
      },
      hover: {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            type: 'spring',
            duration,
            bounce: 0,
          },
          opacity: { duration },
        },
      },
    }),
    [duration],
  )

  return (
    <Box
      {...props}
      className={clsx(styles.wrapper, className)}
      width={`${size}px`}
      height={`${size}px`}
    >
      {children}
      <m.svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.svg}>
        <m.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          className={styles.circle}
          animate={hoverAnimateVariants[isHover ? 'hover' : 'unhover']}
          stroke={vars.colors[fillColor]}
          strokeWidth={2}
          fill="transparent"
        />
      </m.svg>
    </Box>
  )
}
