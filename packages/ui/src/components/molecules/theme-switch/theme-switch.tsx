'use client'

import { forwardRef, type MouseEvent, useId } from 'react'
import { clsx } from 'clsx'
import { Box, type BoxProps } from '@/components/atoms/box'
import { Icon } from '@/components/atoms/icon'
import * as styles from './theme-switch.css'
import { IconMoon, IconSun } from '@sxungchxn/dev-icons'
import { m } from 'framer-motion'
import { type PolymorphicRef } from '@/types/polymorphic'

export interface ThemeSwitchProps extends Omit<BoxProps<'button'>, 'children'> {
  /** theme switch size */
  size?: styles.Size
  /** mode value */
  mode: 'dark' | 'light'
  /** theme toggle handler */
  onToggleTheme: () => void
}

const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 700,
  damping: 40,
} as const

export const ThemeSwitch = forwardRef(
  (
    { className, size = 'medium', mode, onToggleTheme, onClick, ...otherProps }: ThemeSwitchProps,
    ref: PolymorphicRef<'button'>,
  ) => {
    const layoutId = useId()
    const handleClickSwitch = (e: MouseEvent<HTMLButtonElement>) => {
      onToggleTheme()
      onClick?.(e)
    }

    return (
      <Box
        {...otherProps}
        asChild
        ref={ref}
        className={clsx(className, styles.wrapper({ size, mode }))}
        onClick={handleClickSwitch}
      >
        <m.button layout layoutRoot>
          <Icon source={IconSun} className={styles.iconLeft({ size })} />
          <Icon source={IconMoon} className={styles.iconRight({ size })} />
          <m.div
            layout
            layoutId={layoutId}
            transition={SPRING_TRANSITION}
            className={styles.knob({ mode, size })}
          />
        </m.button>
      </Box>
    )
  },
)
