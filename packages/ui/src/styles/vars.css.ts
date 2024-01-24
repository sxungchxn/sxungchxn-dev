import merge from 'deepmerge'
import {
  createGlobalTheme as createGlobalThemeWithoutPseudos,
  createGlobalThemeContract,
} from '@vanilla-extract/css'
import type { Contract, MapLeafNodes } from '@vanilla-extract/private'
import { getVarName } from './utils'
import { tokens } from './tokens'
import type { Mode, Theme } from '@/types/theme'

/**
 * This is a wrapper around the normal createGlobalTheme that
 * adds all these global rules to pseudo element children too.
 * Some pseudo elements like ::backdrop don't inherit css variables
 */
const createGlobalTheme = <ThemeContract extends Contract>(
  selector: string,
  themeContract: ThemeContract,
  themeTokens: MapLeafNodes<ThemeContract, string>,
) => {
  const pseudoSelectors = ['::backdrop']
  const selectorWithPsuedos = `${selector}, ${pseudoSelectors
    .map(pseudoSelector => {
      return `${selector} ${pseudoSelector}`
    })
    .join(',')}`

  createGlobalThemeWithoutPseudos<ThemeContract>(selectorWithPsuedos, themeContract, themeTokens)
}

const { colors, ...restTokens } = tokens

const baseTokens = restTokens as Omit<Theme, 'colors' | 'mode'>
const baseVars = createGlobalThemeContract(baseTokens, getVarName)
createGlobalTheme(':root', baseVars, baseTokens) // 공통 theme 설정

const getModeColorScheme = (mode: Mode = 'light') => {
  return {
    colors: {
      ...colors.base,
      ...colors[mode],
    },
  }
}

const lightModeTokens = getModeColorScheme('light')
const darkModeTokens = getModeColorScheme('dark')
const modeVars = createGlobalThemeContract(lightModeTokens, getVarName)

// light theme 설정
createGlobalTheme('[data-theme="light"]', modeVars, lightModeTokens)
// dark theme 설정
createGlobalTheme('[data-theme="dark"]', modeVars, darkModeTokens)

type ThemeVars = typeof baseVars & typeof modeVars

// 모든 css 변수 들의 집합
// 아래에 등록된 vars는 build 시 정적 css variable로 뽑혀진다
export const vars = merge(baseVars, modeVars) as ThemeVars
