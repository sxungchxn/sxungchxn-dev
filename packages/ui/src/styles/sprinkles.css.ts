// reset style 부분이 sprinkle.css 보다 상단에서 적용되도록 설정
import './reset.css'
import {
  type ConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
  type RequiredConditionalValue,
} from '@vanilla-extract/sprinkles'
import { createVar } from '@vanilla-extract/css'
import { vars } from './vars.css'
import { breakpoints } from './tokens/breakpoints'
import { colorProperties, responsiveProperties, unresponsiveProperties } from '@/styles/properties'

const responsiveSprinklesProperties = defineProperties({
  defaultCondition: 'sm',
  conditions: {
    sm: {},
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
  },
  properties: responsiveProperties,
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
})

const unresponsiveSprinklesProperties = defineProperties({
  properties: unresponsiveProperties,
})

const boxShadowColorVar = createVar()

const selectorSprinklesProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'base',
  properties: {
    boxShadow: {
      '0.25': {
        vars: {
          [boxShadowColorVar]: vars.colors.shadow,
        },
        boxShadow: `${vars.shadows['0.25']} ${vars.colors.shadow}`,
      },
      '0.5': {
        vars: {
          [boxShadowColorVar]: vars.colors.shadow,
        },
        boxShadow: `${vars.shadows['0.5']} ${vars.colors.shadow}`,
      },
      '1': {
        vars: {
          [boxShadowColorVar]: vars.colors.shadow,
        },
        boxShadow: `${vars.shadows['1']} ${vars.colors.shadow}`,
      },
    },
    boxShadowColor: {
      shadow: {
        vars: { [boxShadowColorVar]: vars.colors.shadow },
      },
    },
    ...colorProperties,
  },
})

export const sprinkles = createSprinkles(
  responsiveSprinklesProperties,
  unresponsiveSprinklesProperties,
  selectorSprinklesProperties,
)

export type ShorthandsProperties = {
  /** css padding-left, padding-right 축약 속성 */
  paddingX: typeof vars.space
  /** css padding-top, padding-bottom 축약 속성 */
  paddingY: typeof vars.space
  /** css padding 축약 속성 */
  padding: typeof vars.space
  /** css margin-left, margin-right 축약 속성 */
  marginX: typeof vars.space
  /** css margin-top, margin-bottom 축약 속성 */
  marginY: typeof vars.space
  /** css margin 축약 속성 */
  margin: typeof vars.space
}

export type Sprinkles = Parameters<typeof sprinkles>[0]
export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveSprinklesProperties,
  Value
>
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveSprinklesProperties,
  Value
>

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveSprinklesProperties)
export const mapResponsiveValue = createMapValueFn(responsiveSprinklesProperties)
